import { Calendar, MapPin, Settings2 } from "lucide-react";

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

        <button
          type="button"
          className="
            text-zinc-200
            rounded-lg
            px-5 py-3
            font-medium
            flex items-center justify-center gap-2
            bg-zinc-700
            hover:bg-zinc-500
            w-full sm:w-auto
            cursor-pointer
          "
        >
          Alterar local/data
          <Settings2 className="size-5" />
        </button>
      </div>
    </div>
  );
}
