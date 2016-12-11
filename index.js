
import http from 'http';
import url from 'url';

import * as ctrl  from './controller';


let port = process.env.PORT || 8080;

function router(handle, pathname, response, request) {
  console.log('About to route a request for ' + pathname);
  if (typeof handle[pathname] === 'function') {
    handle[pathname](response, request);
  } else {
    console.log('No request handler found for ' + pathname);
    response.writeHead(404, {'Content-Type': 'text/html'});
    response.write('404 Not found');
    response.end();
  }
}


function start(route, handle) {
  http.createServer(onRequest).listen(port);
  console.log('server listening on port ' + port);

  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log('Request for ' + pathname + ' received.');
    route(handle, pathname, response, request);
  }

}



let handle = {};
handle['/'] = ctrl.start;
handle['/start'] = ctrl.start;

start(router, handle);
