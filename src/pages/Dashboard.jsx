import { useState, useEffect } from "react";
import axios from "axios";

import Sidebar from "../components/Sidebar";
import StatCard from "../components/StatCard";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

function Dashboard() {
  const [data, setData] = useState({
    risk_score: 0,
    confidence: 0,
    blockchain_state: "Loading...",
    transaction_hash: "Loading..."
  });

  useEffect(() => {
    const fetchRisk = async () => {
      try {
        const response = await axios.post(
          "http://localhost:5000/api/risk/analyze",
          [
            {
              value: 1000,
              gas_used: 21000,
              wallet: "0xabc123",
              type: "transfer"
            }
          ]
        );

        setData(response.data);
      } catch (error) {
        console.error("Backend Error:", error);
      }
    };

    fetchRisk();
  }, []);

  const riskHistory = [
    { time: "10:00", risk: 20 },
    { time: "11:00", risk: 35 },
    { time: "12:00", risk: 50 },
    { time: "13:00", risk: 72 },
    { time: "14:00", risk: 65 },
    { time: "15:00", risk: 80 }
  ];

  const securityEvents = [
    {
      time: "10:00",
      event: "RiskUpdated",
      state: "Normal"
    },
    {
      time: "11:30",
      event: "SuspicionDetected",
      state: "Suspicious"
    },
    {
      time: "14:00",
      event: "EmergencyActivated",
      state: "Emergency"
    }
  ];

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div
        style={{
          flex: 1,
          padding: "30px",
          background: "#0f172a",
          minHeight: "100vh",
          color: "white"
        }}
      >
        <h1>Adaptive Security Analytics Dashboard</h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "20px",
            marginTop: "30px"
          }}
        >
          <StatCard title="Risk Score" value={data.risk_score} />

          <StatCard
            title="Confidence"
            value={`${data.confidence}%`}
          />

          <StatCard
            title="State"
            value={data.blockchain_state}
          />

          <StatCard
            title="Transaction"
            value={data.transaction_hash}
          />
        </div>

        {/* Risk Trend Chart */}

        <div
          style={{
            background: "#1e293b",
            padding: "20px",
            borderRadius: "12px",
            marginTop: "30px"
          }}
        >
          <h2>Risk Trend Analysis</h2>

          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={riskHistory}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />

              <Line
                type="monotone"
                dataKey="risk"
                stroke="#3b82f6"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Security Events Table */}

        <div
          style={{
            background: "#1e293b",
            padding: "20px",
            borderRadius: "12px",
            marginTop: "30px"
          }}
        >
          <h2>Security Events</h2>

          <table
            style={{
              width: "100%",
              marginTop: "20px",
              borderCollapse: "collapse",
              color: "white"
            }}
          >
            <thead>
              <tr>
                <th style={{ padding: "12px", textAlign: "left" }}>
                  Time
                </th>

                <th style={{ padding: "12px", textAlign: "left" }}>
                  Event
                </th>

                <th style={{ padding: "12px", textAlign: "left" }}>
                  State
                </th>
              </tr>
            </thead>

            <tbody>
              {securityEvents.map((item, index) => (
                <tr key={index}>
                  <td style={{ padding: "12px" }}>
                    {item.time}
                  </td>

                  <td style={{ padding: "12px" }}>
                    {item.event}
                  </td>

                  <td style={{ padding: "12px" }}>
                    {item.state}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;