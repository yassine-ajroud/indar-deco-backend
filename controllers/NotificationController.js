const Notification = require("../models/Notification");

const createNotification =async (req,res)=>{
    const newNotification = new Notification(req.body);
    try {
      const savedNotification = await newNotification.save();
      res.status(201).json(savedNotification);
    } catch (err) {
      res.status(500).json(err);
    }
  }
   
 const getNotificationById =async (req,res)=>{
    var id =req.params.id
    try {
         await Notification.findById(id).then(async notif=>{
          if(notif){
            res.status(200).json(notif);
          }else{
            res.status(404).json({msg:'Notification not found'});
          }
        })
      } catch (err) {
        res.status(500).json(err);
      }
  }


const getNotificationByUserId = async (req, res) => {  
      const { id } = req.params;
  
    Notification.find({ userId: id })
      .then((notif) => {
        res.json(notif);
      })
      .catch((error) => {
        res.status(500).json({ message: 'Erreur lors de la récupération des notif', error });
      });
  };
  const updateNotification =async (req,res)=>{
    var id = req.body.id
    var seen = req.body.seen

    try {
      const updatedNotif = await Notification.findByIdAndUpdate(
        id,
        {
            seen: seen,
        },
        { new: true }
      );
      res.status(200).json(updatedNotif);
    } catch (err) {
      res.status(500).json(err);
    }
 
  }


  const deleteNotification =async (req,res)=>{
    var id  = req.params.id;
  
    try {
      const notifications = await Notification.findByIdAndDelete(id);
      if (!notifications) {
        return res.status(404).json({ message: 'notifications not found' });
      }else{
                res.status(200).json({ message: 'notifications deleted successfully',notifications });

      }
    } catch (error) {
      res.status(500).json({ message: 'Error occurred while deleting notifications' });
    }
  }

module.exports = {
    createNotification,
    getNotificationById,
    getNotificationByUserId,
    updateNotification,
    deleteNotification
}