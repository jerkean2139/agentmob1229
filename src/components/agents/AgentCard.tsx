import React from 'react';
import { Bot } from 'lucide-react';
import { clsx } from 'clsx';

interface AgentCardProps {
  agent: {
    name: string;
    role: string;
    department: string;
  };
  highlight?: boolean;
  onClick: () => void;
}

export default function AgentCard({ agent, highlight, onClick }: AgentCardProps) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        'w-full text-left p-6 rounded-lg border transition-all group',
        highlight 
          ? 'border-primary bg-primary/5 ring-2 ring-primary animate-pulse'
          : 'hover:border-primary/50'
      )}
    >
      <div className="flex items-center gap-4">
        <div className={clsx(
          'w-12 h-12 rounded-full flex items-center justify-center transition-colors',
          highlight ? 'bg-primary text-white' : 'bg-primary/10 text-primary'
        )}>
          <Bot className="w-6 h-6" />
        </div>
        <div>
          <h3 className="font-medium text-gray-900">{agent.name}</h3>
          <p className="text-sm text-gray-500">{agent.role}</p>
          <p className="text-xs text-gray-400 mt-1">{agent.department}</p>
        </div>
      </div>
    </button>
  );
}