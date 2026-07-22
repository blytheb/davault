import { TransactionForm } from "@/components/modals/TransactionForm";
import { Button } from "@/components/ui/button";
import React from "react";
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableFooter,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";

const transactions = [
	{
		id: 1,
		date: "01-15-2026",
		type: "income",
		name: "Mid January paycheck",
		category: "salary",
		amount: 1500.0,
	},
	{
		id: 2,
		date: "01-16-2026",
		type: "expense",
		name: "Pandas Dinner",
		category: "Eat out",
		amount: 35.0,
	},
	{
		id: 3,
		date: "01-16-2026",
		type: "expense",
		name: "walmart",
		category: "Groceries",
		amount: 200.0,
	},
	{
		id: 4,
		date: "01-17-2026",
		type: "income",
		name: "Babysitting",
		category: "Other",
		amount: 150.0,
	},
	{
		id: 5,
		date: "01-15-2026",
		type: "income",
		name: "Mid January paycheck",
		category: "salary",
		amount: 1500.0,
	},
	{
		id: 6,
		date: "01-15-2026",
		type: "income",
		name: "Mid January paycheck",
		category: "salary",
		amount: 1500.0,
	},
];

export default function Transactions() {
	return (
		<>
			<div>
				<TransactionForm />
			</div>
			<div className="p-10 flex justify-center items-center">
				<Table className="max-w-4xl">
					<TableCaption>A list of your recent invoices.</TableCaption>
					<TableHeader>
						<TableRow>
							<TableHead className="w-25">Date</TableHead>
							<TableHead>Name</TableHead>
							<TableHead className="hidden sm:table-cell">Type</TableHead>

							<TableHead className="hidden sm:table-cell">Category</TableHead>
							<TableHead className="text-right">Amount</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{transactions.map((transaction) => (
							<TableRow key={transaction.id}>
								<TableCell className="font-medium">
									{transaction.date}
								</TableCell>
								<TableCell>{transaction.name}</TableCell>
								<TableCell className="hidden sm:table-cell">
									{transaction.type}
								</TableCell>
								<TableCell className="hidden sm:table-cell">
									{transaction.category}
								</TableCell>
								<TableCell className="text-right">
									{transaction.amount}
								</TableCell>
							</TableRow>
						))}
					</TableBody>
					<TableFooter>
						<TableRow>
							<TableCell colSpan={3}>Total</TableCell>
							<TableCell className="text-right hidden sm:table-cell">
								$2,500.00
							</TableCell>
						</TableRow>
					</TableFooter>
				</Table>
			</div>
		</>
	);
}
