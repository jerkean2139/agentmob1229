-- Create function to assign agents to client
CREATE OR REPLACE FUNCTION assign_agents_to_client(
  p_client_id uuid,
  p_agent_ids uuid[]
)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  -- Update all specified agents
  UPDATE agents
  SET 
    client_id = p_client_id,
    status = 'active',
    updated_at = NOW()
  WHERE id = ANY(p_agent_ids);
END;
$$;

-- Grant execute permission to authenticated users
GRANT EXECUTE ON FUNCTION assign_agents_to_client TO authenticated;