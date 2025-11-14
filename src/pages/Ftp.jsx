import React, { useEffect, useRef } from "react";
import { Bar, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import {
  UploadCloud,
  DownloadCloud,
  Database,
  ShieldCheck,
  UserCheck,
  Clock,
  GitPullRequest,
  MapPin,
} from "lucide-react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// Ftp.jsx
// Single-file React component for a dark-themed FTP page that matches the
// dashboard/home style from the screenshots. Uses Tailwind classes.
// Dependencies (install): react, react-dom, chart.js, react-chartjs-2, lucide-react

export default function Ftp() {
  const particlesRef = useRef(null);
  const uploadsRef = useRef(null);

  useEffect(() => {
    // Simple canvas particle animation (small glow / stars)
    const canvas = particlesRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let w = (canvas.width = canvas.clientWidth);
    let h = (canvas.height = canvas.clientHeight);
    const particles = [];
    const count = Math.floor((w * h) / 10000);

    function rand(min, max) {
      return Math.random() * (max - min) + min;
    }

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        r: rand(0.5, 2.5),
        vx: rand(-0.25, 0.25),
        vy: rand(-0.15, 0.15),
        alpha: rand(0.2, 0.9),
      });
    }

    let raf = null;
    function render() {
      ctx.clearRect(0, 0, w, h);
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(78,124,255,${p.alpha})`; // blue neon-ish
        ctx.fill();
      }
      raf = requestAnimationFrame(render);
    }

    function onResize() {
      w = canvas.width = canvas.clientWidth;
      h = canvas.height = canvas.clientHeight;
    }

    window.addEventListener("resize", onResize);
    render();

    return () => {
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(raf);
    };
  }, []);

  useEffect(() => {
    // Small animation to show upload progress bars on mount
    const el = uploadsRef.current;
    if (!el) return;
    const bars = el.querySelectorAll(".progress-bar-inner");
    bars.forEach((b, i) => {
      setTimeout(() => {
        const target = b.getAttribute("data-target") || "60";
        b.style.width = target + "%";
      }, 300 + i * 200);
    });
  }, []);

  // Chart data
  const barData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Uploaded (GB)",
        data: [12, 18, 16, 22, 20, 26, 24],
        backgroundColor: "rgba(78,124,255,0.9)",
        borderRadius: 6,
      },
      {
        label: "Downloaded (GB)",
        data: [8, 14, 12, 18, 15, 20, 19],
        backgroundColor: "rgba(199,125,255,0.9)",
        borderRadius: 6,
      },
    ],
  };

  const lineData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Active Transfers",
        data: [4, 6, 5, 8, 7, 9, 8],
        borderColor: "rgba(78,124,255,1)",
        tension: 0.35,
        fill: false,
        pointRadius: 3,
      },
      {
        label: "Queued",
        data: [2, 3, 1, 2, 3, 2, 3],
        borderColor: "rgba(199,125,255,1)",
        tension: 0.35,
        fill: false,
        pointRadius: 3,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { labels: { color: "#cbd5e1" } },
      tooltip: { enabled: true },
    },
    scales: {
      x: { ticks: { color: "#9aa7bf" } },
      y: { ticks: { color: "#9aa7bf" } },
    },
  };

  return (
    <div className="min-h-screen bg-[#0D1B2A] text-[#E0E1DD] font-sans">
      {/* Hero / Top */}
      <div className="relative">
        <canvas
          ref={particlesRef}
          className="absolute inset-0 w-full h-64 md:h-96 rounded-b-3xl pointer-events-none"
          style={{ opacity: 0.12 }}
        />

        <div className="max-w-7xl mx-auto px-6 py-12 md:py-20 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-bold leading-tight">
                Fast, Secure & Smart FTP for Remote Teams
              </h1>
              <p className="mt-4 text-[#9aa7bf] max-w-xl">
                Transfer, sync and manage your organization’s files with
                enterprise-grade encryption, activity logs and hybrid storage
                (cloud + on-premise).
              </p>

              <div className="mt-6 flex gap-3">
                <button className="px-5 py-2 rounded-md bg-linear-to-r from-[#4E7CFF] to-[#C77DFF] shadow-lg">
                  Start FTP Transfer
                </button>
                <button className="px-5 py-2 rounded-md border border-[#2B3B4F] text-[#9aa7bf]">
                  Contact Sales
                </button>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3 max-w-md">
                <div className="bg-[#132233] p-4 rounded-lg flex items-center gap-3">
                  <ShieldCheck />
                  <div>
                    <div className="text-sm text-[#9aa7bf]">Encrypted</div>
                    <div className="font-medium">AES-256 / TLS</div>
                  </div>
                </div>

                <div className="bg-[#132233] p-4 rounded-lg flex items-center gap-3">
                  <UserCheck />
                  <div>
                    <div className="text-sm text-[#9aa7bf]">Access</div>
                    <div className="font-medium">Role-based</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2">
              <div className="bg-[#0F2130] rounded-2xl p-4 shadow-2xl border border-[#213047]">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-3">
                    <MapPin />
                    <div>
                      <div className="text-sm text-[#9aa7bf]">Server</div>
                      <div className="font-medium">EU-West • FTP-01</div>
                    </div>
                  </div>
                  <div className="text-sm text-[#9aa7bf]">Latency 28ms</div>
                </div>

                <div className="grid grid-cols-3 gap-3 mb-4">
                  <div className="bg-[#122436] rounded-lg p-3 text-center">
                    <div className="text-xs text-[#9aa7bf]">Active</div>
                    <div className="font-semibold text-lg">8</div>
                  </div>
                  <div className="bg-[#122436] rounded-lg p-3 text-center">
                    <div className="text-xs text-[#9aa7bf]">Queue</div>
                    <div className="font-semibold text-lg">3</div>
                  </div>
                  <div className="bg-[#122436] rounded-lg p-3 text-center">
                    <div className="text-xs text-[#9aa7bf]">Failed</div>
                    <div className="font-semibold text-lg text-[#ff7b7b]">1</div>
                  </div>
                </div>

                <div className="h-44 md:h-56">
                  <Bar data={barData} options={chartOptions} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left: Big charts & table */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-[#122436] rounded-2xl p-6 border border-[#213047]">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold">Transfer Overview</h3>
              <div className="text-sm text-[#9aa7bf]">Updated now</div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="p-4 rounded-lg bg-[#0E2536]">
                <div className="text-xs text-[#9aa7bf]">Total Uploads</div>
                <div className="text-2xl font-bold">1,245 GB</div>
              </div>
              <div className="p-4 rounded-lg bg-[#0E2536]">
                <div className="text-xs text-[#9aa7bf]">Total Downloads</div>
                <div className="text-2xl font-bold">4,512 GB</div>
              </div>
              <div className="p-4 rounded-lg bg-[#0E2536]">
                <div className="text-xs text-[#9aa7bf]">Storage Used</div>
                <div className="text-2xl font-bold">32 TB</div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#0F1F2B] p-4 rounded-xl border border-[#213047] h-64">
                <h4 className="text-sm text-[#9aa7bf] mb-2">Patient Statistics</h4>
                <div className="h-40">
                  <Line data={lineData} options={chartOptions} />
                </div>
              </div>
              <div className="bg-[#0F1F2B] p-4 rounded-xl border border-[#213047] h-64">
                <h4 className="text-sm text-[#9aa7bf] mb-2">Recent Transfers</h4>
                <div className="space-y-3 overflow-auto h-44">
                  {/* small transfer items */}
                  {[
                    { name: "build-v1.zip", size: "120MB", status: "complete" },
                    { name: "design.psd", size: "340MB", status: "uploading" },
                    { name: "db-dump.sql", size: "2.4GB", status: "queued" },
                    { name: "videos.tgz", size: "12GB", status: "paused" },
                  ].map((t, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">{t.name}</div>
                        <div className="text-xs text-[#9aa7bf]">{t.size}</div>
                      </div>
                      <div className="w-48">
                        <div className="bg-[#0A1620] rounded-full h-2 w-full overflow-hidden">
                          <div
                            className="progress-bar-inner h-2 rounded-full"
                            data-target={t.status === "complete" ? 100 : t.status === "uploading" ? 65 : t.status === "queued" ? 12 : 34}
                            style={{ width: "0%", transition: "width 1.2s ease" }}
                          />
                        </div>
                        <div className="text-xs text-[#9aa7bf] mt-1 text-right capitalize">{t.status}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="bg-[#122436] rounded-2xl p-4 border border-[#213047]">
            <h4 className="font-semibold mb-4">Recent Activity</h4>
            <div className="overflow-auto rounded-md">
              <table className="min-w-full table-auto">
                <thead>
                  <tr className="text-left text-sm text-[#9aa7bf]">
                    <th className="px-4 py-3">No</th>
                    <th className="px-4 py-3">Date</th>
                    <th className="px-4 py-3">File</th>
                    <th className="px-4 py-3">Size</th>
                    <th className="px-4 py-3">User</th>
                    <th className="px-4 py-3">Status</th>
                    <th className="px-4 py-3">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["01", "01/08/2021", "build-v1.zip", "120MB", "Shawn", "Completed"],
                    ["02", "01/08/2021", "db-dump.sql", "2.4GB", "Polly", "Failed"],
                    ["03", "01/08/2021", "design.psd", "340MB", "Hannah", "Uploading"],
                    ["04", "01/08/2021", "videos.tgz", "12GB", "Mark", "Paused"],
                  ].map((row, i) => (
                    <tr key={i} className="border-t border-[#1F3448]">
                      <td className="px-4 py-3 text-sm">{row[0]}</td>
                      <td className="px-4 py-3 text-sm">{row[1]}</td>
                      <td className="px-4 py-3 text-sm">{row[2]}</td>
                      <td className="px-4 py-3 text-sm">{row[3]}</td>
                      <td className="px-4 py-3 text-sm">{row[4]}</td>
                      <td className={`px-4 py-3 text-sm`}>{row[5]}</td>
                      <td className="px-4 py-3 text-sm">
                        <div className="flex gap-2">
                          <button className="px-2 py-1 rounded-md bg-[#213047]">View</button>
                          <button className="px-2 py-1 rounded-md bg-[#2B3B4F]">Retry</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Right column: map + integrations + why choose */}
        <aside className="space-y-6">
          <div className="bg-[#122436] rounded-2xl p-4 border border-[#213047] h-80 relative">
            <h4 className="font-semibold mb-2">Live Map</h4>
            <div className="absolute inset-4 rounded-lg overflow-hidden border border-[#122d40]">
              {/* Map area - simple background + glow particles canvas on top */}
              <div className="absolute inset-0 bg-linear-to-br from-[#071122] to-[#0b1b2b]" />
              <canvas className="absolute inset-0 w-full h-full" style={{ mixBlendMode: 'screen', opacity: 0.08 }} />
              <div className="relative z-10 p-4 h-full flex flex-col justify-between">
                <div className="text-sm text-[#9aa7bf]">Active locations</div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-[#081425] p-2 rounded-md flex items-center gap-2">
                    <MapPin />
                    <div>
                      <div className="text-xs text-[#9aa7bf]">New York</div>
                      <div className="text-sm">12 active</div>
                    </div>
                  </div>

                  <div className="bg-[#081425] p-2 rounded-md flex items-center gap-2">
                    <MapPin />
                    <div>
                      <div className="text-xs text-[#9aa7bf]">London</div>
                      <div className="text-sm">8 active</div>
                    </div>
                  </div>

                  <div className="bg-[#081425] p-2 rounded-md flex items-center gap-2">
                    <MapPin />
                    <div>
                      <div className="text-xs text-[#9aa7bf]">Mumbai</div>
                      <div className="text-sm">20 active</div>
                    </div>
                  </div>

                  <div className="bg-[#081425] p-2 rounded-md flex items-center gap-2">
                    <MapPin />
                    <div>
                      <div className="text-xs text-[#9aa7bf]">Berlin</div>
                      <div className="text-sm">4 active</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#122436] rounded-2xl p-4 border border-[#213047]">
            <h4 className="font-semibold mb-3">Integrations</h4>
            <div className="flex flex-wrap gap-3">
              {[
                "Google Drive",
                "Slack",
                "Zoom",
                "Microsoft Teams",
                "Jira",
              ].map((name) => (
                <div key={name} className="bg-[#0E2536] px-3 py-2 rounded-lg text-sm">
                  {name}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#122436] rounded-2xl p-4 border border-[#213047]">
            <h4 className="font-semibold mb-2">Why Choose Our FTP</h4>
            <ul className="space-y-2 text-sm text-[#9aa7bf]">
              <li className="flex items-center gap-2">
                <Database /> <span>Hybrid cloud + on-premise</span>
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck /> <span>End-to-end encryption</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock /> <span>24/7 uptime & monitoring</span>
              </li>
              <li className="flex items-center gap-2">
                <GitPullRequest /> <span>Automations & workflows</span>
              </li>
            </ul>
          </div>
        </aside>
      </div>

      {/* Contact CTA (footer-like) */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="bg-[#0E2536] rounded-2xl p-8 border border-[#213047] flex flex-col md:flex-row items-center gap-6">
          <div className="flex-1">
            <h3 className="text-xl font-semibold">Let’s build your remote FTP workflow</h3>
            <p className="text-sm text-[#9aa7bf]">Reach out for an enterprise demo or migration plan.</p>
          </div>
          <form className="w-full md:w-2/5 grid grid-cols-1 gap-3">
            <input className="p-3 rounded-md bg-[#071324] border border-[#1b3347] text-sm" placeholder="Your name" />
            <input className="p-3 rounded-md bg-[#071324] border border-[#1b3347] text-sm" placeholder="Email" />
            <button className="px-4 py-3 rounded-md bg-linear-to-r from-[#4E7CFF] to-[#C77DFF]">Send Message</button>
          </form>
        </div>
      </div>

     

      {/* hidden ref container for uploads animation */}
      <div ref={uploadsRef} style={{ display: "none" }} />
    </div>
    
  );
}
