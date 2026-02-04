import { AtSign, Plus, X } from "lucide-react";
import type { SyntheticEvent } from "react";
import Button from "../../../Components-Atomic/Button";

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

            <X
              className="size-5 text-zinc-400 cursor-pointer"
              onClick={onClose}
            />
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

              <Button onClick={() => onRemoveEmail(email)} type="button">
                <X className="size-4 text-zinc-400 cursor-pointer" />
              </Button>
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

          <Button type="submit" variant="primary" size="sm">
            Convidar
            <Plus className="size-5" />
          </Button>
        </form>
      </div>
    </div>
  );
}
