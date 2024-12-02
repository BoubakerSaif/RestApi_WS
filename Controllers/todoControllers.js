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

export const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await todoModel.findByIdAndDelete(id);
    res.json(todo);
  } catch (error) {
    console.log(error);
  }
};

export const updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await todoModel.findByIdAndUpdate(id, req.body);
    res.json(todo);
  } catch (error) {
    console.log(error);
  }
};
