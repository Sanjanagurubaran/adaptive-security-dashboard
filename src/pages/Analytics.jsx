import Sidebar from "../components/Sidebar";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend
} from "recharts";

const chartData = [
  { name: "Normal", value: 60 },
  { name: "Suspicious", value: 25 },
  { name: "Emergency", value: 15 }
];

const COLORS = ["#22c55e", "#f59e0b", "#ef4444"];

function Analytics() {
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
        <h1>Analytics</h1>

        {/* Analytics Summary Cards */}

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "20px",
            marginTop: "20px"
          }}
        >
          <div
            style={{
              background: "#334155",
              padding: "20px",
              borderRadius: "12px"
            }}
          >
            <h3>Total Transactions</h3>
            <h2>120</h2>
          </div>

          <div
            style={{
              background: "#334155",
              padding: "20px",
              borderRadius: "12px"
            }}
          >
            <h3>Normal Events</h3>
            <h2>72</h2>
          </div>

          <div
            style={{
              background: "#334155",
              padding: "20px",
              borderRadius: "12px"
            }}
          >
            <h3>Suspicious Events</h3>
            <h2>30</h2>
          </div>

          <div
            style={{
              background: "#334155",
              padding: "20px",
              borderRadius: "12px"
            }}
          >
            <h3>Emergency Events</h3>
            <h2>18</h2>
          </div>
        </div>

        {/* Pie Chart Section */}

        <div
          style={{
            background: "#1e293b",
            borderRadius: "12px",
            padding: "20px",
            marginTop: "30px",
            height: "500px"
          }}
        >
          <h2>Security State Distribution</h2>

          <ResponsiveContainer width="100%" height="90%">
            <PieChart>
              <Pie
                data={chartData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={140}
                label
              >
                {chartData.map((entry, index) => (
                  <Cell
                    key={index}
                    fill={COLORS[index]}
                  />
                ))}
              </Pie>

              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Footer */}

        <footer
          style={{
            textAlign: "center",
            marginTop: "30px",
            color: "#94a3b8"
          }}
        >
          Adaptive Security Analytics Dashboard | AI + Blockchain Security
        </footer>
      </div>
    </div>
  );
}

export default Analytics;