import { Outlet } from "react-router-dom";

const StatusBar = () => {
  return (
    <>
      <div className="bg-test-text text-test-bg px-4 py-3 text-center text-sm font-medium">
        <span className="pr-[.38rem] text-base">💶</span>Актуальный курс: 112 ₽
        за €1
      </div>
      <Outlet />
    </>
  );
};

export default StatusBar;
