const express = require('express');
const Order = require('../models/order');


const router = express.Router();




//Save order

router.post('/post/save',(req,res)=>{

    let newOrder = new Order(req.body);
    

    newOrder.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"order Save Successfully"
        });
    });
});
//Get order's details

router.get('/getall',(req,res)=>{

    Order.find().exec((err, orders)=> {
        if(err) {
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success: true,
            existingorders: orders
        });
    });
});


//Get a Specific items

router.get('/get/:id', (req,res) => {

    let orderID = req.params.id;

    Order.findById(orderID,(err,order) =>{
        if(err){
            return res.status(400).json({success:false, err});
        }
        return res.status(200).json({
            success:true,
            order
        });
    });
});


//Update order's details

router.put('/update/:id', (req,res)=>{

    orders.findByIdAndUpdate(
        req.params.id, {
            $set: req.body
        },
        (err,orders) => {
            if(err) {
                return res.status(400).json({
                    error: err
                });
            }
            return res.status(200).json({
                success: "Updated Successfully."
            });
        }
    );
});


//Delete order in the list

router.delete('/delete/:id', (req,res)=>{

    orders.findByIdAndRemove(req.params.id).exec((err, deletedorder)=>{
        if (err) {
            return res.status(400).json({
                message: "Delete Unsuccessful.",
                err
            });
        }
        return res.status(200).json({
            message: "Delete Successful.",
            deletedCrew
        });
    });
});




module.exports = router;