import "./ChartBar.css";

const ChartBar = ({
  value,
  maxValue,
  label,
}: {
  value: number;
  maxValue: number | null;
  label: string;
}) => {
  return <div className="chart-bar"></div>;
};

export default ChartBar;
