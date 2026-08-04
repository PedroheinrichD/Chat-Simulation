import { useChatContext } from "@/Context/ChatContext";
import { ArrowUp, Sparkle } from "lucide-react";
import { useState } from "react";

export default function ConversaIA() {
  const ChatCtx = useChatContext();
  const [userInput, setUserInput] = useState('');
  const [botInput, setBotInput] = useState('');

  function handleUserChat(){
    if(userInput === '') return
    ChatCtx?.addMessage(userInput, 'user')
    setUserInput('')
  }
  function handleBotChat(){
    if(userInput === '') return
    ChatCtx?.addMessage(botInput, 'bot')
    setBotInput('')
  }

  return (
    <div className="w-full md:w-180 mx-auto bg-white border border-neutral-200 rounded-2xl shadow-sm">
      {/* Cabeçalho */}
      <div className="flex items-center gap-2 px-5 py-4 border-b border-neutral-100">
        <div className="w-7 h-7 rounded-full bg-violet-600 flex items-center justify-center">
          <Sparkle size={14} className="text-white" />
        </div>
        <span className="text-sm font-medium text-neutral-800">Bem-vindo! {ChatCtx?.user}</span>
        <span className="ml-auto text-xs text-neutral-400 font-mono">online</span>
      </div>

      {/* Mensagens */}
      <div className="flex flex-col gap-4 px-5 py-6 bg-neutral-50 max-h-96 overflow-y-auto">
        {/* Mensagens renderizadas - direita: user | esquerda: bot */}
        {ChatCtx?.messages.map((chat) => (
        <div className={chat.sender === 'user' 
          ? "flex justify-end" 
          : "flex items-end gap-2 max-w-[80%]"
        } 
        key={chat.id}
        >
          <div className={chat.sender === 'user' 
          ? "bg-violet-600 text-white text-sm rounded-2xl rounded-br-sm px-4 py-2.5 leading-relaxed max-w-[80%]"
          : "bg-white border border-neutral-200 text-neutral-800 text-sm rounded-2xl rounded-bl-sm px-4 py-2.5 leading-relaxed"
        }>
            {chat.text}
          </div>
        </div>
        ))}
      </div>

      {/* Campos de envio simulados */}
      <div className="flex flex-col gap-2 px-5 py-4 border-t border-neutral-100 bg-white">
        {/* Campo do usuário */}
        <div className="flex items-center gap-2 bg-neutral-50 border border-neutral-200 rounded-full px-2 py-1.5 focus-within:border-violet-400 transition-colors">
          <span className="text-xs font-mono text-neutral-400 pl-2 shrink-0">user</span>
          <input
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            type="text"
            placeholder="Digite a mensagem do usuário..."
            className="flex-1 bg-transparent text-sm text-neutral-800 placeholder-neutral-400 outline-none min-w-0"
          />
          <button 
          className="w-8 h-8 rounded-full bg-violet-600 text-white flex items-center justify-center hover:bg-violet-700 active:scale-95 transition-all shrink-0"
          onClick={handleUserChat}
          >
            <ArrowUp size={14} />
          </button>
        </div>

        {/* Campo do bot */}
        <div className="flex items-center gap-2 bg-neutral-50 border border-neutral-200 rounded-full px-2 py-1.5 focus-within:border-neutral-400 transition-colors">
          <span className="text-xs font-mono text-neutral-400 pl-2 shrink-0">bot</span>
          <input
            value={botInput}
            onChange={(e) => setBotInput(e.target.value)}
            type="text"
            placeholder="Digite a resposta do bot..."
            className="flex-1 bg-transparent text-sm text-neutral-800 placeholder-neutral-400 outline-none min-w-0"
          />
          <button 
          className="w-8 h-8 rounded-full bg-neutral-800 text-white flex items-center justify-center hover:bg-neutral-700 active:scale-95 transition-all shrink-0"
          onClick={handleBotChat}
          >
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}


/*
        { Mensagem do bot - esquerda }
        <div className="flex items-end gap-2 max-w-[80%]">
          <div className="w-6 h-6 rounded-full bg-violet-100 flex items-center justify-center shrink-0">
            <Sparkle size={12} className="text-violet-600" />
          </div>
          <div className="bg-white border border-neutral-200 text-neutral-800 text-sm rounded-2xl rounded-bl-sm px-4 py-2.5 leading-relaxed">
            Olá! {ChatCtx?.user} Como posso te ajudar hoje?
          </div>
        </div>
*/