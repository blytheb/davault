export type TransactionType = "income" | "expense";

export type Transaction = {
	id: number;
	date: Date;
	type: TransactionType;
	name: string;
	category: string;
	amount: number;
};
