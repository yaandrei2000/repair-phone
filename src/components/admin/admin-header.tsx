"use client";

import { useState, useRef, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Plus } from "lucide-react";
import Link from "next/link";

interface SearchOrder {
  id: string;
  device: string;
  clientName: string;
  imei?: string;
  status: string;
}

const searchableOrders: SearchOrder[] = [
  {
    id: "#A-1942",
    device: "iPhone 14 Pro",
    clientName: "Иван Иванов",
    imei: "123456789012345",
    status: "Диагностика",
  },
  {
    id: "#A-1943",
    device: "Samsung S23",
    clientName: "Мария Петрова",
    imei: "234567890123456",
    status: "Срочно",
  },
  {
    id: "#A-1944",
    device: "Xiaomi 13",
    clientName: "Алексей Сидоров",
    imei: "345678901234567",
    status: "Ожидает",
  },
  {
    id: "#A-1945",
    device: "iPhone 13",
    clientName: "Елена Козлова",
    imei: "456789012345678",
    status: "В работе",
  },
  {
    id: "#A-1946",
    device: "Samsung Galaxy S24",
    clientName: "Дмитрий Волков",
    imei: "567890123456789",
    status: "Готов",
  },
  {
    id: "#A-1947",
    device: "Xiaomi Redmi Note 13",
    clientName: "Анна Смирнова",
    status: "Выдан",
  },
];

export function AdminHeader() {
  const [searchValue, setSearchValue] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [filteredOrders, setFilteredOrders] = useState<SearchOrder[]>([]);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const suggestionsRef = useRef<HTMLDivElement>(null);

  // Фильтрация заказов при вводе
  useEffect(() => {
    if (searchValue.length > 0) {
      const searchLower = searchValue.toLowerCase();
      const filtered = searchableOrders.filter((order) => {
        const matchesId = order.id.toLowerCase().includes(searchLower);
        const matchesDevice = order.device.toLowerCase().includes(searchLower);
        const matchesClient = order.clientName.toLowerCase().includes(searchLower);
        const matchesImei = order.imei?.includes(searchValue.replace(/\D/g, ""));

        return matchesId || matchesDevice || matchesClient || matchesImei;
      });
      setFilteredOrders(filtered.slice(0, 8)); // Показываем максимум 8 вариантов
      setShowSuggestions(filtered.length > 0);
    } else {
      setFilteredOrders([]);
      setShowSuggestions(false);
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

  const handleOrderSelect = (order: SearchOrder) => {
    setSearchValue(order.id);
    setShowSuggestions(false);
    // Здесь можно добавить навигацию к заказу
    // router.push(`/admin/orders/${order.id}`);
  };

  return (
    <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between md:gap-4">
      <div className="flex items-center gap-3">
        <SidebarTrigger className="md:hidden" />
        <h1 className="font-serif text-[28px] font-normal text-foreground md:text-[42px]">
          Админ-панель
        </h1>
      </div>
      <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-[10px]">
        <div className="relative w-full md:w-[280px]">
          <Input
            ref={searchInputRef}
            type="text"
            placeholder="Поиск клиента, IMEI, заказа"
            className="bg-background"
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
                      <span className="text-xs text-muted-foreground">{order.status}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">
                      {order.device} • {order.clientName}
                      {order.imei && ` • IMEI: ${order.imei}`}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
        <Link href="/admin/orders/new">
          <Button variant="default" size="default" className="w-full md:w-auto">
            <Plus className="h-4 w-4" />
            Новый заказ
          </Button>
        </Link>
      </div>
    </div>
  );
}
