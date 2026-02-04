import { AtSign, Plus, X } from "lucide-react";
import type { SyntheticEvent } from "react";

type InviteGuestModalProps = {
  emails: string[];
  onClose: () => void;
  onAddEmail: (email: string) => void;
  onRemoveEmail: (email: string) => void;
};

export default function InviteGuestModal({
  emails,
  onClose,
  onAddEmail,
  onRemoveEmail,
}: InviteGuestModalProps) {
  function handleAddNewEmail(e: SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();

    const data = new FormData(e.currentTarget);
    const email = data.get("email");

    if (!email || typeof email !== "string") return;
    if (emails.includes(email)) return;

    onAddEmail(email);
    e.currentTarget.reset();
  }

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-2 sm:p-0">
      <div className="w-2xl rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Selecionar Convidados</h2>
            <button type="button" onClick={onClose}>
              <X className="size-5 text-zinc-400 cursor-pointer" />
            </button>
          </div>
          <p className="text-sm text-zinc-400">
            Os convidados irão receber e-mails para confirmar a participação na
            viagem.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {emails.map((email) => (
            <div
              key={email}
              className="py-1.5 px-2.5 rounded-md bg-zinc-800 flex items-center gap-2"
            >
              <span className="text-zinc-300">{email}</span>
              <button type="button" onClick={() => onRemoveEmail(email)}>
                <X className="size-4 text-zinc-400 cursor-pointer" />
              </button>
            </div>
          ))}
        </div>

        <div className="w-full h-px bg-zinc-800" />

        <form
          className="p-2.5 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2"
          onSubmit={handleAddNewEmail}
        >
          <AtSign className="size-5 text-zinc-400" />
          <input
            type="email"
            name="email"
            placeholder="Digite o e-mail do convidado"
            className="
              bg-transparent
              text-base sm:text-lg
              placeholder:text-zinc-400
              flex-1
              outline-none
            "
          />

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
              cursor-pointer
            "
          >
            Convidar
            <Plus className="size-5" />
          </button>
        </form>
      </div>
    </div>
  );
}
