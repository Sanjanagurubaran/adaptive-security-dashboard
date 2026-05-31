import Sidebar from "../components/Sidebar";
import { jsPDF } from "jspdf";

function Reports() {

  const downloadReport = () => {
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text("Adaptive Security Report", 20, 20);

    doc.setFontSize(12);

    doc.text("Risk Score: 72", 20, 40);
    doc.text("Confidence: 94%", 20, 50);
    doc.text("Blockchain State: Suspicious", 20, 60);
    doc.text("Transaction Hash: 0x7d4a8b...", 20, 70);

    doc.text("Security Events", 20, 90);

    doc.text("10:00  RiskUpdated          Normal", 20, 105);
    doc.text("11:30  SuspicionDetected    Suspicious", 20, 115);
    doc.text("14:00  EmergencyActivated   Emergency", 20, 125);

    doc.text("Risk Trend", 20, 145);

    doc.text("10:00 -> 20", 20, 160);
    doc.text("11:00 -> 35", 20, 170);
    doc.text("12:00 -> 50", 20, 180);
    doc.text("13:00 -> 72", 20, 190);

    doc.save("Adaptive-Security-Report.pdf");
  };

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
        <h1>Reports</h1>

        <button
          onClick={downloadReport}
          style={{
            padding: "12px 20px",
            border: "none",
            borderRadius: "8px",
            background: "#3b82f6",
            color: "white",
            cursor: "pointer"
          }}
        >
          Download Security Report
        </button>
      </div>
    </div>
  );
}

export default Reports;