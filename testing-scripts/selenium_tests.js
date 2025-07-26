// Test Case: test-website
const { Builder, By, Key, until } = require("selenium-webdriver");
(async function runTest() {
   let driver = await new Builder().forBrowser("chrome").build();
   try {
      driver.get("/");
      driver.findElement(By.css("css=.toggle")).click();
      driver.findElement(By.css("css=.toggle")).click();
      driver.findElement(By.css("css=input:nth-child(1)")).click();
      driver.findElement(By.css("css=input:nth-child(1)")).sendKeys("Data Communications");
      driver.findElement(By.css("css=.btn-neutral")).click();
      driver.findElement(By.css("linkText=Home")).click();
      driver.findElement(By.css("linkText=upload")).click();
      driver.findElement(By.css("linkText=Home")).click();
      driver.findElement(By.css("css=.shadow-xl:nth-child(1) > .flex")).click();
      driver.findElement(By.css("linkText=Home")).click();
      driver.findElement(By.css("css=.text-blue-600")).click();
      driver.findElement(By.css("linkText=Study Resources")).click();
      driver.findElement(By.css("css=.join-item:nth-child(3)")).click();
      driver.findElement(By.css("css=.join-item:nth-child(4)")).click();
      driver.findElement(By.css("css=.join-item:nth-child(6)")).click();
      driver.findElement(By.css("linkText=Profile")).click();
      driver.findElement(By.css("css=.btn-primary")).click();
      driver.findElement(By.css("linkText=Home")).click();
   } finally {
      await driver.quit();
   }
})();
