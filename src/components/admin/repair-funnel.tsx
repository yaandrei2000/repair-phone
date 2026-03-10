import { Card, CardContent, CardHeader } from "@/components/ui/card";

const stages = [
  {
    label: "Приняты",
    count: "24",
  },
  {
    label: "Диагностика",
    count: "17",
  },
  {
    label: "Ожидают деталь",
    count: "6",
  },
  {
    label: "Готово",
    count: "18",
  },
];

export function RepairFunnel() {
  return (
    <Card className="py-0 gap-0">
      <CardHeader className="p-4">
        <div className="flex flex-col gap-1.5">
          <h2 className="font-serif text-[22px] font-medium text-foreground md:text-[26px]">
            Воронка ремонтов
          </h2>
          <p className="text-xs text-muted-foreground font-sans md:text-[13px]">
            Стадии заказов за сегодня
          </p>
        </div>
      </CardHeader>
      <CardContent className="px-4 pb-4 pt-0">
        <div className="flex flex-col gap-2.5">
          {stages.map((stage, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-secondary px-3 py-2.5"
            >
              <span className="text-[13px] text-foreground font-sans">
                {stage.label}
              </span>
              <span className="font-serif text-lg font-normal text-primary">
                {stage.count}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
