import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";

const orders = [
  {
    id: "#A-1942",
    device: "iPhone 14 Pro",
    issue: "Экран",
    price: "9 900 ₽",
    status: "Диагностика",
  },
  {
    id: "#A-1943",
    device: "Samsung S23",
    issue: "Плата",
    price: "14 500 ₽",
    status: "Срочно",
  },
  {
    id: "#A-1944",
    device: "Xiaomi 13",
    issue: "Аккумулятор",
    price: "3 400 ₽",
    status: "Ожидает",
  },
  {
    id: "#A-1945",
    device: "iPhone 13",
    issue: "После воды",
    price: "11 800 ₽",
    status: "В работе",
  },
];

export function LeadsAndOrders() {
  return (
    <Card className="py-0 gap-0">
      <CardHeader className="p-4">
        <div className="flex flex-col gap-1.5">
          <h2 className="font-serif text-[24px] font-medium text-foreground md:text-[28px]">
            Лиды и активные заказы
          </h2>
          <p className="text-xs text-muted-foreground font-sans md:text-[13px]">
            Приоритетные обращения за последние 2 часа
          </p>
        </div>
      </CardHeader>
      <CardContent className="px-4 pb-4 pt-0">
        <div className="flex flex-col gap-2">
          {orders.map((order, index) => (
            <div
              key={index}
              className="flex flex-col gap-2 bg-secondary p-3 md:flex-row md:items-center md:justify-between md:gap-4 md:px-3 md:py-2.5"
            >
              <div className="flex flex-col gap-1 md:flex-1">
                <span className="text-xs text-foreground font-sans md:text-[13px]">
                  {order.id} • {order.device}
                </span>
                <span className="text-xs text-muted-foreground font-sans md:hidden">
                  {order.issue}
                </span>
              </div>
              <div className="flex items-center justify-between md:contents">
                <span className="hidden text-[13px] text-muted-foreground font-sans md:inline">
                  {order.issue}
                </span>
                <span className="font-serif text-base font-normal text-primary md:text-lg">
                  {order.price}
                </span>
                <Badge variant="default" className="w-fit">
                  {order.status}
                </Badge>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-2 mt-4 pt-4 md:flex-row md:items-center md:justify-between">
          <Button variant="outline" size="default" className="w-full md:w-auto">
            <Plus className="h-4 w-4" />
            Экспорт CSV
          </Button>
          <div className="flex flex-col gap-2 md:flex-row">
            <Link href="/admin/orders/new">
              <Button variant="default" size="default" className="w-full md:w-auto">
                <Plus className="h-4 w-4 mr-2" />
                Создать заказ
              </Button>
            </Link>
            <Button variant="outline" size="default" className="w-full md:w-auto">
              Открыть все заказы
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
