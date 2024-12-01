import express from "express"
const router = express.Router()
import * as taskController from "../app/controllers/taskController.js"

router.post("/create", taskController.createTask)
router.get("/read", taskController.readTask)
router.put("/update", taskController.updateTask)
router.delete("/delete", taskController.deleteTask)

export default router