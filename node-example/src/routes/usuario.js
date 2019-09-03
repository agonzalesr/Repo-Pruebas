const { Router } = require('express') ;
const router = Router();
const _ = require("underscore");

const data = require('../data.json');

router.get('/',(req,res)=> {   
    res.json(data);
});

router.post('/',(req,res)=> {   
    const {nombre, edad, correo} = req.body;
    if(nombre && edad && correo){
        const id =  data.length + 1;
        const newUsuario = {...req.body, id};
        data.push(newUsuario);
        res.json(data);
    }
    else{
        res.status(500).json({error: "Ocurrió un error"})
    }
});

router.delete('/:id', (req,res) =>{
    console.log(req.params);
    const { id } = req.params;
    _.each(data,(user,i) => {
        if(user.id == id){
            data.splice(i,1);
        }        
    })
    res.json(data);
});

router.put('/:id', (req,res) =>{
    const { id } = req.params;
    const {nombre, edad, correo} = req.body;
    if(nombre && edad && correo){
        _.each(data,(user,i) => {
            if(user.id == id){
                user.nombre = nombre;
                user.edad = edad;
                user.correo = correo;
            }        
        })
        res.json(data);
    }
    else{
        res.status(500).json({error: "Ocurrió un error"})
    }   
});

module.exports = router;