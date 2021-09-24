import { Card } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';


export const ChildCard = ({img, nombre, control, edad }: {img:any, nombre: any, control: any, edad: any }) => {
    const { Meta } = Card;
    return (
            <Card  style={{height: "500px"}} bordered={true}
                // style={{ width: '20%', marginTop: '5%' }}
                cover={<img alt="example" src={img} />
                }
                actions={[
                     <NavLink
                        activeClassName="active"
                        className="nav-item nav-link"
                        exact
                        to="/child-dashboard"
                    >
                        <EditOutlined key="edit" />
                    </NavLink>

                ]}
            >
                <Meta
                    // avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                    title={nombre}
                    description={`proximo control el ${control}`}
                    
                />
            </Card>
      
    );
}