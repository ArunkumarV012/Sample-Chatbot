let chatbotMsgList = ["Hi", "Hey", "Good Morning", "Good Evening", "How can I help you?", "Thank You"];

let chatContainerElement = document.getElementById("chatContainer");
let userInputElement = document.getElementById("userInput");

function sendButton() {

    let userInputValue = userInputElement.value;

    let msgContainerElement = document.createElement("div");
    msgContainerElement.classList.add("msg-to-chatbot-container");
    chatContainerElement.appendChild(msgContainerElement);

    let msgElement = document.createElement("span");
    msgElement.textContent = userInputValue;
    msgElement.classList.add("msg-to-chatbot", "m-2");
    msgContainerElement.appendChild(msgElement);

    userInputElement.value = "";
    getReplyMsgFromChatbot();

}




function getReplyMsgFromChatbot() {

    let chatbotListLenghth = chatbotMsgList.length;
    let chatbotMsg = chatbotMsgList[Math.ceil(Math.random() * chatbotListLenghth - 1)];

    let msgContainerElement = document.createElement("div");
    msgContainerElement.classList.add("msg-from-chatbot-container");
    chatContainerElement.appendChild(msgContainerElement);

    let msgElement = document.createElement("span");
    msgElement.textContent = chatbotMsg;
    msgElement.classList.add("msg-from-chatbot", "m-2");
    msgContainerElement.appendChild(msgElement);

}