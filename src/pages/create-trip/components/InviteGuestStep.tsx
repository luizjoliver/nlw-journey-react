import { ArrowRight, UserRoundPlus } from "lucide-react";
import Button from "../../../Components-Atomic/Button";

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
      <Button variant="primary" onClick={openConfirmTripModal}>
        Confirmar Viagem
        <ArrowRight className="size-5" />
      </Button>
    </div>
  );
}
