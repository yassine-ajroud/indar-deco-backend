const mongoose = require("mongoose");

const NotificationSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    senderId: {
      type: String,
      required: true,
    },
    seen: {
      type: Boolean,
      required: true,
      default: false,
    },
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Notification", NotificationSchema);
