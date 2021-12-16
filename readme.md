# Protractor and Jasmine Web Framework

## Setup
This repo contains a web automation framework built using Protractor and Jasmine.  
Install the following to be able to run the tests successfully.

### Install npm:

`npm install -g npm`

### Install protractor:

`npm install -g protractor`

### Update and start webdriver:

`webdriver-manager update`

`webdriver-manager start`

### Install Jasmine: 

`npm install --save-dev jasmine`

`npm install protractor-jasmine2-screenshot-reporter --save-dev`


## Run tests: 
Use the following command to run the tests, the conf.js file is stored in the conf folder, check the location of this file on your local machine.

`protractor ./conf/conf.js`