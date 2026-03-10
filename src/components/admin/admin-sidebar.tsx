"use client"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import {
  LayoutDashboard,
  Users,
  ClipboardList,
  Wrench,
  Wallet,
  Hexagon,
  ChevronsUpDown,
  ChevronRight,
} from "lucide-react"

const menuItems = [
  {
    title: "Панель",
    icon: LayoutDashboard,
    active: true,
  },
  {
    title: "Клиенты",
    icon: Users,
    active: false,
  },
  {
    title: "Заказы",
    icon: ClipboardList,
    active: false,
  },
  {
    title: "Мастера",
    icon: Wrench,
    active: false,
  },
  {
    title: "Финансы",
    icon: Wallet,
    active: false,
  },
]

export function AdminSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 bg-sidebar-accent flex items-center justify-center">
              <Hexagon className="h-4 w-4 text-sidebar-accent-foreground" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-medium text-sidebar-foreground">
                Ремонт CRM
              </span>
              <span className="text-xs text-sidebar-foreground">
                Сервисный центр
              </span>
            </div>
          </div>
          <ChevronsUpDown className="h-4 w-4 text-muted-foreground" />
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Навигация</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    isActive={item.active}
                    tooltip={item.title}
                    className="justify-between"
                  >
                    <div className="flex items-center gap-2">
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </div>
                    <ChevronRight className="h-4 w-4" />
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 bg-sidebar-accent rounded-full flex items-center justify-center">
              <span className="text-xs font-semibold text-sidebar-accent-foreground">
                А
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-medium text-sidebar-foreground">
                Админ
              </span>
              <span className="text-xs text-sidebar-foreground">
                инфо@ремонт.рф
              </span>
            </div>
          </div>
          <ChevronsUpDown className="h-4 w-4 text-muted-foreground" />
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
