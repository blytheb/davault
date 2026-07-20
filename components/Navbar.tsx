"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import LogoutButton from "./LogoutButton";
import { Button } from "./ui/button";

export default function Navbar() {
	const { data: session } = authClient.useSession();

	return (
		<nav className="border-b border-gray-400">
			<div className="flex items-center justify-between p-4">
				<Link href={"/"} className="font-bold text-xl">
					DaVault
				</Link>
				{/* desktop */}
				<div className="hidden md:flex items-center gap-3">
					<Link href={"/vaults"}>Vaults</Link>
					<Link href={"/transactions"}>Transactions</Link>
					{session ? (
						<LogoutButton />
					) : (
						<>
							<Link href={"/sign-up"}>
								<Button variant={"outline"}>signup</Button>
							</Link>
							<Link href={"/login"}>
								<Button>log in</Button>
							</Link>
						</>
					)}
				</div>
				{/* mobile */}
			</div>
		</nav>
	);
}
