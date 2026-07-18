"use client";

import { authClient } from "@/lib/auth-client";

export default function Dashboard() {
	const { data: session, isPending } = authClient.useSession();

	console.log(session);

	if (isPending) return <p>Loading...</p>;

	return <pre>{JSON.stringify(session, null, 2)}</pre>;
}
