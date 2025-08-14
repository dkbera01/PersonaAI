import React from 'react';
import { motion } from 'framer-motion';

type ModelType = 'gpt-3.5-turbo' | 'gpt-4' | 'gpt-4-turbo-preview';

interface ModelSelectorProps {
  currentModel: ModelType;
  onChange: (model: ModelType) => void;
}

export const ModelSelector: React.FC<ModelSelectorProps> = ({ currentModel, onChange }) => {
  return (
    <motion.div 
      className="flex items-center gap-2 min-w-[200px]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {/* <label className="text-[#00ADB5] text-sm font-medium whitespace-nowrap">Model:</label> */}
      <select
        value={currentModel}
        onChange={(e) => onChange(e.target.value as ModelType)}
        className="flex-1 bg-[#393E46] text-[#EEEEEE] border border-[#00ADB5]/30 rounded px-2 py-2 text-sm focus:outline-none focus:border-[#00ADB5] focus:ring-1 focus:ring-[#00ADB5]"
      >
        <option value="gpt-3.5-turbo">GPT-3.5 Turbo</option>
        <option value="gpt-4">GPT-4</option>
        <option value="gpt-4-turbo-preview">GPT-4 Turbo</option>
      </select>
    </motion.div>
  );
};
