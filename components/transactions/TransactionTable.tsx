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
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontalIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Transaction } from "@/app/types/transaction";

type TableProps = {
	transactions: Transaction[];
	openEdit: (transaction: Transaction) => void;
	onDelete: (transaction: Transaction) => void;
};

export default function TransactionTable({
	transactions,
	openEdit,
	onDelete,
}: TableProps) {
	return (
		<Table className="max-w-4xl">
			<TableHeader>
				<TableRow>
					<TableHead className="w-25">Date</TableHead>
					<TableHead className="hidden sm:table-cell">Name</TableHead>
					<TableHead className="hidden sm:table-cell">Type</TableHead>

					<TableHead className="text-center sm:text-left">Category</TableHead>
					<TableHead className="text-center">Amount</TableHead>
					<TableHead className="text-center">Actions</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{transactions.map((transaction) => (
					<TableRow key={transaction.id}>
						<TableCell className="font-medium">{transaction.date}</TableCell>
						<TableCell className="hidden sm:table-cell">
							{transaction.name}
						</TableCell>
						<TableCell className="hidden sm:table-cell">
							{transaction.type}
						</TableCell>
						<TableCell className="text-center sm:text-left">
							{transaction.category}
						</TableCell>
						<TableCell className="text-center">
							${transaction.amount.toFixed(2)}
						</TableCell>
						<TableCell className="flex justify-center">
							<DropdownMenu>
								<DropdownMenuTrigger
									render={
										<Button variant="ghost" size="icon" className="size-8">
											<MoreHorizontalIcon />
											<span className="sr-only">Open menu</span>
										</Button>
									}
								/>
								<DropdownMenuContent align="end">
									<DropdownMenuItem onClick={() => openEdit(transaction)}>
										Edit
									</DropdownMenuItem>
									<DropdownMenuItem>Duplicate</DropdownMenuItem>
									<DropdownMenuSeparator />
									<DropdownMenuItem
										variant="destructive"
										onClick={() => onDelete(transaction)}>
										Delete
									</DropdownMenuItem>
								</DropdownMenuContent>
							</DropdownMenu>
						</TableCell>
					</TableRow>
				))}
			</TableBody>
			{/* <TableFooter>
		<TableRow>
			<TableCell colSpan={3}>Total</TableCell>
			<TableCell className="text-right hidden sm:table-cell">
				$2,500.00
			</TableCell>
		</TableRow>
	</TableFooter> */}
		</Table>
	);
}
