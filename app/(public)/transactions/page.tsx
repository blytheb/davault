"use client";

import { TransactionForm } from "@/components/transactions/TransactionForm";
import React, { useState } from "react";
import TransactionTable from "@/components/transactions/TransactionTable";
import TransactionPagination from "@/components/transactions/TransactionPagination";
import type { Transaction } from "@/app/types/transaction";
import { Button } from "@base-ui/react";

const transactions_list: Transaction[] = [
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
	//data
	const [transactions, setTransactions] =
		useState<Transaction[]>(transactions_list);

	//pagination
	const [currentPage, setCurrentPage] = useState(1);
	const [rowsPerPage, setRowsPerPage] = useState(3);
	const totalPages = Math.ceil(transactions.length / rowsPerPage);
	const startIndex = (currentPage - 1) * rowsPerPage;
	const displayedTransactions = transactions.slice(
		startIndex,
		startIndex + rowsPerPage,
	);

	//form state
	const [selected, setSelected] = useState<Transaction | null>(null);
	const [openForm, setOpenForm] = useState(false);

	function openAdd() {
		setSelected(null);
		setOpenForm(true);
	}

	function openEdit(transaction: Transaction) {
		setSelected(transaction);
		setOpenForm(true);
	}

	function handleCreate(transaction: Transaction) {
		setTransactions((prev) => [...prev, transaction]);
	}

	function handleUpdate(transaction: Transaction) {
		setTransactions((prev) =>
			prev.map((t) => (t.id === transaction.id ? transaction : t)),
		);
	}

	function handleDelete(transaction: Transaction) {
		console.log("Delete", transaction);
		setTransactions((prev) => prev.filter((t) => t.id != transaction.id));
	}

	function handleSave(transaction: Transaction) {
		if (selected) {
			handleUpdate(transaction);
		} else {
			handleCreate(transaction);
		}
		setOpenForm(false);
	}

	return (
		<>
			<div>
				<Button onClick={openAdd}> + Add Transaction</Button>
				{/* <SearchFilter /> */}
				<TransactionForm
					openForm={openForm}
					setOpenForm={setOpenForm}
					transaction={selected}
					onSave={handleSave}
				/>
				<TransactionTable
					transactions={displayedTransactions}
					openEdit={openEdit}
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
