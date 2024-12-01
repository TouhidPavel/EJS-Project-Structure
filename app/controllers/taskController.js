export const createTask = async (req, res) => {
    res.status(201).json({ message: 'Task Created Successfully' })
}

export const readTask = async (req, res) => {
    res.status(200).json({ message: 'Task Retrieved Successfully' })
}

export const updateTask = async (req, res) => {
    res.status(200).json({ message: 'Task Updated Successfully' })
}

export const deleteTask = async (req, res) => {
    res.status(200).json({ message: 'Task Deleted Successfully' })
}