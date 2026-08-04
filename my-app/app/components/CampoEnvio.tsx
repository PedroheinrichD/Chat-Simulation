import { useState } from "react";
import { ArrowRight } from "lucide-react";

export function CampoEnvio() {
  const [valor, setValor] = useState("");

  return (
    <div className="w-full max-w-md mx-auto">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex items-center gap-2 bg-white border border-neutral-200 rounded-full px-2 py-2 shadow-sm focus-within:border-neutral-400 focus-within:shadow-md transition-all duration-200"
      >
        <input
          type="text"
          value={valor}
          onChange={(e) => setValor(e.target.value)}
          placeholder="Digite seu nome..."
          className="flex-1 bg-transparent px-4 py-2 text-sm text-neutral-800 placeholder-neutral-400 outline-none"
        />
        <button
          type="submit"
          className="flex items-center justify-center w-10 h-10 rounded-full bg-neutral-900 text-white hover:bg-neutral-700 active:scale-95 transition-all duration-150"
        >
          <ArrowRight size={18} />
        </button>
      </form>
    </div>
  );
}