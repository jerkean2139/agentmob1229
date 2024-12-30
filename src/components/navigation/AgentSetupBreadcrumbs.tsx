import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Building2, Users } from 'lucide-react';

interface AgentSetupBreadcrumbsProps {
  clientName?: string;
}

export default function AgentSetupBreadcrumbs({ clientName = "Zenoflo" }: AgentSetupBreadcrumbsProps) {
  return (
    <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
      <Link
        to="/"
        className="flex items-center hover:text-primary transition-colors"
      >
        <Building2 className="w-4 h-4 mr-1" />
        Clients
      </Link>

      <ChevronRight className="w-4 h-4 text-gray-400" />
      
      <div className="flex items-center text-gray-900 font-medium">
        <Users className="w-4 h-4 mr-1" />
        {clientName} Agent Setup
      </div>
    </nav>
  );
}