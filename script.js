const socket = io("wss://live-text.herokuapp.com/", {
    transports: ["websocket", "polling", "flashsocket"],
});

const usernameInput = document.querySelector("input");
const textBox = document.querySelector("textarea");
const writingUser = document.querySelector("span");

textBox.addEventListener("keyup", (e) => {
    if (usernameInput.value != "") {
        socket.emit("new:text", { name: usernameInput.value, text: textBox.value });
    } else {
        setTimeout(() => {
            textBox.value = textBox.value = "";
        }, 1);
    }
});

socket.on("new:text", (data) => {
    textBox.value = data.text;
    console.log(data.name + " is writing");
});
