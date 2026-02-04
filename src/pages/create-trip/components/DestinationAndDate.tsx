import { ArrowRight, Calendar, MapPin, Settings2 } from "lucide-react";
import Button from "../../../Components-Atomic/Button";

type DestinationAndDateProps = {
  isGuestsInputOpen: boolean;
  onContinue: () => void;
  onEditDestination: () => void;
};

export default function DestinationAndDate({
  isGuestsInputOpen,
  onContinue,
  onEditDestination,
}: DestinationAndDateProps) {
  return (
    <div
      className="
        bg-zinc-900
        px-4 py-4
        rounded-xl
        flex flex-col gap-4
        sm:flex-row sm:items-center sm:gap-3
        shadow-shape
      "
    >
      <div className="flex items-center gap-2 flex-1 w-full">
        <MapPin className="size-5 text-zinc-400" />
        <input
          type="text"
          placeholder="Para onde você vai?"
          disabled={isGuestsInputOpen}
          className="
            bg-transparent
            text-base sm:text-lg
            placeholder:text-zinc-400
            flex-1
            outline-none
          "
        />
      </div>

      <div className="flex items-center gap-2 w-full sm:w-auto">
        <Calendar className="size-5 text-zinc-400" />
        <input
          type="text"
          placeholder="Quando?"
          disabled={isGuestsInputOpen}
          className="
            bg-transparent
            text-base sm:text-lg
            placeholder:text-zinc-400
            w-full sm:w-36
            outline-none
          "
        />
      </div>

      <div className="hidden sm:block w-px h-6 bg-zinc-800" />

      {!isGuestsInputOpen ? (
        <Button variant="primary" onClick={onContinue}>
          Continuar
          <ArrowRight className="size-5" />
        </Button>
      ) : (
        <Button type="button" onClick={onEditDestination}>
          Alterar local/data
          <Settings2 className="size-5" />
        </Button>
      )}
    </div>
  );
}
