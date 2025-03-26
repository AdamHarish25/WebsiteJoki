import { useState, useEffect } from "react";
import { Webchat, WebchatProvider, Fab, getClient } from "@botpress/webchat";

const clientId = "8f6a0bab-b322-4611-ad0a-b169e4b2b61e";

const config = {
  composerPlaceholder: "Apa yang ingin kamu tanyakan?",
  botName: "Customer service",
  botAvatar: "https://picsum.photos/200/300",
  botDescription: "Halo, selamat datang di Customer Service",
  whatsapp: {
    title: "Chat via WhatsApp",
    link: "https://api.whatsapp.com/send?phone=6285179808325",
  },
  color: "#2ECC71"
};

export default function WebCHAT() {
  const client = getClient({ clientId });
  const [isWebchatOpen, setIsWebchatOpen] = useState(false);

  useEffect(() => {
    // Ensure messages are not duplicated when re-rendering
    return () => {
      client.clearSession();
    };
  }, []);

  return (
    <div className="relative space-y-5">
      <WebchatProvider client={client} configuration={config}>
        <button
          onClick={() => setIsWebchatOpen(!isWebchatOpen)}
          className="fixed bottom-5 right-5 bg-green-500 text-white px-4 py-2 rounded-full shadow-lg z-50"
        >
          {isWebchatOpen ? "⇓🤖" : "⇑🤖"}
        </button>

        <div
          className={`fixed bottom-16 right-5 bg-white border rounded-lg shadow-xl transition-transform ${
            isWebchatOpen ? "scale-100" : "scale-0"
          }`}
          style={{ width: "350px", maxHeight: "500px", overflowY: "auto" }}
        >
          <div className="flex justify-between items-center bg-Forest-green py-2 px-10">
            <span className="text-sm font-semibold">Chat Support</span>
            <button onClick={() => setIsWebchatOpen(false)} className="text-red-500 text-sm">
              ✖ Close
            </button>
          </div>

          <Webchat />
        </div>
      </WebchatProvider>
    </div>
  );
}
