const { Router } = require('express')
const express = require('express')
var router = Router()



//definição das routes
router.get('/',(req, res) => {
    res.render("admin/index")
})


router.get('/categorias', (req, res) =>{
    res.render("admin/categorias")
})

router.get('/categorias/add', (req, res) =>{
    res.render("admin/addCategoria")
})


module.exports = router