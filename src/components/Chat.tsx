import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getChatResponse } from '../utils/openai';
import { Button } from './ui/Button';
import { Input } from './ui/Input';
import { Message } from './ui/Message';
import { Header } from './ui/Header';
import { LoadingIndicator } from './ui/LoadingIndicator';

interface ChatMessage {
  content: string;
  role: 'user' | 'assistant';
  persona: 'hitesh' | 'piyush';
  error?: boolean;
  timestamp: Date;
}

export const Chat: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [persona, setPersona] = useState<'hitesh' | 'piyush'>('hitesh');
  const [isLoading, setIsLoading] = useState(false);
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isFirstLoad) {
      // Set initial welcome message immediately to prevent blank state
      const welcomeMessage = persona === 'hitesh'
        ? "Chai aur code ☕️! I'm Hitesh Choudhary. Let's learn something new today in a practical way!"
        : "Bhai log 🚀 Piyush here! Ready to deep dive into some serious tech concepts?";
      
      setMessages([{
        content: welcomeMessage,
        role: 'assistant',
        persona,
        timestamp: new Date()
      }]);
      setIsFirstLoad(false);
    }
  }, [isFirstLoad, persona]);

  const handlePersonaChange = (newPersona: 'hitesh' | 'piyush') => {
    setPersona(newPersona);
    setIsFirstLoad(true);
    setMessages([]);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      content: input,
      role: 'user',
      persona,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await getChatResponse(input, persona);
      
      const assistantMessage: ChatMessage = {
        content: response,
        role: 'assistant',
        persona,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      const errorContent = error instanceof Error 
        ? `${persona === 'hitesh' ? '☕️' : '🚀'} ${error.message || 'Network error occurred'}. Let's try that again?`
        : `${persona === 'hitesh' ? '☕️ Chai break time! ' : '🚀 Houston, we have a problem! '}Something went wrong. Please try again.`;

      const errorMessage: ChatMessage = {
        content: errorContent,
        role: 'assistant',
        persona,
        error: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
      console.error('Error getting chat response:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col h-screen bg-gradient-to-br from-[#222831] via-[#2b3038] to-[#393E46]"
    >
      <Header currentPersona={persona} onPersonaChange={handlePersonaChange} />

      <motion.div 
        className="flex-1 overflow-y-auto p-6 space-y-6"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <AnimatePresence mode="wait">
          {messages.map((message) => (
            <Message
              key={message.timestamp.getTime()}
              content={message.content}
              isUser={message.role === 'user'}
              persona={message.persona}
              error={message.error}
              timestamp={message.timestamp}
              isLast={message === messages[messages.length - 1] && isLoading}
            />
          ))}
          {isLoading && (
            <LoadingIndicator persona={persona} />
          )}
        </AnimatePresence>
        <div ref={chatEndRef} />
      </motion.div>

      <motion.form
        onSubmit={handleSubmit}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="p-6 bg-[#222831]/80 backdrop-blur border-t border-[#00ADB5]/30"
      >
        <div className="flex gap-4 max-w-4xl mx-auto">
          <Input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={`Ask ${persona === 'hitesh' ? 'Hitesh' : 'Piyush'} something...`}
            fullWidth
          />
          <Button
            type="submit"
            disabled={isLoading || !input.trim()}
          >
            {isLoading ? 'Thinking...' : 'Send'}
          </Button>
        </div>
      </motion.form>
    </motion.div>
  );
};
