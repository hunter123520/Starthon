// app/dashboard/page.tsx or pages/dashboard.js depending on your setup
'use client';

import { useState } from 'react';
import Sidebar from '../Components/Sidebar';
import Statistics from '../Components/Statistics';
import Events from "../Components/Events";
import PlaceholderTab from '../Components/PlaceholderTab';

const TABS = {
  Events:"Events",
  Statistics: 'Statistics',
  PLACEHOLDER: 'PlaceholderTab',
};

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState(TABS.Events);

  const renderTab = () => {
    switch (activeTab) {
      case TABS.Events:
        return <Events/>;
      case TABS.Statistics:
        return <Statistics />;
      case TABS.PLACEHOLDER:
        return <PlaceholderTab />;
      default:
        return <Statistics />;
    }
  };

  return (
    <div className="flex h-screen">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} tabs={TABS} />
      <div className="flex-1 p-2 overflow-auto">
        {renderTab()}
      </div>
    </div>
  );
}