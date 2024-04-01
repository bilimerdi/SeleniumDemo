var request = require("supertest");
var app = require("../../myRest/src/index.js");
var assert = require("assert");

describe("API Test ", function () {
  describe("POST /signup test", async function () {
    it("must create a new user", async function () {
      var newUser = {
        TC: "123456789101w1",
        name: "John",
        surname: "Doe",
        doctorName: "Dr. Smith",
        illness: "Baş Ağrısı",
      };

      console.log(newUser);

      var cevap = await request(app).post("/signup").send(newUser);

      console.log("Cevap durumu:", cevap.status);

      assert.equal(cevap.status, 200);
    });

    it("false enter so return 422", async function () {
      var errUser = {};

      var cevap = await request(app).post("/signup").send(errUser);

      console.log("Cevap durumu:", cevap.status);
      assert.equal(cevap.status, 422);
    });
  });
  // describe("GET /find:/name:/surname",async function(){
  //   var user ={
  //     name:"Erdi",
  //     surname : "Örün"
  //   }
  //   it("must be a find user", async function(){

  //   });
  // });
});
