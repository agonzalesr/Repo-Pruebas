const { Router } = require('express') ;
const router = Router();

router.get('/',(req,res)=> {
    var data = "Connection OK";
    res.json(data);
});

router.get('/User',(req,res)=> {
    var data = {
        name:"Abel",
        email:"agonzales@inlearning.edu.pe"
    }
    res.json(data);
});

module.exports = router;