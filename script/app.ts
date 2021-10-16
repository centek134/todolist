const title = document.getElementById("inpt_title")! as HTMLInputElement;
const description = document.getElementById("description")! as HTMLTextAreaElement;
const addButton = document.getElementById("add-button")! as HTMLButtonElement;
const tasksSection = document.getElementById("tasks")! as HTMLElement;
const tasks: {title: string, description: string, id:number}[] = [];


const getInputValues = () => {
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
        const divEl =  document.createElement("div") as HTMLDivElement;
        divEl.classList.add("task_card");
        divEl.appendChild(createHeaderNode(tasks[tasks.length-1].title));
        divEl.appendChild(createDescriptionNode(tasks[tasks.length-1].description));
        divEl.appendChild(createButton(tasks[tasks.length-1].id,divEl));
        tasksSection.appendChild(divEl);
};
const createHeaderNode = (text:string) => {
    const hElement = document.createElement("h2") as HTMLHeadingElement;
    hElement.innerHTML = text;
    return hElement;
};
const createDescriptionNode = (text:string) => {
    const pElement = document.createElement("p") as HTMLParagraphElement;
    pElement.innerHTML = text;
    return pElement;
};
const createButton = (id:number,child: HTMLDivElement) => {
    const buttonElement = document.createElement("button") as HTMLButtonElement;
    buttonElement.innerHTML = "Complete";
    buttonElement.classList.add("task_card_button");
    buttonElement.addEventListener("click", () => {
            tasks.splice(tasks.findIndex(element => element.id === id ,1));
            tasksSection.removeChild(child)
    });
    return buttonElement;
};



addButton.addEventListener("click", getInputValues);

