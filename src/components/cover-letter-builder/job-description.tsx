"use client";

import { Textarea } from "@/components/ui/textarea";
import { Dispatch, SetStateAction } from "react";

export function JobDescription({
	jobDescription,
	setJobDescription,
}: {
	jobDescription: string;
	setJobDescription: Dispatch<SetStateAction<string>>;
}) {
	return (
		<div>
			<h2 className="text-2xl font-semibold mb-4">
				Step 2: Job Description
			</h2>
			<Textarea
				placeholder="Paste the job description here..."
				value={jobDescription}
				onChange={(e) => setJobDescription(e.target.value)}
				rows={10}
			/>
		</div>
	);
}
