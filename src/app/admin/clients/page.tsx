"use client";

import { useState, useRef, useEffect } from "react";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { AdminSidebar } from "@/components/admin/admin-sidebar";
import { AdminHeader } from "@/components/admin/admin-header";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Plus, Search } from "lucide-react";

interface Client {
  name: string;
  phone: string;
  ordersCount?: number;
  lastOrderDate?: string;
}

const allClients: Client[] = [
  { name: "Мария Петрова", phone: "+7 (999) 123-45-67", ordersCount: 3, lastOrderDate: "15.01.2024" },
  { name: "Алексей Сидоров", phone: "+7 (905) 234-56-78", ordersCount: 1, lastOrderDate: "20.01.2024" },
  { name: "Елена Козлова", phone: "+7 (912) 345-67-89", ordersCount: 5, lastOrderDate: "18.01.2024" },
  { name: "Дмитрий Волков", phone: "+7 (916) 456-78-90", ordersCount: 2, lastOrderDate: "22.01.2024" },
  { name: "Анна Смирнова", phone: "+7 (917) 567-89-01", ordersCount: 4, lastOrderDate: "19.01.2024" },
  { name: "Сергей Лебедев", phone: "+7 (918) 678-90-12", ordersCount: 1, lastOrderDate: "21.01.2024" },
  { name: "Ольга Новикова", phone: "+7 (919) 789-01-23", ordersCount: 6, lastOrderDate: "17.01.2024" },
  { name: "Павел Морозов", phone: "+7 (920) 890-12-34", ordersCount: 2, lastOrderDate: "23.01.2024" },
  { name: "Татьяна Федорова", phone: "+7 (921) 901-23-45", ordersCount: 3, lastOrderDate: "16.01.2024" },
  { name: "Иван Иванов", phone: "+7 (906) 615-00-06", ordersCount: 8, lastOrderDate: "24.01.2024" },
  { name: "Наталья Соколова", phone: "+7 (922) 012-34-56", ordersCount: 1, lastOrderDate: "25.01.2024" },
  { name: "Михаил Орлов", phone: "+7 (923) 123-45-67", ordersCount: 2, lastOrderDate: "14.01.2024" },
];

export default function ClientsPage() {
  const [searchValue, setSearchValue] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [filteredClients, setFilteredClients] = useState<Client[]>([]);
  const [displayedClients, setDisplayedClients] = useState<Client[]>(allClients);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const suggestionsRef = useRef<HTMLDivElement>(null);

  // Фильтрация клиентов для автодополнения
  useEffect(() => {
    if (searchValue.length > 0) {
      const searchLower = searchValue.toLowerCase();
      const searchNumbers = searchValue.replace(/\D/g, "");
      
      const filtered = allClients.filter((client) => {
        const matchesName = client.name.toLowerCase().includes(searchLower);
        const matchesPhone = client.phone.replace(/\D/g, "").includes(searchNumbers);
        return matchesName || matchesPhone;
      });
      
      setFilteredClients(filtered.slice(0, 8));
      setShowSuggestions(filtered.length > 0);
    } else {
      setFilteredClients([]);
      setShowSuggestions(false);
    }
  }, [searchValue]);

  // Фильтрация отображаемых клиентов
  useEffect(() => {
    if (searchValue.length > 0) {
      const searchLower = searchValue.toLowerCase();
      const searchNumbers = searchValue.replace(/\D/g, "");
      
      const filtered = allClients.filter((client) => {
        const matchesName = client.name.toLowerCase().includes(searchLower);
        const matchesPhone = client.phone.replace(/\D/g, "").includes(searchNumbers);
        return matchesName || matchesPhone;
      });
      
      setDisplayedClients(filtered);
    } else {
      setDisplayedClients(allClients);
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

  const handleClientSelect = (client: Client) => {
    setSearchValue(client.name);
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
              Клиенты
            </h1>
            <Button variant="default" size="default">
              <Plus className="h-4 w-4 mr-2" />
              Добавить клиента
            </Button>
          </div>

          <Card>
            <CardHeader>
              <div className="relative w-full md:w-[400px]">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    ref={searchInputRef}
                    type="text"
                    placeholder="Поиск по имени или телефону..."
                    className="bg-background pl-9"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    onFocus={() => {
                      if (searchValue.length > 0 && filteredClients.length > 0) {
                        setShowSuggestions(true);
                      }
                    }}
                    autoComplete="off"
                  />
                  {showSuggestions && filteredClients.length > 0 && (
                    <div
                      ref={suggestionsRef}
                      className="absolute top-full z-50 mt-1 w-full rounded-md border border-border bg-background shadow-lg max-h-64 overflow-y-auto"
                    >
                      {filteredClients.map((client, index) => (
                        <button
                          key={index}
                          type="button"
                          onClick={() => handleClientSelect(client)}
                          className="w-full px-3 py-2 text-left text-sm text-foreground hover:bg-muted transition-colors first:rounded-t-md last:rounded-b-md"
                        >
                          <div className="flex flex-col">
                            <span className="font-medium">{client.name}</span>
                            <span className="text-xs text-muted-foreground">{client.phone}</span>
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
                {displayedClients.length > 0 ? (
                  displayedClients.map((client, index) => (
                    <div
                      key={index}
                      className="flex flex-col gap-2 bg-secondary p-3 md:flex-row md:items-center md:justify-between md:gap-4 md:px-3 md:py-2.5"
                    >
                      <div className="flex flex-col gap-1 md:flex-1">
                        <span className="text-sm font-medium text-foreground md:text-base">
                          {client.name}
                        </span>
                        <span className="text-xs text-muted-foreground md:text-sm">
                          {client.phone}
                        </span>
                      </div>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground md:text-sm">
                        {client.ordersCount && (
                          <span>Заказов: {client.ordersCount}</span>
                        )}
                        {client.lastOrderDate && (
                          <span>Последний: {client.lastOrderDate}</span>
                        )}
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="py-8 text-center text-muted-foreground">
                    Клиенты не найдены
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
