import React from 'react';
import { Bot } from 'lucide-react';
import AgentGrid from './AgentGrid';

interface AgentSelectionProps {
  requiredCount: number;
  onComplete: (selectedAgents: string[]) => void;
}

export default function AgentSelection({ requiredCount, onComplete }: AgentSelectionProps) {
  const [selectedAgents, setSelectedAgents] = React.useState<string[]>(['donna']); // Donna is always selected

  const handleToggleAgent = (agentId: string) => {
    setSelectedAgents(prev => {
      if (prev.includes(agentId)) {
        return prev.filter(id => id !== agentId);
      }
      return [...prev, agentId];
    });
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-semibold text-gray-900">Build Your Agent Mob</h2>
        <p className="mt-2 text-gray-600">
          Select {requiredCount} additional agents to work with Donna
        </p>
      </div>

      <AgentGrid 
        selectedAgents={selectedAgents}
        onToggleAgent={handleToggleAgent}
        maxSelections={requiredCount + 1} // +1 for Donna
      />

      <div className="mt-8 flex justify-end">
        <button
          onClick={() => onComplete(selectedAgents)}
          disabled={selectedAgents.length !== requiredCount + 1}
          className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 disabled:opacity-50"
        >
          Create Agent Mob ({selectedAgents.length - 1}/{requiredCount})
        </button>
      </div>
    </div>
  );
}