// const { Builder, By, Key } = require("selenium-webdriver");

// describe("React Demo Uygulama Testi", function () {
//   it("Kullanıcı kaydı oluşturma", async function () {
//     let driver = await new Builder().forBrowser("firefox").build();

//     await driver.get("http://localhost:3000/");

//     await driver
//       .findElement(By.xpath("/html/body/div/div/header/div/input[1]"))
//       .sendKeys("123456789123456789");

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

//     await driver.sleep(2000);
//     // Beklenen hatanın kontrolü
//     try {
//       await driver.switchTo().alert().accept(); // Beklenen hata mesajını kabul et
//     } catch (error) {
//       console.log("Beklenen hata mesajı alınamadı.");
//     }

//     // await driver.quit();
//   });
//   //   it("Hastanın verilerini görüntüleme", async function () {
//   //     let driver = await new Builder().forBrowser("firefox").build();

//   //     await driver.get("http://localhost:3000/");

//   //     await driver
//   //       .findElement(By.xpath("/html/body/div/div/header/div/input[3]"))
//   //       .sendKeys("Doe");

//   //     await driver
//   //       .findElement(By.xpath("/html/body/div/div/header/div/input[2]"))
//   //       .sendKeys("John");

//   //     await driver
//   //       .findElement(By.xpath('//button[contains(text(),"Hastayı Görüntüle")]'))
//   //       .click();

//   //     await driver.sleep(2000);
//   //   });
//   //   it("Tüm kullanıcıları görüntüleme", async function () {
//   //     let driver = await new Builder().forBrowser("firefox").build();

//   //     await driver.get("http://localhost:3000/");

//   //     await driver
//   //       .findElement(
//   //         By.xpath('//button[contains(text(),"Tüm Hastaları Görüntüle")]')
//   //       )
//   //       .click();

//   //     await driver.sleep(2000);
//   //   });
//   //   it("Hasta verileni silme", async function () {
//   //     let driver = await new Builder().forBrowser("firefox").build();

//   //     await driver.get("http://localhost:3000/");

//   //     await driver
//   //       .findElement(By.xpath("/html/body/div/div/header/div/input[1]"))
//   //       .sendKeys("12345678901");

//   //     await driver
//   //       .findElement(By.xpath('//button[contains(text(),"Hastayı Sil")]'))
//   //       .click();
//   //   });
// });
