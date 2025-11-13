import React from "react";
import googleDrive from "../assets/images/google-drive.png";
import slack from "../assets/images/slack.png";
import zoom from "../assets/images/zoom.png";
import teams from "../assets/images/teams.png";
import jira from "../assets/images/jira.png";

const integrations = [
  { name: "Google Drive", logo: googleDrive },
  { name: "Slack", logo: slack },
  { name: "Zoom", logo: zoom },
  { name: "Microsoft Teams", logo: teams },
  { name: "Jira", logo: jira },
];

const IntegrationSection = () => {
  // duplicate the list for seamless loop
  const tools = [...integrations, ...integrations];

  return (
    <section className="bg-white py-20 px-6 md:px-12 overflow-hidden">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          Integrate Your Favorite Tools Seamlessly
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Connect your everyday work apps for a unified and efficient workflow.
        </p>
      </div>

      {/* Auto scroll container */}
      <div className="relative w-full overflow-hidden">
        <div className="flex animate-scroll gap-8">
          {tools.map((tool, i) => (
            <div
              key={i}
              className="p-4 bg-gray-50 rounded-2xl hover:shadow-lg transition-all duration-300 flex flex-col items-center justify-center w-32 h-32 flex-shrink-0"
            >
              <img
                src={tool.logo}
                alt={tool.name}
                className="w-16 h-16 object-contain mb-3"
              />
              <p className="text-sm font-medium text-gray-700 text-center">
                {tool.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Animation style */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 15s linear infinite;
          width: max-content;
        }
      `}</style>
    </section>
  );
};

export default IntegrationSection;
