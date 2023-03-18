const {Builder, By, Key, until} = require('selenium-webdriver');
const assert = require('assert');

async function example() {
  let driver = await new Builder().forBrowser('chrome').build();
 
try {
    // Navigate to the Google website
    await driver.get('https://unergia-saas-staging-solarladder.vercel.app/login');
    // Find the search box element and enter a search query
    await driver.findElement(By.name('email')).sendKeys('solarladdertest787@yopmail.com');
    await driver.findElement(By.name('password')).sendKeys('password', Key.RETURN);
    // Wait for the Dashboard and Project Button to load
    await driver.wait(until.elementLocated(By.className('MuiButtonBase-root MuiButton-root MuiButton-contained accessibility crm-addprojectbutton MuiButton-containedPrimary')), 10000);
    
    //Click the Add Project Button
    await driver.findElement(By.className('MuiButtonBase-root MuiButton-root MuiButton-contained accessibility crm-addprojectbutton MuiButton-containedPrimary')).click();
    
    //Enter the required queries
    const element = await driver.findElement(By.xpath("//input[@placeholder='Ex: 7']"));
    await element.sendKeys(Key.BACK_SPACE);
    await element.sendKeys('5');

    await driver.findElement(By.xpath("//input[@placeholder='John Doe']")).sendKeys('Kenny');
    await driver.findElement(By.className("form-control w-100")).sendKeys("999999999");
    await driver.findElement(By.xpath("//input[@placeholder='Ex: Delhi']")).sendKeys('Jharkhand');

    //Click Submit
    await driver.findElement(By.css('button[type="submit"]')).click();

    //Wait to avoid malfunction and error
    await driver.sleep(2000);

    //Click on the Card
    await driver.wait(until.elementLocated(By.css('.crm-projectcard-top-title-maintitle'))).click();

    
    await driver.sleep(2000);

    //Move it to Site Visit Section
    await driver.findElement(By.css('select.form-control option[value="romFQMsvOO3xFnUzL1q1-lane60"]')).click();
    
    await driver.findElement(By.xpath("//button[contains(., 'Send')]")).click();
    
    //Close
    await driver.findElement(By.className('closeicon')).click();
       
    
   
  } finally {
    // Quit the browser
    
  }
}



example();
