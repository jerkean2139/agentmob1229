import React from 'react';
import { Bot } from 'lucide-react';

interface AgentCountProps {
  onNext: (count: number) => void;
}

export default function AgentCount({ onNext }: AgentCountProps) {
  const [agentCount, setAgentCount] = React.useState(3);

  return (
    <div className="max-w-lg mx-auto">
      <div className="text-center mb-8">
        <Bot className="w-12 h-12 text-primary mx-auto mb-4" />
        <h2 className="text-2xl font-semibold text-gray-900">Build Your Agent Mob</h2>
        <p className="mt-2 text-gray-600">
          How many additional agents would you like to add to your team?
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <label htmlFor="agentCount" className="block text-sm font-medium text-gray-700">
            Number of Additional Agents
          </label>
          <select
            id="agentCount"
            value={agentCount}
            onChange={(e) => setAgentCount(parseInt(e.target.value))}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
          >
            {[...Array(15)].map((_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1} {i === 0 ? 'Agent' : 'Agents'}
              </option>
            ))}
          </select>
          <p className="mt-1 text-sm text-gray-500">
            Donna is automatically included as your Traffic Controller
          </p>
        </div>

        <button
          onClick={() => onNext(agentCount)}
          className="w-full px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90"
        >
          Continue to Agent Selection
        </button>
      </div>
    </div>
  );
}