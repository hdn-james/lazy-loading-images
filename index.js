const blurredImages = document.querySelectorAll(".blurred-image");

blurredImages.forEach((blurredImage) => {
	const img = blurredImage.querySelector("img");
	function loaded() {
		blurredImage.classList.add("loaded");
	}

	if (img.complete) {
		loaded();
	} else {
		img.addEventListener("load", loaded);
	}
});
