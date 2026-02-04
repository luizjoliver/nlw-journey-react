import { Link2, Plus } from "lucide-react";
import Button from "../../../Components-Atomic/Button";

export default function ImportantLinks() {
  return (
    <div className="space-y-6 ">
      <h2 className="font-semibold text-xl">Links Importantes</h2>
      <div className="space-y-5">
        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1.5">
            <span className="block font-medium">Reserva do AirBnB</span>
            <a
              className="block text-xs text-zinc-400 truncate hover:text-zinc-200"
              href="#"
            >
              https://www.airbnb.com.br/rooms/889765451834407488?check_in=2026-03-06&check_out=2026-03-08&photo_id=1650129458&source_impression_id=p3_1770164498_P3ZOZaPdQp8fFO2p&previous_page_section_name=1000
            </a>
          </div>
          <Link2 className="text-zinc-400 shrink-0 size-5" />
        </div>
        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1.5">
            <span className="block font-medium">Reserva do AirBnB</span>
            <a
              className="block text-xs text-zinc-400 truncate hover:text-zinc-200"
              href="#"
            >
              https://www.airbnb.com.br/rooms/889765451834407488?check_in=2026-03-06&check_out=2026-03-08&photo_id=1650129458&source_impression_id=p3_1770164498_P3ZOZaPdQp8fFO2p&previous_page_section_name=1000
            </a>
          </div>
          <Link2 className="text-zinc-400 shrink-0 size-5" />
        </div>
      </div>
      <Button>
        <Plus className="size-5" />
        Cadastrar novo Link
      </Button>
    </div>
  );
}
