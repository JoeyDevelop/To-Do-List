function CreateTaskObject(title, description, dueDate, priority) {
    return {
        title,
        description,
        dueDate,
        priority,
        taskNum: 0,
    }
}

export { CreateTaskObject }