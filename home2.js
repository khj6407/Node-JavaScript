var http = require("http");
var url = require("url");
var fs = require("fs");

var server = http.createServer(function(req, res) {
  var parsedURL = url.parse(req.url);
  var resource = parsedURL.pathname;

  if (resource === "/index") {
    //http://localhost/index 라고 입력했다면
    fs.readFile("index.html", "utf-8", function(error, data) {
      if (error) {
        res.writeHead(500, { "Content-Type": "text/html" });
        res.end("500 Server Error is" + error);
      } else {
        //정상 작동
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      }
    });
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.write("<!DOCTYPE html>");
    res.write("<html>");
    res.write("<head><meta charset='utf-8'>");
    res.write("</head>");
    res.write("<body>");
    res.write("<p>요청한 페이지가 존재하지 않습니다.</p>");
    res.write("</body>");
    res.write("</html>");
    res.end("");
    console.log("요청한 페이지가 존재하지 않습니다.");
  }
});

server.listen(80, function() {
  console.log("서버가 작동하였습니다.");
});
