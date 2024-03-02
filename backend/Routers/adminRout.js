const AdminController = require('../controlers/admindacontrole')

const express = require('express')

const router = express.Router()

router.post('/admin/register',AdminController.RegisterAdmin)
//get
router.get('/admin/register/get',AdminController.getAllusers)
router.post('/admin/Login',AdminController.loginAdmin)

module.exports = router  