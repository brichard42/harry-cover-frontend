"use client";

import { Dispatch, SetStateAction, useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import axios from "axios";

export function GenerateCoverLetter({
	resumeFile,
	jobDescription,
	coverLetter,
	setCoverLetter,
}: {
	resumeFile: File | undefined;
	jobDescription: string;
	coverLetter: string;
	setCoverLetter: Dispatch<SetStateAction<string>>;
}) {
	const [loading, setLoading] = useState(false);

	const handleClick = async () => {
		setCoverLetter("");
		setLoading(true);

		const formData = new FormData();
		formData.append("jobDescription", jobDescription);
		if (resumeFile) {
			formData.append("resumeFile", resumeFile);
		}

		try {
			await generateCoverLetter(formData);
		} catch (error) {
			console.error(
				`\x1b[1;41m🚀 BRICHARD-LOGGER\x1b[0m ~  | error:`,
				error
			);
		} finally {
			setLoading(false);
		}
	};

	const generateCoverLetter = async (formData: FormData) => {
		let coverLetter = "";

		try {
			const response = await axios.post(
				`/api/ollama/generate-cover-letter`,
				formData,
				{
					headers: {
						"Content-Type": "multipart/form-data",
					},
					responseType: "stream",
				}
			);

			response.data.on("data", (chunk: Buffer) => {
				console.info(
					`\x1b[1;41m🚀 BRICHARD-LOGGER\x1b[0m ~  | chunk:`,
					chunk
				);
				coverLetter += chunk.toString();
				setCoverLetter(coverLetter);
			});

			return new Promise((resolve, reject) => {
				response.data.on("end", () => {
					resolve(coverLetter);
				});

				response.data.on("error", (error: unknown) => {
					console.error(
						`\x1b[1;41m🚀 BRICHARD-LOGGER\x1b[0m ~  | Stream error:`,
						error
					);
					reject("Could not generate cover letter");
				});
			});
		} catch (error) {
			console.error(
				`\x1b[1;41m🚀 BRICHARD-LOGGER\x1b[0m ~  | error:`,
				error
			);
			return "Could not generate cover letter";
		}
	};

	return (
		<div>
			<h2 className="text-2xl font-semibold mb-4">
				Step 4: Generate Cover Letter
			</h2>
			<Button onClick={handleClick} className="mb-4" disabled={loading}>
				Generate Cover Letter
			</Button>
			<Textarea
				value={coverLetter}
				onChange={(e) => setCoverLetter(e.target.value)}
				rows={10}
				className="mb-4"
			/>
		</div>
	);
}
