export const ContactInfo = ({ icon, tit, info }) => {
  return (
    <div className="info-item">
      <div className="info-icon">{icon}</div>
      <h3>{tit}</h3>
      <p>{info}</p>
    </div>
  );
};
