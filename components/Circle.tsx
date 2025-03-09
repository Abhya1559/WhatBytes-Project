"use client";

import React from "react";
import { PieChart, Pie, Cell } from "recharts";

const totalQuestions = 15;
const correctAnswers = 12;
const incorrectAnswers = totalQuestions - correctAnswers;

const data = [
  { name: "Correct", value: correctAnswers, color: "#2563eb" },
  { name: "Incorrect", value: incorrectAnswers, color: "#e5e7eb" },
];

const QuestionAnalysis: React.FC = () => {
  return (
    <div className="p-6 bg-white rounded-xl shadow-md w-full max-w-md">
      {/* Title Row */}
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-bold">Question Analysis</h2>
        <span className="text-blue-600 text-lg font-bold">
          {correctAnswers}/{totalQuestions}
        </span>
      </div>
      <p className="text-gray-700 mt-2 text-sm">
        <strong className="text-black">
          You scored {correctAnswers} question correct out of {totalQuestions}.
        </strong>{" "}
        However, it still needs some improvements.
      </p>
      <div className="flex items-center justify-center relative mt-4">
        <PieChart width={120} height={120}>
          <Pie
            data={data}
            dataKey="value"
            cx="50%"
            cy="50%"
            innerRadius={42}
            outerRadius={55}
            startAngle={90}
            endAngle={-270}
            paddingAngle={3}
            strokeWidth={0}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>
        <span className="absolute inset-0 flex items-center justify-center text-4xl">
          🎯
        </span>
      </div>
    </div>
  );
};

export default QuestionAnalysis;
