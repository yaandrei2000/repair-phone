"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
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
    href: "/admin",
  },
  {
    title: "Клиенты",
    icon: Users,
    href: "/admin/clients",
  },
  {
    title: "Заказы",
    icon: ClipboardList,
    href: "/admin/orders",
  },
  {
    title: "Мастера",
    icon: Wrench,
    href: "/admin",
  },
  {
    title: "Финансы",
    icon: Wallet,
    href: "/admin",
  },
]

export function AdminSidebar() {
  const pathname = usePathname()
  
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
              {menuItems.map((item) => {
                const isActive = 
                  pathname === item.href || 
                  (item.href !== "/admin" && pathname?.startsWith(item.href)) ||
                  (item.href === "/admin" && pathname === "/admin")
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      isActive={isActive}
                      tooltip={item.title}
                      className="justify-between"
                    >
                      <Link href={item.href || "/admin"}>
                        <div className="flex items-center gap-2">
                          <item.icon className="h-4 w-4" />
                          <span>{item.title}</span>
                        </div>
                        <ChevronRight className="h-4 w-4" />
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              })}
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
