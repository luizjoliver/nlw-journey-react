import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Calendar, MapPin, Settings2 } from "lucide-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Button from "../../../Components-Atomic/Button";
import { api } from "../../../lib/axios";
import type { Trip } from "../../../model/Trip";

export default function DestinationInfosHeader() {
  const [tripData, setTripData] = useState<Trip | undefined>();
  const { tripId } = useParams();

  useEffect(() => {
    api.get(`/trips/${tripId}`).then((resp) => setTripData(resp.data.trip));
  }, [tripId]);

  const displayedDate = tripData
    ? format(tripData?.starts_at, "d' de 'LLL", {
        locale: ptBR,
      })
        .concat(" até ")
        .concat(
          format(tripData?.ends_at, "d' de 'LLL", {
            locale: ptBR,
          }),
        )
    : null;
  return (
    <div className="px-4 h-16 rounded-xl bg-zinc-900 shadow-shape flex items-center justify-between">
      <div className="flex items-center gap-2">
        <MapPin className="size-5 text-zinc-400" />
        <span className="text-lg">{tripData?.destination}</span>
      </div>
      <div className="flex items-center gap-5">
        <div className="flex items-center gap-2">
          <Calendar className="size-5 text-zinc-400" />
          <span className="text-lg">{displayedDate}</span>
        </div>

        <div className="hidden sm:block w-px h-6 bg-zinc-800" />

        <Button>
          Alterar local/data
          <Settings2 className="size-5" />
        </Button>
      </div>
    </div>
  );
}
