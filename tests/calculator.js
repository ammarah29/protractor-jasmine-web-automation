let homepage = require('../pages/homepage');

describe('demo calc test', function(){

        it('addition test', function(){

          homepage.get('http://juliemr.github.io/protractor-demo/');

          homepage.enterFirstNumber('4');

          homepage.enterSecondNumber('3');

          homepage.clickGo();

          homepage.verfiyResult('7');

          browser.sleep(2000)

        });
});
