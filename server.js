const express = require('express');
const fs = require('fs');

const port = process.argv[3]

const app = express();

function bubble_Sort(a)
{
    var swapp;
    var n = a.length-1;
    var x=a;
    do {
        swapp = false;
        for (var i=0; i < n; i++)
        {
            if (x[i] < x[i+1])
            {
               var temp = x[i];
               x[i] = x[i+1];
               x[i+1] = temp;
               swapp = true;
            }
        }
        n--;
    } while (swapp);
 return x; 
}

function generateArray(){
  array = [];

  for (let index = 0; index < 100; index++) {
    array.push(Math.round(Math.random(1000) * 10));
  }
  
  return array;
}

app.get('/',(req,res) => {
  array = generateArray();
  console.log(array);
  
  bubble_Sort(array);

  console.log(array);
  

  return res.status(200).send("Task done!")
})

app.listen(port, () => console.log(`Server rodando na porta ${port}`));