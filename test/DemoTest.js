// const { Builder, By, Key } = require("selenium-webdriver");

// async function runTest() {
//   let driver = await new Builder().forBrowser("firefox").build();

//   try {
//     await driver.get("http://localhost:3000/");

//     await driver
//       .findElement(By.xpath("/html/body/div/div/header/div/input[1]"))
//       .sendKeys("12345678901");

//     await driver
//       .findElement(By.xpath("/html/body/div/div/header/div/input[2]"))
//       .sendKeys("John");

//     await driver
//       .findElement(By.xpath("/html/body/div/div/header/div/input[3]"))
//       .sendKeys("Doe");

//     await driver
//       .findElement(By.xpath("/html/body/div/div/header/div/input[4]"))
//       .sendKeys("Headache");

//     await driver
//       .findElement(By.xpath("/html/body/div/div/header/div/input[5]"))
//       .sendKeys("Dr. Smith");

//     await driver
//       .findElement(By.xpath('//button[contains(text(),"Hastayı Kaydet")]'))
//       .click();

//     await driver
//       .findElement(By.xpath('//button[contains(text(),"Hastayı Görüntüle")]'))
//       .click();

//     await driver
//       .findElement(
//         By.xpath('//button[contains(text(),"Tüm Hastaları Görüntüle")]')
//       )
//       .click();

//     await driver
//       .findElement(By.xpath('//button[contains(text(),"Hastayı Sil")]'))
//       .click();

//     await driver.sleep(2000);
//   } catch (error) {
//     console.error("Test sırasında bir hata oluştu:", error);
//   } finally {
//     // await driver.quit();
//   }
// }

// runTest();
