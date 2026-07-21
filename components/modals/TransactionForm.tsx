"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Field, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";

export function TransactionForm() {
	const [open, setOpen] = useState(false);
	const [date, setDate] = useState<Date | undefined>(new Date());

	const items = [
		{ label: "Salary", value: "salary" },
		{ label: "Side Hustle", value: "side-hustle" },
		{ label: "Rent", value: "rent" },
		{ label: "Utilities", value: "utilities" },
		{ label: "Car", value: "car" },
		{ label: "Debt", value: "debt" },
	];

	return (
		<>
			<Dialog disablePointerDismissal open={open} onOpenChange={setOpen}>
				<DialogTrigger render={<Button variant="outline">+Add</Button>} />
				<DialogContent className="sm:max-w-sm">
					<DialogHeader>
						<DialogTitle>Add a New Transaction</DialogTitle>
						<DialogDescription>
							Keep track of all your transactions.
						</DialogDescription>
					</DialogHeader>
					<FieldGroup>
						<Field>
							<RadioGroup defaultValue="income">
								<div className="flex items-center gap-3">
									<RadioGroupItem value="income" id="income" />
									<Label htmlFor="income">Income</Label>
								</div>
								<div className="flex items-center gap-3">
									<RadioGroupItem value="expense" id="expense" />
									<Label htmlFor="expense">Expense</Label>
								</div>
							</RadioGroup>
						</Field>
						<Field>
							<Select items={items}>
								<SelectTrigger className="w-45">
									<SelectValue placeholder="Category" />
								</SelectTrigger>
								<SelectContent>
									<SelectGroup>
										{items.map((item) => (
											<SelectItem key={item.value} value={item.value}>
												{item.label}
											</SelectItem>
										))}
									</SelectGroup>
								</SelectContent>
							</Select>
						</Field>
						<Field>
							<Label htmlFor="name">Name</Label>
							<Input id="name" name="name" placeholder="Pedro Duarte" />
						</Field>
						<Field>
							<Label htmlFor="amount">Amount</Label>
							<Input id="amount" name="amount" />
						</Field>
						<Field>
							<Popover>
								<PopoverTrigger
									render={
										<Button
											variant="outline"
											data-empty={!date}
											className="justify-start text-left font-normal data-[empty=true]:text-muted-foreground"
										/>
									}>
									<CalendarIcon />
									{date ? format(date, "PPP") : <span>Pick a date</span>}
								</PopoverTrigger>
								<PopoverContent className="w-auto p-0">
									<Calendar mode="single" selected={date} onSelect={setDate} />
								</PopoverContent>
							</Popover>
						</Field>
					</FieldGroup>
					<DialogFooter>
						<DialogClose render={<Button variant="outline">Cancel</Button>} />
						<Button
							onClick={() => {
								// save transaction
								setOpen(false);
							}}>
							Save changes
						</Button>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		</>
	);
}
