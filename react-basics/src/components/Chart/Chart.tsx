import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = ({
  dataPoints,
}: {
  dataPoints: { value: number; label: string }[];
}) => {
  return (
    <div className="chart">
      {dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={null}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
