"use client";

import React from "react";
import { Legend, Pie, PieChart, Tooltip } from "recharts";

const data = [
	{ name: "Foundation", value: 55, fill: "#0088FE" },
	{ name: "Future", value: 25, fill: "#00C49F" },
	{ name: "Goals", value: 10, fill: "#FFBB28" },
	{ name: "Freedom", value: 10, fill: "#FF8042" },
];

export default function VaultBreakdownPieChart() {
	return (
		<>
			<PieChart
				style={{
					width: "100%",
					maxWidth: "200px",
					maxHeight: "80vh",
					aspectRatio: 1,
				}}
				className="my-5 "
				responsive>
				<Pie
					data={data}
					innerRadius="70%"
					outerRadius="100%"
					// Corner radius is the rounded edge of each pie slice
					cornerRadius="50%"
					fill="#8884d8"
					// padding angle is the gap between each pie slice
					paddingAngle={5}
					dataKey="value"
				/>

				<Tooltip
					contentStyle={{
						borderRadius: "10px",
						borderColor: "#d1d5db",
					}}
				/>
			</PieChart>
		</>
	);
}
