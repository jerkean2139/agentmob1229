import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { assignAgentsToClient } from '../lib/agents/assignAgents';

export function useAgentAssignment(clientId: string, onComplete?: () => void) {
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const assignAgents = async (agentIds: string[]) => {
    if (!clientId || !agentIds.length) {
      setError('Invalid client or agent selection');
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      await assignAgentsToClient(clientId, agentIds);
      
      // Navigate to training center with selected agents
      navigate(`/clients/${clientId}/training`, {
        replace: true,
        state: { selectedAgents: agentIds }
      });

      if (onComplete) {
        onComplete();
      }
    } catch (err) {
      console.error('Assignment error:', err);
      setError('Failed to save agent selection. Please try again.');
      throw err;
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    assignAgents,
    error,
    isSubmitting,
    clearError: () => setError(null)
  };
}