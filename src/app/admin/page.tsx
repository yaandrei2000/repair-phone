import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { AdminSidebar } from "@/components/admin/admin-sidebar";
import { AdminHeader } from "@/components/admin/admin-header";
import { StatsCards } from "@/components/admin/stats-cards";
import { RepairFunnel } from "@/components/admin/repair-funnel";
import { CriticalTasks } from "@/components/admin/critical-tasks";
import { LeadsAndOrders } from "@/components/admin/leads-and-orders";

export default function AdminPage() {
  return (
    <SidebarProvider>
      <AdminSidebar />
      <SidebarInset>
        <div className="flex flex-col gap-4 p-4 md:gap-5 md:px-8 md:py-7">
          <AdminHeader />
          <StatsCards />
          <div className="flex flex-col gap-3 md:flex-row">
            <div className="flex-1">
              <RepairFunnel />
            </div>
            <CriticalTasks />
          </div>
          <LeadsAndOrders />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
