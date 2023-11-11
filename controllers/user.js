const User = require("../models/user");
const { use } = require("../routes/admin");


exports.getUser = async (req,res,next)=>{
    const userId = req.params.userId
    try{
        const user = await User.findByPk(userId);
        res.status(200).json(user);
    }catch(err){
        console.log(err)
    }
}


exports.postAddUser = async (req, res, next) => {
  const name = req.body.name;
  const email = req.body.email;
  const phone = req.body.phone;
  const time = req.body.time;
  const date = req.body.date;
  const editMode = req.body.editMode;
  if (!editMode) {
    try {
      if (!req.body.phone) {
        throw new Error("Mandate phone");
      }
      const data = await User.create({
        name: name,
        email: email,
        phone: phone,
        time: time,
        date: date,
      });
      res.status(201).json({ newUserDetails: data });
    } catch (err) {
      console.log("Something Wrong Went");
      res.status(500).json({ error: err });
    }
  }
};

exports.getAllUsers = async (req, res, next) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (err) {
    console.log(err);
  }
};

exports.deleteUser = async (req, res, next) => {
  const userId = req.params.userId;
  try {
    // const user = await User.findByPk(userId);
    // await user.destroy();

    const user = await User.destroy({where:{id:userId}})
    res.json({ "Deleted User": user });
  } catch (err) {
    console.log(err);
  }
};

exports.postEditUser = async (req, res, next) => {
  const userId = req.params.userId;
  const name = req.body.name;
  const email = req.body.email;
  const phone = req.body.phone;
  const time = req.body.time;
  const date = req.body.date;
  const editMode = req.body.editMode;
  if (editMode) {
    try {
      const user =await User.findByPk(userId);
      user.name = name;
      user.email = email;
      user.phone = phone;
      user.time = time;
      user.date = date;
      await user.save();

      res.status(201)
        .json({ success: "User Details Updated", newUserDetails: user });
    } catch (err) {
      console.log(err);
    }
  }
};
