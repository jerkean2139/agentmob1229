import React from 'react';
import ClientList from './ClientList';
import ClientDetails from './ClientDetails';
import NewClientForm from './NewClientForm';
import AgentSetup from './AgentSetup';

export default function ClientsPage() {
  const [selectedClient, setSelectedClient] = React.useState<string | null>(null);
  const [showNewClient, setShowNewClient] = React.useState(false);
  const [showAgentSetup, setShowAgentSetup] = React.useState(true);
  const [newClientId, setNewClientId] = React.useState<string | null>('demo-client');

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Agent Management</h1>
        <button 
          onClick={() => setShowNewClient(true)}
          className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90"
        >
          Add New Client
        </button>
      </div>
      
      {showAgentSetup ? (
        <AgentSetup 
          clientId={newClientId || 'demo-client'} 
          onComplete={() => setShowAgentSetup(false)}
        />
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <ClientList onSelect={setSelectedClient} selectedId={selectedClient} />
          <div className="lg:col-span-2">
            <ClientDetails clientId={selectedClient} />
          </div>
        </div>
      )}

      {showNewClient && (
        <NewClientForm
          onClose={() => setShowNewClient(false)}
          onSuccess={(clientId) => {
            setNewClientId(clientId);
            setShowNewClient(false);
          }}
        />
      )}
    </div>
  );
}