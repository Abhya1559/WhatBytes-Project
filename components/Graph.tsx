"use client";

import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";

const data = [
  { x: 0, y: 5 },
  { x: 10, y: 8 },
  { x: 20, y: 12 },
  { x: 30, y: 20 },
  { x: 40, y: 35 },
  { x: 50, y: 50 },
  { x: 60, y: 40 },
  { x: 70, y: 25 },
  { x: 80, y: 10 },
  { x: 90, y: 5 },
  { x: 100, y: 2 },
];

const yourPercentile = 90; // Adjust based on user's percentile

const ComparisonGraph: React.FC = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-lg w-full">
      <h2 className="text-lg font-bold mb-2">Comparison Graph</h2>
      <p className="text-gray-600 mb-4">
        <strong className="text-black">
          You scored {yourPercentile}% percentile
        </strong>{" "}
        which is lower than the average percentile 72% of all the engineers who
        took this assessment.
      </p>
      <div className="relative">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
            <XAxis dataKey="x" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="y"
              stroke="#8884d8"
              strokeWidth={2}
              dot={{ r: 4 }}
            />
            <ReferenceLine
              x={yourPercentile}
              stroke="gray"
              strokeDasharray="3 3"
              label="your percentile"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ComparisonGraph;
