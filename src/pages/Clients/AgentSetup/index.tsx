import React from 'react';
import AgentCount from './AgentCount';
import AgentSelection from './AgentSelection';
import AgentSetupConfirmation from './AgentSetupConfirmation';
import { useAgentSetup } from './useAgentSetup';

interface AgentSetupProps {
  clientId: string;
  onComplete?: () => void;
}

export default function AgentSetup({ clientId, onComplete }: AgentSetupProps) {
  const {
    step,
    agentCount,
    selectedAgents,
    error,
    isSubmitting,
    handleAgentCount,
    handleAgentSelection,
    handleConfirmation
  } = useAgentSetup(clientId, onComplete);

  return (
    <div className="space-y-6">
      {error && (
        <div className="bg-red-50 text-red-600 p-4 rounded-lg">
          {error}
        </div>
      )}

      {step === 'count' && (
        <AgentCount onNext={handleAgentCount} />
      )}
      
      {step === 'selection' && (
        <AgentSelection
          requiredCount={agentCount}
          onComplete={handleAgentSelection}
        />
      )}
      
      {step === 'confirmation' && (
        <AgentSetupConfirmation
          selectedAgents={selectedAgents}
          onConfirm={handleConfirmation}
          isSubmitting={isSubmitting}
        />
      )}
    </div>
  );
}