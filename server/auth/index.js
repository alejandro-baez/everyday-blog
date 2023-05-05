const router = require("express").Router();
// const { Author } = require("../db");
const {Author} = require("../db");

module.exports = router;

router.post("/login", async (req, res, next) => {
  try {
    res.send({ token: await Author.authenticate(req.body) });
  } catch (err) {
    next(err);
  }
});

router.post("/signup", async (req,res,next) =>{
    try{
        const user = await Author.create(req.body)
        res.send({token: await user.generateToken()})

    }catch(err){
        if(err.name == "SequelizeUniqueConstraintError"){
            res.status(401).send("User already exists")
        }else{
            next(err)
        }

    }
})

router.get("/me", async (req,res,next)=>{
    try{
        res.send(await Author.findByToken(req.header.authorization))
    }catch(err){
        next(err)
    }
})