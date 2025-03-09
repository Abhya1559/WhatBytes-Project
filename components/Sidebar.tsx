import Link from "next/link";
import { IoDocumentOutline } from "react-icons/io5";
import { TfiMedallAlt } from "react-icons/tfi";
import { IoIosStats } from "react-icons/io";

export function Sidebar() {
  return (
    <aside className="w-64  text-gray-900 border h-screen p-5">
      <nav>
        <ul className="space-y-4 text-gray-400">
          <li>
            <Link
              href="#"
              className="block p-2 rounded font-medium text-gray-800 hover:bg-gray-200 hover:px-2 hover:py-4 hover:rounded-xl hover:text-blue-600"
            >
              <div className="flex items-center justify-baseline gap-2">
                <IoIosStats /> Dashboard
              </div>
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="block p-2 text-gray-800 font-medium  rounded hover:bg-gray-200 hover:px-2 hover:py-4 hover:rounded-xl hover:text-blue-600"
            >
              <div className="flex items-center justify-baseline gap-2">
                <TfiMedallAlt />
                Skill Test
              </div>
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="block p-2 text-gray-800 font-medium rounded hover:bg-gray-200 hover:px-2 hover:py-4 hover:rounded-xl hover:text-blue-600"
            >
              <div className="flex items-center justify-baseline gap-2">
                <IoDocumentOutline /> Internship
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
