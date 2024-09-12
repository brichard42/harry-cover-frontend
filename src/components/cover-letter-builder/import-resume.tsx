"use client";

import { Input } from "@/components/ui/input";
import { Dispatch, SetStateAction } from "react";

export function ImportResume({
	setResumeFile,
}: {
	setResumeFile: Dispatch<SetStateAction<File | undefined>>;
}) {
	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setResumeFile(e.target.files?.[0]);
	};

	return (
		<div>
			<h2 className="text-2xl font-semibold mb-4">
				Step 1: Import Resume
			</h2>
			<Input
				type="file"
				accept=".pdf"
				onChange={handleFileChange}
				className="mb-4"
			/>
		</div>
	);
}
