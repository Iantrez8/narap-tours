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

  const generateResponse = (userInput: string): string => {
    const text = userInput.toLowerCase();

    // 1. Pricing & Quotes
    if (text.includes('price') || text.includes('cost') || text.includes('quote') || text.includes('how much') || text.includes('package') || text.includes('budget')) {
      return "Since our journeys are 100% custom-designed, pricing varies based on your itinerary, accommodation level, and travel dates. To give you an accurate quote, we recommend clicking 'Plan Your Journey' in the menu, or contacting us on WhatsApp (+254 737 449 129) to discuss your vision.";
    }
    
    // 2. Best Time to Visit / Weather
    if (text.includes('when') || text.includes('time') || text.includes('weather') || text.includes('month') || text.includes('season')) {
      return "Kenya is a fantastic year-round destination! However, the 'best' time depends on what you want to see. July to October is famous for the Great Migration. January to March is dry and excellent for wildlife viewing, while the 'green season' (April-June, Nov-Dec) offers lush landscapes, newborn animals, and fewer crowds.";
    }

    // 3. Family / Kids
    if (text.includes('family') || text.includes('kids') || text.includes('children') || text.includes('child')) {
      return "We absolutely love designing family safaris! We partner with lodges that offer fantastic Junior Ranger programs, babysitting services, and family suites. We ensure the pace of the journey is perfect for younger travelers while keeping it thrilling for the adults.";
    }

    // 4. Honeymoon / Couples
    if (text.includes('honeymoon') || text.includes('romantic') || text.includes('couple') || text.includes('wedding')) {
      return "Kenya is the ultimate romantic destination. We can arrange private bush dinners under the stars, hot air balloon rides at dawn, and secluded luxury tents. Let us know you are celebrating a honeymoon, and we'll ensure there are magical surprises along the way!";
    }

    // 5. Destinations / Safaris
    if (text.includes('safari') || text.includes('destination') || text.includes('mara') || text.includes('park') || text.includes('where') || text.includes('see')) {
      return "We offer bespoke safaris across Kenya's most spectacular destinations: the iconic Maasai Mara, elephant-rich Amboseli, rugged Samburu, and the pristine Indian Ocean coastline (Diani/Watamu). We can also combine the bush and the beach for the ultimate experience!";
    }

    // 6. Travel Requirements (Visas/Health)
    if (text.includes('visa') || text.includes('vaccine') || text.includes('health') || text.includes('passport') || text.includes('require')) {
      return "Travelers to Kenya generally require an Electronic Travel Authorisation (eTA) obtained online prior to travel. We also recommend checking with your local travel clinic for standard health precautions like Malaria prophylaxis. Once you book, we provide a comprehensive pre-departure guide!";
    }

    // 7. Booking Process
    if (text.includes('book') || text.includes('plan') || text.includes('start') || text.includes('design') || text.includes('step')) {
      return "Planning with us is easy! \n1. Click 'Plan Your Journey' and tell us your preferences.\n2. We'll consult with you to refine the details.\n3. We design a custom itinerary just for you.\n4. Once approved, we handle all bookings and logistics from touchdown to departure!";
    }

    // 8. Referrals
    if (text.includes('refer') || text.includes('earn') || text.includes('reward')) {
      return "Our Referral Program lets you earn exclusive rewards and custom packages when a friend you refer books a journey with us! You can join by visiting the 'Referrals' page in the main menu.";
    }

    // 9. Contact Info
    if (text.includes('contact') || text.includes('phone') || text.includes('whatsapp') || text.includes('email') || text.includes('call') || text.includes('talk')) {
      return "You can chat with our travel designers directly via WhatsApp at +254 737 449 129, or email us at info@naraptours.com. We're always here to help!";
    }

    // 10. Greetings
    if (text.includes('hello') || text.includes('hi ') || text === 'hi' || text.includes('hey') || text.includes('morning') || text.includes('afternoon')) {
      return "Hello there! Welcome to NARAP Tours & Travel. Are you looking to plan a safari, learn about our destinations, or do you have a specific question in mind?";
    }
    
    // Fallback response with helpful prompts
    return "I might need a little more context to answer that accurately! \n\nYou can ask me about:\n• Pricing and Custom Quotes\n• Best times to travel\n• Family or Honeymoon safaris\n• Booking process\n\nFor immediate expert assistance, you can always reach our team on WhatsApp at +254 737 449 129.";
  };

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

    // Simulate "typing" delay before showing the rule-based response
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: generateResponse(userMessage.content)
      };
      setMessages((prev) => [...prev, botResponse]);
    }, 800);
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
