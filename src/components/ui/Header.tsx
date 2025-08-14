import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import { MentorCard } from "./MentorCard";
import { mentorData } from "../../utils/mentorData";

interface HeaderProps {
  currentPersona: "hitesh" | "piyush";
  onPersonaChange: (persona: "hitesh" | "piyush") => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPersona,
  onPersonaChange,
}) => {
  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center p-4 sm:p-6 bg-[#222831]/80 backdrop-blur border-b border-[#00ADB5]/30 w-full"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="flex flex-col items-center mb-6 sm:mb-8"
      >
        <h1 className="text-3xl font-bold bg-gradient-to-r from-[#00ADB5] to-[#EEEEEE] bg-clip-text text-transparent">
          PersonaAI Chat
        </h1>
        <p className="text-[#EEEEEE]/60 mt-2">
          Choose your tech mentor to start chatting
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-4xl">
        <AnimatePresence mode="wait">
          {Object.entries(mentorData).map(([id, mentor]) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              layout
            >
              <MentorCard
                mentor={mentor}
                isActive={currentPersona === id}
                onClick={() => onPersonaChange(id as "hitesh" | "piyush")}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};
