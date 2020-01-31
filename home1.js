var http = require("http");

var server = http.createServer(function(request, response) {
  response.writeHead(200, { "Content-Type": "text/html" });
  response.write("<!DOCTYPE html>");
  response.write("<html>");
  response.write("<head><meta charset='utf-8'><title>웹 연습></title>");

  response.write("</head>");
  response.write("<body>");
  response.write("<p>여기는 문서입니다.</p>");
  response.write("</body>");
  response.write("</html>");
  response.end("");
});

server.listen(9090, function() {
  console.log("Server is Connecting....");
});
