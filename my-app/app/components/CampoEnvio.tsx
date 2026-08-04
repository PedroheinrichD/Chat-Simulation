import { useChatContext } from "@/Context/ChatContext";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

export function CampoEnvio() {
  const ChatCtx = useChatContext()
  const [Input, setInput] = useState('') // state que cuida só do valor do input e depois é mandado o valor para o state do contexto 'user'

  return (
    <div className="w-full max-w-md mx-auto">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex items-center gap-2 bg-white border border-neutral-200 rounded-full px-2 py-2 shadow-sm focus-within:border-neutral-400 focus-within:shadow-md transition-all duration-200"
      >
        <input
          type="text"
          value={Input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Digite seu nome..."
          className="flex-1 bg-transparent px-4 py-2 text-sm text-neutral-800 placeholder-neutral-400 outline-none"
        />
        <button
          type="submit"
          className="flex items-center justify-center w-10 h-10 rounded-full bg-neutral-900 text-white hover:bg-neutral-700 active:scale-95 transition-all duration-150"
          onClick={() => ChatCtx?.setUser(Input)}
        >
          <ArrowRight size={18} />
        </button>
      </form>
    </div>
  );
}