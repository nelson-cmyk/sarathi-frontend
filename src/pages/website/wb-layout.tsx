import { WbCounter, WbFooter, WbMenu, WbTopnav } from '@/components';
import { Outlet } from 'react-router-dom';

const WbLayout = () => {
  return (
    <>
      <WbTopnav />
      <WbMenu />
      <Outlet />
      <WbFooter />
      <WbCounter />
    </>
  );
};
export default WbLayout;
