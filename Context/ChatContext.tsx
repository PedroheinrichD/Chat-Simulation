import { ChatReducer } from "@/reducer/ChatReducer";
import { ChatContextType } from "@/types/ChatContextType"
import { createContext, PropsWithChildren, useContext, useEffect, useReducer, useState } from "react"

const ChatContext = createContext<ChatContextType | null>(null)
 
export function ChatProvider({children}: PropsWithChildren) {
    const [messages, dispatch] = useReducer(ChatReducer, []);
    const [user, setUser] = useState('') // guarda o nome do usuario

// se o histórico existir
useEffect(() => {
  if (!user) return; // sem nome, não faz nada

  const chave = `@Chatkey_${user.toLowerCase().trim()}`;
  const dados = localStorage.getItem(chave);

  if (dados) {
    // Tem histórico! Carrega no reducer.
    dispatch({
        type: 'setMessage',
        payload: JSON.parse(dados)
    })
  }
}, [user]);

// armaezando no local storage
useEffect(() => {
    const chave = `@Chatkey_${user.toLowerCase().trim()}`;
    localStorage.setItem(chave, JSON.stringify(messages))
},[user,messages])
    
    // função para disparar a função de dentro do reducer para adicionar mensagem a lista, e quem mandou
    function addMessage(text: string, sender: 'bot'| 'user') {
        dispatch({
            type: 'addChat',
            payload: {
                sender: sender,
                text: text
            }
        })
    }
    // função para disparar a função de dentro do reducer para remover mensagem da lista
    function removeMessage(id: string) {
        dispatch({
            type: 'removeChat',
            payload: {
                id: id
            }
        })
    }

    return(
        <ChatContext.Provider value={{messages, user, setUser, removeMessage, addMessage}}>
            {children}
        </ChatContext.Provider>
    )
}

// hook para usar o contexto
export function useChatContext(){
    return useContext(ChatContext)
}