// const { Builder, By, Key } = require("selenium-webdriver");
// require("chromedriver");
// const assert = require("assert");
// var should = require("chai").should();

// async function driver() {
//   let driver = await new Builder().forBrowser("chrome").build();

//   await driver.get("http://localhost:3000/");

//   let inputElement = await driver.findElement(
//     By.xpath("/html/body/div/div/header/div/input[1]")
//   );

//   await inputElement.sendKeys("1");

//   let buttonElement = await driver.findElement(
//     By.xpath("/html/body/div/div/header/div/div/button[4]")
//   );

//   await buttonElement.click();

//assert (Yaptığımız değişikli kontrol edicez.)
// let todoText = await driver
//   .findElement(By.xpath("/html/body/div/div/"))
//   .getText()
//   .then(function (value) {
//     return value;
//   });

//npm ile gelen yerel kütüphane(assert)
//   assert.strictEqual(todoText, "Learn javascript");
//   await driver.close();

//sonradan npm install komutu ile yüklediğimiz chai kütüphanesi
//yukarıdaki test gerçekleştiğinde olması gereken durum ile olan durumu karşılaştırıyoruz.
// todoText.should.equal("Learn Selenium");
// }

// driver();
