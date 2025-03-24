import { Route, Routes } from 'react-router-dom';
import DefaultLayout from './DefaultLayout';
import MainPage from './main';
import Test1 from './test1';

const RootRouter = () => {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route index path="/" element={<MainPage />} />
        <Route path="/test1" element={<Test1 />} />
      </Route>
    </Routes>
  );
};

export default RootRouter;
