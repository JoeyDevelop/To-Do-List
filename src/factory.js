function CreateTaskObject(title, description, dueDate, priority) {
    return {
        title,
        description,
        dueDate,
        priority,
        dailyAppended: false,
        weeklyAppended: false,
    }
}

export { CreateTaskObject }