var url = require("url");
var parsedURL = url.parse(
  "https://www.google.com/search?q=node+js&oq=node+js&aqs=chrome..69i57j0l7.2351j0j8&sourceid=chrome&ie=UTF-8"
);

console.log(parsedURL);
console.log("프로토콜 : " + parsedURL.protocol);
// 프로토콜 : https:
console.log("사이트 : " + parsedURL.host);
//사이트 : www.google.com
console.log("경로 : " + parsedURL.path);
// 경로 : /search?q=node+js&oq=node+js&aqs=chrome..69i57j0l7.2351j0j8&sourceid=chrome&ie=UTF-8
