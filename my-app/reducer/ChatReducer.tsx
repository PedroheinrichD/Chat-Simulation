// tipando o inicio do REDUCER
import { ChatType } from "@/types/ChatType";

// tipos das ações
type AddChat = {
  type: "addChat";
  payload: {
    text: string
    sender: 'bot' | 'user'
  };
};

type RemoveChat = {
  type: "removeChat";
  payload: {
    id: string
  };
};

type setMessage = {
  type: "setMessage";
  payload: ChatType[]
};

export type listActions = AddChat | RemoveChat | setMessage;
export function ChatReducer(List: ChatType[], actions: listActions) {
  // executando as ações
  switch (actions.type) {
    case "addChat":
      return [
        ...List,
        {
          id: crypto.randomUUID(),
          text: actions.payload.text,
          sender: actions.payload.sender
        },
      ];
      
      case "removeChat":
        return List.filter((item) => actions.payload.id !== item.id)
      
      case "setMessage":
        return actions.payload

    default:
      return List;
  }
}
