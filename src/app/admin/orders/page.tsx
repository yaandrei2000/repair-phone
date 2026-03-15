"use client";

import { useState, useRef, useEffect } from "react";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { AdminSidebar } from "@/components/admin/admin-sidebar";
import { AdminHeader } from "@/components/admin/admin-header";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, Search } from "lucide-react";
import Link from "next/link";

interface Order {
  id: string;
  device: string;
  issue: string;
  price: string;
  status: string;
  clientName?: string;
  imei?: string;
  date?: string;
}

const allOrders: Order[] = [
  {
    id: "#A-1942",
    device: "iPhone 14 Pro",
    issue: "Экран",
    price: "9 900 ₽",
    status: "Диагностика",
    clientName: "Иван Иванов",
    imei: "123456789012345",
    date: "24.01.2024",
  },
  {
    id: "#A-1943",
    device: "Samsung S23",
    issue: "Плата",
    price: "14 500 ₽",
    status: "Срочно",
    clientName: "Мария Петрова",
    imei: "234567890123456",
    date: "23.01.2024",
  },
  {
    id: "#A-1944",
    device: "Xiaomi 13",
    issue: "Аккумулятор",
    price: "3 400 ₽",
    status: "Ожидает",
    clientName: "Алексей Сидоров",
    imei: "345678901234567",
    date: "22.01.2024",
  },
  {
    id: "#A-1945",
    device: "iPhone 13",
    issue: "После воды",
    price: "11 800 ₽",
    status: "В работе",
    clientName: "Елена Козлова",
    imei: "456789012345678",
    date: "21.01.2024",
  },
  {
    id: "#A-1946",
    device: "Samsung Galaxy S24",
    issue: "Корпус",
    price: "8 500 ₽",
    status: "Готов",
    clientName: "Дмитрий Волков",
    imei: "567890123456789",
    date: "20.01.2024",
  },
  {
    id: "#A-1947",
    device: "Xiaomi Redmi Note 13",
    issue: "Разъём зарядки",
    price: "2 900 ₽",
    status: "Выдан",
    clientName: "Анна Смирнова",
    date: "19.01.2024",
  },
  {
    id: "#A-1948",
    device: "iPhone 15 Pro",
    issue: "Экран",
    price: "12 500 ₽",
    status: "Диагностика",
    clientName: "Сергей Лебедев",
    imei: "678901234567890",
    date: "18.01.2024",
  },
  {
    id: "#A-1949",
    device: "Samsung S22",
    issue: "Плата",
    price: "15 200 ₽",
    status: "Срочно",
    clientName: "Ольга Новикова",
    date: "17.01.2024",
  },
  {
    id: "#A-1950",
    device: "iPhone 12",
    issue: "Аккумулятор",
    price: "4 200 ₽",
    status: "В работе",
    clientName: "Павел Морозов",
    imei: "789012345678901",
    date: "16.01.2024",
  },
];

