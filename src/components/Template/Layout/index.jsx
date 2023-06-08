const Layout = ({ children }) => {
  return (
    <div className="w-full h-screen bg-[#ffffff] flex flex-col overflow-auto ">
      <div className="h-full w-full  overflow-auto">{children}</div>
    </div>
  );
};

export default Layout;
