const express = require("express");
const router = new express.Router();
const MensRanking = require("../models/mens");

//Create records
router.post('/mens', async (req, res) => {
    try {
        const addingMensRecords = new MensRanking();

        addingMensRecords.fullname=req.body.fullname;
        addingMensRecords.phone=req.body.phone;
        addingMensRecords.email=req.body.email;
        addingMensRecords.msg=req.body.msg;

        const insertMens = await addingMensRecords.save();
        res.status(201).json (insertMens);
    } catch (e) {
        res.status(400).send(e);
    }
})

//retrive all records
router.get('/mens', async (req, res) => {
    try {
        const getMens = await MensRanking.find({});
        res.json(getMens);
    } catch (e) {
        res.status(400).send(e);

    }
})

// //retive one record by id
// router.get('/mens/:id', async (req, res) => {
//     try {
//         const _id = req.params.id;
//         const getMen = await MensRanking.findById(_id);
//         res.send(getMen);
//     } catch (e) {
//         res.status(400).send(e);

//     }
// })

// //updating records
// router.patch('/mens/:id', async(req,res) => {
//     try {
//         const _id = req.params.id;
//         const updateMen = await MensRanking.findByIdAndUpdate(_id,req.body,{
//             new:true
//         });
//         res.send(updateMen);
//     } catch (e) {
//         res.status(500).send(e);

//     }
// })

// //deleting records
// router.delete('/mens/:id', async(req,res) => {
//     try {
//         const deletemen = await MensRanking.findByIdAndDelete(req.params.id);
//         res.send(deletemen);
//     } catch (e) {
//         res.status(500).send(e);

//     }
// })

module.exports=router;