//querystring 모듈 객체
var url = require("url");
var qs = require("querystring");
var parsedURL = url.parse(
  "https://www.google.com/search?q=node+js&oq=node+js&aqs=chrome..69i57j0l7.2351j0j8&sourceid=chrome&ie=UTF-8"
);
var objQuery = qs.parse(parsedURL.query); //파싱한 값을 객체의 더 세부적인 속성으로 나누어 저장
var strQuery = qs.stringify(objQuery); //객체의 속성으로 나누어진 값을 하나의 문자열로 조합

console.log(parsedURL); //파싱한 URL 데이터를 출력
console.log(objQuery);
console.log(strQuery);
