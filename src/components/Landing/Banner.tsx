import { Row, Col, Typography, Image } from 'antd';
import background from "../../img/doctor.svg";
import { Wave } from "../atoms/Wave"
export const Banner = () => {
    return (
        <>
            <Row justify="center" style={{ backgroundColor: '#ff4029' }}>
                <Col offset={1} xs={20} sm={24} md={6} lg={12} xl={8} >
                    <Typography.Title level={1} style={{marginTop:'20% '}} type="warning">
                        Bienvenido a Oaky gestion
                    </Typography.Title>

                    <Typography.Paragraph type="warning">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur sed quas velit, exercitationem praesentium dolores error nam, cum dignissimos ea dolorum corrupti officia dolore amet. Maiores veritatis amet rem quibusdam!
                        Recusandae tempora, ratione fuga, vel esse natus voluptatem ut provident nesciunt autem unde quas aperiam vero. Culpa ducimus facere reprehenderit voluptas est. Reiciendis sunt commodi explicabo, nulla libero adipisci eligendi.
                    </Typography.Paragraph>

                </Col>
                <Col xs={24} sm={24} md={12} lg={9} xl={9}>

                    <Image width={'100%'} src={background} preview={false} />
                </Col>

                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                    <Wave />
                    {/* <Image width={'100%'} src={wave} preview={false} /> */}
                </Col>
            </Row >

        </>
    );
}
