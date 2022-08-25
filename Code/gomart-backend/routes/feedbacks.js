const express = require('express');
const feedbacks = require('../models/feedbacks'); 
const router = express.Router();

// const upload = require('../middleware/upload')

//Create feedback
router.post('/feedbacks/save', (req,res)=>{
    let newfeedbacks = new feedbacks(req.body);

    newfeedbacks.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"feedback Added Successfully"
        });
    });
});

//Get feedback details

router.get('/feedbacks',(req,res)=>{

    feedbacks.find().exec((err, feedbacks)=> {
        if(err) {
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success: true,
            existingfeedbacks: feedbacks
        });
    });
});


//Get a Specific feedbackforms

router.get('/feedbacks/:id', (req,res) => {

    let feedbacksformsId = req.params.id;

    feedbacks.findById(feedbacksformsId,(err,feedbacks) =>{
        if(err){
            return res.status(400).json({success:false, err});
        }
        return res.status(200).json({
            success:true,
            feedbacks
        });
    });
});


//Update feedback details

router.patch('/feedbacks/update/:id', (req,res)=>{

    feedbacks.findByIdAndUpdate(
        req.params.id, {
            $set: req.body
        },
        (err, feedbacks) => {
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


//Delete feedbacks in the list

router.delete('/feedbacks/delete/:id', (req,res)=>{

    feedbacks.findByIdAndRemove(req.params.id).exec((err, deletedfeedbacks)=>{
        if (err) {
            return res.status(400).json({
                message: "Delete Unsuccessful.",
                err
            });
        }
        return res.status(200).json({
            message: "Delete Successful.",
            deletedfeedbacks
        });
    });
});


module.exports = router;