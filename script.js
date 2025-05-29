document.addEventListener("DOMContentLoaded", function () {
    const input = document.getElementById("todo-input");
    const submitBtn = document.getElementById("submit");
    const taskList = document.getElementById("taskList");

    submitBtn.addEventListener("click", function () {
        const taskText = input.value.trim();
        if (taskText === "") {
            alert("Please enter a task!");
            return;
        }

        const li = document.createElement("li");
        li.innerHTML = `
            <span class="task-text">${taskText}</span>
            <button class="edit-btn"><i class="fas fa-edit"></i></button>
            <button class="check-btn"><i class="fas fa-check"></i></button>
            <button class="delete-btn"><i class="fas fa-trash"></i></button>
        `;

        taskList.appendChild(li);
        input.value = "";

        li.querySelector(".check-btn").addEventListener("click", function () {
            li.classList.toggle("completed");
        });

        li.querySelector(".edit-btn").addEventListener("click", function () {
            const taskSpan = li.querySelector(".task-text");
            const newText = prompt("Edit your task:", taskSpan.textContent);
            if (newText !== null && newText.trim() !== "") {
                taskSpan.textContent = newText.trim();
            }
        });

        li.querySelector(".delete-btn").addEventListener("click", function () {
            li.remove();
        });
    });
});