'use client';
import { Sidebar } from 'flowbite-react';
import { useState } from 'react';
const TopNavBar = () => {
  const [menu, setMenu] = useState(true);

  return (
    <>
      <button onClick={() => setMenu(!menu)}>Toggle</button>
      <p>{menu ? 'visible' : 'hidden'}</p>
      <Sidebar hidden={menu}>
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item href="#">
              <p>Dashboard</p>
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </>
  );
};

export default TopNavBar;