export default function OrdersPage() {
  const [searchValue, setSearchValue] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [filteredOrders, setFilteredOrders] = useState<Order[]>([]);
  const [displayedOrders, setDisplayedOrders] = useState<Order[]>(allOrders);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const suggestionsRef = useRef<HTMLDivElement>(null);

  // Фильтрация заказов для автодополнения
  useEffect(() => {
    if (searchValue.length > 0) {
      const searchLower = searchValue.toLowerCase();
      const searchNumbers = searchValue.replace(/\D/g, "");
      
      const filtered = allOrders.filter((order) => {
        const matchesId = order.id.toLowerCase().includes(searchLower);
        const matchesDevice = order.device.toLowerCase().includes(searchLower);
        const matchesClient = order.clientName?.toLowerCase().includes(searchLower);
        const matchesImei = order.imei?.includes(searchNumbers);
        const matchesIssue = order.issue.toLowerCase().includes(searchLower);

        return matchesId || matchesDevice || matchesClient || matchesImei || matchesIssue;
      });
      
      setFilteredOrders(filtered.slice(0, 8));
      setShowSuggestions(filtered.length > 0);
    } else {
      setFilteredOrders([]);
      setShowSuggestions(false);
    }
  }, [searchValue]);

  // Фильтрация отображаемых заказов
  useEffect(() => {
    if (searchValue.length > 0) {
      const searchLower = searchValue.toLowerCase();
      const searchNumbers = searchValue.replace(/\D/g, "");
      
      const filtered = allOrders.filter((order) => {
        const matchesId = order.id.toLowerCase().includes(searchLower);
        const matchesDevice = order.device.toLowerCase().includes(searchLower);
        const matchesClient = order.clientName?.toLowerCase().includes(searchLower);
        const matchesImei = order.imei?.includes(searchNumbers);
        const matchesIssue = order.issue.toLowerCase().includes(searchLower);

        return matchesId || matchesDevice || matchesClient || matchesImei || matchesIssue;
      });
      
      setDisplayedOrders(filtered);
    } else {
      setDisplayedOrders(allOrders);
    }
  }, [searchValue]);

  // Закрытие подсказок при клике вне
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        suggestionsRef.current &&
        !suggestionsRef.current.contains(event.target as Node) &&
        searchInputRef.current &&
        !searchInputRef.current.contains(event.target as Node)
      ) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleOrderSelect = (order: Order) => {
    setSearchValue(order.id);
    setShowSuggestions(false);
    searchInputRef.current?.focus();
  };

  return (
    <SidebarProvider>
      <AdminSidebar />
      <SidebarInset>
        <div className="flex flex-col gap-4 p-4 md:gap-5 md:px-8 md:py-7">
          <AdminHeader />
          
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <h1 className="font-serif text-[28px] font-medium text-foreground md:text-[32px]">
              Заказы
            </h1>
            <Link href="/admin/orders/new">
              <Button variant="default" size="default">
                <Plus className="h-4 w-4 mr-2" />
                Создать заказ
              </Button>
            </Link>
          </div>

          <Card>
            <CardHeader>
              <div className="relative w-full md:w-[400px]">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    ref={searchInputRef}
                    type="text"
                    placeholder="Поиск по ID, устройству, клиенту, IMEI..."
                    className="bg-background pl-9"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    onFocus={() => {
                      if (searchValue.length > 0 && filteredOrders.length > 0) {
                        setShowSuggestions(true);
                      }
                    }}
                    autoComplete="off"
                  />
                  {showSuggestions && filteredOrders.length > 0 && (
                    <div
                      ref={suggestionsRef}
                      className="absolute top-full z-50 mt-1 w-full rounded-md border border-border bg-background shadow-lg max-h-64 overflow-y-auto"
                    >
                      {filteredOrders.map((order, index) => (
                        <button
                          key={index}
                          type="button"
                          onClick={() => handleOrderSelect(order)}
                          className="w-full px-3 py-2 text-left text-sm text-foreground hover:bg-muted transition-colors first:rounded-t-md last:rounded-b-md"
                        >
                          <div className="flex flex-col">
                            <div className="flex items-center gap-2">
                              <span className="font-medium">{order.id}</span>
                              <Badge variant="default" className="text-xs">
                                {order.status}
                              </Badge>
                            </div>
                            <span className="text-xs text-muted-foreground">
                              {order.device} • {order.issue}
                              {order.clientName && ` • ${order.clientName}`}
                            </span>
                          </div>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-2">
                {displayedOrders.length > 0 ? (
                  displayedOrders.map((order, index) => (
                    <div
                      key={index}
                      className="flex flex-col gap-2 bg-secondary p-3 md:flex-row md:items-center md:justify-between md:gap-4 md:px-3 md:py-2.5"
                    >
                      <div className="flex flex-col gap-1 md:flex-1">
                        <span className="text-xs text-foreground font-sans md:text-[13px]">
                          {order.id} • {order.device}
                        </span>
                        <div className="flex flex-col gap-1 md:flex-row md:items-center md:gap-2">
                          <span className="text-xs text-muted-foreground font-sans md:hidden">
                            {order.issue}
                          </span>
                          <span className="hidden text-[13px] text-muted-foreground font-sans md:inline">
                            {order.issue}
                          </span>
                          {order.clientName && (
                            <span className="text-xs text-muted-foreground font-sans md:text-[13px]">
                              • {order.clientName}
                            </span>
                          )}
                          {order.date && (
                            <span className="text-xs text-muted-foreground font-sans md:text-[13px]">
                              • {order.date}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center justify-between md:contents">
                        <span className="font-serif text-base font-normal text-primary md:text-lg">
                          {order.price}
                        </span>
                        <Badge variant="default" className="w-fit">
                          {order.status}
                        </Badge>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="py-8 text-center text-muted-foreground">
                    Заказы не найдены
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-end">
            <Button variant="outline" size="default" className="w-full md:w-auto">
              <Plus className="h-4 w-4 mr-2" />
              Экспорт CSV
            </Button>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
