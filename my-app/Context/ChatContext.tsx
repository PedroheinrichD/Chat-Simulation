import { ChatReducer } from "@/reducer/ChatReducer";
import { ChatContextType } from "@/types/ChatContextType"
import { createContext, useReducer } from "react"

const ChatContext = createContext<ChatContextType | null>(null)

function ChatProvider() {
    const [ChatList, dispatch] = useReducer(ChatReducer, []);

    return(
        <ChatContext.Provider value={null}>

        </ChatContext.Provider>
    )
}