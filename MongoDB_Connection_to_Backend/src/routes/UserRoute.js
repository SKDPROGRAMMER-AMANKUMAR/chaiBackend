import { User } from "../models/User";
import express from "express"

const router = express.Router()

router.get('/',(req,res)=>{
    res.json([
        {id:1,
         name:'City Hospital',
         location:'New York',
         capacity:100
        },
        {id:2,
         name:'Country Hospital',
         location:'New York',
         capacity:150
        },
    ])
})

router.get('/:id',(req,res)=>{
    const hospitalId = req.params.id;
    res.send(`Get hospital with ID:${hospitalId}`)
})

export default router