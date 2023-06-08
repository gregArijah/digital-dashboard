# digital-dashboard

Arduino project which collects data from various sensors installed on a vehicle and displays the information on an LCD screen. The dashboard offers several features, including a speedometer, odometer, trip meter, hour meter, rev limiter, and launch control.

## Components Used

- Arduino Nano
- LCD Screen 
- Engine speed sensor (Hall effect sensor & magnet)
- Wheel speed sensor (Hall effect sensor & magnet)
- Push buttons (to toggle screen inputs)
- Resistors, capacitors, and other required electronic components

## Functionality

The digital dashboard offers the following features:

1. Speedometer: Measures the vehicle's speed based on the speed sensor readings and displays it on the LCD screen.
2. Odometer: Uses speedometer to calculate distance travelled.
3. Trip Meter: Resets to zero eveytime the engine stops
4. Hour Meter: Monitors the engine runtime or operating hours of the vehicle.
5. Tachometer (Rev Limiter): Measures the engine RPM (revolutions per minute) and provides real-time RPM readings.
6. Launch Control: Implements a launch control system that aids in achieving optimal acceleration from a standstill.
7. Rev Limiting: Implements a rev limiter function which will momentarily prevent the spark plug from firing until the rpms reach a safe level below the cut off point  

## Usage

To use the digital dashboard, follow these steps:

1. Ensure that the Arduino Nano is properly connected to the LCD screen and all the sensors.
2. Power on the system, and the LCD screen should display the default view.
3. The speedometer will continuously update the speed reading based on the speed sensor data.
4. The odometer will display the total distance traveled by the vehicle.
5. Use the provided push buttons or switches to navigate through different screens and access features like the trip meter, hour meter, tachometer, and launch control.


