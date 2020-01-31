//util 모듈 객체 : 데이터를 특정 형식으로 가공
var util = require("util");
var data = util.format(
  "%d%s %d%s %s",
  12,
  "월",
  25,
  "일",
  "메리메리크리스마스"
);

console.log(data);
//12월 25일 메리메리크리스마스
