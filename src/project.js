class Project{
    constructor(name) {
        this.name = name;
        this.tasks = [];
    }

    addTask(task) {
        this.tasks.push(task);
    }

    displayTasks() {
        this.tasks.forEach(task => {
            task.displayTask();
        });
    }
}


export default Project;