import { createContext, useReducer } from "react"

const ChatContext = createContext(null)

function ChatProvider() {
    // const [ChatList, dispatch = useReducer();

    return(
        <ChatContext.Provider value={null}>

        </ChatContext.Provider>
    )
}