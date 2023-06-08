 /*
Shifted_LCD 
  Data bits (MOSI): Connect pin 14 “DS” on the 74HC595 to Arduino pin 11.
  The SPI clock (SCK): Connect pin 11 “SHCP” on the 74HC595 to Arduino pin 13.
  The Latch: Connect pin 12 “STCP” on the 74HC595 to Arduino pin 10.
 */

#include<SPI.h>
#include <LiquidCrystal.h>
#include <LcdBarGraph.h>
#include <EEPROM.h>


LiquidCrystal lcd(10); 
LcdBarGraph lbg(&lcd, 16, 0, 0);

byte tachPin = 2, speedoPin =3; //hall sensor module pins   
byte latchPin = 5; //Pin connected to ST_CP of 74HC595
byte clockPin = 4; //Pin connected to SH_CP of 74HC595
byte dataPin = 6;  //Pin connected to DS of 74HC595 
byte ignRelayPin = 7;
byte killSwitchPin = 8  ;
byte buttonPin = 9;
byte lcdLatchPin = 10;
byte launchSwitchPin = A0;

int launchSpeed = 2600;
int sweetSpot = 4000;
int revLimit = 5500;

volatile unsigned int tach,speedo;          
volatile unsigned long tachTimer, tachElapsed,speedoTimer; 

unsigned long lcdTimer, ledTimer, hm_total,hm_trip, hm_start, hm_buffer, hm_curr; 
byte hh_total,mm_total,ss_total,hh_trip,mm_trip,ss_trip;

byte killSwitchState, lastKillSwitchState, ignRelayState, ledState, launchSwitchState, lastLaunchSwitchState;
byte buttonState, lastButtonState, buttonCount, lastButtonCount, engineState, lastEngineState;

char t_out[8],o_out[8];
volatile float trip,odo;

byte ledLevel[]= {
  B10000000,
  B11000000,
  B11100000,
  B11110000,
  B11111000,
  B11111100,
  B11111110,
  B11111111
};




void isr_TACH()  //based on the length of one crankshaft rotation in millis()
{
  tachElapsed = millis()-tachTimer;
  tach = 60000/tachElapsed;  //(1/timepassed)*60000ms
  tachTimer = millis();               //reset clock

}

void isr_SPEEDO() //based on the length of one driveshaft rotation and wheel circumference in millis()
{
  speedo = 3600000*.000889/(millis()-speedoTimer); //(1/timepassed)*hourConversionRate*wheelCircumferenceInKms
  speedoTimer = millis();                          //reset clock
  
  odo += .000889;
  trip +=.000889;
}

void updateHourMeter(){
  
  if (tach==0) engineState = 0;
  else engineState = 1;
  if (engineState!= lastEngineState){
    if(engineState) hm_start=millis();
    if(!engineState){
      hm_total += hm_curr;
      hm_buffer = hm_trip;
      
      EEPROM.put(4,hm_total);
      hm_curr = 0;  
    }
  }else if (engineState){
    hm_curr = millis()-hm_start;
    hm_trip = hm_buffer+hm_curr; 
  }else if (!engineState){
    
  }
  lastEngineState=engineState;
}

