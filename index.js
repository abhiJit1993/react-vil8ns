
 import React, { Component } from 'react';
 import ReactDom , { Component } from 'react-dom';

const getFirstname = (user_details) => user_details.name.split(' ')[0];

let user = {
  name : 'Abhijit Som',
  age : 20,
  city : 'Ranchi city'
}
let resultArray;
     var multiplier = {
numbers : [3,9,7,8],
multiplyBy : 4,
multiply () {
 return this.numbers.map((num) => this.multiplyBy * num );
}
}
console.log(multiplier.multiply())


const template =  

(
<div>
<h1> Hey {getFirstname(user)} </h1> 
<p>your current age is : {user.age>=18 ? user.age : 'Not 18'}</p>

{(user && user.city) && (<h2>You are from : {user.city}</h2>)}
</div>
);


ReactDom.render(template,document.getElementById('app'))