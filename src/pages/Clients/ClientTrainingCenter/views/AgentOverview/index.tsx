import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Bot } from 'lucide-react';
import AgentCard from '../../components/AgentCard';

interface AgentOverviewProps {
  agents: Array<{
    id: string;
    name: string;
    role: string;
    department: string;
  }>;
}

export default function AgentOverview({ agents }: AgentOverviewProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const isNewSetup = location.state?.selectedAgents;

  const handleSelectAgent = (agentId: string) => {
    navigate(`agent/${agentId}`);
  };

  // Put Donna first if she exists
  const sortedAgents = React.useMemo(() => {
    return [...agents].sort((a, b) => {
      if (a.name === 'Donna') return -1;
      if (b.name === 'Donna') return 1;
      return 0;
    });
  }, [agents]);

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-2">Your Agent Team</h2>
        <p className="text-gray-600">
          {isNewSetup 
            ? "Let's start by training Donna, your Traffic Controller" 
            : "Select an agent to manage their training"}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedAgents.map((agent) => (
          <AgentCard
            key={agent.id}
            agent={agent}
            highlight={isNewSetup && agent.name === 'Donna'}
            onClick={() => handleSelectAgent(agent.id)}
          />
        ))}
      </div>
    </div>
  );
}