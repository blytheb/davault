import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import React from "react";

export default function Vaults() {
	return (
		<>
			Vaultspage
			<div className="space-y-5 sm:flex sm:space-x-5 sm:space-y-0 items-center justify-center  m-4">
				<Card className="w-full sm:w-[250px]">
					<CardHeader>Vault #1</CardHeader>
					<CardContent>
						<div>
							<h1>$1000</h1>
							<Progress value={80} />
							<p className="text-right">80% Completed</p>
						</div>
					</CardContent>
				</Card>
				<Card className="w-full sm:w-[250px]">
					<CardHeader>Vault #2</CardHeader>
					<CardContent>
						<div>
							<h1>$1000</h1>
							<Progress value={40} />
							<p className="text-right">40% Completed</p>
						</div>
					</CardContent>
				</Card>
				<Card className="w-full sm:w-[250px]">
					<CardHeader>Vault #3</CardHeader>
					<CardContent>
						<div>
							<h1>$1000</h1>
							<Progress value={60} />
							<p className="text-right">60% Completed</p>
						</div>
					</CardContent>
				</Card>
				<Card className="w-full sm:w-[250px]">
					<CardHeader>Vault #4</CardHeader>
					<CardContent>
						<div>
							<h1>$1000</h1>
							<Progress value={10} />
							<p className="text-right">10% Completed</p>
						</div>
					</CardContent>
				</Card>
			</div>
		</>
	);
}
