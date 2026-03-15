"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { AdminSidebar } from "@/components/admin/admin-sidebar";
import { AdminHeader } from "@/components/admin/admin-header";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Save, Plus, X } from "lucide-react";
import Link from "next/link";
import { formatPhoneNumber } from "@/lib/utils";

interface Part {
  id: string;
  name: string;
  price: string;
}

const statusOptions = [
  "Диагностика",
  "Ожидает",
  "В работе",
  "Срочно",
  "Готов",
  "Выдан",
];

const issueOptions = [
  "Экран",
  "Аккумулятор",
  "Плата",
  "После воды",
  "Разъём зарядки",
  "Корпус",
  "Другое",
];

const popularDevices = [
  "iPhone 15 Pro Max",
  "iPhone 15 Pro",
  "iPhone 15",
  "iPhone 14 Pro Max",
  "iPhone 14 Pro",
  "iPhone 14",
  "iPhone 13 Pro Max",
  "iPhone 13 Pro",
  "iPhone 13",
  "iPhone 12 Pro Max",
  "iPhone 12 Pro",
  "iPhone 12",
  "iPhone 11 Pro Max",
  "iPhone 11 Pro",
  "iPhone 11",
  "iPhone XS Max",
  "iPhone XS",
  "iPhone XR",
  "iPhone X",
  "Samsung Galaxy S24 Ultra",
  "Samsung Galaxy S24+",
  "Samsung Galaxy S24",
  "Samsung Galaxy S23 Ultra",
  "Samsung Galaxy S23+",
  "Samsung Galaxy S23",
  "Samsung Galaxy S22 Ultra",
  "Samsung Galaxy S22+",
  "Samsung Galaxy S22",
  "Samsung Galaxy S21 Ultra",
  "Samsung Galaxy S21+",
  "Samsung Galaxy S21",
  "Samsung Galaxy A54",
  "Samsung Galaxy A34",
  "Samsung Galaxy A24",
  "Xiaomi 14 Pro",
  "Xiaomi 14",
  "Xiaomi 13 Pro",
  "Xiaomi 13",
  "Xiaomi 12 Pro",
  "Xiaomi 12",
  "Xiaomi Redmi Note 13 Pro",
  "Xiaomi Redmi Note 13",
  "Xiaomi Redmi Note 12 Pro",
  "Xiaomi Redmi Note 12",
  "Huawei P60 Pro",
  "Huawei P60",
  "Huawei P50 Pro",
  "Huawei P50",
  "Huawei Mate 60 Pro",
  "Huawei Mate 60",
  "Huawei Mate 50 Pro",
  "Huawei Mate 50",
  "OnePlus 12",
  "OnePlus 11",
  "OnePlus 10 Pro",
  "OnePlus 9 Pro",
  "Google Pixel 8 Pro",
  "Google Pixel 8",
  "Google Pixel 7 Pro",
  "Google Pixel 7",
  "Honor 90",
  "Honor 80",
  "Honor 70",
  "Realme GT 5",
  "Realme GT 3",
  "Oppo Find X6 Pro",
  "Oppo Find X5 Pro",
  "Vivo X100 Pro",
  "Vivo X90 Pro",
];

interface Client {
  name: string;
  phone: string;
}

const savedClients: Client[] = [
  { name: "Мария Петрова", phone: "+7 (999) 123-45-67" },
  { name: "Алексей Сидоров", phone: "+7 (905) 234-56-78" },
  { name: "Елена Козлова", phone: "+7 (912) 345-67-89" },
  { name: "Дмитрий Волков", phone: "+7 (916) 456-78-90" },
  { name: "Анна Смирнова", phone: "+7 (917) 567-89-01" },
  { name: "Сергей Лебедев", phone: "+7 (918) 678-90-12" },
  { name: "Ольга Новикова", phone: "+7 (919) 789-01-23" },
  { name: "Павел Морозов", phone: "+7 (920) 890-12-34" },
  { name: "Татьяна Федорова", phone: "+7 (921) 901-23-45" },
];

