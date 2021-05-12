import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = ({
  dataPoints,
}: {
  dataPoints: { value: number; label: string }[];
}) => {
  const totalMaximum = Math.max(...dataPoints.map((d) => d.value));
  
  return (
    <div className="chart">
      {dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
