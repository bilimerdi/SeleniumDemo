const assert = require("assert");
const { request } = require("supertest");
const app = require("../../myRest/src/index.js");

// const testDB = "your-test-database-name";

// beforeEach(async () => {
//   await mongoose.connect(`mongodb://localhost/${testDB}`, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   });
// });

// afterEach(async () => {
//   await mongoose.connection.dropDatabase();
//   await mongoose.disconnect();
// });

describe("User API Tests", function () {
  describe("POST /signup", function () {
    it("should create a new user", async function () {
      const user = {
        TC: "12345678901",
        name: "John",
        surname: "Doe",
        doctorName: "Dr. Smith",
        illness: "Headache",
      };

      const res = await request(app).post("/signup").send(user);

      assert.equal(res.status, 200);
    });

    it("should return 422 for missing fields", async function () {
      const user = {
        name: "John",
        surname: "Doe",
      };

      const res = await request(app).post("/signup").send(user);

      assert.equal(res.equal, 422);
    });
  });

  describe("GET /find/:name/:surname", function () {
    let userId;

    // beforeEach(async () => {
    //   const user = new User({
    //     TC: "9876543210",
    //     name: "Jane",
    //     surname: "Doe",                  "kullanıcıyı başta mongoDB'ye ekleme"
    //     doctorName: "Dr. Lee",
    //     illness: "Stomach Ache",
    //   });
    //   await user.save();
    //   userId = user._id;
    // });

    it("should find a user by name and surname", async function () {
      const res = await request(app).get(`/find/Jane/Doe`);

      assert.equal(res.status, 200);
      assert.deepStrictEqual(
        res.body._id,
        userId.toString(),
        "User ID should match"
      );
    });

    it("should return 404 for non-existent user", async function () {
      const res = await request(app).get("/find/Nonexistent/Name");

      assert.equal(res.status, 404);
    });
  });

  describe("GET /findAll", function () {
    // beforeEach(async () => {
    //   await User.create([
    //     {
    //       TC: "11111111111",
    //       name: "Alice",
    //       surname: "Smith",
    //       doctorName: "Dr. Brown",
    //       illness: "Cold",                   "kullanıcı verilerinin mongoDB'ye yüklenmesi"
    //     },
    //     {
    //       TC: "22222222222",
    //       name: "Bob",
    //       surname: "Johnson",
    //       doctorName: "Dr. White",
    //       illness: "Fever",
    //     },
    //   ]);
    // });

    it("should return a list of all users", async function () {
      const res = await request(app).get("/findAll");

      assert.equal(res.status, 200);
      assert.ok(Array.isArray(res.body), "Response body should be an array");
      assert.strictEqual(res.body.length, 2, "Array length should be 2");
    });
  });

  describe("DELETE /delete/:TC", function () {
    let userId;

    // beforeEach(async () => {
    //   const user = new User({
    //     TC: "33333333333",
    //     name: "Charlie",
    //     surname: "Williams",
    //     doctorName: "Dr. Black",         "user kayıt alınması"
    //     illness: "Flu",
    //   });
    //   await user.save();
    //   userId = user._id;
    // });

    it("should delete a user by TC and return a success message", async function () {
      const res = await request(app).delete(`/delete/${user.TC}`);

      assert.equal(res.status, 200);
      assert.ok(
        res.body.hasOwnProperty("message"),
        "Response should have a message property"
      );
      assert.strictEqual(
        res.body.message,
        "User deleted successfully",
        "Message should be 'User deleted successfully'"
      );
    });

    it("should return 404 for non-existent user", async function () {
      const res = await request(app).delete("/delete/99999999999");

      assert.equal(res.status, 404);
    });
  });
});
