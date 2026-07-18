"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import LogoutButton from "./LogoutButton";

export default function Navbar() {
	const { data: session } = authClient.useSession();

	return (
		<nav className="flex justify-between items-center border-b border-gray-400">
			{session ? (
				<>
					<div className="space-x-5">
						<Link href={"/"}>Landing</Link>
						<Link href={"/dashboard"}>Dashboard</Link>
						<Link href={"/vaults"}>Vaults</Link>
						<Link href={"/trasnactions"}>Transactions</Link>
					</div>
					<div className="space-x-5">
						<LogoutButton />
					</div>
				</>
			) : (
				<>
					<div className="space-x-5">
						<Link href={"/"}>Landing</Link>
						<Link href={"/dashboard"}>Dashboard</Link>
						<Link href={"/vaults"}>Vaults</Link>
						<Link href={"/trasnactions"}>Transactions</Link>
					</div>
					<div className="space-x-5">
						<Link href={"/sign-up"}>Sign Up</Link>
						<Link href={"/login"}>Log In</Link>
					</div>
				</>
			)}
		</nav>
	);
}
