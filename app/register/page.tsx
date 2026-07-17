"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Register() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	return (
		<div>
			<h1>Create a New account</h1>
			<div className="flex flex-col w-100">
				<input
					type="text"
					placeholder="Name"
					className="border"
					onChange={(e) => setName(e.target.value)}
					value={name}
				/>
				<input
					type="email"
					placeholder="Email"
					className="border"
					onChange={(e) => setEmail(e.target.value)}
					value={email}
				/>
				<input
					type="password"
					placeholder="Password"
					className="border"
					onChange={(e) => setPassword(e.target.value)}
					value={password}
				/>
			</div>
			<Button>Register</Button>
		</div>
	);
}
