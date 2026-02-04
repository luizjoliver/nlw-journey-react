import { Calendar, MapPin, Settings2 } from "lucide-react";
import Button from "../../../Components-Atomic/Button";

export default function DestinationInfosHeader() {
  return (
    <div className="px-4 h-16 rounded-xl bg-zinc-900 shadow-shape flex items-center justify-between">
      <div className="flex items-center gap-2">
        <MapPin className="size-5 text-zinc-400" />
        <span className="text-lg">Florianopolis,Brasil</span>
      </div>
      <div className="flex items-center gap-5">
        <div className="flex items-center gap-2">
          <Calendar className="size-5 text-zinc-400" />
          <span className="text-lg">17 a 27 de agosto</span>
        </div>

        <div className="hidden sm:block w-px h-6 bg-zinc-800" />

        <Button>
          Alterar local/data
          <Settings2 className="size-5" />
        </Button>
      </div>
    </div>
  );
}
