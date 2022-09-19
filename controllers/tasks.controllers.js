const { Result } = require('express-validator');
const { Task } = require('../models/task.model');
const { User } = require('../models/user.model');

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.findAll({
      attributes: [
        'id',
        'title',
        'limitDate',
        'startDate',
        'finishDate',
        'status',
      ],
      include: { model: User, attributes: ['name', 'email', 'password'] },
    });

    res.status(200).json({
      status: 'Success',
      data: {
        tasks,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

const getTaskByStatus = async (req, res) => {
  try {
    const { status } = req.params;
    const statusValue = ['active', 'completed', 'late', 'cancelled'];

    const validationStatus = statusValue.includes(status);

    if (!validationStatus) {
      return res.status(404).json({
        message: `Tasks does not exist with given status: ${status}`,
      });
    }

    const tasks = await Task.findAll({ where: { status } });

    res.status(200).json({
      status: 'success',
      data: {
        tasks,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

const createTask = async (req, res) => {
  try {
    const { title, userId, startDate, limitDate } = req.body;

    const task = await Task.create({ title, userId, startDate, limitDate });

    res.status(201).json({
      status: 'success',
      data: {
        task,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { finishDate } = req.body;

    const task = await Task.findOne({
      where: { id, status: 'active' },
    });

    if (!task) {
      return res.status(404).json({
        status: 'error',
        message:
          'Task has not active status or it does not exist. It can not be updated',
      });
    }

    const taskLimitDay = task.limitDate.getDate();
    const taskFinishDate = finishDate.substr(8, 2);
    const comparingDays = taskLimitDay - taskFinishDate;

    if (comparingDays >= 0) {
      await task.update({ finishDate, status: 'completed' });
    } else {
      await task.update({ finishDate, status: 'late' });
    }

    res.status(200).json({
      data: {
        task,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;

    const task = await Task.findOne({ where: { id } });

    if (!task) {
      return res.statuns().json({
        message: 'Task not foun with given Id. Try another one',
      });
    }

    await task.update({ status: 'cancelled' });

    res.status(201).json({
      message: 'Task has been updated succesfully',
      data: {
        task,
      },
    });
  } catch (error) {}
};

module.exports = {
  getAllTasks,
  getTaskByStatus,
  createTask,
  updateTask,
  deleteTask,
};
