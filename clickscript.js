let links = document.getElementsByTagName("a");
let clickSoundEffect = new Audio("./assets/click.wav");

for (i = 0; i < links.length; i++) {
	links[i].addEventListener("click", (e) => {
		clickSoundEffect.play();
	});
}
