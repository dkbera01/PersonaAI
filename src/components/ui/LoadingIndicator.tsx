import React from 'react';

interface LoadingIndicatorProps {
  persona: 'hitesh' | 'piyush';
}

export const LoadingIndicator: React.FC<LoadingIndicatorProps> = ({ persona }) => {

  return (
    <div
      className="flex items-start gap-2 opacity-0 translate-y-2 animate-fadeIn"
      role="status"
      aria-label={`${persona === 'hitesh' ? 'Hitesh' : 'Piyush'} is typing...`}
    >
      <div
        className="w-8 h-8 rounded-full bg-gradient-to-br from-[#00ADB5] to-[#007b82] flex items-center justify-center text-xs scale-0 animate-scaleIn"
      >
        {persona === 'hitesh' ? '☕️' : '🚀'}
      </div>
      
      <div className="flex items-end gap-1">
        <div className="w-3 h-3 rounded-full bg-[#00ADB5] animate-bounce" />
        <div
          className="w-3 h-3 rounded-full bg-[#00ADB5] animate-bounce"
          style={{ animationDelay: "0.2s" }}
        />
        <div
          className="w-3 h-3 rounded-full bg-[#00ADB5] animate-bounce"
          style={{ animationDelay: "0.4s" }}
        />
      </div>
    </div>
  );
};
