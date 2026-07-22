"use client";

import {
	Pagination,
	PaginationContent,
	PaginationItem,
	PaginationNext,
	PaginationPrevious,
} from "@/components/ui/pagination";

import { Field, FieldLabel } from "@/components/ui/field";

import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

type TransactionPaginationProps = {
	currentPage: number;
	totalPages: number;
	rowsPerPage: number;
	setCurrentPage: (page: number) => void;
	setRowsPerPage: (rows: number) => void;
};

export default function TransactionPagination({
	currentPage,
	totalPages,
	rowsPerPage,
	setCurrentPage,
	setRowsPerPage,
}: TransactionPaginationProps) {
	return (
		<div className="flex items-center justify-between gap-4">
			<Field orientation="horizontal" className="w-fit">
				<FieldLabel>Rows per page</FieldLabel>

				<Select
					value={rowsPerPage.toString()}
					onValueChange={(value) => {
						setRowsPerPage(Number(value));
						setCurrentPage(1);
					}}>
					<SelectTrigger className="w-20">
						<SelectValue />
					</SelectTrigger>

					<SelectContent>
						<SelectGroup>
							<SelectItem value="3">3</SelectItem>

							<SelectItem value="10">10</SelectItem>

							<SelectItem value="25">25</SelectItem>

							<SelectItem value="50">50</SelectItem>
						</SelectGroup>
					</SelectContent>
				</Select>
			</Field>

			<Pagination className="mx-0 w-auto">
				<PaginationContent>
					<PaginationItem>
						<PaginationPrevious
							onClick={() => setCurrentPage(Math.max(currentPage - 1, 1))}
						/>
					</PaginationItem>

					<PaginationItem>
						<span className="px-3 text-sm">
							{currentPage} / {totalPages}
						</span>
					</PaginationItem>

					<PaginationItem>
						<PaginationNext
							onClick={() =>
								setCurrentPage(Math.min(currentPage + 1, totalPages))
							}
						/>
					</PaginationItem>
				</PaginationContent>
			</Pagination>
		</div>
	);
}
