const title = document.getElementById("inpt_title")! as HTMLInputElement;
const description = document.getElementById("description")! as HTMLTextAreaElement;
const addButton = document.getElementById("add-button")! as HTMLButtonElement;
const tasksSection = document.getElementById("tasks")! as HTMLElement;
const tasks: {title: string, description: string, id:number}[] = [];


const getInputValues = () => {
    console.log(title.value);
    pushTask(title.value,description.value);
};

const pushTask = (title:string ,desc:string) => {
    tasks.push(
        {title: title,
        description: desc,
        id:Date.now()}
    );
    renderTask();
};

const renderTask = () => {
        const divEl =  document.createElement("div");
        divEl.classList.add("task_card");
        divEl.appendChild(createHeaderNode(tasks[tasks.length-1].title));
        divEl.appendChild(createDescriptionNode(tasks[tasks.length-1].description));
        tasksSection.appendChild(divEl);
};
const createHeaderNode = (text:string) => {
    const hElement = document.createElement("h2");
    hElement.innerHTML = text;
    return hElement;
};
const createDescriptionNode = (text:string) => {
    const pElement = document.createElement("p");
    pElement.innerHTML = text;
    return pElement;
};


addButton.addEventListener("click", getInputValues);

