const http = require('http');
/* the callback function is going to run each time a request is made */
const server = http.createServer((req, res) => {
    console.log('request made')
});
/* the req object has a lot info about the request being made, such as the url, req type....*/
/* res object is the object we use to send response to the user in the browser */
/* in orderd to listen for request we have to use listen method */
server.listen(3000, 'localhost', () => {
    console.log('listening for requests on port 3000')
})
/* host name is by default localhost we do not have to specify it like above */
/* this code is running in the backend so we do not see anything in the browser console
but rather in the terminal here */