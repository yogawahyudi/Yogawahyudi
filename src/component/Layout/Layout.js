import React from 'react'
import DrawerAppBar from '../../../src/component/AppBar/AppBarDrawer'
import SocialDrawer from '../../../src/component/Drawer/SocialDrawer';


const Layout = ({children}) => {
  return (
    <>
      <DrawerAppBar />
      <SocialDrawer />
      {children}
    </>
  )
}

export default Layout