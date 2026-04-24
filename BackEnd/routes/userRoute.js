const { getUser, getUserbyId, createAllUser, updateUser, deleteUser,login, uploadPic} = require("../controllers/userController");
const express = require('express');
const router = express.Router()


// express router method to create route for getting all user
router.route('/')
.get(getUser)
.post(createAllUser)

router.route('/login')
.post(login)

router.route('/:id')
.get(getUserbyId)
.patch(updateUser)

router.route('/:id')
.delete(deleteUser)

// router.route('/upload/:id')
// .patch(uploadPic)

router.route('/photo/:id')
.put(uploadPic)



module.exports = router;