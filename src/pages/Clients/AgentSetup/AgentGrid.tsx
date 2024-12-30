import React from 'react';
import { Bot, Check } from 'lucide-react';
import { AVAILABLE_AGENTS } from './agentData';

interface AgentGridProps {
  selectedAgents: string[];
  onToggleAgent: (agentId: string) => void;
  maxSelections: number;
}

export default function AgentGrid({ selectedAgents, onToggleAgent, maxSelections }: AgentGridProps) {
  const handleToggle = (agentId: string, isRequired?: boolean) => {
    if (isRequired) return; // Can't deselect required agents
    if (!selectedAgents.includes(agentId) && selectedAgents.length >= maxSelections) return;
    onToggleAgent(agentId);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {AVAILABLE_AGENTS.map((agent) => {
        const isSelected = selectedAgents.includes(agent.id);
        const isDisabled = !isSelected && selectedAgents.length >= maxSelections && !agent.isRequired;

        return (
          <button
            key={agent.id}
            onClick={() => handleToggle(agent.id, agent.isRequired)}
            disabled={agent.isRequired ? false : isDisabled}
            className={`
              relative p-4 text-left rounded-lg border transition-all
              ${isSelected ? 'border-primary bg-primary/5' : 'border-gray-200'}
              ${isDisabled ? 'opacity-50 cursor-not-allowed' : 'hover:border-primary/50 cursor-pointer'}
              ${agent.isRequired ? 'border-primary/50 bg-primary/5' : ''}
            `}
          >
            {isSelected && (
              <div className="absolute top-2 right-2">
                <Check className="w-5 h-5 text-primary" />
              </div>
            )}
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/80 to-primary/60 flex items-center justify-center shadow-inner">
                <img 
                  src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${agent.name}&hair=${agent.avatarConfig.hair}&hairColor=${agent.avatarConfig.hairColor}${agent.avatarConfig.accessories ? `&accessories=${agent.avatarConfig.accessories}` : ''}`}
                  alt={agent.name}
                  className="w-10 h-10"
                />
              </div>
              
              <div className="flex-1 min-w-0">
                <h3 className="font-medium text-gray-900 flex items-center gap-2">
                  {agent.name}
                  {agent.isRequired && (
                    <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                      Required
                    </span>
                  )}
                </h3>
                <p className="text-sm text-gray-600">{agent.role}</p>
                <p className="mt-2 text-sm text-gray-500 line-clamp-2">{agent.description}</p>
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
}