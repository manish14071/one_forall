import express from "express";
import {
  createUser,
  deleteUser,
  getAllUser,
  getUserById,
  updateUser,
  userLogin,
} from "../controller/userController.js";
const router = express.Router();

router.post("/createUser", createUser);
router.get("/getAllUsers", getAllUser);
router.get("/getUserById/:id", getUserById);
router.put("/updateUser/:id", updateUser);
router.delete("/deleteUser/:id", deleteUser);
router.post("/loginUser", userLogin);

export default router;
