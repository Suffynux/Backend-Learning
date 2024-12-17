// importing File struture module
const fs = require("fs");
const { json } = require("stream/consumers");
const filePath = "./Tasks.json";

// Reading the file and converting the data into json
const loadTask = () => {
  try {
    const dataBuffer = fs.readFileSync(filePath);
    const dataJson = dataBuffer.toString();
    return JSON.parse(dataJson);
  } catch (error) {
    return [];
  }
};

// saving the tasks and writing it in the file
const saveTask = (tasks) => {
  const dataJson = JSON.stringify(tasks);
  fs.writeFileSync(filePath, dataJson);
};

// Add tasks Function
const addTask = (task) => {
  const tasks = loadTask();
  tasks.push({ task });
  saveTask(tasks);
  console.log("tasks added");
};

// Listing the task
const listTasks = () => {
  tasks = loadTask();
  tasks.forEach((task, index) => {
    console.log(`Task No: ${index + 1} - ${task.task}`);
  });
};

const removeTask = (argument) => {
  const tasks = loadTask();
  const index = parseInt(argument) - 1;

  if ((index) => 0) {
    tasks.splice(index, 1);
    saveTask(tasks);
    console.log("tasks removed");
  } else {
    console.log("Invalid index");
  }
};
// Taking the command from the user using process that is a operating system or node method to get command line arguements using command prompt
const command = process.argv[2];
const argument = process.argv[3];

// Command for user Atteraction to the application
if (command === "add") {
  addTask(argument);
} else if (command === "list") {
  listTasks();
} else if (command === "remove") {
  removeTask(parseInt(argument));
} else {
  console.log("Command not found");
}
