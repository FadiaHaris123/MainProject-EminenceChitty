import { Sidebar, Menu, MenuItem, useProSidebar } from 'react-pro-sidebar';
import { AiOutlineMenu } from "react-icons/ai";

const Layout=()=> {
  const { collapseSidebar } = useProSidebar();

  return (
    <div style={{ display: 'flex', height: '100%' }}>
      <Sidebar collapsedWidth='0px'>
        <Menu>
        <MenuItem> Profile</MenuItem>
          <MenuItem> Auction</MenuItem>
          <MenuItem> Chits</MenuItem>
          <MenuItem> Log Out</MenuItem>
        </Menu>
      </Sidebar>
      <main>
        <button onClick={() => collapseSidebar()}><AiOutlineMenu icon="fa-sharp fa-solid fa-bars" /></button>
      </main>
    </div>
  );
}

export default Layout;  