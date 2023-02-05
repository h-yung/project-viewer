import AppGallery from "./views/Gallery";
import { Col, Row, notification } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";
import { gallery } from "./utils/gallery";
import "./Layout.css";
interface LayoutProps {
	localDimensions: { width: number; height: number };
}

function Layout({ localDimensions }: LayoutProps) {
	const [api, contextHolder] = notification.useNotification();
	const openInfoBox = (imgName: string, imgAlt: string): void => {
		api.info({
			message: <span style={{ color: "white" }}>{imgName}</span>,
			description: imgAlt,
			placement: "topLeft",
			duration: 3,
			className: "img-detail-modal",
			icon: <InfoCircleOutlined />,
			closeIcon: <span style={{ color: "white" }}>X</span>,
		});
	};
	return (
		<div className="Layout">
			{contextHolder}
			<Row>
				{/* <Col span={4}>
					<label style={{color:"white"}}>Menu</label>
				</Col> */}
                <div className="menu" id="gallery-menu" >
				{
					(Object.keys(gallery).map((key) => (
							<a href={`#${key}`} key={key}
								className="btn">
								{key}
							</a>
					)))
				}
                </div>
			</Row>
			<Row>
				<Col span={24}>
					{/* content, may replace by tab */}
					<AppGallery
						localDimensions={localDimensions}
						openInfoBox={openInfoBox}
					/>
				</Col>
			</Row>
		</div>
	);
}

export default Layout;
