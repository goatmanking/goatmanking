blog_button = document.getElementById("blog");
about_button = document.getElementById("about");
game_button = document.getElementById("minigame");

let deniedAudio = new Audio("./assets/wrong.mp3");
let acceptedAudio = new Audio("./assets/accepted.mp3")
const date = new Date()

blog_button.addEventListener("click", () => {
	deniedAudio.play();
});

about_button.addEventListener("click", () => {
	deniedAudio.play();
});

game_button.addEventListener("click", () => {
	acceptedAudio.play().then(setTimeout(() => {

		window.location = "https://github.com/goatmanking/pingponggame"
	},  800))
});
