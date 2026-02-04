import { Calendar, Tag, X } from "lucide-react";

type CreateActivityModalProps = {
  onClose: () => void;
};

export default function CreateActivityModal({
  onClose,
}: CreateActivityModalProps) {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center  p-2 sm:p-0">
      <div className="w-2xl rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Cadastrar atividade</h2>
            <button type="button" onClick={onClose}>
              <X className="size-5 text-zinc-400 cursor-pointer" />
            </button>
          </div>
          <p className="text-sm text-zinc-400">
            Todos os convidados podem visualizar as atividades
          </p>
        </div>

        <form className="space-y-3">
          <div className="py-2.5 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
            <Tag className="size-5 text-zinc-400" />
            <input
              type="text"
              name="title"
              placeholder="Qual atividade"
              className="
                bg-transparent
                text-base sm:text-lg
                placeholder:text-zinc-400
                flex-1
                outline-none
              "
            />
          </div>

          <div className="h-14 flex-1 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
            <Calendar className="size-5 text-zinc-400" />
            <input
              type="datetime-local"
              name="occurs_at"
              placeholder="Data e horário da atividade"
              className="
                bg-transparent
                text-base sm:text-lg
                placeholder:text-zinc-400
                flex-1
                scheme-dark
                outline-none
              "
            />
          </div>

          <button
            type="submit"
            className="
              bg-lime-300
              text-lime-950
              rounded-lg
              px-5 py-2
              font-medium
              flex items-center justify-center gap-2
              hover:brightness-90
              w-full
             cursor-pointer
            "
          >
            Salvar Atividade
          </button>
        </form>
      </div>
    </div>
  );
}
