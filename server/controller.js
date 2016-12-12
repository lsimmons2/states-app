
import querystring from "querystring";
import fs from "fs";
import formidable from "formidable";


function start(response) {
  response.writeHead(200, {"Content-Type": "text/html"});
  fs.createReadStream('./page.html').pipe(response);
}


export { start }
