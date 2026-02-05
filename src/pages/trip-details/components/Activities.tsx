import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { api } from "../../../lib/axios";
import type { Activity } from "../../../model/Activity";
import { CircleCheck } from "lucide-react";

export default function Activities() {
  const [activities, setActivities] = useState<Activity[]>();
  const { tripId } = useParams();

  useEffect(() => {
    api
      .get(`/trips/${tripId}/activities`)
      .then((resp) => setActivities(resp.data.trip));
  }, [tripId]);
  return (
    <div className="space-y-8">
      {activities?.map((activity, i) => (
        <div className="space-y-2.5" key={i}>
          <div className="flex gap-2 items-baseline">
            <span className="text-xl text-zinc-300 font-semibold">
              Dia{" "}
              {format(activity.date, "d", {
                locale: ptBR,
              })}
            </span>
            <span className="text-xs text-zinc-500">
              {format(activity.date, "EEEE")}
            </span>
          </div>
          {activity.activities.length > 0 ? (
            <div>
              {activity.activities.map((activity) => (
                <div
                  className="px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape flex items-center gap-3"
                  key={activity.id}
                >
                  <CircleCheck className="size-5 text-lime-300" />
                  <span className="text-zinc-100">{activity.title}</span>
                  <span className="text-zinc-400 text-sm ml-auto">
                    {format(activity.occurs_at, "HH:mm")}h
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-zinc-500 text-sm">
              Nenhuma atividade cadastrada nesta data
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
