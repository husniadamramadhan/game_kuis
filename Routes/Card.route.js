const express = require('express')
const router = express.Router()
const createError = require('http-errors')
const Card = require('../Models/Card.model')
const {cardSchema} = require('../helpers/validation_card_schema')


router.post('/addcard', async(req,res,next)=>{
    try{
        const result = await cardSchema.validateAsync(req.body)
        const card = new Card(result)
        const savedCard = await card.save() 
        res.status(201).json({message: 'Card saved successfully',savedCard})       
    }catch(error){
        if (error.isJoi === true) error.status =422
        next(error) 
    }
})

router.get('/getallcard', async(req,res,next)=>{
    try{
        const tags = await Card.distinct('tag')
        res.status(200).json({message:'Tags retrieved successfully', tag:tags})
    }catch(error){
        next(error)
    }
})

router.get('/getallcard/:tag', async(req,res,next)=>{
    try{
        const {tag} = req.params
        const cards = await Card.find({tag})
        if (cards.length === 0){
            return res.status(404).json({ message: `No cards found for the tag: ${tag}` });
        }
        res.status(200).json({message:'Cards retrieved successfully',cards:cards})
    }catch(error){
        next(error)
    }
})
module.exports = router