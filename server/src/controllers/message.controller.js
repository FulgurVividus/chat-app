import User from "../models/user.model.js";
import Message from "../models/message.model.js";
import cloudinary from "../lib/cloudinary.js";

//# GET USERS FOR SIDEBAR
export const getUsersForSidebar = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;
    const filteredUsers = await User.find({
      _id: { $ne: loggedInUserId },
    }).select("-password");

    res.status(200).json(filteredUsers);
  } catch (error) {
    console.log("Error in getUsersForSidebar controller", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

//# TO GET MESSAGES OF TWO USERS (ME AND SOMEONE SELECTED FROM SIDEBAR)
export const getMessages = async (req, res) => {
  try {
    const { id: receiverId } = req.params;
    const myId = req.user._id;

    const messages = await Message.find({
      $or: [
        { senderId: myId, receiverId: receiverId },
        { senderId: receiverId, receiverId: myId },
      ],
    });

    res.status(200).json(messages);
  } catch (error) {
    console.log("Error in getMessages controller", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

//# SEND MESSAGE
export const sendMessage = async (req, res) => {
  try {
    const { text, image } = req.body;
    const { id: receiverId } = req.params;
    const myId = req.user._id;
    let imageUrl;

    if (image) {
      const uploadResponse = await cloudinary.uploader.upload(image);
      imageUrl = uploadResponse.secure_url;
    }

    const newMessage = new Message({
      senderId: myId,
      receiverId: receiverId,
      text: text,
      image: imageUrl,
    });

    await newMessage.save();

    // TODO: realtime functionality => socket.io

    res.status(201).json(newMessage);
  } catch (error) {
    console.log("Error in sendMessage controller", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};
