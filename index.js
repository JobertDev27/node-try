import http from "http";
import fs from "fs";
import url from "url";

const port = process.env.PORT;

http
  .createServer((req, res) => {
    const q = url.parse(req.url, true);
    const filename = `.${q.pathname}`;

    fs.readFile(filename, (err, data) => {
      if (err) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("404.html");
        return res.end();
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        return res.end();
      }
    });
  })
  .listen(port);
