import { Plus } from "lucide-react";
import { useState } from "react";
import Activities from "./components/Activities";
import CreateActivityModal from "./components/CreateActivityModal";
import DestinationInfosHeader from "./components/DestinationInfosHeader";
import ImportantLinks from "./components/ImportantLinks";
import TripGuests from "./components/TripGuests";

export default function TripsDetail() {
  const [isCreateActivityModalOpen, setIsCreateActivityModalOpen] =
    useState(false);

  function openCreateActivityModal() {
    setIsCreateActivityModalOpen(true);
  }
  function closeCreateActivityModal() {
    setIsCreateActivityModalOpen(false);
  }
  return (
    <div className="max-w-6xl px-6 py-10 mx-auto space-y-10">
      <DestinationInfosHeader />
      <main className="flex gap-16 px-4">
        <div className="flex-1 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-semibold">Atividades</h2>

            <button
              type="button"
              className="
            bg-lime-300
            text-lime-950
            rounded-lg
            px-5 py-2
            font-medium
            flex items-center justify-center gap-2
            hover:brightness-90
            w-full sm:w-auto
            cursor-pointer
          "
              onClick={openCreateActivityModal}
            >
              <Plus className="size-5" />
              Cadastrar Atividade
            </button>
          </div>

          <Activities />
        </div>
        <div className="w-80 space-y-6">
          <ImportantLinks />
          <div className="w-full h-px bg-zinc-800" />

          <TripGuests />
        </div>
      </main>

      {isCreateActivityModalOpen && (
        <CreateActivityModal onClose={closeCreateActivityModal} />
      )}
    </div>
  );
}
