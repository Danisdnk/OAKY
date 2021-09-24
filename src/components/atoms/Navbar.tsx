import { Header } from 'antd/lib/layout/layout'
import Menu from 'antd/lib/menu'
import { NavLink } from 'react-router-dom'
import { FaBookmark, FaChild, FaHome, FaRegAddressBook, FaUser } from 'react-icons/fa';

export const Navbar = () => {
  return (
    <Header className="header">
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item title="OAKY"  icon={<FaHome />}>
          <NavLink
            activeClassName="active"
            className="nav-item nav-link"
            exact
            to="/home"
          >
            Home
          </NavLink>
        </Menu.Item>

        <Menu.Item key="2"  icon={<FaRegAddressBook />}>Noticias</Menu.Item>
      
        <Menu.Item key="4" icon={<FaBookmark />} >
          <NavLink
            activeClassName="active"
            className="nav-item nav-link"
            exact
            to="/profile"
          >
           Perfil
          </NavLink>
        </Menu.Item>

        <Menu.Item key="5" icon={<FaChild />} >
          <NavLink
            activeClassName="active"
            className="nav-item nav-link"
            exact
            to="/child-dashboard"
          >
           Mis infantes
          </NavLink>
        </Menu.Item>

        <Menu.Item key="3" icon={<FaUser />}   style={{ marginLeft: 'auto' }}>
          <NavLink
            activeClassName="active"
            className="nav-item nav-link"
            exact
            to="/login"
          >
            Iniciar sesion
          </NavLink>
        </Menu.Item>
      </Menu>
    </Header>

  )
}
