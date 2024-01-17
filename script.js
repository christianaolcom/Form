var allStudents = []

function submit() { 
var firstname = document.getElementById('firstname').value
var lastname = document.getElementById('lastname').value
var mailphone = document.getElementById('mailphone').value
var password = document.getElementById('password').value

if (firstname === '' || lastname === '' || mailphone === '' || password === ''){
    alert("Fill in the empty space")
 } else{
var studentObj = {firstname, lastname, mailphone, password}
allStudents.push(studentObj)
console.log(allStudents);

var firstname = document.getElementById('firstname').value
var lastname = document.getElementById('lastname').value
var mailphone = document.getElementById('mailphone').value
var password = document.getElementById('password').value
     }
      }