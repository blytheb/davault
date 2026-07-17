import Link from "next/link";
import {
	NavigationMenuItem,
	NavigationMenuLink,
	navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export default function Navbar() {
	return (
		<nav className="space-x-5 border-b border-gray-400">
			<Link href={"/"}>Landing</Link>
			<Link href={"/register"}>Register</Link>
			<Link href={"/login"}>Log In</Link>
			<Link href={"/dashboard"}>Dashboard</Link>
		</nav>
	);
}
