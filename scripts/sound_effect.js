blog_button = document.getElementById("blog");
about_button = document.getElementById("about");
game_button = document.getElementById("minigame");

let deniedAudio = new Audio("../assets/wrong.mp3");

blog_button.addEventListener("click", () => {
	deniedAudio.play();
});

about_button.addEventListener("click", () => {
	deniedAudio.play();
});

game_button.addEventListener("click", () => {
	deniedAudio.play();
});
