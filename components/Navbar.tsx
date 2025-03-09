"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";

export function Navbar() {
  return (
    <nav className="w-full bg-white px-6 py-3 flex items-center justify-between shadow">
      {/* Left - Title */}
      <h2 className="text-xl font-bold">WhatBytes</h2>

      {/* Right - Profile Card */}
      <Card className="flex items-center gap-2 px-3 py-1 rounded-2xl border shadow-md">
        <div className="flex items-center justify-center gap-4">
          <Avatar className="w-8 h-8">
            <AvatarImage src="/avatar.jpg" alt="User" />
            <AvatarFallback>RS</AvatarFallback>
          </Avatar>
          <p className="text-sm font-semibold">Rahil Siddique</p>
        </div>
      </Card>
    </nav>
  );
}
