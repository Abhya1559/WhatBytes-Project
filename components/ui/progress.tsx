"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

function Progress({ value, barColor }: { value: number; barColor: string }) {
  return (
    <div className="relative h-2 w-full rounded-full bg-gray-200 overflow-hidden">
      {/* Background Blurred Bar */}
      <div
        className="absolute h-2 w-full rounded-full opacity-30"
        style={{ backgroundColor: barColor }}
      />

      {/* Foreground Progress Bar */}
      <div
        className={cn("absolute h-2 rounded-full transition-all", barColor)}
        style={{ width: `${value}%` }}
      />
    </div>
  );
}

export default function SyllabusAnalysis() {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md w-[450px]">
      <h2 className="text-lg font-semibold">Syllabus Wise Analysis</h2>

      <div className="mt-4 space-y-5">
        {/* Progress Bar Items */}
        {[
          {
            title: "HTML Tools, Forms, History",
            value: 80,
            color: "bg-blue-500",
          },
          {
            title: "Tags & References in HTML",
            value: 60,
            color: "bg-orange-500",
          },
          {
            title: "Tables & References in HTML",
            value: 24,
            color: "bg-red-500",
          },
          { title: "Tables & CSS Basics", value: 96, color: "bg-green-500" },
        ].map((item, index) => (
          <div key={index}>
            <div className="flex justify-between text-sm text-gray-700 font-medium">
              <p>{item.title}</p>
              <p
                className="text-[13px] font-bold"
                style={{ color: item.color }}
              >
                {item.value}%
              </p>
            </div>
            <Progress value={item.value} barColor={item.color} />
          </div>
        ))}
      </div>
    </div>
  );
}
