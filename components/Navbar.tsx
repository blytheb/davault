import Link from "next/link";

export default function Navbar() {
	return (
		<nav className="flex justify-between items-center border-b border-gray-400">
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
		</nav>
	);
}
