"use client";

import { ChatProvider } from "@/Context/ChatContext";
import { Chat } from "./components/ChatHub";


const Page = () => {
  return (
    <section className="bg-black h-screen w-screen flex justify-center items-center">
        <ChatProvider>
            <Chat/>        
        </ChatProvider>    
    </section>
  );
};

export default Page;
