import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Progress from "@/components/Progress";
import First from "@/components/First";
import Stats from "@/components/Stats";
import Graph from "@/components/Graph";
import { Sidebar } from "@/components/Sidebar";
import Circle from "@/components/Circle";

export default function Dashboard() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="p-6 w-full ml-5">
        <h1 className="mb-4 text-xl font-semibold">Skill Test</h1>
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-6 items-start">
          <div className="flex flex-col gap-6">
            <First />
            <Stats />
            <Graph />
          </div>
          <div className="flex flex-col gap-6">
            <Progress />
            <Circle />
          </div>
        </div>
      </main>
    </div>
  );
}
