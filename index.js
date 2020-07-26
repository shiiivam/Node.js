//it will returen a function which on call will return a object
const express = require('express');

//Now on calling the app function it will return an object whith the help of which we can access different functions.
const app = express();

var courses = ['maths', 'bsc', 'cs'];

// //the get('url',routeHandler or simply a call back function)
// app.get('/',(req,res)=>{
//     res.send("Hello world");
// });

// //Handling some more requests
// app.get('/api/courses',(req,res)=>{
//     res.send([1,2,3]);
//     //responding with an array of numbers
// });

// /*ROUTE PARAMETERS: The route parameters are the parameters passed in the url.
// We use ROUTE parameters for extracting essential or required values*/

// //Handling a url with id or other details
// app.get('/api/courses/:id',(req,res)=>{
//     res.send(`Listening to request id ${req.params.id} on port ${port}`);
//     //responding with the id and the port
// });

// //Handling a url with many things like /year/month
// app.get('/api/courses/:year/:month',(req,res)=>{
//     res.send(req.params);
//     //res.send(`The whole data received by the url is ${req.params}. Listening to request id ${req.params.year} and month ${req.params.month} on port ${port}`);
//     //responding with the year and month mentioned in the url
// });

// /*QUERY STRING PARAMETERS: Query parameters are used to extract some string data from the url. 
// We use query string parameters for extracting data from url for backend services*/
// //Like sortBy or category
// //Example : https://api/posts/2020/1?sortBy=name
// app.get('/api/courses/:year/:month',(req,res)=>{
//     res.send(req.query);
//     //Responding with the query
// });


app.get('/api/courses/:id',(req,res)=>{
    res.send(`The course selected is ${courses[req.params.id]}`);
    //Responding with the query 
});

/*PORT: An environment variable is the part of the environment in which the process runs. It's value is set
outside this application. 

In development evironment the port is assigned dynamically by the Hosting environment. it's not a fixed
like we used to do till now W can't rely on port 3000 to be available. 

In this application we have to read the value of the environment by process object. 

process.env.PORT

The process object has a property env and the environment variable.

SETTING ENVIRONMENT VARIABLE : 

On cmd : set PORT= 5000 //OR any number

*/
//Environment variable PORT
//If environment varibable is set take that value or set the port value 3000 
const port = process.env.PORT || 3000;


app.listen(port,()=>console.log(`Listening port ${port}`));


/* 
Not working on my pc....

NODEMON : Till now we have to restart the server manually after making any changes to our application
this can be solved by just installing a package globally call Nodemon.
After installing this package we can easily just go to the url it will restart the application automatically
and we eill be able to see the changes that we had made in our app. Instead of running app with node run it with nodemon*/

