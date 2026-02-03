import { ArrowRight, Calendar, MapPin } from "lucide-react";
import bg from "./assets/bg.png";
import logo from "./assets/logo.svg";
function App() {
  return (
    <main
      className="h-screen  flex items-center justify-center bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <section className="max-w-3xl w-full px-6 text-center space-y-10">
        <div className="flex flex-col gap-3 items-center">
          <img src={logo} alt="logo plann.er" />
          <p className="text-lg text-zinc-300">
            Convide seus amigos e planeje sua próxima viagem!
          </p>
        </div>
        <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape text-white gap-3">
          <div className="flex items-center gap-2 flex-1">
            <MapPin className="size-5 text-zinc-400" />
            <input
              type="text"
              placeholder="para onde você vai ? "
              className="bg-transparent text-lg placeholder:text-zinc-400 flex-1"
            />
          </div>
          <div className="flex items-center gap-2 w-auto">
            <Calendar className="size-5 text-zinc-400" />
            <input
              type="text"
              placeholder="Quando ?"
              className="bg-transparent text-lg placeholder:text-zinc-400 w-40"
            />
          </div>

          <div className="w-px h-6 bg-zinc-800"></div>

          <button className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 cursor-pointer hover:brightness-90 ">
            Continuar
            <ArrowRight className="size-5 text-lime-950" />
          </button>
        </div>
        <p className="text-sm text-zinc-500">
          Ao planejar sua viagem pela plann.er você automaticamente concorda{" "}
          <br /> com nossos{" "}
          <a href="" className="text-zinc-300 underline">
            {" "}
            termos de uso{" "}
          </a>
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
