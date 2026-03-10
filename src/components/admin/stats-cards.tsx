import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const stats = [
  {
    title: "Новые заявки",
    value: "64",
    badge: "+12%",
  },
  {
    title: "В работе",
    value: "27",
    badge: "8 срочных",
  },
  {
    title: "Готово сегодня",
    value: "18",
    badge: "94% в срок",
  },
  {
    title: "Выручка день",
    value: "189 400 ₽",
    badge: "средний чек 7 020",
  },
];

export function StatsCards() {
  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <Card className="py-0 gap-0" key={index}>
          <CardHeader className="p-4 md:p-6">
            <h3 className="text-sm font-medium text-card-foreground font-sans md:text-base">
              {stat.title}
            </h3>
          </CardHeader>
          <CardContent className="p-4 pt-0 md:p-6 md:pt-0">
            <div className="flex flex-col gap-2">
              <p className="text-xl font-medium text-card-foreground font-sans md:text-2xl">
                {stat.value}
              </p>
              <Badge variant="default" className="w-fit">
                {stat.badge}
              </Badge>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
