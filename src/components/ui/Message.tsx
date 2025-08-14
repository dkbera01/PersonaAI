import { motion } from 'framer-motion';
import React from 'react';

interface MessageProps {
  content: string;
  isUser: boolean;
  persona: 'hitesh' | 'piyush';
  error?: boolean;
  timestamp?: Date;
  isLast?: boolean;
}

export const Message: React.FC<MessageProps> = ({
  content,
  isUser,
  persona,
  error = false,
  timestamp,
  isLast = false
}) => {
  const avatarContent = isUser ? 'You' : persona === 'hitesh' ? '☕️' : '🚀';
  const avatarStyles = isUser
    ? 'bg-[#00ADB5]/20 text-[#00ADB5]'
    : 'bg-gradient-to-br from-[#00ADB5] to-[#007b82] text-white';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
      className={`flex items-end gap-2 ${isUser ? 'justify-end' : 'justify-start'}`}
    >
      {!isUser && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
          className={`w-8 h-8 rounded-full ${avatarStyles} flex items-center justify-center text-xs`}
        >
          {avatarContent}
        </motion.div>
      )}
      
      <motion.div
        whileHover={{ scale: 1.02 }}
        className={`
          relative max-w-[80%] p-4 rounded-2xl shadow-lg
          ${isUser
            ? 'bg-gradient-to-br from-[#00ADB5] to-[#00968c] text-white'
            : error
            ? 'bg-red-500/10 text-red-200 border border-red-500/30'
            : 'bg-[#393E46]/80 backdrop-blur text-[#EEEEEE]'
          }
        `}
      >
        <p className="text-base leading-relaxed whitespace-pre-wrap">{content}</p>
        {timestamp && (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            className="absolute bottom-1 right-2 text-xs text-current/70"
          >
            {timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </motion.span>
        )}
        
        {isLast && !isUser && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="absolute -bottom-2 left-4 text-xs text-[#00ADB5]"
          >
            {persona === 'hitesh' ? 'Hitesh is typing...' : 'Piyush is typing...'}
          </motion.div>
        )}
      </motion.div>

      {isUser && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
          className={`w-8 h-8 rounded-full ${avatarStyles} flex items-center justify-center text-xs`}
        >
          {avatarContent}
        </motion.div>
      )}
    </motion.div>
  );
};
