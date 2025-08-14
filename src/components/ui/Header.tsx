import { motion } from "framer-motion";
import React from "react";
import { Button } from "./Button";

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
        className="flex flex-col items-center mb-4 sm:mb-6"
      >
        <h1 className="text-3xl font-bold bg-gradient-to-r from-[#00ADB5] to-[#EEEEEE] bg-clip-text text-transparent">
          PersonaAI Chat
        </h1>
        <p className="text-[#EEEEEE]/60 mt-2">
          Chat with your favorite tech mentors
        </p>
      </motion.div>

      <div className="flex gap-4">
        <Button
          variant={currentPersona === "hitesh" ? "primary" : "secondary"}
          onClick={() => onPersonaChange("hitesh")}
          size="lg"
          isActive={currentPersona === "hitesh"}
        >
          <span className="flex items-center gap-2">
            <span>☕️</span>
            <span>Hitesh Choudhary</span>
          </span>
        </Button>
        <Button
          variant={currentPersona === "piyush" ? "primary" : "secondary"}
          onClick={() => onPersonaChange("piyush")}
          size="lg"
          isActive={currentPersona === "piyush"}
        >
          <span className="flex items-center gap-2">
            <span>🚀</span>
            <span>Piyush Garg</span>
          </span>
        </Button>
      </div>
    </motion.div>
  );
};
