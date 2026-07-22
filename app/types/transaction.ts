export type TransactionType = "income" | "expense";

export type Transaction = {
	id: number;
	date: string;
	type: TransactionType;
	name: string;
	category: string;
	amount: number;
};
