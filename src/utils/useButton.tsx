export const NumberButton = ({
  onClick,
  value,
}: {
  onClick: () => void;
  value: string | React.ReactNode;
}) => (
  <button onClick={onClick}>
    <span>{value}</span>
  </button>
);
