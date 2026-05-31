import { FaChartLine, FaShieldAlt, FaFileAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div
      style={{
        width: "250px",
        minHeight: "100vh",
        background: "#111827",
        color: "white",
        padding: "25px"
      }}
    >
      <h2>Adaptive Security</h2>

      <div style={{ marginTop: "40px" }}>
        <p style={{ marginBottom: "20px" }}>
          <Link
            to="/"
            style={{
              color: "white",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "10px"
            }}
          >
            <FaChartLine />
            Dashboard
          </Link>
        </p>

        <p style={{ marginBottom: "20px" }}>
          <Link
            to="/analytics"
            style={{
              color: "white",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "10px"
            }}
          >
            <FaShieldAlt />
            Analytics
          </Link>
        </p>

        <p>
          <Link
            to="/reports"
            style={{
              color: "white",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "10px"
            }}
          >
            <FaFileAlt />
            Reports
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Sidebar;