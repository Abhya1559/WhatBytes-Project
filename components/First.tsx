"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { FaTrophy } from "react-icons/fa";
import { LuClipboardList } from "react-icons/lu";
import { MdCheckCircle } from "react-icons/md";

export default function ScoreCard() {
  const [open, setOpen] = useState(false);
  const [rank, setRank] = useState(1);
  const [percentile, setPercentile] = useState("30");
  const [score, setScore] = useState("10");
  const [error, setError] = useState("");

  return (
    <>
      {/* Score Card */}
      <Card className="p-4 flex justify-between items-center w-full max-w-2xl border shadow-md rounded-lg">
        <div className="flex items-center justify-center gap-6">
          <div className="flex items-center gap-4">
            <Image
              src="data:image/png;base64,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"
              width={70}
              height={70}
              alt="HTML Logo"
            />
            <div>
              <h3 className="font-semibold text-lg">
                Hyper Text Markup Language
              </h3>
              <p className="text-gray-500 text-sm">
                Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021
              </p>
            </div>
          </div>
          <Button
            className="bg-blue-900 text-white px-4 py-2 rounded-md"
            onClick={() => setOpen(true)}
          >
            Update
          </Button>
        </div>
      </Card>

      {/* Dialog */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="p-6 max-w-lg rounded-lg border shadow-lg">
          <DialogHeader className="flex justify-between items-start">
            <div className="flex items-center space-x-72">
              <DialogTitle className="text-xl font-bold">
                Update scores
              </DialogTitle>
              <Image
                src="data:image/png;base64,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"
                width={30}
                height={30}
                alt="HTML Logo"
              />
            </div>
          </DialogHeader>

          <div className="space-y-4">
            {/* Rank Input */}
            <div className="flex items-center gap-3">
              <span className="text-lg font-bold text-white bg-blue-900 w-8 h-8 flex items-center justify-center rounded-full">
                1
              </span>
              <div className="w-full">
                <Label className="text-md">
                  Update your <span className="font-bold">Rank</span>
                </Label>
                <Input
                  type="text"
                  className={`mt-1 border ${
                    error ? "border-red-500" : "border-gray-300"
                  } rounded-md`}
                  placeholder="Rank"
                  value={rank}
                  onChange={(e) => setRank(e.target.value)}
                />
                {error && <p className="text-red-500 text-sm">{error}</p>}
              </div>
            </div>

            {/* Percentile Input */}
            <div className="flex items-center gap-3">
              <span className="text-lg font-bold text-white bg-blue-900 w-8 h-8 flex items-center justify-center rounded-full">
                2
              </span>
              <div className="w-full">
                <Label className="text-md">
                  Update your <span className="font-bold">Percentile</span>
                </Label>
                <Input
                  type="number"
                  className="mt-1 border border-blue-900 rounded-md"
                  placeholder="Percentile"
                  value={percentile}
                  onChange={(e) => setPercentile(e.target.value)}
                />
              </div>
            </div>

            {/* Score Input */}
            <div className="flex items-center gap-3">
              <span className="text-lg font-bold text-white bg-blue-900 w-8 h-8 flex items-center justify-center rounded-full">
                3
              </span>
              <div className="w-full">
                <Label className="text-md">
                  Update your{" "}
                  <span className="font-bold">Current Score (out of 15)</span>
                </Label>
                <Input
                  type="number"
                  className="mt-1 border border-blue-900 rounded-md"
                  placeholder="Score"
                  value={score}
                  onChange={(e) => setScore(e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-2 mt-6">
            <Button
              variant="outline"
              className="border border-blue-900 text-blue-900 px-5 py-2 rounded-md hover:bg-gray-200"
              onClick={() => setOpen(false)}
            >
              cancel
            </Button>
            <Button className="bg-blue-900 text-white px-6 py-2 rounded-md flex items-center gap-1 hover:bg-blue-800">
              save →
            </Button>
          </div>
        </DialogContent>
      </Dialog>
      <div className="w-[670px] h-[100px] bg-white shadow-md rounded-lg flex items-center p-4 border">
        <div className="flex-1 flex items-center space-x-2 ml-6">
          <FaTrophy className="text-yellow-500 text-3xl" />
          <div>
            <p className="text-xl font-bold">{rank}</p>
            <p className="text-gray-500 text-sm">YOUR RANK</p>
          </div>
        </div>
        <div className="w-px h-12 bg-gray-300"></div>
        <div className="flex-1 flex items-center space-x-2 ml-6">
          <LuClipboardList className="text-gray-500 text-3xl" />
          <div>
            <p className="text-xl font-bold">30%</p>
            <p className="text-gray-500 text-sm">PERCENTILE</p>
          </div>
        </div>
        <div className="w-px h-12 bg-gray-300"></div>
        <div className="flex-1 flex items-center space-x-2 ml-6">
          <MdCheckCircle className="text-green-500 text-3xl" />
          <div>
            <p className="text-xl font-bold">10 / 15</p>
            <p className="text-gray-500 text-sm">CORRECT ANSWERS</p>
          </div>
        </div>
      </div>
    </>
  );
}
