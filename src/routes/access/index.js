import express from "express";
import * as AccessController from "../../controllers/access.controller.js";

const router = express.Router();

// Sign Up
router.post('/shop/signup', AccessController.signUp);

export default router;