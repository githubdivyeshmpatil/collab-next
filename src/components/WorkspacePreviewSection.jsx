import React from "react";
import { Menu, Home, MessageSquare, FolderKanban, Users, Bell } from "lucide-react";

const WorkspacePreviewSection = () => {
  return (
    <section className="bg-gray-50 py-20 px-6 md:px-12">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          Your Virtual Office — Always Connected
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Manage projects, collaborate in real-time, and stay connected with your entire team — all in one workspace.
        </p>
      </div>

      {/* Dashboard Mockup */}
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
        <div className="flex flex-col md:flex-row h-[550px]">
          {/* Left Sidebar */}
          <aside className="bg-gray-900 text-gray-200 w-full md:w-1/5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 p-5 border-b border-gray-800">
                <Menu className="w-6 h-6 text-gray-400" />
                <span className="font-semibold text-lg">Workspace</span>
              </div>
              <nav className="flex flex-col gap-5 p-5">
                <div className="flex items-center gap-3 hover:text-white cursor-pointer">
                  <Home className="w-5 h-5" /> Dashboard
                </div>
                <div className="flex items-center gap-3 hover:text-white cursor-pointer">
                  <FolderKanban className="w-5 h-5" /> Projects
                </div>
                <div className="flex items-center gap-3 hover:text-white cursor-pointer">
                  <MessageSquare className="w-5 h-5" /> Messages
                </div>
                <div className="flex items-center gap-3 hover:text-white cursor-pointer">
                  <Users className="w-5 h-5" /> Team
                </div>
                <div className="flex items-center gap-3 hover:text-white cursor-pointer">
                  <Bell className="w-5 h-5" /> Notifications
                </div>
              </nav>
            </div>
            <div className="p-5 text-sm text-gray-400 border-t border-gray-800">
              © 2025 TeamFlow
            </div>
          </aside>

          {/* Center Workspace */}
          <main className="flex-1 bg-gray-100 p-6 md:p-8 flex flex-col">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              Task Board
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 flex-1">
              {["To Do", "In Progress", "Completed"].map((col, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl shadow p-4 flex flex-col"
                >
                  <h4 className="font-semibold mb-3">{col}</h4>
                  <div className="flex-1 space-y-3">
                    {[1, 2, 3].map((t) => (
                      <div
                        key={t}
                        className="bg-gray-50 border rounded-lg p-2 text-sm text-gray-700"
                      >
                        {col} Task {t}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </main>

          {/* Right Chat / Activity */}
          <aside className="bg-gray-50 border-l border-gray-200 w-full md:w-1/4 p-5 flex flex-col">
            <h3 className="text-lg font-semibold mb-3 text-gray-800">
              Team Chat
            </h3>
            <div className="flex-1 overflow-y-auto space-y-3">
              {[
                { name: "Alex", msg: "Hey, project update?" },
                { name: "Priya", msg: "Yes, pushing new files soon." },
                { name: "John", msg: "Let's review at 3PM." },
              ].map((chat, i) => (
                <div key={i} className="bg-white rounded-xl p-3 shadow-sm">
                  <p className="font-semibold text-gray-800">{chat.name}</p>
                  <p className="text-sm text-gray-600">{chat.msg}</p>
                </div>
              ))}
            </div>
            <div className="mt-4">
              <input
                type="text"
                placeholder="Type a message..."
                className="w-full p-2 border rounded-lg text-sm"
              />
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default WorkspacePreviewSection;
