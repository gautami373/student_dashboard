const darkBtn = document.getElementById("dark-btn");

darkBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

const hour = new Date().getHours();

const welcomeMsg = document.getElementById("welcome-msg");

if(hour < 12){
    welcomeMsg.innerText = "Good Morning champ ☀️";
}
else if(hour < 18){
    welcomeMsg.innerText = "Good Afternoon champ🌤️";
}
else{
    welcomeMsg.innerText = "Good Evening champ🌙";
}