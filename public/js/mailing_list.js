// //Hetkel ei tööta, aga tegelen tuvelikus sellega edasi.
//
// function writeEmailIntoFile(email) {
//     const fileName = ".../emails.txt";
//     const fs = require("fs");
//     fs.writeFile(fileName, email, (err) => {
//         if (err) throw err;
//     })
// }
//
// function handleSubmit(event) {
//     event.preventDefault();
//
//     const data = new FormData(event.target);
//     const value = Object.fromEntries(data.entries());
//
//     console.log("The entered email is ", value.email); // Assuming email is a field in the form
//
//     // If you just want to log the entered email and not write to a file (which can't be done in a browser environment):
//     // writeEmailIntoFile(value.email); // This function won't work in a browser environment
//
//     // You can add other operations or API requests here using the entered email.
// }
//
// const form = document.querySelector('form');
// form.addEventListener('submit', handleSubmit);
