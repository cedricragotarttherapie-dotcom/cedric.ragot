import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // ============================================================
  // 🤖 BOTPRESS INTEGRATION (REMPLACE BACKEND EXPRESS)
  // ============================================================
  const sendToBotpress = (message: string) => {
    // Botpress Webchat global API
    if ((window as any).botpressWebChat) {
      (window as any).botpressWebChat.sendEvent({
        type: 'text',
        text: message
      });
    }
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);

    // 👉 envoi vers Botpress
    sendToBotpress(input);

    // bot visuel local (option UX)
    const botMessage: Message = {
      id: (Date.now() + 1).toString(),
      text: "Je vous réponds via l'assistant en bas à droite 👇",
      sender: 'bot',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, botMessage]);

    setInput('');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">

      {isOpen ? (
        <div className="bg-white rounded-lg shadow-2xl w-96 h-96 flex flex-col">

          {/* HEADER */}
          <div className="bg-[#947f61] text-white p-4 rounded-t-lg flex justify-between items-center">
            <h3 className="font-semibold">Assistant Sonothérapie</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-[#947f61] p-1 rounded transition"
            >
              <X size={20} />
            </button>
          </div>

          {/* MESSAGES */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.length === 0 && (
              <div className="text-center text-gray-500 text-sm">
                Posez votre question ou utilisez l'assistant en bas à droite 👇
              </div>
            )}

            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
                    msg.sender === 'user'
                      ? 'bg-[#947f61] text-white rounded-br-none'
                      : 'bg-gray-200 text-gray-800 rounded-bl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            <div ref={messagesEndRef} />
          </div>

          {/* INPUT */}
          <form onSubmit={handleSendMessage} className="border-t p-3 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Votre question..."
              className="flex-1 border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#947f61]"
            />

            <button
              type="submit"
              className="bg-[#947f61] text-white p-2 rounded hover:bg-[#947f61] transition"
            >
              <Send size={18} />
            </button>
          </form>

        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-[#947f61] text-white p-4 rounded-full shadow-lg hover:opacity-90 transition transform hover:scale-110"
        >
          <MessageCircle size={24} />
        </button>
      )}

    </div>
  );
}