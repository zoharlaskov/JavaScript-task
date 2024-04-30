const validtor = require("validator");

((email) => {
  validtor.isEmail(email)
    ? console.log(`${email} is valid email`)
    : console.log(`${email} is invalid email`);

//   throw { message: "my error", code: 500 };

})("ds@gmail.com");
