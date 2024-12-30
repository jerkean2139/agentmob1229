import React from 'react';
import { Bot, Check, X } from 'lucide-react';
import { AVAILABLE_AGENTS } from './agentData';
import { Button } from '../../../components/ui/Button';

interface AgentSetupConfirmationProps {
  selectedAgents: string[];
  onConfirm: (confirmed: boolean) => void;
}

export default function AgentSetupConfirmation({ selectedAgents, onConfirm }: AgentSetupConfirmationProps) {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const selectedAgentDetails = AVAILABLE_AGENTS.filter(agent => 
    selectedAgents.includes(agent.id)
  );

  const handleConfirm = async () => {
    setIsSubmitting(true);
    try {
      await onConfirm(true);
    } catch (error) {
      console.error('Error during confirmation:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-semibold text-gray-900">Confirm Your Agent Mob</h2>
        <p className="mt-2 text-gray-600">
          Review your selected agents before proceeding with setup
        </p>
      </div>

      <div className="bg-white rounded-lg border p-6 mb-8">
        <div className="grid gap-6">
          {selectedAgentDetails.map((agent, index) => (
            <div key={agent.id} className="flex items-start gap-4 border-b last:border-0 pb-4 last:pb-0">
              <div className="relative">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Bot className="w-6 h-6 text-primary" />
                </div>
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-white rounded-full flex items-center justify-center text-xs">
                  {index + 1}
                </div>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">{agent.name}</h3>
                <p className="text-sm text-gray-600">{agent.role}</p>
                <p className="text-sm text-gray-500 mt-1">{agent.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center gap-4">
        <Button
          onClick={() => onConfirm(false)}
          variant="secondary"
          icon={X}
          disabled={isSubmitting}
        >
          Make Changes
        </Button>
        <Button
          onClick={handleConfirm}
          icon={Check}
          loading={isSubmitting}
        >
          {isSubmitting ? 'Confirming...' : 'Confirm and Continue'}
        </Button>
      </div>
    </div>
  );
}