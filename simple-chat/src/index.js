import "./index.css";

const form = document.querySelector("form");
const input = document.querySelector(".form-input");
const chat = document.querySelector(".chat");

form.addEventListener("submit", handleSubmit.bind(this));
document.addEventListener("DOMContentLoaded", getMessagesFromLocalStorage.bind(this))

function getMessagesFromLocalStorage () {
    let messages = localStorage.getItem("messages") || "[]";
    messages = JSON.parse(messages);
    for (const message of messages) {
        createMessage(message);
    }
}

function saveMessageToLocalStorage (message) {
    let messages = localStorage.getItem("messages") || "[]";
    messages = JSON.parse(messages);
    messages.push(message);
    localStorage.setItem("messages", JSON.stringify(messages));
}

function createMessage(message) {
    const messageBlock = document.createElement("div")
    messageBlock.className = "message right";
    const text = document.createElement("span");
    text.className = "message-text";
    text.innerText = message.text;
    const time = document.createElement("span");
    time.className = "message-time";
    time.innerText = message.time;
    const status = document.createElement("div");
    status.className = "message-status";
    status.innerHTML = '<span class="material-icons">done_all</span>';
    const info = document.createElement("div");
    info.className = "message-info";
    info.append(...[time, status]);
    messageBlock.append(...[text, info]);
    chat.prepend(messageBlock);
}

function handleSubmit (event) {
    event.preventDefault();
    const message = {
        "text": input.value,
        "time": `${new Date().toLocaleTimeString("ru", {hour: "2-digit", minute: "2-digit"})}`,
        "sender": "Andrey"
    };
    if (message.text == "") {
        return
    }
    createMessage(message);
    saveMessageToLocalStorage(message);
    input.value = "";
}

function handleKeyPress (event) {
    if (event.keyCode === 13) {
        form.dispatchEvent(new Event("submit"));
    }
}
