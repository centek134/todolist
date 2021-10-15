"use strict";
const title = document.getElementById("inpt_title");
const description = document.getElementById("description");
const addButton = document.getElementById("add-button");
const tasksSection = document.getElementById("tasks");
const tasks = [];
const getInputValues = () => {
    console.log(title.value);
    pushTask(title.value, description.value);
};
const pushTask = (title, desc) => {
    tasks.push({ title: title,
        description: desc,
        id: Date.now() });
    renderTask();
};
const renderTask = () => {
    const divEl = document.createElement("div");
    divEl.classList.add("task_card");
    divEl.appendChild(createHeaderNode(tasks[tasks.length - 1].title));
    divEl.appendChild(createDescriptionNode(tasks[tasks.length - 1].description));
    tasksSection.appendChild(divEl);
};
const createHeaderNode = (text) => {
    const hElement = document.createElement("h2");
    hElement.innerHTML = text;
    return hElement;
};
const createDescriptionNode = (text) => {
    const pElement = document.createElement("p");
    pElement.innerHTML = text;
    return pElement;
};
addButton.addEventListener("click", getInputValues);
