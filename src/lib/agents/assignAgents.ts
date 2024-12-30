import { supabase } from '../supabase/client';

export async function assignAgentsToClient(clientId: string, agentIds: string[]) {
  if (!clientId || !agentIds.length) {
    throw new Error('Client ID and agent IDs are required');
  }

  try {
    const { error } = await supabase.rpc('assign_agents_to_client', {
      p_client_id: clientId,
      p_agent_ids: agentIds
    });

    if (error) {
      console.error('Database error:', error);
      throw new Error('Failed to assign agents');
    }
  } catch (err) {
    console.error('Error in assignAgentsToClient:', err);
    throw err;
  }
}