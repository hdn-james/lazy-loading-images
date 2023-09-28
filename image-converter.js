const sharp = require("sharp");
const fs = require("fs/promises");

const INPUT_FOLDER = "./images";
const OUTPUT_WEBP_FOLDER = "./images/webp";
const PLACEHOLDER_IMAGE_FOLDER = "./images/placeholder";

const convertToWebp = async (inputFolder) => {
	try {
		let files = await fs.readdir(inputFolder, { withFileTypes: true });
		files = files.filter((file) => file.isFile()).map((file) => file.name);

		const sharpJobs = files.map((file) => {
			const ext = file.split(".").pop();
			const outputFileName = file.replace(ext, "webp");
			return sharp(`${inputFolder}/${file}`)
				.toFormat("webp")
				.toFile(`${OUTPUT_WEBP_FOLDER}/${outputFileName}`);
		});

		await Promise.all(sharpJobs);
	} catch (error) {
		throw error;
	}
};

const generatePlaceholderImages = async (inputFolder) => {
	try {
		let files = await fs.readdir(inputFolder, { withFileTypes: true });
		files = files.filter((file) => file.isFile()).map((file) => file.name);

		const sharpJobs = files.map((file) => {
			const ext = file.split(".").pop();
			const outputFileName = file.replace(`.${ext}`, "_placeholder.webp");
			return sharp(`${inputFolder}/${file}`)
				.resize(20)
				.blur(1)
				.toFormat("webp")
				.toFile(`${PLACEHOLDER_IMAGE_FOLDER}/${outputFileName}`);
		});

		await Promise.all(sharpJobs);
	} catch (error) {
		throw error;
	}
};

convertToWebp(INPUT_FOLDER);

generatePlaceholderImages(INPUT_FOLDER);
