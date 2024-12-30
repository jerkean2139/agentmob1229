import { useState, useEffect } from 'react';
import { getAgents } from '../lib/agents/agentService';
import type { Agent } from '../types';

export function useAgents(clientId?: string) {
  const [agents, setAgents] = useState<Agent[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let mounted = true;

    async function fetchAgents() {
      try {
        const data = await getAgents(clientId);
        if (mounted) {
          setAgents(data);
          setError(null);
        }
      } catch (err) {
        console.error('Error fetching agents:', err);
        if (mounted) {
          setError(err instanceof Error ? err : new Error('Failed to fetch agents'));
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    }

    fetchAgents();

    return () => {
      mounted = false;
    };
  }, [clientId]);

  return { agents, loading, error };
}