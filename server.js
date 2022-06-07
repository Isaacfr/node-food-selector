const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet')
//npm install figlet
//node server.js to start

const server = http.createServer((req, res) => {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log(page);
  if (page == '/') {
    fs.readFile('index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
  else if (page == '/otherpage') {
    fs.readFile('otherpage.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
  else if (page == '/otherotherpage') {
    fs.readFile('otherotherpage.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
  else if (page == '/api') {
  res.writeHead(200, {'Content-Type': 'application/json'});
    let foodChoices = ['pizza', 'sushi', 'burritos', 
    'tacos', 'seafood', 'burgers', 
    'lo mein', 'poke bowl', 'fried rice', 
    'soup', 'steak', 'salad', 'sandwich'];
    
    function yatesShuffle(array){
      let m = array.length, t, i;
      //while there remain elements to shuffle...
      while (m){
          //pick a remaining element
          i = Math.floor(Math.random()*m--);
          //and swap it with the current element
          t = array[m];
          array[m] = array[i];
          array[i] = t;
      }
      return array;
  }

  yatesShuffle(foodChoices);
  const objToJson = {
    choice1: foodChoices[0],
    choice2: foodChoices[1],
    choice3: foodChoices[2],
    choice4: foodChoices[3]
  };
  console.log(foodChoices);
  res.end(JSON.stringify(objToJson));
    // if('student' in params){
    //   if(params['student']== 'leon'){
    //     res.writeHead(200, {'Content-Type': 'application/json'});
    //     const objToJson = {
    //       name: "leon",
    //       status: "Boss Man",
    //       currentOccupation: "Baller"
    //     }
    //     res.end(JSON.stringify(objToJson));
    //   }//student = leon
    //   else if(params['student'] != 'leon'){
    //     res.writeHead(200, {'Content-Type': 'application/json'});
    //     const objToJson = {
    //       name: "unknown",
    //       status: "unknown",
    //       currentOccupation: "unknown"
    //     }
    //     res.end(JSON.stringify(objToJson));
    //   }//student != leon
    // }//student if
  }//else if
  
  else if (page == '/css/style.css'){
    fs.readFile('css/style.css', function(err, data) {
      res.write(data);
      res.end();
    });
  }else if (page == '/js/main.js'){
    fs.readFile('js/main.js', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });
  }else{
    figlet('404!!', function(err, data) {
      if (err) {
          console.log('Something went wrong...');
          console.dir(err);
          return;
      }
      res.write(data);
      res.end();
    });
  }
});

server.listen(8000);
