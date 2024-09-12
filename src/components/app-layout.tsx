"use client";

import { useState } from "react";
import {
	ChevronLeft,
	ChevronRight,
	LayoutDashboard,
	FileText,
	Mail,
	User,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
	{ name: "Dashboard", icon: LayoutDashboard, route: "/" },
	{ name: "Resume Builder", icon: FileText, route: "/resume-builder" },
	{
		name: "Cover Letter Builder",
		icon: Mail,
		route: "/cover-letter-builder",
	},
];

export default function AppLayout({ children }: { children: React.ReactNode }) {
	const [isOpen, setIsOpen] = useState(true);
	const pathname = usePathname();

	return (
		<div className="flex h-screen bg-gray-100">
			<aside
				className={`relative bg-white shadow-md transition-all duration-300 ease-in-out ${
					isOpen ? "w-64" : "w-20"
				}`}
			>
				<nav className="flex flex-col p-4 space-y-2">
					{menuItems.map((item) => (
						<Link
							key={item.name}
							href={item.route}
							className={`flex items-center p-2 rounded-lg transition-colors duration-200 ${
								pathname === item.route
									? "bg-primary text-primary-foreground"
									: "text-gray-600 hover:bg-gray-200"
							}`}
						>
							<item.icon className="w-6 h-6 mr-2" />
							<span className={`${isOpen ? "block" : "hidden"}`}>
								{item.name}
							</span>
						</Link>
					))}
				</nav>
				<div className="absolute bottom-4 left-4 right-4">
					<button className="flex items-center p-2 w-full rounded-lg text-gray-600 hover:bg-gray-200 transition-colors duration-200">
						<User className="w-6 h-6 mr-2" />
						<span className={`${isOpen ? "block" : "hidden"}`}>
							Profile
						</span>
					</button>
				</div>
				<button
					onClick={() => setIsOpen(!isOpen)}
					className="absolute top-1/2 -right-3 bg-white rounded-full p-1 shadow-md hover:bg-gray-100 transition-colors duration-200"
				>
					{isOpen ? (
						<ChevronLeft className="w-4 h-4" />
					) : (
						<ChevronRight className="w-4 h-4" />
					)}
				</button>
			</aside>
			<main className="flex-1 p-8 overflow-auto">{children}</main>
		</div>
	);
}
