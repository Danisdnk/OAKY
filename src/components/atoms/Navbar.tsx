import { Header } from 'antd/lib/layout/layout'
import Menu from 'antd/lib/menu'

export const Navbar = () => {
    return (
        <Header className="header">
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item title="OAKY">OAKY </Menu.Item>
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">Ingresar😀</Menu.Item>
        </Menu>
      </Header>
    )
}
