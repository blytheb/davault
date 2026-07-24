import { Card, CardContent, CardHeader } from "@/components/ui/card";
import React from "react";

export default function Vaults() {
	return (
		<div>
			Vaultspage
			<div className="space-y-5 sm:flex sm:space-x-5 sm:space-y-0 items-center justify-center">
				<Card className="w-full sm:w-[250px]">
					<CardHeader>Vault #1</CardHeader>
					<CardContent>
						<div>
							<h1>$1000</h1>
						</div>
					</CardContent>
				</Card>
				<Card className="w-full sm:w-[250px]">
					<CardHeader>Vault #2</CardHeader>
					<CardContent>
						<div>
							<h1>$1000</h1>
						</div>
					</CardContent>
				</Card>
				<Card className="w-full sm:w-[250px]">
					<CardHeader>Vault #3</CardHeader>
					<CardContent>
						<div>
							<h1>$1000</h1>
						</div>
					</CardContent>
				</Card>
				<Card className="w-full sm:w-[250px]">
					<CardHeader>Vault #4</CardHeader>
					<CardContent>
						<div>
							<h1>$1000</h1>
						</div>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
