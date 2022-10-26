import "../styles/chatlist/header.css";
import "../styles/chatlist/chats.css";
import "../styles/chatlist/create-chat.css";
import "../styles/main.css";

const chat = document.querySelector(".chat");
chat.addEventListener('click', goToChatPage.bind(this))

function goToChatPage() {
  window.location.href = './chatpage.html';
}