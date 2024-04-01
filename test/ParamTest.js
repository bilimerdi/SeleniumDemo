// const { Builder, By, Key } = require("selenium-webdriver");

// describe("React Demo Uygulama Testi", function () {
//   Users = [
//     {
//       TC: "11",
//       name: "Selim ",
//       surname: "Bıyık",
//       illness: "Baş Ağrısı",
//       doctorName: "Pelin Güç",
//     },
//     {
//       TC: "12",
//       name: "Burak",
//       surname: "Bıyık",
//       illness: "Diş Ağrısı",
//       doctorName: "Yaşar Kantar",
//     },
//     {
//       TC: "13",
//       name: "Burçin",
//       surname: "Bıyık",
//       illness: "Boyun Ağrısı",
//       doctorName: "Keriman büyük",
//     },
//     {
//       TC: "14",
//       name: "Emre",
//       surname: "Bıyık",
//       illness: "Kalp Ağrısı",
//       doctorName: "Serhat Arslan",
//     },
//   ];

//   Users.forEach(({ TC, name, surname, illness, doctorName }) => {
//     it("Kullanıcı kaydı oluşturma", async function () {
//       let driver = await new Builder().forBrowser("firefox").build();

//       await driver.get("http://localhost:3000/");

//       await driver
//         .findElement(By.xpath("/html/body/div/div/header/div/input[1]"))
//         .sendKeys(TC);

//       await driver
//         .findElement(By.xpath("/html/body/div/div/header/div/input[2]"))
//         .sendKeys(name);

//       await driver
//         .findElement(By.xpath("/html/body/div/div/header/div/input[3]"))
//         .sendKeys(surname);

//       await driver
//         .findElement(By.xpath("/html/body/div/div/header/div/input[4]"))
//         .sendKeys(illness);

//       await driver
//         .findElement(By.xpath("/html/body/div/div/header/div/input[5]"))
//         .sendKeys(doctorName);

//       await driver
//         .findElement(By.xpath('//button[contains(text(),"Hastayı Kaydet")]'))
//         .click();

//       await driver.sleep(2000);
//     });
//   });
// });
