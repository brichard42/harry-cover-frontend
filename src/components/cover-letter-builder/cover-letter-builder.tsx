"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ImportResume } from "./import-resume";
import { GenerateCoverLetter } from "./generate-cover-letter";
import { JobDescription } from "./job-description";

export function CoverLetterBuilder() {
	const [currentStep, setCurrentStep] = useState(1);
	const [resumeFile, setResumeFile] = useState<File | undefined>(undefined);
	const [jobDescription, setJobDescription] = useState<string>("");
	const [coverLetter, setCoverLetter] = useState<string>("");

	const steps = [
		{ title: "Import Resume", component: ImportResume },
		{ title: "Job Description", component: JobDescription },
		{ title: "Generate Cover Letter", component: GenerateCoverLetter },
	];

	const handleNext = () => {
		if (currentStep < steps.length) {
			setCurrentStep(currentStep + 1);
		}
		if (resumeFile) {
			console.info(
				`\x1b[1;41m🚀 BRICHARD-LOGGER\x1b[0m ~  | resumeFile:`,
				resumeFile
			);
		}
	};

	const handlePrevious = () => {
		if (currentStep > 1) {
			setCurrentStep(currentStep - 1);
		}
	};

	const CurrentStepComponent = steps[currentStep - 1].component;

	return (
		<div className="container mx-auto px-4 py-8">
			<h1 className="text-3xl font-bold mb-6">Cover Letter Builder</h1>
			<Progress
				value={(currentStep / steps.length) * 100}
				className="mb-6"
			/>
			<div className="mb-6">
				<CurrentStepComponent
					resumeFile={resumeFile}
					setResumeFile={setResumeFile}
					jobDescription={jobDescription}
					setJobDescription={setJobDescription}
					coverLetter={coverLetter}
					setCoverLetter={setCoverLetter}
				/>
			</div>
			<div className="flex justify-between">
				<Button onClick={handlePrevious} disabled={currentStep === 1}>
					Previous
				</Button>
				<Button
					onClick={handleNext}
					disabled={currentStep === steps.length}
				>
					Next
				</Button>
			</div>
		</div>
	);
}
