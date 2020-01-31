//crypto 모듈 객체 : 암호화
var crypto = require("crypto");

const secret = "abcdefg";
const hash = crypto
  .createHmac("sha256", secret)
  .update("i am tired")
  .digest("hex");

console.log(hash);
