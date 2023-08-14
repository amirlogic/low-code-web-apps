
const http = require("http");
// Import the URL module
const url = require("url");

const { getHtml, webpage } = require("htwrite");

const xhead = require("./xhead");

const MAIN_TITLE = "Cytology"

const SERVER_PORT = 9000

let screen = 'leucocytes';

const { payload } = require('./content')

function pageBody(navtext="NestedLogic",toptext="No title",htw){

    let html = `<nav class="navbar navbar-dark bg-dark">
            <span class="navbar-brand mx-4" href="#">${navtext}</span>
            <div id="tabs" class="navbar-text">${Object.keys(payload).map((pg)=>{

                return `<span data-bindto="imageselector" data-func="click" data-aval="${pg}" class="mx-3 text-white">${pg}</span>`

            }).join('')}</div>
            </nav>
            <div id="toptext" class="text-center my-4 fs-3">${toptext}</div>
            <div id="htcont" class="container-fluid">${htw}</div>
            <script>
                window.onload = (event) => {
                    
                    listeners();
                };
            </script>`

    return html;
}



// Make our HTTP server
const server = http.createServer((req, res) => {
    // Parse the request url

    const reqUrl = url.parse(req.url).pathname
    // Compare our request method

    if (req.method == "GET") {

        if (reqUrl == "/" || reqUrl == "/leucocytes") {

            screen = 'leucocytes'

            let mhtml = getHtml([
                
                [ "507bd06d-3806-4e72-a8ed-514e09fc40b1", 
                { payload:payload[screen], bindto:"imageselectorleftcol", imgkey:payload[screen][0].key } ]

            ])

            res.write( webpage("Cytology",xhead,pageBody(MAIN_TITLE,"Normal Leucocytes",mhtml)) )
            res.end()
        }
        else if (reqUrl == "/other") {

            screen = 'other'

            let mhtml = getHtml([
                
                [ "507bd06d-3806-4e72-a8ed-514e09fc40b1", 
                { payload:payload[screen], bindto:"imageselectorleftcol", imgkey:payload[screen][0].key } ]

            ])

            res.write( webpage("Cytology",xhead,pageBody(MAIN_TITLE,"Other cells",mhtml)) )
            res.end()
        }


    } else if (req.method == "POST") {

        if (reqUrl == "/hello") {

            res.write("hello world")
            res.end()
        }
    }
})

// Have the server listen on port 9000
server.listen(SERVER_PORT)

console.log(`server started at: http://localhost:${SERVER_PORT}`)