import { ChatReducer } from "@/reducer/ChatReducer";
import { ChatContextType } from "@/types/ChatContextType"
import { createContext, PropsWithChildren, useContext, useReducer, useState } from "react"

const ChatContext = createContext<ChatContextType | null>(null)

export function ChatProvider({children}: PropsWithChildren) {
    const [messages, dispatch] = useReducer(ChatReducer, []);
    const [user, setUser] = useState('') // guarda o nome do usuario

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