const express = require('express');
const router = express.Router();

const {
    deleteTask,
    updateTask,
    getTask,
    getTask,
    createTask
}

    = require('../controllers/taskController');
const ValidateToken = require('../middlewares/validateTokenHandler');

router.use(ValidateToken);

router.route('/').get(getTask).post(createTask)

router.route('/:id').get(getTask).put(updateTask).delete(deleteTask)




module.exports = router;