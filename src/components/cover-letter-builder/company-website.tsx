"use client";

import { Input } from "@/components/ui/input";
import { Dispatch, SetStateAction } from "react";

export function CompanyWebsite({
	companyWebsite,
	setCompanyWebsite,
}: {
	companyWebsite: string;
	setCompanyWebsite: Dispatch<SetStateAction<string>>;
}) {
	return (
		<div>
			<h2 className="text-2xl font-semibold mb-4">
				Step 3: Company Website
			</h2>
			<Input
				type="url"
				placeholder="https://www.company.com"
				value={companyWebsite}
				onChange={(e) => setCompanyWebsite(e.target.value)}
			/>
		</div>
	);
}
