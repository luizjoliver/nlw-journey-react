import { ArrowRight, UserRoundPlus } from "lucide-react";

type InviteGuestStepProps = {
  emails: string[];
  openGuestModal: () => void;
  openConfirmTripModal: () => void;
};

export default function InviteGuestStep({
  openGuestModal,
  openConfirmTripModal,
  emails,
}: InviteGuestStepProps) {
  return (
    <div
      className="
              bg-zinc-900
              px-4 py-4
              rounded-xl
              flex flex-col gap-4
              sm:flex-row sm:items-center sm:gap-3
              shadow-shape text-white
            "
    >
      <button
        className="flex items-center gap-2 flex-1 w-full cursor-pointer"
        type="button"
        onClick={openGuestModal}
      >
        <UserRoundPlus className="size-5 text-zinc-400" />

        {emails.length > 0 ? (
          <span>{emails.length} Pessoa(s) convidada(s)</span>
        ) : (
          <span className="text-zinc-400 text-lg">Quem estará na viagem ?</span>
        )}

        <input
          type="text"
          placeholder=""
          className="
                  bg-transparent
                  text-base sm:text-lg
                  placeholder:text-zinc-400
                  flex-1
                  outline-none
                "
        />
      </button>
      <div className="hidden sm:block w-px h-6 bg-zinc-800" />
      <button
        className="
                bg-lime-300
                text-lime-950
                rounded-lg
                px-5 py-3
                font-medium
                flex items-center justify-center gap-2
                cursor-pointer
                hover:brightness-90
                w-full sm:w-auto
              "
        onClick={openConfirmTripModal}
      >
        Confirmar viagem
        <ArrowRight className="size-5" />
      </button>
    </div>
  );
}
