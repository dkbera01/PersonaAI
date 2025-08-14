import React from 'react';
import type { MentorInfo } from '../../utils/mentorData';

interface MentorCardProps {
  mentor: MentorInfo;
  isActive: boolean;
  onClick: () => void;
}

export const MentorCard: React.FC<MentorCardProps> = ({ mentor, isActive, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`
        relative overflow-hidden
        p-4 rounded-xl cursor-pointer
        transition-all duration-300 ease-out
        ${isActive 
          ? 'bg-gradient-to-r from-[#00ADB5] to-[#00968c] scale-105 shadow-xl' 
          : 'bg-[#393E46] hover:bg-[#424957] hover:scale-102'
        }
      `}
    >
      <div className="flex items-center gap-4">
        <div className="relative">
          <div className={`
            w-16 h-16 rounded-full overflow-hidden
            border-2 transition-colors duration-300
            ${isActive ? 'border-white' : 'border-[#00ADB5]'}
          `}>
            <img 
              src={mentor.imageUrl} 
              alt={mentor.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(mentor.name)}&background=00ADB5&color=fff`;
              }}
            />
          </div>
          <span className="absolute -bottom-1 -right-1 text-xl">{mentor.emoji}</span>
        </div>
        
        <div className={`flex flex-col transition-colors duration-300 ${isActive ? 'text-white' : 'text-[#EEEEEE]'}`}>
          <h3 className="font-bold text-lg">{mentor.name}</h3>
          <p className={`text-sm ${isActive ? 'text-white/90' : 'text-[#EEEEEE]/70'}`}>
            {mentor.role}
          </p>
          <p className={`text-xs mt-1 ${isActive ? 'text-white/80' : 'text-[#EEEEEE]/60'}`}>
            {mentor.description}
          </p>
        </div>
      </div>

      {isActive && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-20" />
          <div className="absolute -inset-1 bg-gradient-to-r from-[#00ADB5] to-transparent opacity-20 blur-xl" />
        </div>
      )}
    </div>
  );
};
