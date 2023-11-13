import Task from './task';
import Project from './project';


// Creating tasks
const task1 = new Task("Finish coding assignment", "2023-11-30", "High");
const task2 = new Task("Go to the gym", null, "Medium");

// Creating a project
const myProject = new Project("My To-Do List");

// Adding tasks to the project
myProject.addTask(task1);
myProject.addTask(task2);

// Displaying tasks in the project
myProject.displayTasks();

// Marking a task as completed
task1.markAsCompleted();

// Displaying tasks again to see the updated status
myProject.displayTasks();