const Elipse = ({color}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="8"
      height="7"
      viewBox="0 0 8 7"
      fill="none"
    >
      <ellipse cx="4" cy="3.31116" rx="4" ry="3.02222" fill={color} />
    </svg>
  );
};

export default Elipse;
