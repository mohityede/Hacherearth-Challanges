let input = document.getElementById("task-inp");
let addBtn = document.getElementById("add-btn");
let ul = document.getElementById("task-list")

let taskArr = [];

addBtn.addEventListener('click', () => {
    console.log("btn-clicked", input.value);
    let task = input.value;
    // taskArr.append(task);
    taskArr.push(task);
    mapTasks();
    input.value = "";
})

function mapTasks() {
    ul.innerHTML = null;
    taskArr.forEach((curr, i) => {
        let liTag = getLiTag(curr, i);
        ul.appendChild(liTag);
    })
}

function getLiTag(curr, i) {
    let liTag = document.createElement("li")
    let btn = document.createElement("button");
    liTag.innerHTML = curr
    btn.innerHTML = "close";
    btn.value = i;
    btn.addEventListener('click', (e) => {
        console.log(e.srcElement);
        taskArr = taskArr.filter((t, i) => {
            console.log(e.srcElement.value);
            e.srcElement.value == i;
        })
    })
    liTag.appendChild(btn)
    return liTag;
    // mapTasks();
}


