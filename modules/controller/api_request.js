const { body } = require('express-validator');

const registrationRules = () => [
  body('username').trim().notEmpty().isAlphanumeric().withMessage('username must be alphanumeric.'),
  body('name').optional({ nullable: true }).isLength({ min: 1 }).withMessage('name can be optional or at least 1 character'),
  body('profilePicture').optional({ nullable: true }).isURL().withMessage('profilePicture can be optional or in URL format'),
  body('password').trim().notEmpty().withMessage('password cannot be empty.'),
];

module.exports = {
  registrationRules,
};
