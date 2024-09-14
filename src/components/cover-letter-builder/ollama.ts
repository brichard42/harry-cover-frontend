"use server";

export async function generateCoverLetter(formData: FormData) {
	let coverLetter = "Could not generate cover letter";

	console.info(
		`\x1b[1;41m🚀 BRICHARD-LOGGER\x1b[0m ~  | process.env.API_URL:`,
		process.env.API_URL
	);

	let result;
	try {
		result = await fetch(
			`${process.env.API_URL}ollama/generate-cover-letter`,
			{
				method: "POST",
				body: formData,
			}
		);

		const resultJson = await result.json();

		if (resultJson.success) {
			coverLetter = resultJson.data;
		}
	} catch (error) {
		console.error(`\x1b[1;41m🚀 BRICHARD-LOGGER\x1b[0m ~  | error:`, error);
	}

	return coverLetter;
}
