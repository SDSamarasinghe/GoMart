const express = require('express');
const shipping = require('../models/shipping');



const router = express.Router();




//Save shipping details

router.post('/post/save',(req,res)=>{

    let newshipping = new shipping(req.body);
    

    newshipping.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"shipping details Save Successfully"
        });
    });
});
//Get shipping details

router.get('/getall',(req,res)=>{

    shipping.find().exec((err, shippings)=> {
        if(err) {
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success: true,
            existingorders: shippings
        });
    });
});



//Update shipping details

router.put('/update/:id', (req,res)=>{

    shippings.findByIdAndUpdate(
        req.params.id, {
            $set: req.body
        },
        (err,_shippings) => {
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

    shippings.findByIdAndRemove(req.params.id).exec((err, deletedorder)=>{
        if (err) {
            return res.status(400).json({
                message: "Delete Unsuccessful.",
                err
            });
        }
        return res.status(200).json({
            message: "Delete Successful.",
            deletedshipping
        });
    });
});




module.exports = router;