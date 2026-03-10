import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Plus } from "lucide-react"

export function AdminHeader() {
  return (
    <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between md:gap-4">
      <div className="flex items-center gap-3">
        <SidebarTrigger className="md:hidden" />
        <h1 className="font-serif text-[28px] font-normal text-foreground md:text-[42px]">
          Админ-панель
        </h1>
      </div>
      <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-[10px]">
        <div className="w-full md:w-[280px]">
          <Input
            type="text"
            placeholder="Поиск клиента, IMEI, заказа"
            className="bg-background"
          />
        </div>
        <Button variant="default" size="default" className="w-full md:w-auto">
          <Plus className="h-4 w-4" />
          Новый заказ
        </Button>
      </div>
    </div>
  )
}
