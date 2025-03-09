"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

function Progress({
  title,
  value,
  barColor,
}: {
  title: string;
  value: number;
  barColor: string;
}) {
  return (
    <div className="space-y-1">
      <div className="flex justify-between text-sm text-gray-700 font-medium">
        <p>{title}</p>
        <p className="text-[13px] font-bold" style={{ color: barColor }}>
          {value}%
        </p>
      </div>
      <div className="relative h-2 w-full rounded-full bg-gray-200 overflow-hidden">
        {/* Background Blurred Bar */}
        <div
          className="absolute h-2 w-full rounded-full opacity-30"
          style={{ backgroundColor: barColor }}
        />
        {/* Foreground Progress Bar */}
        <div
          className="absolute h-2 rounded-full transition-all"
          style={{ width: `${value}%`, backgroundColor: barColor }}
        />
      </div>
    </div>
  );
}

export default function SyllabusAnalysis() {
  const progressData = [
    { title: "HTML Tools, Forms, History", value: 80, color: "#3b82f6" }, // Blue
    { title: "Tags & References in HTML", value: 60, color: "#f97316" }, // Orange
    { title: "Tables & References in HTML", value: 24, color: "#ef4444" }, // Red
    { title: "Tables & CSS Basics", value: 96, color: "#10b981" }, // Green
  ];

  return (
    <div className="p-6 bg-white rounded-lg shadow-md w-[450px]">
      <h2 className="text-lg font-semibold">Syllabus Wise Analysis</h2>
      <div className="mt-4 space-y-5">
        {progressData.map((item, index) => (
          <Progress
            key={index}
            title={item.title}
            value={item.value}
            barColor={item.color}
          />
        ))}
      </div>
    </div>
  );
}
