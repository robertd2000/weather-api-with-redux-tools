type AlertType = {
  text: string;
};

export const Alert: React.FC<AlertType> = ({ text }) => {
  return (
    <div className="alert alert-info" role="alert">
      {text}
    </div>
  );
};
