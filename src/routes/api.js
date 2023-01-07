const express = require("express");
const profile=require("../controllers/profile");
const AuthVerify=require("../middleware/AuthVerify");
const ToDoList = require("../controllers/toDoList");

const router = express.Router();

router.post("/CreateProfile",profile.CreateProfile);
router.post("/UserLogIn",profile.UserLogIn);


router.get("/SelectProfile",AuthVerify,profile.SelectProfile);
router.post("/UpdateProfile",AuthVerify,profile.UpdateProfile);

router.post("/CreateToDo",AuthVerify,ToDoList.CreateToDo);
router.get("/SelectToDo",AuthVerify,ToDoList.SelectToDo);
router.post("/UpdateToDo",AuthVerify,ToDoList.UpdateToDo);
router.post("/UpdateStatusToDo",AuthVerify,ToDoList.UpdateStatusToDo);
router.post("/RemoveToDo",AuthVerify,ToDoList.RemoveToDo);
router.post("/SelectToDoByStatus",AuthVerify,ToDoList.SelectToDoByStatus);
router.post("/SelectToDoByDate",AuthVerify,ToDoList.SelectToDoByDate);

module.exports=router;