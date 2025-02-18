const express = require('express')
const router = express.Router()

const NotificationController = require ('../controllers/NotificationController')
const  authenticate = require('../middleware/authenticate')

router.post('/notifications/create',authenticate, NotificationController.createNotification)
router.get('/notifications/get/:id',authenticate,NotificationController.getNotificationById) 
router.get('/notifications/get/user/:id',authenticate,NotificationController.getNotificationByUserId) 
router.put('/notifications/update',authenticate,NotificationController.updateNotification) 
router.delete('/notifications/delete/:id',authenticate,NotificationController.deleteNotification) 

module.exports=router