import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { ArrowRight, Calendar, MapPin, Settings2, X } from "lucide-react";
import { useState } from "react";
import { DayPicker, type DateRange } from "react-day-picker";
import "react-day-picker/dist/style.css";
import Button from "../../../Components-Atomic/Button";
type DestinationAndDateProps = {
  isGuestsInputOpen: boolean;
  onContinue: () => void;
  onEditDestination: () => void;
  setDestination: (destination: string) => void;
  setEventStartAndEndDate: (dates: DateRange | undefined) => void;
  eventStartAndEndDate: DateRange | undefined;
};

export default function DestinationAndDate({
  isGuestsInputOpen,
  onContinue,
  onEditDestination,
  setDestination,
  setEventStartAndEndDate,
  eventStartAndEndDate,
}: DestinationAndDateProps) {
  const [isDatePickeOpen, setIsDatePickeOpen] = useState(false);

  const displayedDate =
    eventStartAndEndDate && eventStartAndEndDate.from && eventStartAndEndDate.to
      ? format(eventStartAndEndDate.from, "d' de 'LLL", {
          locale: ptBR,
        })
          .concat(" até ")
          .concat(
            format(eventStartAndEndDate.to, "d' de 'LLL", {
              locale: ptBR,
            }),
          )
      : null;
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
          onChange={(e) => setDestination(e.target.value)}
        />
      </div>

      <button
        onClick={() => setIsDatePickeOpen(true)}
        className="flex items-center gap-2 w-full sm:w-60  cursor-pointer text-left"
        disabled={isGuestsInputOpen}
      >
        <Calendar className="size-5 text-zinc-400" />
        <span className="text-lg text-zinc-400 w-40 flex-1">
          {displayedDate || "Quando ?"}
        </span>
      </button>

      {isDatePickeOpen && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center  p-2 sm:p-0">
          <div className="rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Selecione a data</h2>

                <X
                  className="size-5 text-zinc-400 cursor-pointer"
                  onClick={() => setIsDatePickeOpen(false)}
                />
              </div>
            </div>

            <DayPicker
              mode="range"
              selected={eventStartAndEndDate}
              onSelect={setEventStartAndEndDate}
            />
          </div>
        </div>
      )}

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
