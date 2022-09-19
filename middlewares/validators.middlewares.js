const { body, validationResult } = require('express-validator');

const checkValidations = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const errorMessages = errors.array().map((err) => {
      return err.msg;
    });

    const message = errorMessages.join('. ');

    return res.status(400).json({
      status: 'error',
      message,
    });
  }

  next();
};

const createUserValidators = [
  body('name')
    .isString()
    .withMessage('Name must be a string value')
    .notEmpty()
    .withMessage('Name can not be an empty value')
    .isLength({ min: 3 })
    .withMessage('Name must have at least 3 characters'),
  body('email')
    .isEmail()
    .withMessage('Email must be a email value (@ & .com)')
    .notEmpty()
    .withMessage('Email can not be an empty value'),
  body('password')
    .isString()
    .withMessage('Password must be a string value')
    .notEmpty()
    .withMessage('Password can not be an empty value')
    .isLength({ min: 8 })
    .withMessage('Password must have at least 8 characters'),
  checkValidations,
];

module.exports = { createUserValidators };
