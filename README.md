# Temperature Conversion Microservice

This microservice uses a REST API, NodeJS, and Express to convert temperatures from Fahrenheit to Celsius, Fahrenheit to Kelvin, Celsius to Fahrenheit, Celsius to Kelvin, Kelvin to Fahrenheit, and Kelvin to Celsius.

This simple microservice converts temperatures as descibed above by entering a value, a temperature unit (F, C, or K) and choosing which unit you want to convert to.  When you click the submit button the server.js file writes the inputs into a file called temperature.txt. Then by running temp_conversion.js the temperature conversion will take place and the file will write the value of the conversion into the temperature.txt file.  

Server Runs On: localhost:3000

UML Diagram:
![image](/public/diagram.jpeg)

Running the Program:

Note: This microservice has a content security policy. Follow instructions below to install helmet.

Download the zip file and extract all files

Open the main folder in vscode (or similar) and open a terminal

`npm i node (if needed)`
`run npm i express helmet`
`npm install`
`run node server.js`
-the server is running on localhost:3000
`open localhost:3000`
- enter some values and click sumbit
- note that temperature.txt now has the submitted values inside the file
- open a new terminal window and run node temp_conversion.js
- the conversion result is now written in the temp.txt file



