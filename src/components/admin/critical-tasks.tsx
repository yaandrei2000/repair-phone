import { Card, CardContent, CardHeader } from "@/components/ui/card";

const tasks = [
  "iPhone 13 Pro Max, плата после воды",
  "Samsung S23, нет сети после падения",
  "Xiaomi 13, повторная замена экрана",
];

export function CriticalTasks() {
  return (
    <Card className="w-full md:w-[340px] py-0 gap-0">
      <CardHeader className="p-4">
        <div className="flex flex-col gap-1.5">
          <h2 className="font-serif text-[22px] font-medium text-foreground md:text-[26px]">
            Критичные задачи
          </h2>
          <p className="text-xs text-muted-foreground font-sans md:text-[13px]">
            Требуют внимания мастера
          </p>
        </div>
      </CardHeader>
      <CardContent className="px-4 pb-4 pt-0">
        <div className="flex flex-col gap-2.5">
          {tasks.map((task, index) => (
            <p key={index} className="text-[13px] text-foreground font-sans">
              • {task}
            </p>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
