export const StatItem = ({ target, value, label }) => {
  return (
    <div className="stat-item">
      <div className="stat-number" data-target={target}>
        {value}
      </div>
      <div className="stat-label">{label}</div>
    </div>
  );
};
