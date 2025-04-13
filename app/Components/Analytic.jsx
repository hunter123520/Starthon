import { useMemo } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);

const classLabels = [
  "Improvement Suggestions", "Questions", "Confusion", "Support Request",
  "Discussion", "Course Comparison", "Related Course Suggestions",
  "Negative", "Positive"
];

// Analysis summary & pie chart
const ReviewAnalytics = ({ reviews }) => {
  const { total, classCounts, pieData } = useMemo(() => {
    const counts = {};
    classLabels.forEach(label => (counts[label] = 0));

    reviews.forEach(item => {
      const label = item["predictions"];
      if (label in counts) counts[label]++;
    });

    const total = reviews.length;

    const pieData = {
      labels: classLabels,
      datasets: [
        {
          label: "Review Distribution",
          data: classLabels.map(label => counts[label]),
          backgroundColor: [
            "#28a745", "#17a2b8", "#6f42c1", "#6c757d",
            "#20c997", "#fd7e14", "#007bff", "#dc3545", "#ffc107"
          ],
          borderColor: "#fff",
          borderWidth: 1,
        }
      ]
    };

    return { total, classCounts: counts, pieData };
  }, [reviews]);

  return (
    <div className="review-analysis">
      <h2>📊 Feedback Analysis</h2>
      <p>Total Reviews: <strong>{total}</strong></p>
      <div className="class-counts">
        {classLabels.map((label, idx) => (
          <div key={idx} className="count-item">
            <span>{label}</span>
            <strong>{classCounts[label]}</strong>
          </div>
        ))}
      </div>

      <div className="chart-container">
        <Pie data={pieData} />
      </div>
    </div>
  );
};
export default ReviewAnalytics;