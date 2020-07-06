const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const nano = require('nano')('http://localhost:5984');
const myDB = nano.db.use('playground');
const router = express.Router();






router.use(cors());
router.use(bodyParser.urlencoded({extended: false}));
router.use(bodyParser.json());

//======== upload image ==========//
const multer = require('multer');
const storage = multer.diskStorage(
  {
    destination:'./uploads',
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    } 
  }
)
 
var upload = multer({ storage: storage })
router.post('/uploadFile', upload.array("file"), (req, res)=>{
  // console.log(req.file)
  res.send('Uploaded')
})

router.get('/', (req, res) => {
    res.send('Hello World');
});

router.get('/api/testData', (req, res) =>{
    myDB.list({include_docs: true}).then(body => {
      let toSend = body.rows.map(rec => {
        return rec.doc
      })
      res.send(toSend)
    })
})



// ===== Upload Files ======== //

module.exports = router;