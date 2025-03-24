import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

const DefaultLayout = () => {
  return (
    <div className="h-full min-h-[100vh] w-full">
      {/* 내비게이션 */}
      <div className="h-[80px] w-full bg-[#efedfb]">
        <Link to="/">Main</Link>
        <Link to="/test1">Test1</Link>
      </div>

      <div
        id="prototype-body"
        className="flex h-full w-full flex-col items-center justify-center gap-[20px] p-5"
      >
        <Outlet />
      </div>
    </div>
  );
};

export default DefaultLayout;
