
 console.log('JRJKVJKKSKKGFG')
 import React, { Component } from 'react';
  import ReactDom , { Component } from 'react-dom';

const getFirstname = (user_details) => user_details.name.split(' ')[0];

var user = {
  name : 'Abhijit Som',
  age : 20,
  city : 'Ranchi'
}

console.log('Hey');

var template =  
(<div>
<h1> Hey {getFirstname(user)} </h1> 
<p>your current age is : {user.age>=18 ? user.age : 'Not 18'}</p>

{(user && user.city) && (<h2>you are from : {user.city}</h2>)}
</div>);
ReactDom.render(template,document.getElementById('app'))