import * as Http from "http";
import * as Url from "url";

namespace A7 {
    
    console.log("Starting server");
    let port: number = process.env.PORT;
    if (port == undefined)
        port = 8200;
    
    interface SendData { [key: string]: string; }
    
    let order: SendData = {};
    
    let server: Http.Server = Http.createServer();
    server.addListener("request", handleRequest);
    server.addListener("listening", handleListen);
    server.listen(port);

    function handleListen(): void {
        console.log("Listening");
    }
    
    
    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
        
        console.log("I hear voices now!");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        _response.write(_request.url);
        console.log(_request.url);
    
        _request.url.split(["&"[]]);
        _response.write(order + "<br>");
        
        _response.end();
    }
    
}
