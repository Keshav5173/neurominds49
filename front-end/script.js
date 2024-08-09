// const express = require('express');
// const multer = require('multer');
// const path = require('path');
// const fs = require('fs');
// const app = express();
// const port = 3000;
// // Ensure the uploads directory exists
// const UPLOADS_DIR = path.join(__dirname, 'uploads');
// if (!fs.existsSync(UPLOADS_DIR)) {
//   fs.mkdirSync(UPLOADS_DIR);
// }

// // Configure storage for Multer
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, UPLOADS_DIR);
//   },
//   filename: (req, file, cb) => {
//     cb(null, `${Date.now()}-${file.originalname}`);
//   },
// });

// const upload = multer({ storage: storage });

// // Serve uploaded files statically
// app.use('/uploads', express.static(UPLOADS_DIR));

// // Route to serve the HTML upload form


// // Route for handling image uploads
// app.post('/upload', upload.single('image'), (req, res) => {
//   if (req.file) {
//     // Generate URL for the uploaded image
//     const imageUrl = `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`;
//     res.send({ url: imageUrl });
//   } else {
//     res.status(400).send('No file uploaded.');
//   }
// });

// // Route to handle undefined GET requests
// app.get('*', (req, res) => {
//   res.status(404).send('Page not found.');
// });

// app.listen(port, () => {
//   console.log(`Server running on http://localhost:${port}`);
// });


let add= document.querySelector("#add");
add.addEventListener("click", ()=>{
  window.open("addEvi.html");
});

let disp= document.querySelector("#disp");
disp.addEventListener("click", ()=>{
  window.open("dispEvi.html");
});
 
var web3;
var address= "";
async function connect(){
  await window.web3.currentProvider.enable();
  web3= new Web3(window.web3.currentProvider);
}

if(typeof web3 !=="undefine"){
  web3= new Web3(window.web3.currentProvider);
}
else{
  web3=new Web3(new Web3.Provider.HttpProvider(""));
}
var abi=[];
var contract= new web3.eth.Contract(abi, address);
