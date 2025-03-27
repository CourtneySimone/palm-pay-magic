
import React, { useState, useEffect, useRef } from "react";
import { MessageCircle, X, Send } from "lucide-react";

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([
    { text: "Hello! How can I help you with Palm Pay today?", isUser: false }
  ]);
  const [newMessage, setNewMessage] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Auto responses for demo purposes
  const autoResponses = [
    "Thanks for your interest in Palm Pay! Our team will reach out shortly with more information.",
    "Great question! Palm Pay works with most existing POS systems and requires minimal setup.",
    "Palm Pay's scanners are completely free for qualifying merchants. We make money through a small transaction fee.",
    "Security is our top priority. Your palm vein pattern is encrypted and stored securely - it can't be replicated or stolen."
  ];

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    // Add user message
    setMessages([...messages, { text: newMessage, isUser: true }]);
    setNewMessage("");

    // Simulate reply after a short delay
    setTimeout(() => {
      const randomResponse = autoResponses[Math.floor(Math.random() * autoResponses.length)];
      setMessages(prev => [...prev, { text: randomResponse, isUser: false }]);
    }, 1000);
  };

  // Auto-scroll to the bottom when new messages appear
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat toggle button */}
      <button
        onClick={toggleChat}
        className={`flex items-center justify-center h-14 w-14 rounded-full shadow-elevated transition-all duration-300 ${
          isOpen ? "bg-coral-500 rotate-90" : "bg-teal-500 hover:bg-teal-600"
        }`}
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? (
          <X className="h-6 w-6 text-white" />
        ) : (
          <MessageCircle className="h-6 w-6 text-white" />
        )}
      </button>

      {/* Chat window */}
      <div
        className={`absolute bottom-16 right-0 w-80 md:w-96 bg-white rounded-lg shadow-elevated overflow-hidden transition-all duration-300 transform ${
          isOpen
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "translate-y-4 opacity-0 pointer-events-none"
        }`}
      >
        {/* Chat header */}
        <div className="bg-teal-500 text-white p-4">
          <div className="flex items-center">
            <div className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center mr-3">
              <MessageCircle className="h-4 w-4" />
            </div>
            <div>
              <h3 className="font-medium">Palm Pay Support</h3>
              <p className="text-xs text-white/80">Typically replies in minutes</p>
            </div>
          </div>
        </div>

        {/* Chat messages */}
        <div className="h-80 overflow-y-auto p-4 flex flex-col gap-3">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`${
                message.isUser
                  ? "ml-auto bg-teal-500 text-white"
                  : "mr-auto bg-gray-100 text-gray-800"
              } rounded-lg p-3 max-w-[80%] animate-fade-in`}
            >
              {message.text}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Chat input */}
        <form onSubmit={handleSendMessage} className="border-t border-gray-200 p-3 flex">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 border border-gray-300 rounded-l-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-teal-500"
          />
          <button
            type="submit"
            className="bg-teal-500 text-white px-4 py-2 rounded-r-md hover:bg-teal-600 transition-colors"
            disabled={!newMessage.trim()}
          >
            <Send className="h-4 w-4" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatWidget;
