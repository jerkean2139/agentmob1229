import React from 'react';
import { Routes, Route, useParams, useLocation } from 'react-router-dom';
import { Bot } from 'lucide-react';
import { useAgents } from '../../../hooks/useAgents';
import AgentOverview from './views/AgentOverview';
import AgentDetails from './views/AgentDetails';

export default function ClientTrainingCenter() {
  const { clientId } = useParams<{ clientId: string }>();
  const location = useLocation();
  const { agents, loading, error } = useAgents(clientId);
  const selectedAgents = location.state?.selectedAgents || [];

  if (!clientId) return null;

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-gray-500">Loading agent data...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 text-red-600 p-4 rounded-lg">
        Failed to load agents: {error.message}
      </div>
    );
  }

  // Filter agents based on selection if coming from setup
  const displayAgents = selectedAgents.length > 0 
    ? agents.filter(agent => selectedAgents.includes(agent.id))
    : agents;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-primary/80 text-white p-6 -mx-6 -mt-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4">
            <Bot className="w-8 h-8" />
            <div>
              <h1 className="text-2xl font-bold">Agent Training Center</h1>
              <p className="mt-1 text-white/80">
                {displayAgents.length} {displayAgents.length === 1 ? 'Agent' : 'Agents'} Ready for Training
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto py-6">
        <Routes>
          <Route index element={<AgentOverview agents={displayAgents} />} />
          <Route path="agent/:agentId/*" element={<AgentDetails />} />
        </Routes>
      </div>
    </div>
  );
}