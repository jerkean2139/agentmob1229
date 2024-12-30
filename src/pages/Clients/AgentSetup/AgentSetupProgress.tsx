import React from 'react';
import { Bot, Check } from 'lucide-react';

interface AgentSetupProgressProps {
  agents: string[];
  currentAgent: string;
}

export default function AgentSetupProgress({ agents, currentAgent }: AgentSetupProgressProps) {
  return (
    <div className="flex items-center justify-center gap-2 mb-8">
      {agents.map((agentId, index) => {
        const isComplete = agents.indexOf(currentAgent) > index;
        const isCurrent = currentAgent === agentId;
        
        return (
          <React.Fragment key={agentId}>
            {index > 0 && (
              <div className={`h-px w-8 ${isComplete ? 'bg-primary' : 'bg-gray-200'}`} />
            )}
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
              isComplete ? 'bg-primary text-white' :
              isCurrent ? 'bg-primary/10 text-primary border-2 border-primary' :
              'bg-gray-100 text-gray-400'
            }`}>
              {isComplete ? <Check className="w-4 h-4" /> : index + 1}
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
}