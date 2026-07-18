const BottomActionBar = ({ children }) => {
  return (
    <footer className="fixed left-0 right-0 z-50 bg-white bottom-3">
      <div className="max-w-lg mx-auto">{children}</div>
    </footer>
  );
};

export default BottomActionBar;
