import { useChatContext } from "@/Context/ChatContext";
import { CampoEnvio } from "./CampoEnvio";
import ConversaIA from "./ConversaIA";

export function Chat() {
  const ChatCtx = useChatContext();

  return (
   <section>
        {ChatCtx?.user ? <ConversaIA/> : <CampoEnvio/>}
   </section>
  );
}