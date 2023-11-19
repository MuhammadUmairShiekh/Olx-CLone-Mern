const express = require("express");
const router = express.Router();
const Ads = require("../models/Ads")



router.get('/', async (req, res) => {
    try {
        const ads = await Ads.find({})

        res.send({
            message: 'data fetched successfully',
            data: ads
        })
    } catch (e) {
        res.send({
            message: e
        })
    }

})

router.get('/:id'), async (req, res) => {
    // console.log("req---->" , req.params._id)
    try {
        const ad = await Ads.findOne({ _id: req.params.id })

        res.send({
            message: 'data fetched successfully',
            data: ad
        })
    } catch (e) {
        res.send({
            message: e
        })
    }


}

router.post('/addData', async (req, res) => {
    try {
        const ad = new Ads(req.body);
        await ad.save()

        res.send({
            message: 'data added successfully'
        })
    } catch (e) {
        res.send({
            message: e
        })
    }
})
router.put('/updateData/:id', async (req, res) => {
    // console.log(req.body)


    try {
        const { _id } = req.body
        const data = await Ads.findoneAndUpdate({ _id }, req.body);
        res.send({
            message: 'data updated successfully',
            data
        })

    } catch (e) {
        res.send({
            message: e
        })
    }

})


router.delete('/deleteData/:id', async (req, res) => {
    try {
        const ad = await Ads.deleteOne({ _id: req.params.id })
        res.send({
            message: 'data Delete successfully',
            data: ad
        })
    } catch (e) {
        res.send({
            message: e
        })
    }
})

module.exports = router