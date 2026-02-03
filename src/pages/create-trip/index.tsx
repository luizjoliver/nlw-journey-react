import { ArrowRight, UserRoundPlus } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router";
import bg from "../../assets/bg.png";
import logo from "../../assets/logo.svg";
import ConfirmTripModal from "../../components/ConfirmTripModal";
import DestinationAndDate from "../../components/DestinationAndDate";
import InviteGuestModal from "../../components/InviteGuestModal";

function CreateTripPage() {
  const [isGuestsInputOpen, setIsGuestsInputOpen] = useState(false);
  const [isGuestsModalOpen, setIsGuestsModalOpen] = useState(false);
  const [emailsToInvite, setEmailsToInvite] = useState<string[]>([]);
  const [isConfirmTripModalOpen, setIsConfirmTripModalOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <main
      className="
        min-h-screen 
        flex items-center justify-center 
        bg-no-repeat bg-center 
        px-4
      "
      style={{ backgroundImage: `url(${bg})` }}
    >
      <section className="w-full max-w-3xl text-center space-y-10">
        <div className="flex flex-col gap-3 items-center">
          <img src={logo} alt="logo plann.er" className="w-40 sm:w-auto" />
          <p className="text-base sm:text-lg text-zinc-300">
            Convide seus amigos e planeje sua próxima viagem!
          </p>
        </div>

        <div className="space-y-4">
          <DestinationAndDate
            isGuestsInputOpen={isGuestsInputOpen}
            onContinue={() => setIsGuestsInputOpen(true)}
            onEditDestination={() => setIsGuestsInputOpen(false)}
          />
          {isGuestsInputOpen && (
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
                onClick={() => setIsGuestsModalOpen(true)}
              >
                <UserRoundPlus className="size-5 text-zinc-400" />

                {emailsToInvite.length > 0 ? (
                  <span>{emailsToInvite.length} Pessoa(s) convidada(s)</span>
                ) : (
                  <span className="text-zinc-400 text-lg">
                    Quem estará na viagem ?
                  </span>
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
                onClick={() => setIsConfirmTripModalOpen(true)}
              >
                Confirmar viagem
                <ArrowRight className="size-5" />
              </button>
            </div>
          )}
        </div>

        <p className="text-xs sm:text-sm text-zinc-500">
          Ao planejar sua viagem pela plann.er você automaticamente concorda
          <br className="hidden sm:block" />
          com nossos{" "}
          <a href="" className="text-zinc-300 underline">
            termos de uso
          </a>{" "}
          e{" "}
          <a href="" className="text-zinc-300 underline">
            políticas de privacidade
          </a>
          .
        </p>
      </section>
      {isGuestsModalOpen && (
        <InviteGuestModal
          emails={emailsToInvite}
          onClose={() => setIsGuestsModalOpen(false)}
          onAddEmail={(email) => setEmailsToInvite((prev) => [...prev, email])}
          onRemoveEmail={(email) =>
            setEmailsToInvite((prev) => prev.filter((e) => e !== email))
          }
        />
      )}
      {isConfirmTripModalOpen && (
        <ConfirmTripModal
          emails={emailsToInvite}
          onClose={() => setIsConfirmTripModalOpen(false)}
          onConfirmTrip={() => navigate("/trips/123")}
          onAddEmail={(email) => setEmailsToInvite((prev) => [...prev, email])}
        />
      )}
    </main>
  );
}

export default CreateTripPage;
