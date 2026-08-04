import { ChatType } from "./ChatType"

export type ChatContextType = {
    user: string,
    setUser: (user: string) => void,
    messages: ChatType[],
    addMessage: (text: string, sender:'user' | 'bot' ) => void,
    removeMessage: (id: string) => void
}