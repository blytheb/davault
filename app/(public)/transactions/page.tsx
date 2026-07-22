"use client";

import { TransactionForm } from "@/components/modals/TransactionForm";
import React, { useState } from "react";
import TransactionTable from "@/components/tables/TransactionTable";
import TransactionPagination from "@/components/tables/TransactionPagination";

const transactions_list = [
	{
		id: 1,
		date: "01-15-2026",
		type: "income",
		name: "Mid January paycheck",
		category: "salary",
		amount: 1500,
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
		amount: 200.5,
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
	{
		id: 7,
		date: "01-15-2026",
		type: "income",
		name: "Mid January paycheck",
		category: "salary",
		amount: 1500.0,
	},
	{
		id: 8,
		date: "01-15-2026",
		type: "income",
		name: "Mid January paycheck",
		category: "salary",
		amount: 1500.0,
	},
	{
		id: 9,
		date: "01-15-2026",
		type: "income",
		name: "Mid January paycheck",
		category: "salary",
		amount: 1500.0,
	},
	{
		id: 10,
		date: "01-15-2026",
		type: "income",
		name: "Mid January paycheck",
		category: "salary",
		amount: 1500.0,
	},
	{
		id: 11,
		date: "01-15-2026",
		type: "income",
		name: "Mid January paycheck",
		category: "salary",
		amount: 1500.0,
	},
	{
		id: 12,
		date: "01-15-2026",
		type: "income",
		name: "Mid January paycheck",
		category: "salary",
		amount: 1500.0,
	},
	{
		id: 13,
		date: "01-15-2026",
		type: "income",
		name: "Mid January paycheck",
		category: "salary",
		amount: 1500.0,
	},
	{
		id: 14,
		date: "01-15-2026",
		type: "income",
		name: "Mid January paycheck",
		category: "salary",
		amount: 1500.0,
	},
];

export default function Transactions() {
	const [transactions, setTransactions] = useState(transactions_list);
	const [currentPage, setCurrentPage] = useState(1);
	const [rowsPerPage, setRowsPerPage] = useState(3);

	const totalPages = Math.ceil(transactions.length / rowsPerPage);

	const startIndex = (currentPage - 1) * rowsPerPage;
	const displayedTransactions = transactions.slice(
		startIndex,
		startIndex + rowsPerPage,
	);

	function handleEdit(id: number) {
		console.log("Edit", id);
	}
	function handleDelete(id: number) {
		console.log("Delete", id);
	}
	return (
		<>
			<div>
				{/* <SearchFilter /> */}
				<TransactionForm />
				<TransactionTable
					transactions={displayedTransactions}
					onEdit={handleEdit}
					onDelete={handleDelete}
				/>
			</div>
			<TransactionPagination
				currentPage={currentPage}
				totalPages={totalPages}
				rowsPerPage={rowsPerPage}
				setCurrentPage={setCurrentPage}
				setRowsPerPage={setRowsPerPage}
			/>
		</>
	);
}
