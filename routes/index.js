import express from 'express'
import Item from '../models/items.js'
const router = express.Router()

router.get('/', async(req, res) => {
	try{
       const items= await Item.find({})
	   res.status(200).json(items)
	}catch(ex){
       res.status(400).send('some error')
	}
	
})

router.post('/add-item',async(req,res)=>{
	const item=new Item(req.body)
    try{
       await item.save()
	   return res.status(201).json(item)
	}catch(e){
		console.log(e);
	}
	
})

export default router