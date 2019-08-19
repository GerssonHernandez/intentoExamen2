const express = require('express');

const Producto = require('../models/producto');

const app = express();

// Deberá hacer aquí el método get para producto (Valor 5 puntos)
app.get('/', (req, res) => {
    Producto.find({},(err,producto)=>{
        if(err) return res.status(500).send({message:`Error al realizar la peticion`})
        if(!producto) return res.status(404).send({message: `No existen productos`})

        res.send(200,{producto})
    })
    
});

app.get('/producto/:id', (req, res) =>{
    let id = req.params.id

    Producto.findById(id,(err,producto)=>{
        if(err) res.status(500).send({message:`Error al realizar peticion ${err}`})
        if(!producto) res.status(404).send({message:'El producto no existe'})

        res.status(200).send({producto})
    })
});


// Deberá hacer aquí el método post para producto (Valor 5 puntos)
app.post('/producto', (req, res) =>{
    let body = req.body;

    let producto = new Producto({
        nombre: body.nombre,
        precio: body.precio,
        //creado_en: body.creado_en
    });

    //Grabar en la DB
    producto.save( (err, productoDB) =>{
        if(err){
            res.status(400).json({
                ok: false,
                err
            })
        }

        res.json({
            ok:true,
            producto: productoDB
        })
    });
});

module.exports= app;












