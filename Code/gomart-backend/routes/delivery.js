const express = require('express');
const delivery = require('../models/delivery');



const router = express.Router();




//Save delivery details

router.post('/post/save',(req,res)=>{

    let newdelivery = new delivery(req.body);
    

    newdelivery.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"delivery Save Successfully"
        });
    });
});


//Get delivery details

router.get('/getall',(req,res)=>{

    delivery.find().exec((err, deliverys)=> {
        if(err) {
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success: true,
            existingorders: deliverys
        });
    });
});



//Get a Specific delivery details

router.get('/get/:id', (req,res) => {

    let delivery_date= req.params.id;

    Order.findById(delivery_date,(err,delivery) =>{
        if(err){
            return res.status(400).json({success:false, err});
        }
        return res.status(200).json({
            success:true,
            delivery
        });
    });
});



//Update delivery details

router.put('/update/:id', (req,res)=>{

    deliverys.findByIdAndUpdate(
        req.params.id, {
            $set: req.body
        },
        (err,_deliverys) => {
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


//Delete delivery in the list

router.delete('/delete/:id', (req,res)=>{

    deliverys.findByIdAndRemove(req.params.id).exec((err, deleteddelivery)=>{
        if (err) {
            return res.status(400).json({
                message: "Delete Unsuccessful.",
                err
            });
        }
        return res.status(200).json({
            message: "Delete Successful.",
            deleteddelivery
        });
    });
});




module.exports = router;