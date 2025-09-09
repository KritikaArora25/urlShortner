import express from "express";

const router = express.Router();

router.get("/",(req, res) =>{
    res.send("<h1>Hey there!</h1>");
});
router.get("/login",(req, res) =>{
    res.send("<h1>Login</h1>");
});

export default router;