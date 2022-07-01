const express = require('express');
const {addfiledata, 
       getAllfiledata, 
       getfiledata,
       updatefiledata,
       deletefiledata
      } = require('../controllers/filedataController');

const router = express.Router();

router.post('/filedata', addfiledata);
router.get('/filedatas', getAllfiledata);
router.get('/filedata/:id', getfiledata);
router.put('/filedata/:id', updatefiledata);
router.delete('/filedata/:id', deletefiledata);


module.exports = {
    routes: router
}