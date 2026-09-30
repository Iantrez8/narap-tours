'use client';

import { useState, useRef, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { MessageSquare, X, Send, Sparkles } from 'lucide-react';
import styles from './AIChat.module.css';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
}

export default function AIChat() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: "LET'S DESIGN YOUR KENYA. I am the NARAP Tours & Travel Journey Designer. How can I help you plan your extraordinary journey?"
    }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  if (pathname?.startsWith('/studio')) {
    return null;
  }

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input.trim()
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setInput('');

    // Simulate AI thinking and response
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: "I would be delighted to help with that. Could you tell me a little more about who you'll be traveling with and any specific interests like wildlife photography or cultural experiences?"
      };
      setMessages((prev) => [...prev, aiResponse]);
    }, 1500);
  };

  return (
    <>
      <button
        className={`${styles.toggleButton} ${isOpen ? styles.hidden : ''}`}
        onClick={() => setIsOpen(true)}
        aria-label="Open AI Assistant"
      >
        <Sparkles size={16} className={styles.sparkleIcon} />
        <span className={styles.toggleText}>JOURNEY DESIGNER</span>
      </button>

      <div className={`${styles.chatWindow} ${isOpen ? styles.open : ''}`}>
        <div className={styles.header}>
          <div className={styles.headerInfo}>
            <Sparkles size={18} />
            <h3 className={styles.headerTitle}>Journey Designer</h3>
          </div>
          <button
            className={styles.closeButton}
            onClick={() => setIsOpen(false)}
            aria-label="Close AI Assistant"
          >
            <X size={20} />
          </button>
        </div>

        <div className={styles.messageContainer}>
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`${styles.message} ${
                msg.role === 'user' ? styles.userMessage : styles.aiMessage
              }`}
            >
              {msg.content}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        <form className={styles.inputArea} onSubmit={handleSubmit}>
          <input
            type="text"
            className={styles.input}
            placeholder="Ask about destinations, timing, or itineraries..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            type="submit"
            className={styles.sendButton}
            disabled={!input.trim()}
            aria-label="Send message"
          >
            <Send size={18} />
          </button>
        </form>
      </div>
    </>
  );
}
