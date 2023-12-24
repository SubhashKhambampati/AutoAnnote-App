// const express = require('express');
// const app = express();
// const cors = require('cors');

// app.use(cors());

// app.post("/upload", (req, res) => {
//     // use modules such as express-fileupload, Multer, Busboy
    
//     setTimeout(() => {
//         console.log('file uploaded')
//         return res.status(200).json({ result: true, msg: 'file uploaded' });
//     }, 3000);
// });

// app.delete("/upload", (req, res) => {
//     console.log(`File deleted`)
//     return res.status(200).json({ result: true, msg: 'file deleted' });
// });

// app.listen(8080, () => {
//     console.log(`Server running on port 8080`)
// });


const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 8080;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/upload', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// MongoDB Schema
const FileSchema = new mongoose.Schema({
  filename: String,
  path: String,
});

const File = mongoose.model('File', FileSchema);

app.use(cors());

// Handle file upload
app.post("/upload", (req, res) => {
  // Assuming you are using some middleware for handling file uploads
  // For example, using Multer:
  // const { filename, path } = req.file;
  
  // For the sake of this example, let's just create a file in MongoDB
  const file = new File({ filename: 'example.txt', path: '/uploads/example.txt' });
  
  file.save()
    .then(() => {
      console.log('File uploaded to MongoDB');
      return res.status(200).json({ result: true, msg: 'File uploaded to MongoDB' });
    })
    .catch((error) => {
      console.error('Error uploading file to MongoDB:', error);
      return res.status(500).json({ result: false, msg: 'Internal Server Error' });
    });
});

// Handle file deletion
app.delete("/upload", (req, res) => {
  // For the sake of this example, let's delete all files from MongoDB
  File.deleteMany({})
    .then(() => {
      console.log('All files deleted from MongoDB');
      return res.status(200).json({ result: true, msg: 'All files deleted from MongoDB' });
    })
    .catch((error) => {
      console.error('Error deleting files from MongoDB:', error);
      return res.status(500).json({ result: false, msg: 'Internal Server Error' });
    });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
