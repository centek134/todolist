"use strict";
const title = document.getElementById("inpt_title");
const description = document.getElementById("description");
const addButton = document.getElementById("add-button");
const tasksSection = document.getElementById("tasks");
const tasks = [];
const getInputValues = () => {
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
    divEl.appendChild(createButton(tasks[tasks.length - 1].id, divEl));
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
const createButton = (id, child) => {
    const buttonElement = document.createElement("button");
    buttonElement.innerHTML = "Complete";
    buttonElement.classList.add("task_card_button");
    buttonElement.addEventListener("click", () => {
        tasks.splice(tasks.findIndex(element => element.id === id, 1));
        tasksSection.removeChild(child);
    });
    return buttonElement;
};
addButton.addEventListener("click", getInputValues);
