import { ChatReducer } from "@/reducer/ChatReducer";
import { ChatContextType } from "@/types/ChatContextType"
import { createContext, useReducer, useState } from "react"

const ChatContext = createContext<ChatContextType | null>(null)

function ChatProvider() {
    const [messages, dispatch] = useReducer(ChatReducer, []);
    const [user, setUser] = useState('') // guarda o nome do usuario

    // PROXIMO PASSO É VERIFICAR COMO VAI SABER QUE AQUELE USUARIO PERTENCE A TAL CONVERRSA SALVA

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
    function addRemove(id: string) {
        dispatch({
            type: 'removeChat',
            payload: {
                id: id
            }
        })
    }



    return(
        <ChatContext.Provider value={{user,}}>

        </ChatContext.Provider>
    )
}