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

		let coverLetter = "";
		try {
			coverLetter = await generateCoverLetter(formData);
		} catch (error) {
			console.error(
				`\x1b[1;41m🚀 BRICHARD-LOGGER\x1b[0m ~  | error:`,
				error
			);
		} finally {
			setCoverLetter(coverLetter);
			setLoading(false);
		}
	};

	const generateCoverLetter = async (formData: FormData) => {
		let coverLetter = "Could not generate cover letter";

		try {
			const response = await axios.post(
				`/api/ollama/generate-cover-letter`,
				formData,
				{
					headers: {
						"Content-Type": "multipart/form-data",
					},
				}
			);

			const resultJson = response.data;

			if (resultJson.success) {
				coverLetter = resultJson.data;
			}
		} catch (error) {
			console.error(
				`\x1b[1;41m🚀 BRICHARD-LOGGER\x1b[0m ~  | error:`,
				error
			);
		}

		return coverLetter;
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
