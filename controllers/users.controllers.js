const { User } = require('../models/user.model');

const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll({
      where: { status: 'active' },
    });

    res.status(200).json({
      status: 'success',
      data: {
        users,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const newUser = await User.create({ name, email, password });

    // 201 -> User created
    res.status(201).json({
      status: 'success',
      data: { newUser },
    });
  } catch (error) {
    console.log(error);
  }
};

const updateUSer = async (req, res) => {
  try {
    const { id } = req.params;
  } catch (error) {
    console.log(error);
  }
};

const deleteUSer = async (req, res) => {};

module.exports = { createUser, getAllUsers, updateUSer, deleteUSer };
