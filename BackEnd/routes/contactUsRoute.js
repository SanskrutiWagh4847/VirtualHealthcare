const { getAllQuries, createQuery, deleteQuery } = require("../controllers/contactUsController");
const express = require('express');
const router = express.Router()


// express router method to create route for getting all users
router.route('/')
.get(getAllQuries)
.post(createQuery)

router.route('/:id')
.delete(deleteQuery)


module.exports = router;