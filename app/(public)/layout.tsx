import Navbar from "@/components/Navbar";

export default function PublicLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<main>
			<Navbar />
			{children}
		</main>
	);
}
