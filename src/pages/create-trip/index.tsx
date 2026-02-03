import {
  ArrowRight,
  AtSign,
  Calendar,
  MapPin,
  Plane,
  Plus,
  Settings2,
  User,
  UserRoundPlus,
  X,
} from "lucide-react";
import { useState, type SyntheticEvent } from "react";
import { useNavigate } from "react-router";
import bg from "../../assets/bg.png";
import logo from "../../assets/logo.svg";

function CreateTripPage() {
  const [isGuestsInputOpen, setIsGuestsInputOpen] = useState(false);
  const [isGuestsModalOpen, setIsGuestsModalOpen] = useState(false);
  const [emailsToInvite, setEmailsToInvite] = useState<string[]>([]);
  const [isConfirmTripModalOpen, setIsConfirmTripModalOpen] = useState(false);

  const navigate = useNavigate();

  function openGuestsInput() {
    setIsGuestsInputOpen(true);
  }
  function closeGuestsInput() {
    setIsGuestsInputOpen(false);
  }

  function openGuestsModal() {
    setIsGuestsModalOpen(true);
  }

  function closeGuestsModal() {
    setIsGuestsModalOpen(false);
  }

  function openConfirmTripModal() {
    setIsConfirmTripModalOpen(true);
  }

  function closeConfirmTripModal() {
    setIsConfirmTripModalOpen(false);
  }

  function handleAddNewEmail(e: SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();

    const data = new FormData(e.currentTarget);

    const email = data.get("email");

    if (!email || typeof email !== "string") return;

    if (emailsToInvite.includes(email)) return;

    setEmailsToInvite((prev) => [...prev, email]);

    e.currentTarget.reset();
  }
  function removeEmailToInvite(emailToRemove: string) {
    const updatedEmails = emailsToInvite.filter(
      (email) => email !== emailToRemove,
    );

    setEmailsToInvite(updatedEmails);
  }

  function createTrip() {
    navigate("/trips/123");
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
                className={`
                  bg-transparent
                  text-base sm:text-lg
                  placeholder:text-zinc-400
                  flex-1
                  outline-none
                `}
                disabled={isGuestsInputOpen}
              />
            </div>
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <Calendar className="size-5 text-zinc-400" />
              <input
                type="text"
                placeholder="Quando?"
                className="
                  bg-transparent
                  text-base sm:text-lg
                  placeholder:text-zinc-400
                  w-full sm:w-36
                  outline-none
                "
                disabled={isGuestsInputOpen}
              />
            </div>
            <div className="hidden sm:block w-px h-6 bg-zinc-800" />
            {!isGuestsInputOpen ? (
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
                onClick={openGuestsInput}
              >
                Continuar
                <ArrowRight className="size-5" />
              </button>
            ) : (
              <button
                className="
            
                text-zinc-200
                rounded-lg
                px-5 py-3
                font-medium
                flex items-center justify-center gap-2
                cursor-pointer
                hover:bg-zinc-700
                w-full sm:w-auto
              "
                onClick={closeGuestsInput}
              >
                Alterar local/data
                <Settings2 className="size-5" />
              </button>
            )}
          </div>
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
                onClick={openGuestsModal}
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
                onClick={openConfirmTripModal}
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
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
          <div className="w-2xl rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Selecionar Convidados</h2>
                <button onClick={closeGuestsModal}>
                  <X className="size-5 text-zinc-400 cursor-pointer" />
                </button>
              </div>
              <p className="text-sm text-zinc-400">
                Os convidados irão receber e-mails para confirmar a participação
                na viagem.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {emailsToInvite.map((email) => (
                <div
                  className="py-1.5 px-2.5 rounded-md bg-zinc-800 flex items-center gap-2"
                  key={email}
                >
                  <span className="text-zinc-300">{email}</span>
                  <button type="button">
                    <X
                      className="size-4 text-zinc-400 cursor-pointer"
                      onClick={() => removeEmailToInvite(email)}
                    />
                  </button>
                </div>
              ))}
            </div>

            <div className="w-full  h-px bg-zinc-800"></div>

            <form
              action=""
              className="p-2.5 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2"
              onSubmit={handleAddNewEmail}
            >
              <AtSign className="size-5 text-zinc-400" />
              <input
                type="email"
                name="email"
                placeholder="Digite o e-mail do convidado"
                className="
                  bg-transparent
                  text-base sm:text-lg
                  placeholder:text-zinc-400
                  flex-1
                  outline-none
                "
              />

              <button
                className="
                bg-lime-300
                text-lime-950
                rounded-lg
                px-5 py-2
                font-medium
                flex items-center justify-center gap-2
                cursor-pointer
                hover:brightness-90
                w-full sm:w-auto
              "
                type="submit"
              >
                Convidar
                <Plus className="size-5" />
              </button>
            </form>
          </div>
        </div>
      )}

      {isConfirmTripModalOpen && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
          <div className="w-2xl rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">
                  Confirmar criação da viagem
                </h2>
                <button onClick={closeConfirmTripModal}>
                  <X className="size-5 text-zinc-400 cursor-pointer" />
                </button>
              </div>
              <p className="text-sm text-zinc-400">
                Para concluir a criação da viagem para
                <span className="text-zinc-100 font-semibold">
                  {" "}
                  Florianópolis, Brasil{" "}
                </span>
                nas datas de{" "}
                <span className="text-zinc-100 font-semibold">
                  16 a 27 de Agosto de 2024
                </span>{" "}
                preencha seus dados abaixo:
              </p>
            </div>

            <div className="flex flex-wrap gap-2"></div>

            <form action="" className="space-y-3" onSubmit={handleAddNewEmail}>
              <div className="py-2.5 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
                <User className="size-5 text-zinc-400" />
                <input
                  type="text"
                  name="name"
                  placeholder="Seu nome completo"
                  className="
                      bg-transparent
                      text-base sm:text-lg
                      placeholder:text-zinc-400
                      flex-1
                      outline-none
                    "
                />
              </div>

              <div className="py-2.5 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
                <AtSign className="size-5 text-zinc-400" />
                <input
                  type="email"
                  name="email"
                  placeholder="Digite o seu e-mail pessoal"
                  className="
                      bg-transparent
                      text-base sm:text-lg
                      placeholder:text-zinc-400
                      flex-1
                      outline-none
                    "
                />
              </div>
              <button
                className="
                  bg-lime-300
                  text-lime-950
                  rounded-lg
                  px-5 py-2
                  font-medium
                  flex items-center justify-center gap-2
                  cursor-pointer
                  hover:brightness-90
                  w-full 
                "
                onClick={createTrip}
                type="submit"
              >
                Confirmar criação da viagem
                <Plane className="size-5" />
              </button>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}

export default CreateTripPage;
