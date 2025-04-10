export default function Sidebar({ activeTab, setActiveTab, tabs }) {
    return (
      <div className="w-64 bg-gray-800 text-white p-4 space-y-2">
        <button
          className={`w-full text-left p-2 rounded ${activeTab === tabs.Events ? 'bg-gray-700' : ''}`}
          onClick={() => setActiveTab(tabs.Events)}
        >
          🔍 Events
        </button>
        <button
          className={`w-full text-left p-2 rounded ${activeTab === tabs.Statistics ? 'bg-gray-700' : ''}`}
          onClick={() => setActiveTab(tabs.Statistics)}
        >
          📊 Statistics
        </button>
        {/* <button
          className={`w-full text-left p-2 rounded ${activeTab === tabs.PLACEHOLDER ? 'bg-gray-700' : ''}`}
          onClick={() => setActiveTab(tabs.PLACEHOLDER)}
        >
          📁 Placeholder Tab
        </button> */}
      </div>
    );
  }
  