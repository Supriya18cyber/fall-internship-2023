document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTaskButton");
    const taskList = document.getElementById("taskList");

    addTaskButton.addEventListener("click", function () {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            const listItem = document.createElement("li");
            listItem.innerHTML = `
                <span>${taskText}</span>
                <button class="update">Update</button>
                <button class="delete">Delete</button>
            `;
            taskList.appendChild(listItem);

            taskInput.value = "";

            // Add event listeners for update and delete buttons
            const updateButton = listItem.querySelector(".update");
            const deleteButton = listItem.querySelector(".delete");

            updateButton.addEventListener("click", function () {
                const newText = prompt("Update task:", taskText);
                if (newText !== null) {
                    listItem.querySelector("span").textContent = newText;
                }
            });

            deleteButton.addEventListener("click", function () {
                taskList.removeChild(listItem);
            });
        }
    });
});
