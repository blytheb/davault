import { Button } from "@/components/ui/button";
import {
	Card,
	CardAction,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import VaultBreakdownPieChart from "@/components/VaultBreakdownPieChart";
import React from "react";

export default function Vaults() {
	return (
		<>
			<div className="flex flex-col items-center justify-center ">
				Vaultspage
				<VaultBreakdownPieChart />
			</div>

			<div className="space-y-5 sm:flex sm:space-x-5 sm:space-y-0 items-center justify-center  m-4">
				<Card className="w-full sm:w-[250px]">
					<CardHeader>
						<CardDescription>Essentials</CardDescription>
						<CardTitle className="text-xl">Foundation Vault</CardTitle>
					</CardHeader>

					<CardContent>
						<div>
							<h3>$1000</h3>
							<Progress value={80} />
							<p className="text-right">80% Completed</p>
						</div>
					</CardContent>
				</Card>
				<Card className="w-full sm:w-[250px]">
					<CardHeader>
						<CardDescription>Investing</CardDescription>
						<CardTitle className="text-xl">Future Vault</CardTitle>
					</CardHeader>
					<CardContent>
						<div>
							<h1>$1000</h1>
							<Progress value={40} />
							<p className="text-right">40% Completed</p>
						</div>
					</CardContent>
					<CardFooter>
						<CardAction>
							<Button variant={"outline"}>View Details</Button>
						</CardAction>
					</CardFooter>
				</Card>
			</div>
			<div className="space-y-5 sm:flex sm:space-x-5 sm:space-y-0 items-center justify-center  m-4">
				<Card className="w-full sm:w-[250px]">
					<CardHeader>
						<CardDescription>Savings</CardDescription>
						<CardTitle className="text-xl">Short Term Goals Vault</CardTitle>
					</CardHeader>
					<CardContent>
						<div>
							<h1>$1000</h1>
							<Progress value={80} />
							<p className="text-right">80% Completed</p>
						</div>
					</CardContent>
				</Card>
				<Card className="w-full sm:w-[250px]">
					<CardHeader>
						<CardDescription>Treat Yourself</CardDescription>
						<CardTitle className="text-xl">Freedom Vault</CardTitle>
					</CardHeader>
					<CardContent>
						<div>
							<h1>$1000</h1>
							<Progress value={40} />
							<p className="text-right">40% Completed</p>
						</div>
					</CardContent>
				</Card>
			</div>
		</>
	);
}
