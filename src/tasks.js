function createProject (title) {
  return {
    title
  }
};

function createTask (title, description, dueDate, priority) {
  return {
    title,
    description,
    dueDate,
    priority
  }
};

export { createProject, createTask }
