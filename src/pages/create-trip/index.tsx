import { useState, type SyntheticEvent } from "react";
import type { DateRange } from "react-day-picker";
import { useNavigate } from "react-router";
import bg from "../../assets/bg.png";
import logo from "../../assets/logo.svg";
import { api } from "../../lib/axios";
import ConfirmTripModal from "./components/ConfirmTripModal";
import DestinationAndDate from "./components/DestinationAndDate";
import InviteGuestModal from "./components/InviteGuestModal";
import InviteGuestStep from "./components/InviteGuestStep";

function CreateTripPage() {
  const [isGuestsInputOpen, setIsGuestsInputOpen] = useState(false);
  const [isGuestsModalOpen, setIsGuestsModalOpen] = useState(false);
  const [emailsToInvite, setEmailsToInvite] = useState<string[]>([]);
  const [isConfirmTripModalOpen, setIsConfirmTripModalOpen] = useState(false);

  const [eventStartAndEndDate, setEventStartAndEndDate] = useState<
    DateRange | undefined
  >();
  const [destination, setDestination] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [ownerEmail, setOwnerEmail] = useState("");

  const navigate = useNavigate();

  async function createTrip(e: SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(destination);
    console.log(eventStartAndEndDate);
    console.log(emailsToInvite);
    console.log(ownerName);
    console.log(ownerEmail);

    if (!destination) return;

    if (emailsToInvite.length === 0) return;

    if (!eventStartAndEndDate?.from || !eventStartAndEndDate?.to) return;

    if (!ownerEmail || !ownerName) return;

    const response = await api.post("/trips", {
      destination,
      starts_at: eventStartAndEndDate?.from,
      ends_at: eventStartAndEndDate?.to,
      emails_to_invite: emailsToInvite,
      owner_name: ownerName,
      owner_email: ownerEmail,
    });

    const { tripId } = response.data;
    navigate(`/trips/${tripId}`);
  }

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
            setDestination={setDestination}
            setEventStartAndEndDate={setEventStartAndEndDate}
            eventStartAndEndDate={eventStartAndEndDate}
          />
          {isGuestsInputOpen && (
            <InviteGuestStep
              emails={emailsToInvite}
              openConfirmTripModal={() => setIsConfirmTripModalOpen(true)}
              openGuestModal={() => setIsGuestsModalOpen(true)}
            />
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
          onConfirmTrip={(e) => createTrip(e)}
          onAddEmail={(email) => setEmailsToInvite((prev) => [...prev, email])}
          setOwnerName={setOwnerName}
          setOwnerEmail={setOwnerEmail}
        />
      )}
    </main>
  );
}

export default CreateTripPage;