void updateLCD(){
  if (buttonCount!=lastButtonCount) {
    lcd.setCursor(0,0);
    lcd.print("                ");
    lcd.setCursor(0,1);
    lcd.print("                ");
  }
  switch(buttonCount){
    case 0:
      if (killSwitchState){
        lcd.setCursor(0,0);
        lcd.print("                ");
        lcd.setCursor(0,1);
        lcd.print("Ignition Off    ");
      }
      else {
        
        lcd.setCursor(0,0);
        if (tach==0) lcd.print("               ");
        else if (launchSwitchState!=lastLaunchSwitchState) lcd.print("                ");
        else if (launchSwitchState){
          lbg.drawValue( tach, 5000);
          lcd.setCursor(10,0);
          lcd.print("LAUNCH");
        }
        else lbg.drawValue( tach, 5000);
        lastLaunchSwitchState = launchSwitchState;
        
 
        lcd.setCursor(0,1);
        lcd.print((int)tach,DEC);
        if (tach<10) lcd.print ("RPM    ");
        else if (tach<100) lcd.print ("RPM   ");
        else if (tach<1000) lcd.print ("RPM  ");
        else if (tach>=1000) lcd.print ("RPM ");
  
        lcd.setCursor(8,1);
        lcd.print((int)speedo,DEC);
        if (speedo<10) lcd.print ("Km/h   ");
        else if (speedo<100) lcd.print ("Km/h  ");
        else if (speedo<1000) lcd.print ("Km/h ");
      }
      break;
      
    case 1:
        dtostrf(odo,6,2,o_out);
        lcd.setCursor(0,0);
        lcd.print("ODO :");
        lcd.print (o_out);
        lcd.print("Km ");
  
        dtostrf(trip,6,3,t_out);        
        lcd.setCursor(0,1);
        lcd.print("TRIP:");       
        lcd.print (t_out);
        lcd.print("Km ");
        
        break;
    
    case 2:
        hh_total = (hm_total+hm_curr)/3600000;
        mm_total = ((hm_total+hm_curr)%3600000)/60000;
        ss_total = ((hm_total+hm_curr)%60000)/1000;

        
        hh_trip = hm_trip/3600000;
        mm_trip = (hm_trip%3600000)/60000;
        ss_trip = (hm_trip%60000)/1000;
        

        lcd.setCursor(0,0);
        lcd.print("TOTAL:");
        if (hh_total>0) {
          lcd.print(hh_total);
          lcd.print("h ");
        }
        if (mm_total>0) {
          lcd.print(mm_total);
          lcd.print("m ");
        }
        if (ss_total>0) {
          lcd.print(ss_total);
          lcd.print("s            ");
        }
                
        lcd.setCursor(0,1);
        lcd.print("TRIP :");
        if (hh_trip>0) {
          lcd.print(hh_trip);
          lcd.print("h ");
        }
        if (mm_trip>0) {
          lcd.print(mm_trip);
          lcd.print("m ");
        }
        if (ss_trip>0) {
          lcd.print(ss_trip);
          lcd.print("s            ");
        }
        
        break;
    


  }
  lastButtonCount=buttonCount;
  }
  
