//fs 모듈 객체
var fs = require("fs");
var kim = "I am tired 나 힘들어";

fs.writeFile("test.txt", kim, "utf8", function(error) {
  if (error) {
    console.log(error);
  } else {
    console.log("파일이 정상적으로 생성되었습니다.");
  }
});
fs.readFile("test.txt", "utf8", function(error, data) {
  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }
});
