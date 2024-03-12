import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="mx-auto max-w-screen-xl">
      <Outlet />
    </div>
  );
};

export default Root;
