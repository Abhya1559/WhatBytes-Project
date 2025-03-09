import { FaTrophy } from "react-icons/fa";
import { MdCheckCircle } from "react-icons/md";
import { LuClipboardList } from "react-icons/lu";

export default function QuickStats() {
  return (
    <div className="w-[670px] h-[100px] bg-white shadow-md rounded-lg flex items-center p-4 border">
      <div className="flex-1 flex items-center space-x-2 ml-6">
        <FaTrophy className="text-yellow-500 text-3xl" />
        <div>
          <p className="text-xl font-bold">1</p>
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
  );
}
