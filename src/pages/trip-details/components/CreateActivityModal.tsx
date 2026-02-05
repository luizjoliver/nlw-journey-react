import { Calendar, Tag, X } from "lucide-react";
import type { SyntheticEvent } from "react";
import { useParams } from "react-router";
import Button from "../../../Components-Atomic/Button";
import { api } from "../../../lib/axios";

type CreateActivityModalProps = {
  onClose: () => void;
};

export default function CreateActivityModal({
  onClose,
}: CreateActivityModalProps) {
  const { tripId } = useParams();

  function createActivity(e: SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const title = formData.get("title");
    const occursAt = formData.get("occurs_at")?.toString();

    api.post(`/trips/${tripId}/activities`, {
      title,
      occursAt,
    });

    window.document.location.reload()
  }

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center  p-2 sm:p-0">
      <div className="w-2xl rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Cadastrar atividade</h2>

            <X
              className="size-5 text-zinc-400 cursor-pointer"
              onClick={onClose}
            />
          </div>
          <p className="text-sm text-zinc-400">
            Todos os convidados podem visualizar as atividades
          </p>
        </div>

        <form className="space-y-3" onClick={createActivity}>
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

          <Button type="submit" variant="primary" size="sm" fullWidth>
            Salvar Atividade
          </Button>
        </form>
      </div>
    </div>
  );
}
