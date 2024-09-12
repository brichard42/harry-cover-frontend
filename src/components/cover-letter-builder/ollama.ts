"use server";

export async function generateCoverLetter(formData: FormData) {
	const result = await fetch(
		`${process.env.API_URL}ollama/generate-cover-letter`,
		{
			method: "POST",
			body: formData,
		}
	).then((res) => res.json());

	return result.success ? result.data : "Could not generate cover letter";
}
