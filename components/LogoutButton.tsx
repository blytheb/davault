"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import React from "react";
import { Button } from "./ui/button";

export default function LogoutButton() {
	const router = useRouter();
	async function handleLogout() {
		await authClient.signOut();
		router.push("/login");
	}
	return <Button onClick={handleLogout}>Log Out</Button>;
}
