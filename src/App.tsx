import { ArrowRight, Calendar, MapPin } from "lucide-react";
import bg from "./assets/bg.png";
import logo from "./assets/logo.svg";

function App() {
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
          <div className="flex items-center gap-2 flex-1 w-full">
            <MapPin className="size-5 text-zinc-400" />
            <input
              type="text"
              placeholder="Para onde você vai?"
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
          >
            Continuar
            <ArrowRight className="size-5" />
          </button>
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
    </main>
  );
}

export default App;
