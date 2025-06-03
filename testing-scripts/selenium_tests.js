// Test Case: test-website
const { Builder, By, Key, until } = require("selenium-webdriver");
(async function runTest() {
   let driver = await new Builder().forBrowser("chrome").build();
   try {
      driver.get("/");
      // Unsupported command: setWindowSize
      driver.findElement(By.css("css=.toggle")).click();
      driver.findElement(By.css("css=.toggle")).click();
      driver.findElement(By.css("css=input:nth-child(1)")).click();
      driver.findElement(By.css("css=input:nth-child(1)")).sendKeys("Data Communications");
      driver.findElement(By.css("css=.btn-neutral")).click();
      driver.findElement(By.css("linkText=Home")).click();
      driver.findElement(By.css("linkText=upload")).click();
      driver.findElement(By.css("linkText=Home")).click();
      // Unsupported command: mouseOver
      driver.findElement(By.css("css=.shadow-xl:nth-child(1) > .flex")).click();
      // Unsupported command: runScript
      driver.findElement(By.css("linkText=Home")).click();
      driver.findElement(By.css("css=.text-blue-600")).click();
      // Unsupported command: //click
      driver.findElement(By.css("linkText=Study Resources")).click();
      driver.findElement(By.css("css=.join-item:nth-child(3)")).click();
      driver.findElement(By.css("css=.join-item:nth-child(4)")).click();
      driver.findElement(By.css("css=.join-item:nth-child(6)")).click();
      driver.findElement(By.css("linkText=Profile")).click();
      // Unsupported command: //click
      // Unsupported command: //selectWindow
      // Unsupported command: selectWindow
      driver.findElement(By.css("css=.btn-primary")).click();
      driver.findElement(By.css("linkText=Home")).click();
   } finally {
      await driver.quit();
   }
})();
