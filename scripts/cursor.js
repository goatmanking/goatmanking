html_element = document.getElementsByName("html");

const cursorMove = (event) => {
	const mouse_x = event.clientY;
	const mouse_y = event.clientX;

	html_element.style.transform = `translate3d(${mouse_x}px, ${mouse_y}px)`;
};

window.addEventListener("mousemove", cursorMove);
