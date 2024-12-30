import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { assignAgentsToClient } from '../../../lib/agents/assignAgents';

export type SetupStep = 'count' | 'selection' | 'confirmation';

export function useAgentSetup(clientId: string) {
  const [step, setStep] = useState<SetupStep>('count');
  const [agentCount, setAgentCount] = useState(3);
  const [selectedAgents, setSelectedAgents] = useState<string[]>(['donna']);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleAgentCount = (count: number) => {
    setError(null);
    setAgentCount(count);
    setStep('selection');
  };

  const handleAgentSelection = (agents: string[]) => {
    setError(null);
    setSelectedAgents(agents);
    setStep('confirmation');
  };

  const handleConfirmation = async (confirmed: boolean) => {
    if (!confirmed) {
      setStep('selection');
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      await assignAgentsToClient(clientId, selectedAgents);
      
      // Navigate directly to training center with selected agents
      navigate(`/clients/${clientId}/training`, {
        replace: true,
        state: { selectedAgents }
      });
    } catch (err) {
      console.error('Error assigning agents:', err);
      setError('Failed to save agent selection. Please try again.');
      setStep('selection');
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    step,
    agentCount,
    selectedAgents,
    error,
    isSubmitting,
    handleAgentCount,
    handleAgentSelection,
    handleConfirmation
  };
}