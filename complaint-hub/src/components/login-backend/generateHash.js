const bcrypt = require("bcrypt");

const password = "poblacion1";
bcrypt.hash(password, 10, (err, hash) => {
  if (err) throw err;
  console.log("Hashed password:", hash);
});
