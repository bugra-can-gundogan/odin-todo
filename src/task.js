const exports = require("webpack");

class Task {
    constructor(description, dueDate, priority) {
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.completed = false;
    }

    markAsCompleted() {
        this.completed = true;
    }

    displayTask() {
        console.log(`Description: ${this.description}, Due Date: ${this.dueDate}, Priority: ${this.priority}, Completed: ${this.completed}`);
    }
}

export default Task;