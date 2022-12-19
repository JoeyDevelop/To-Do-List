function CreateTaskObject(title, description, dueDate, priority) {
    return {
        title,
        description,
        dueDate,
        priority,
        taskNum: 0,
    }
}

function CreateProjectObject(title) {
    return {
        title,
    }
}

export { CreateTaskObject, CreateProjectObject }