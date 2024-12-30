import { supabase } from '../supabase/client';
import type { Agent } from '../../types';

export async function getAgents(clientId?: string) {
  try {
    let query = supabase
      .from('agents')
      .select('*')
      .order('display_order', { ascending: true });

    if (clientId) {
      query = query.eq('client_id', clientId);
    }

    const { data, error } = await query;

    if (error) throw error;
    return data || [];
  } catch (err) {
    console.error('Error fetching agents:', err);
    throw new Error('Failed to fetch agents');
  }
}

export async function assignAgentsToClient(clientId: string, agentIds: string[]) {
  try {
    const { error } = await supabase.rpc('assign_agents_to_client', {
      p_client_id: clientId,
      p_agent_ids: agentIds
    });

    if (error) throw error;
  } catch (err) {
    console.error('Error assigning agents:', err);
    throw new Error('Failed to assign agents to client');
  }
}