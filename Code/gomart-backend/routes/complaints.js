const express = require('express');
const complaints = require('../models/complaints'); 
const router = express.Router();

// const upload = require('../middleware/upload')

//Create complaint
router.post('/complaints/save', (req,res)=>{
    let newcomplaints = new complaints(req.body);

    newcomplaints.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"complaint Added Successfully"
        });
    });
});

//Get complaints details

router.get('/complaints',(req,res)=>{

    complaints.find().exec((err, complaints)=> {
        if(err) {
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success: true,
            existingcomplaints: complaints
        });
    }) ;
});


//Get a Specific complaints

router.get('/complaints/:id', (req,res) => {

    let complaintsformsId = req.params.id;

    complaints.findById(complaintsformsId,(err,complaints) =>{
        if(err){
            return res.status(400).json({success:false, err});
        }
        return res.status(200).json({
            success:true,
            complaints
        });
    });
});


//Update complaints details

router.patch('/complaints/update/:id', (req,res)=>{

    complaints.findByIdAndUpdate(
        req.params.id, {
            $set: req.body
        },
        (err, complaints) => {
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


//Delete complaints in the list

router.delete('/complaints/delete/:id', (req,res)=>{

    complaints.findByIdAndRemove(req.params.id).exec((err, deletedcomplaints)=>{
        if (err) {
            return res.status(400).json({
                message: "Delete Unsuccessful.",
                err
            });
        }
        return res.status(200).json({
            message: "Delete Successful.",
            deletedcomplaints
        });
    });
});


module.exports = router;