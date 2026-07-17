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

export default function Signup() {
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
					<form>
						<div className="flex flex-col gap-6">
							<div className="grid gap-2">
								<Label htmlFor="email">Name</Label>
								<Input id="text" type="text" placeholder="John Doe" required />
							</div>
							<div className="grid gap-2">
								<Label htmlFor="email">Email</Label>
								<Input
									id="email"
									type="email"
									placeholder="email@example.com"
									required
								/>
							</div>
							<div className="grid gap-2">
								<div className="flex items-center">
									<Label htmlFor="password">Password</Label>
									<a
										href="#"
										className="ml-auto inline-block text-sm underline-offset-4 hover:underline">
										Forgot your password?
									</a>
								</div>
								<Input id="password" type="password" required />
							</div>
						</div>
					</form>
				</CardContent>
				<CardFooter className="flex-col gap-2">
					<Button type="submit" className="w-full">
						Sign Up
					</Button>
					<Button variant="outline" className="w-full">
						Already have an account? Log In
					</Button>
				</CardFooter>
			</Card>
		</div>
	);
}
