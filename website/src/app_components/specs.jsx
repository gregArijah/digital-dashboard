export default function Specs() {
    return(
        <div>
            <div className="text-lg text-center mb-3 font-bold">SPECIFICATIONS</div>            
            <div className="text-justify space-y-3">
                <div>
                    <p className="font-bold">DASHBOARD</p>
                    <ul className="list-disc ml-5">
                        <li><span className="font-bold">Controller</span> - <a target="_blank" className="underline" href="https://store-usa.arduino.cc/products/arduino-nano">Arduino Nano</a>; a microcontroller board based on the ATMega328.  </li>
                        <li><span className="font-bold">Display Screen</span> - <a target="_blank" className="underline" href="https://store-usa.arduino.cc/products/16x2-lcd-display-with-i-c-interface">16x2 LCD</a>. A <a target="_blank" className="underline" href="https://www.amazon.com/MCIGICM-74HC595-SN74HC595N-Register-registers/dp/B07HFWB9L9/ref=sr_1_2?keywords=74hc595+shift+registers&qid=1693755674&sr=8-2">shift register</a> was used to reduce to number of I/O pins needed to communicate with the display.</li>
                        <li><span className="font-bold">Rev Limiter</span> - The rev limiter was programmed to cut the ignition at a given engine speed and resume once falling below a second given engine speed.</li>
                        <li><span className="font-bold">Launch Control</span> - The launch controller works in a simlar way to the rev limiter. It holds the engine rpm at the point where the clutch starts to engage allowing the rider to hold WOT at launch.</li>
                        <li><span className="font-bold">Shift/Warning light</span> - An LED light sequence is use to indicate engine speed at a glance. the light begin flashing when the rev-limiter is triggered.</li>
                        <li><span className="font-bold">Tachometer input</span> - A <a target="_blank" className="underline" href="https://www.amazon.com/SunFounder-Switch-Sensor-Arduino-Raspberry/dp/B013G5N03O/ref=sr_1_3?crid=3CNWAJYTXBWXV&keywords=hall+sensor+module&qid=1693751740&sprefix=hall+sensor+module%2Caps%2C166&sr=8-3">hall sensor</a> was used to generate this signal by attaching the sensor near to the flywheel and observing the passing of a magnet on every revolution.</li>
                        <li><span className="font-bold">Speedometer input</span> - Similar to the Tachometer, a hall sensor was used by attaching a magnet to the drive shaft and using the drive shaft speed and wheel circumference to calculate the speed.</li>
                        <li><span className="font-bold">Odometer</span> - The odometer and the speedometer share hardware, the odometer calculates the distance travelled while the speedometer calculates speed.  </li>
                        <li><span className="font-bold">Hour Meter</span> - This is a display of the total and current trip vehicle runtime.</li>
                    </ul>
                </div>
                <div>
                    <p className="font-bold">CHASSIS</p>
                    <p>The chassis was made from random bits and pieces of metal I could attain cheaply or freely, mainly 1" square tubing and 1" x 2" tubing. It was stick welded using 6013 rod.</p>
                </div>
                <div>
                    <p className="font-bold">ENGINE</p>
                    <p>The original engine was a Honda 270GX 9HP utility engine, which was taken from a gas powered air-compressor. Eventually this was upgraded to a beastly 6-speed motorcycle engine from Honda CBR125. </p>
                </div>
                <div>
                    <p className="font-bold">SUSPENSION</p>
                    <p>Although this entire project can be considered &quot;unengineered&quot;, the suspension takes the cake in this department and 4 cool looking (red) springs where purchased. The front set was later replaced with a stiffer pair.</p>
                </div>
                <div>
                    <p className="font-bold">BRAKES</p>
                    <p>Initially the go kart was fitted with dual rear disc brakes taken from an italian made pocket bike. Once the CBR engine was installed, the CBR rear brake system was also installed on the go-kart.</p>
                </div>

            </div>
        </div>
    )
}