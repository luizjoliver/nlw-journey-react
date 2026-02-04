import { AtSign, Plane, User, X } from "lucide-react";
import type { SyntheticEvent } from "react";

type ConfirmTripModalProps = {
  emails: string[];
  onClose: () => void;
  onConfirmTrip: () => void;
  onAddEmail?: (email: string) => void;
};

export default function ConfirmTripModal({
  emails,
  onClose,
  onConfirmTrip,
  onAddEmail,
}: ConfirmTripModalProps) {
  function handleSubmit(e: SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();

    const data = new FormData(e.currentTarget);
    const email = data.get("email");

    if (
      onAddEmail &&
      email &&
      typeof email === "string" &&
      !emails.includes(email)
    ) {
      onAddEmail(email);
    }

    onConfirmTrip();
  }

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center  p-2 sm:p-0">
      <div className="w-2xl rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">
              Confirmar criação da viagem
            </h2>
            <button type="button" onClick={onClose}>
              <X className="size-5 text-zinc-400 cursor-pointer" />
            </button>
          </div>
          <p className="text-sm text-zinc-400">
            Para concluir a criação da viagem para
            <span className="text-zinc-100 font-semibold">
              {" "}
              Florianópolis, Brasil{" "}
            </span>
            nas datas de{" "}
            <span className="text-zinc-100 font-semibold">
              16 a 27 de Agosto de 2024
            </span>{" "}
            preencha seus dados abaixo:
          </p>
        </div>

        <form className="space-y-3" onSubmit={handleSubmit}>
          <div className="py-2.5 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
            <User className="size-5 text-zinc-400" />
            <input
              type="text"
              name="name"
              placeholder="Seu nome completo"
              className="
                bg-transparent
                text-base sm:text-lg
                placeholder:text-zinc-400
                flex-1
                outline-none
              "
            />
          </div>

          <div className="py-2.5 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
            <AtSign className="size-5 text-zinc-400" />
            <input
              type="email"
              name="email"
              placeholder="Digite o seu e-mail pessoal"
              className="
                bg-transparent
                text-base sm:text-lg
                placeholder:text-zinc-400
                flex-1
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
            Confirmar criação da viagem
            <Plane className="size-5" />
          </button>
        </form>
      </div>
    </div>
  );
}
