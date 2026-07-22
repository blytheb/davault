"use client";

import React, { useState } from "react";
import { Input } from "./ui/input";

export default function SearchFilter({ allTransactions }) {
	const [search, setSearch] = useState("");

	return (
		<div>
			<Input
				placeholder="Search Transactions..."
				value={search}
				onChange={(e) => setSearch(e.target.value)}
			/>
		</div>
	);
}