void updateLEDS(){         
      digitalWrite(latchPin,LOW);
      if (tach==0) shiftOut(dataPin,clockPin,LSBFIRST,B00000000);
      else if (((tach>launchSpeed)&&launchSwitchState)&&speedo<10){
          if(ledState) shiftOut(dataPin,clockPin,LSBFIRST,B00000000);
          if(!ledState) shiftOut(dataPin,clockPin,LSBFIRST,B11111111);
      }
      else if ((tach>sweetSpot)&&launchSwitchState){
          if(ledState) shiftOut(dataPin,clockPin,LSBFIRST,B00000000);
          if(!ledState) shiftOut(dataPin,clockPin,LSBFIRST,B11111111);
      }
      else if (tach<=revLimit) shiftOut(dataPin,clockPin,LSBFIRST,ledLevel[(int)((tach-850)/650)]);
      else {
        if (ledState) shiftOut(dataPin,clockPin,LSBFIRST,B00000000);
        if (!ledState) shiftOut(dataPin,clockPin,LSBFIRST,B11111111);
      }
      digitalWrite(latchPin,HIGH);
      ledState=!ledState;
}
      
  
void setup(){
  Serial.begin(9600);
  lcd.begin(16, 2); // set up the LCD's number of columns and rows:
  lcd.setCursor(0,0);
  lcd.print("                ");
  lcd.setCursor(0,1);
  lcd.print("                ");

  pinMode(tachPin, INPUT); //setup pin 2
  pinMode(speedoPin, INPUT); //setup pin 3
  pinMode(clockPin, OUTPUT); //setup pin 4
  pinMode(latchPin, OUTPUT); //setup pin 5 
  pinMode(dataPin, OUTPUT); //setup pin 6
  pinMode(ignRelayPin,OUTPUT); //setup pin 7
  pinMode(killSwitchPin,INPUT); //setup pin 8
  pinMode(buttonPin,INPUT); //setup pin 9
  pinMode(lcdLatchPin,OUTPUT); //lcd shift register latch pin
  pinMode(launchSwitchPin,INPUT); //setup pin A0 


  tach = 0;    //initialize tach and speedo outputs
  speedo = 0;
  speedoTimer = 0;  //initialize timers
  tachTimer = 0;
  tachElapsed = 0;
  lcdTimer = 0;  //lcd refresh
  ledTimer = 0;   //led refresh
  ignRelayState = 0; // initialize ignition and killswitch
  killSwitchState =0;
  lastKillSwitchState = 0;
  lastLaunchSwitchState = 0;
  ledState = 0;   //initialize over rev warning
  launchSwitchState = 0;
  trip = 0.0000f;    //initialize trip and odometer    
  odo = 0.0000f;
  EEPROM.get(0, odo); //read odo from EEPROM
  buttonState = 0; //push button for lcd menu
  lastButtonState = 0;
  buttonCount = 0;
  lastButtonCount = 0;
  engineState = 0;  //engine running for hour meter
  lastEngineState = 0;
  hm_total = 0;  //hour meter
  EEPROM.get(4, hm_total);  //read hm from EEPROM
  hm_trip = 0;
  hm_start = 0;
  hm_buffer = 0;
  hh_total = 0;
  mm_total = 0;
  ss_total = 0;
  hh_trip =0;
  mm_trip = 0;
  ss_trip = 0;
  hm_curr = 0;

  digitalWrite(latchPin,LOW);
  shiftOut(dataPin,clockPin,LSBFIRST,B00000000);
  digitalWrite(latchPin,HIGH);

  attachInterrupt(0, isr_TACH, FALLING); //setup Interrupts 
  attachInterrupt(1, isr_SPEEDO, FALLING); //

    


}
void loop()
{ 

  killSwitchState = digitalRead(killSwitchPin);
  ignRelayState = digitalRead(ignRelayPin);
  launchSwitchState = digitalRead(launchSwitchPin);
  buttonState = digitalRead(buttonPin);

  
  if ((buttonState!= lastButtonState)&&buttonState)buttonCount++;
  if (buttonCount>2)buttonCount = 0;
  lastButtonState = buttonState;

  if (killSwitchState){
   if(killSwitchState!=lastKillSwitchState) EEPROM.put(0, odo);//hard save odo
   if(!ignRelayState) digitalWrite(ignRelayPin,!ignRelayState); //kill engine    
  }

  if (!killSwitchState) {
    
    //launch control conditions
    if (((tach>launchSpeed)&&launchSwitchState)&&speedo<10) {
      if (!ignRelayState) digitalWrite(ignRelayPin,!ignRelayState);
    }
    
    //maximum acceleration conditions
    else if ((tach>sweetSpot)&&launchSwitchState) {
      if (!ignRelayState) digitalWrite(ignRelayPin,!ignRelayState);
    }
    
    //rev limiter conditions
    else if ((tach>revLimit)^ignRelayState) digitalWrite(ignRelayPin,!ignRelayState); //turn ignition on and RevLimiter
  }
    
   if (millis()-tachTimer>2500) tach = 0;
   if (millis()-speedoTimer>2500) speedo = 0;
   if (millis()-ledTimer>=125) {
      updateLEDS();
      ledTimer - millis();   } 
   if (millis()-lcdTimer>=250){
      updateHourMeter();   
      updateLCD();
      lcdTimer = millis(); 
   }
  lastKillSwitchState = killSwitchState;
  
  }
   
