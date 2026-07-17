"use client";

import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Signup() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);

	const router = useRouter();

	async function handleRegister() {
		setError("");
		setLoading(true);

		if (!name || !email || !password) {
			setError("Please fill in all fields");
			setLoading(false);
			return;
		}

		if (password.length < 8) {
			setError("Password must be at least 8 characters");
			setLoading(false);
			return;
		}

		try {
			const { data, error } = await authClient.signUp.email({
				name,
				email,
				password,
			});

			if (error) {
				setError(
					error.message ?? "Unable to create account. Please try again.",
				);
				setLoading(false);
				return;
			}

			router.push("/setup");
		} catch {
			setError("Something went wrong. Please try again.");
		} finally {
			setLoading(false);
		}
	}

	return (
		<div className="flex items-center justify-center w-full ">
			<Card
				className="
			    rounded-none
				border-x-0
				shadow-none
				w-full	
				sm:mt-6
				sm:rounded-xl
				sm:border
				sm:shadow-sm
				sm:max-w-sm">
				<CardHeader>
					<CardTitle>Create an account</CardTitle>
					<CardDescription>Fill out this form to get started</CardDescription>
				</CardHeader>
				<CardContent>
					<div>
						<div className="flex flex-col gap-6">
							<div className="grid gap-2">
								<Label htmlFor="email">Name</Label>
								<Input
									id="text"
									type="text"
									placeholder="John Doe"
									required
									value={name}
									onChange={(e) => setName(e.target.value)}
								/>
							</div>
							<div className="grid gap-2">
								<Label htmlFor="email">Email</Label>
								<Input
									id="email"
									type="email"
									placeholder="email@example.com"
									required
									value={email}
									onChange={(e) => setEmail(e.target.value)}
								/>
							</div>
							<div className="grid gap-2">
								<div className="flex items-center">
									<Label htmlFor="password">Password</Label>
									<Link
										href={"/"}
										className="ml-auto inline-block text-sm underline-offset-4 hover:underline">
										<span>Forgot your password?</span>
									</Link>
								</div>
								<Input
									id="password"
									type="password"
									required
									value={password}
									onChange={(e) => setPassword(e.target.value)}
								/>
							</div>
							{error && (
								<div className="rounded-md bg-red-50 p-3 text-sm text-red-500">
									{error}
								</div>
							)}
						</div>
					</div>
				</CardContent>
				<CardFooter className="flex-col gap-2">
					<Button
						onClick={() => handleRegister()}
						className="w-full"
						disabled={loading}>
						{loading ? "Loading ... " : "Sign Up"}
					</Button>
					<Link href={"/login"} className="w-full">
						<Button variant="outline" className="w-full">
							Already have an account? Log In
						</Button>
					</Link>
				</CardFooter>
			</Card>
		</div>
	);
}
