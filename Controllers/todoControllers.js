import todoModel from "../Models/todoModel.js";

export const createTodo = async (req, res) => {
  try {
    const todo = await todoModel.create(req.body);
    res.json(todo);
  } catch (error) {
    console.log(error);
  }
};

export const getAllTodos = async (req, res) => {
  try {
    const todos = await todoModel.find();
    res.json(todos);
  } catch (error) {
    console.log(error);
  }
};
