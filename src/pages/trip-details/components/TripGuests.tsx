import { CheckCircle2, CircleDashed, UserCog } from "lucide-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Button from "../../../Components-Atomic/Button";
import { api } from "../../../lib/axios";
import type { Guest } from "../../../model/Guest";

export default function TripGuests() {
  const [guests, setGuests] = useState<Guest[]>();
  const { tripId } = useParams();

  useEffect(() => {
    api.get(`/trips/${tripId}`).then((resp) => setGuests(resp.data.trip));
  }, [tripId]);
  return (
    <div className="space-y-6 ">
      <h2 className="font-semibold text-xl">Convidados</h2>
      <div className="space-y-5">
        {guests?.map((guest, index) => (
          <div
            className="flex items-center justify-between gap-4"
            key={guest.id}
          >
            <div className="space-y-1.5">
              <span className="block font-medium">
                {guest.name ?? `Convidado ${index + 1}`}
              </span>
              <span className="block text-sm text-zinc-400 truncate">
                {guest.email}
              </span>
            </div>

            {guest.is_confirmeed ? (
              <CheckCircle2 className="shrink-0 size-5 text-lime-300" />
            ) : (
              <CircleDashed className="text-zinc-400 shrink-0 size-5" />
            )}
          </div>
        ))}
      </div>
      <Button fullWidth>
        <UserCog className="size-5" />
        Gerenciar Convidados
      </Button>
    </div>
  );
}
