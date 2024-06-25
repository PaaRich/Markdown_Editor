const ItemModel = require("../models/markdownModel");
const asyncErrorHandler = require("../Utils/asyncErrorHandler");
const ErrorObj = require("../Utils/ErrorObj");

const getAllItems = asyncErrorHandler(async (req, res, next) => {
  const response = await ItemModel.find();
  res.status(200).json({
    count: response.length,
    status: "success",
    response,
  });
});

const getItem = asyncErrorHandler(async (req, res, next) => {
  const { id } = req.params;
  const response = await ItemModel.findById(id);
  if (!response) {
    const error = new ErrorObj(`This ${id} not found`, 404);
    next(error);
  }
  res.status(200).json({
    status: "success",
    response,
  });
});

const postItem = asyncErrorHandler(async (req, res) => {
  const data = req.body;
  await ItemModel.create(data);
  res.status(200).json({
    status: "success",
  });
});

const updateItem = asyncErrorHandler(async (req, res, next) => {
  const { id } = req.params;
  const response = await ItemModel.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!response) {
    const error = new ErrorObj(`This ${id} not found`, 404);
    next(error);
  }

  res.status(200).json({
    status: "success",
  });
});

const deleteItem = asyncErrorHandler(async (req, res, next) => {
  const { id } = req.params;
  const response = await ItemModel.findOneAndDelete({ name: id });
  if (!response) {
    const error = new ErrorObj(`This ${id} not found`, 404);
    next(error);
  }
  res.status(200).json({
    status: "success",
  });
});

module.exports = { getAllItems, getItem, postItem, updateItem, deleteItem };