export default function NewOrderPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [filteredDevices, setFilteredDevices] = useState<string[]>([]);
  const [showClientSuggestions, setShowClientSuggestions] = useState(false);
  const [filteredClients, setFilteredClients] = useState<Client[]>([]);
  const deviceInputRef = useRef<HTMLInputElement>(null);
  const suggestionsRef = useRef<HTMLDivElement>(null);
  const clientPhoneInputRef = useRef<HTMLInputElement>(null);
  const clientSuggestionsRef = useRef<HTMLDivElement>(null);
  
  const [formData, setFormData] = useState({
    device: "",
    imei: "",
    issue: "",
    price: "",
    status: "Диагностика",
    clientName: "",
    clientPhone: "",
    notes: "",
  });
  const [parts, setParts] = useState<Part[]>([]);
  const [newPart, setNewPart] = useState({ name: "", price: "" });

  // Фильтрация устройств при вводе
  useEffect(() => {
    if (formData.device.length > 0) {
      const filtered = popularDevices.filter((device) =>
        device.toLowerCase().includes(formData.device.toLowerCase())
      );
      setFilteredDevices(filtered.slice(0, 8)); // Показываем максимум 8 вариантов
      setShowSuggestions(filtered.length > 0);
    } else {
      setFilteredDevices([]);
      setShowSuggestions(false);
    }
  }, [formData.device]);

  // Фильтрация клиентов при вводе телефона
  useEffect(() => {
    if (formData.clientPhone.length > 0) {
      const searchValue = formData.clientPhone.replace(/\D/g, ""); // Убираем все нецифровые символы для поиска
      const filtered = savedClients.filter((client) => {
        const clientPhoneNumbers = client.phone.replace(/\D/g, "");
        const clientNameLower = client.name.toLowerCase();
        const searchLower = formData.clientPhone.toLowerCase();
        
        return (
          clientPhoneNumbers.includes(searchValue) ||
          clientNameLower.includes(searchLower)
        );
      });
      setFilteredClients(filtered.slice(0, 8)); // Показываем максимум 8 вариантов
      setShowClientSuggestions(filtered.length > 0);
    } else {
      setFilteredClients([]);
      setShowClientSuggestions(false);
    }
  }, [formData.clientPhone]);

  // Закрытие подсказок при клике вне
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      
      // Закрытие подсказок устройств
      if (
        suggestionsRef.current &&
        !suggestionsRef.current.contains(target) &&
        deviceInputRef.current &&
        !deviceInputRef.current.contains(target)
      ) {
        setShowSuggestions(false);
      }

      // Закрытие подсказок клиентов
      if (
        clientSuggestionsRef.current &&
        !clientSuggestionsRef.current.contains(target) &&
        clientPhoneInputRef.current &&
        !clientPhoneInputRef.current.contains(target)
      ) {
        setShowClientSuggestions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Здесь будет логика отправки данных на сервер
    // Пока просто симулируем задержку
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log("Создан заказ:", { ...formData, parts });
    
    // Перенаправляем на страницу заказов
    router.push("/admin");
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    
    // Для поля телефона применяем форматирование
    if (name === "clientPhone") {
      const formatted = formatPhoneNumber(value);
      setFormData((prev) => ({ ...prev, [name]: formatted }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleDeviceSelect = (device: string) => {
    setFormData((prev) => ({ ...prev, device }));
    setShowSuggestions(false);
    deviceInputRef.current?.focus();
  };

  const handleClientSelect = (client: Client) => {
    setFormData((prev) => ({
      ...prev,
      clientPhone: client.phone,
      clientName: client.name,
    }));
    setShowClientSuggestions(false);
    clientPhoneInputRef.current?.focus();
  };

  const handleAddPart = () => {
    if (newPart.name.trim() && newPart.price.trim()) {
      const part: Part = {
        id: Date.now().toString(),
        name: newPart.name.trim(),
        price: newPart.price.trim(),
      };
      setParts((prev) => [...prev, part]);
      setNewPart({ name: "", price: "" });
    }
  };

  const handleRemovePart = (id: string) => {
    setParts((prev) => prev.filter((part) => part.id !== id));
  };

  const totalPartsPrice = parts.reduce((sum, part) => {
    const price = parseFloat(part.price) || 0;
    return sum + price;
  }, 0);

  return (
    <SidebarProvider>
      <AdminSidebar />
      <SidebarInset>
        <div className="flex flex-col gap-4 p-4 md:gap-5 md:px-8 md:py-7">
          <AdminHeader />
          
          <div className="flex items-center gap-4">
            <Link href="/admin">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Назад
              </Button>
            </Link>
            <h1 className="font-serif text-[28px] font-medium text-foreground md:text-[32px]">
              Создать новый заказ
            </h1>
          </div>

          <Card>
            <CardHeader>
              <h2 className="font-serif text-[20px] font-medium text-foreground md:text-[24px]">
                Информация о заказе
              </h2>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                {/* Основная информация */}
                <div className="flex flex-col gap-4">
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="relative flex flex-col gap-2">
                      <Label htmlFor="device">Устройство *</Label>
                      <Input
                        ref={deviceInputRef}
                        id="device"
                        name="device"
                        value={formData.device}
                        onChange={handleChange}
                        onFocus={() => {
                          if (formData.device.length > 0 && filteredDevices.length > 0) {
                            setShowSuggestions(true);
                          }
                        }}
                        placeholder="Начните вводить название..."
                        required
                        autoComplete="off"
                      />
                      {showSuggestions && filteredDevices.length > 0 && (
                        <div
                          ref={suggestionsRef}
                          className="absolute top-full z-50 mt-1 w-full rounded-md border border-border bg-background shadow-lg max-h-64 overflow-y-auto"
                        >
                          {filteredDevices.map((device, index) => (
                            <button
                              key={index}
                              type="button"
                              onClick={() => handleDeviceSelect(device)}
                              className="w-full px-3 py-2 text-left text-sm text-foreground hover:bg-muted transition-colors first:rounded-t-md last:rounded-b-md"
                            >
                              {device}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="flex flex-col gap-2">
                      <Label htmlFor="imei">IMEI</Label>
                      <Input
                        id="imei"
                        name="imei"
                        value={formData.imei}
                        onChange={handleChange}
                        placeholder="Например: 123456789012345"
                        maxLength={15}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="issue">Проблема *</Label>
                      <select
                        id="issue"
                        name="issue"
                        value={formData.issue}
                        onChange={handleChange}
                        className="h-10 w-full rounded-md border border-input bg-transparent px-3 py-[10px] text-sm shadow-xs outline-none focus:ring-2 focus:ring-ring"
                        required
                      >
                        <option value="">Выберите проблему</option>
                        {issueOptions.map((issue) => (
                          <option key={issue} value={issue}>
                            {issue}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="price">Стоимость *</Label>
                      <Input
                        id="price"
                        name="price"
                        type="number"
                        value={formData.price}
                        onChange={handleChange}
                        placeholder="0"
                        min="0"
                        required
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <Label htmlFor="status">Статус *</Label>
                      <select
                        id="status"
                        name="status"
                        value={formData.status}
                        onChange={handleChange}
                        className="h-10 w-full rounded-md border border-input bg-transparent px-3 py-[10px] text-sm shadow-xs outline-none focus:ring-2 focus:ring-ring"
                        required
                      >
                        {statusOptions.map((status) => (
                          <option key={status} value={status}>
                            {status}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Детали для ремонта */}
                <div className="flex flex-col gap-4 border-t pt-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif text-[18px] font-medium text-foreground">
                      Детали для ремонта
                    </h3>
                    {parts.length > 0 && (
                      <span className="text-sm text-muted-foreground">
                        Итого: {totalPartsPrice.toLocaleString("ru-RU")} ₽
                      </span>
                    )}
                  </div>

                  {/* Форма добавления детали */}
                  <div className="grid grid-cols-1 gap-3 md:grid-cols-[1fr_auto_auto] md:items-end">
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="partName">Название детали</Label>
                      <Input
                        id="partName"
                        value={newPart.name}
                        onChange={(e) =>
                          setNewPart((prev) => ({ ...prev, name: e.target.value }))
                        }
                        placeholder="Например: Дисплей, Задняя крышка"
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            e.preventDefault();
                            handleAddPart();
                          }
                        }}
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="partPrice">Цена</Label>
                      <Input
                        id="partPrice"
                        type="number"
                        value={newPart.price}
                        onChange={(e) =>
                          setNewPart((prev) => ({ ...prev, price: e.target.value }))
                        }
                        placeholder="0"
                        min="0"
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            e.preventDefault();
                            handleAddPart();
                          }
                        }}
                      />
                    </div>
                    <Button
                      type="button"
                      variant="default"
                      onClick={handleAddPart}
                      disabled={!newPart.name.trim() || !newPart.price.trim()}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>

                  {/* Список добавленных деталей */}
                  {parts.length > 0 && (
                    <div className="flex flex-col gap-2 rounded-md border border-border bg-secondary/50 p-3">
                      {parts.map((part) => (
                        <div
                          key={part.id}
                          className="flex items-center justify-between gap-3 rounded-md bg-background px-3 py-2"
                        >
                          <div className="flex flex-1 items-center gap-3">
                            <span className="text-sm font-medium text-foreground">
                              {part.name}
                            </span>
                            <span className="text-sm text-muted-foreground">
                              {parseFloat(part.price).toLocaleString("ru-RU")} ₽
                            </span>
                          </div>
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            onClick={() => handleRemovePart(part.id)}
                            className="h-8 w-8 p-0"
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Информация о клиенте */}
                <div className="flex flex-col gap-4 border-t pt-4">
                  <h3 className="font-serif text-[18px] font-medium text-foreground">
                    Информация о клиенте
                  </h3>
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="clientName">Имя клиента</Label>
                      <Input
                        id="clientName"
                        name="clientName"
                        value={formData.clientName}
                        onChange={handleChange}
                        placeholder="Алексей"
                      />
                    </div>

                    <div className="relative flex flex-col gap-2">
                      <Label htmlFor="clientPhone">Телефон клиента</Label>
                      <Input
                        ref={clientPhoneInputRef}
                        id="clientPhone"
                        name="clientPhone"
                        type="tel"
                        value={formData.clientPhone}
                        onChange={handleChange}
                        onFocus={() => {
                          if (formData.clientPhone.length > 0 && filteredClients.length > 0) {
                            setShowClientSuggestions(true);
                          }
                        }}
                        placeholder="+7 (___) ___-__-__"
                        pattern="\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}"
                        maxLength={18}
                        autoComplete="off"
                      />
                      {showClientSuggestions && filteredClients.length > 0 && (
                        <div
                          ref={clientSuggestionsRef}
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
                </div>

                {/* Дополнительная информация */}
                <div className="flex flex-col gap-2 border-t pt-4">
                  <Label htmlFor="notes">Примечания</Label>
                  <textarea
                    id="notes"
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    rows={4}
                    className="w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-xs outline-none focus:ring-2 focus:ring-ring"
                    placeholder="Дополнительная информация о заказе..."
                  />
                </div>

                {/* Предпросмотр статуса */}
                <div className="flex items-center gap-2 border-t pt-4">
                  <span className="text-sm text-muted-foreground">Статус:</span>
                  <Badge variant="default">{formData.status}</Badge>
                </div>

                {/* Кнопки действий */}
                <div className="flex flex-col gap-2 border-t pt-4 md:flex-row md:justify-end">
                  <Link href="/admin">
                    <Button type="button" variant="outline" className="w-full md:w-auto">
                      Отмена
                    </Button>
                  </Link>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full md:w-auto"
                  >
                    <Save className="h-4 w-4 mr-2" />
                    {isSubmitting ? "Создание..." : "Создать заказ"}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
