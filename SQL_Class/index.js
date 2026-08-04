//run this command on terminal 
// mysql -u root -p

const { faker } = require('@faker-js/faker')
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Shaikh@431401',
  database : 'Delta_app'
});

//Inserting new data
let q = "INSERT INTO user(id, username, email, password) VALUES ?";

let users = [
  ["abc101", "rehans", "rehanshaikh12324@gmail.com", "Shaikh@13423"],
  ["xyz122", "alina", "alinashaikh123@gmail.com", "alina@123"]
];

connection.query(q, [users], (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(result);
});

connection.end();
let getRandomUser = ()=> {
  return {
    userId: faker.string.uuid(),
    username: faker.internet.username(),
    email: faker.internet.email(),
    password: faker.internet.password()
  };
}

// console.log(getRandomUser());