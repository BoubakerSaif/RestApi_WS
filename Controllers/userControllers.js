import userModel from "../Models/userModel.js";

export const createUser = async (req, res) => {
  try {
    const user = await userModel.create(req.body);
    res.json(user);
  } catch (error) {
    console.log(error);
  }
};

export const getAllUser = async (req, res) => {
  try {
    const users = await userModel.find();
    res.json(users);
  } catch (error) {
    console.log(error);
  }
};
