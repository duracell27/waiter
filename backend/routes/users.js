const router = require('express').Router()
let User = require('../models/user.model')

router.route('/').get((req,res)=>{
    User.find().then((users)=>{res.json(users)}).catch((err)=> {res.status(400).json('Помилка' + err)})
})

router.route('/add').post((req, res)=>{
    const userData = req.body

    const newUser = new User(userData)

    newUser.save().then(()=>{res.json('Користувач доданий')}).catch((err)=> {res.status(400).json('Помилка' + err)})
})

module.exports = router