const router = require('express').Router()
let Waiter = require('../models/waiter.model')

router.route('/').get((req,res)=>{
    Waiter.find().then((waiter)=>{res.json(waiter)}).catch((err)=> {res.status(400).json('Помилка ' + err)})
})

router.route('/add').post((req, res)=>{
    const waiterData = req.body

    const newWaiter = new Waiter(waiterData)

    newWaiter.save().then(()=>{res.json('Офіціант доданий')}).catch((err)=> {res.status(400).json('Помилка ' + err)})
})

router.route('/:id').get((req,res)=>{
    Waiter.findById(req.params.id).then((waiter)=>{res.json(waiter)}).catch((err)=> {res.status(400).json('Помилка ' + err)})
})

router.route('/:id').delete((req,res)=>{
    Waiter.findByIdAndDelete(req.params.id).then(()=>{res.json('Офіціант видалений')}).catch((err)=> {res.status(400).json('Помилка ' + err)})
})

router.route('/update/:id').post((req, res)=>{

    Waiter.findById(req.params.id).then((waiter)=>{
        waiter.name = req.body.name
        waiter.lastname = req.body.lastname
        waiter.restorant = req.body.restorant
        waiter.city = req.body.city
        waiter.imgUrl = req.body.imgUrl
        waiter.save().then(()=>{res.json('Офіціант відредагований')}).catch((err)=> {res.status(400).json('Помилка ' + err)})
    }).catch((err)=> {res.status(400).json('Помилка ' + err)})
})


module.exports = router