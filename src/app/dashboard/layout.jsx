import DashboardNavigation from "@/component/constantComponent/DashboardNavigation";
import "../globals.css";

export default function DashboardLayout({ children }) {
  return (
    <div>
      <nav className="bg-gray-100 p-4">
        <DashboardNavigation />
      </nav>
      {children}
    </div>
  );
}
