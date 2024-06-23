/* let links = document.getElementsByTagName("a");
let clickSoundEffect = document.getElementById("awaaz");

console.log(links);

for (i = 0; i < links.length; i++) {
	links[i].addEventListener("click", (e) => {
		let location = window.location;
		if (location.toString().includes("/pages")) {
			clickSoundEffect.play().then(() => {
				setInterval(() => {
					console.log();
				}, 500);
			});
			e.preventDefault();
		} else {
			clickSoundEffect.play();
		}
		window.location.toString().includes("/pages")
			? console.log("Yes")
			: console.log("No");
	});
} */

let clickSoundEffect = new Audio("./assets/clcik.wav");
let aboutNavButoon = document.getElementById("aboutID");
let blogNavButton = document.getElementById("yapID");
let chatNavButton = document.getElementById("chatID");
let interval = 350;

aboutNavButoon.addEventListener("click", (e) => {
	let location = window.location;
	if (location.href.toString().includes("/pages")) {
		clickSoundEffect.play().then(() => {
			setInterval(() => {
				location.href = "./index.html";
			}, interval);
		});
		e.preventDefault();
	} else {
		clickSoundEffect.play().then(() => {
			setInterval(() => {
				location.href = "./pages/index.html";
			}, interval);
		});
		e.preventDefault();
	}
});
blogNavButton.addEventListener("click", (e) => {
	if (location.href.toString().includes("/pages")) {
		clickSoundEffect.play().then(() => {
			setInterval(() => {
				location.href = "./blog.html";
			}, interval);
		});
		e.preventDefault();
	} else {
		clickSoundEffect.play().then(() => {
			setInterval(() => {
				location.href = "./pages/blog.html";
			}, interval);
		});
		e.preventDefault();
	}
});
chatNavButton.addEventListener("click", (e) => {
	if (location.href.toString().includes("/pages")) {
		clickSoundEffect.play().then(() => {
			setInterval(() => {
				location.href = "./chat.html";
			}, interval);
		});
		e.preventDefault();
	} else {
		clickSoundEffect.play().then(() => {
			setInterval(() => {
				location.href = "./pages/chat.html";
			}, interval);
		});
		e.preventDefault();
	}
});
