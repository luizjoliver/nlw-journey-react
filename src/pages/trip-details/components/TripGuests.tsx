import { CircleDashed, UserCog } from "lucide-react";

export default function TripGuests() {
  return (
    <div className="space-y-6 ">
      <h2 className="font-semibold text-xl">Convidados</h2>
      <div className="space-y-5">
        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1.5">
            <span className="block font-medium">Jessica White</span>
            <span className="block text-sm text-zinc-400 truncate">
              JessicaWhite@gmail.com
            </span>
          </div>
          <CircleDashed className="text-zinc-400 shrink-0 size-5" />
        </div>
        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1.5">
            <span className="block font-medium">Dr. Rita</span>
            <span className="block text-sm text-zinc-400 truncate">
              DrRita@gmail.com
            </span>
          </div>
          <CircleDashed className="text-zinc-400 shrink-0 size-5" />
        </div>
      </div>
      <button
        type="button"
        className="
            text-zinc-200
            rounded-lg
            px-5 h-11
            font-medium
            flex items-center justify-center gap-2
           bg-zinc-700
            hover:bg-zinc-500
            w-full
            cursor-pointer
          "
      >
        <UserCog className="size-5" />
        Gerenciar Convidados
      </button>
    </div>
  );
}
