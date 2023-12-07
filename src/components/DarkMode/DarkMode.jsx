const DarkMode = ({ toggleDarkMode, isDarkMode }) => {
  return (
    <>
      <div onClick={toggleDarkMode} style={{ cursor: "pointer" }}>
        {isDarkMode ? "Nacht" : "Tag"}
      </div>
    </>
  );
};

export default DarkMode;
