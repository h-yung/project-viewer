import { Carousel, notification } from "antd";
import { RightCircleOutlined, LeftCircleOutlined } from "@ant-design/icons";
import "./Viewer.css";
import { CustomImageInterface } from "../../utils/gallery";
import { getImageHeight } from "../../utils/hooks/helpers";
// import { useRef, RefObject } from "react";
import ImageSingle from "../ImageSingle";

interface ViewerProps {
	localDimensions: { width: number; height: number };
	image: CustomImageInterface;
	openInfoBox(imgName:string, imgAlt:string):void;

}
const Viewer = ({ localDimensions, image, openInfoBox }: ViewerProps) => {
	

    // const ref= useRef(image.name); //need to fix current ref as it points at just one carousel
	const onChange = (currentSlide: number) => {
        console.log('yooo')
		console.log(currentSlide);
	};
    

	return (
		<div key={image.name} className="viewer-container">
            <div className="view-control-container"> 
						<button
							type="button"
                            onClick={()=>openInfoBox(image.name, image.altText)}
							aria-label="shift image right"
							className="view-control viewer-btn"
						>
							Information
						</button>
					</div> 
			<Carousel
                // ref={ref}
				afterChange={onChange}
                // dots={false}
                // arrows not working atm
                // arrows={true}
                arrows
                prevArrow={<LeftCircleOutlined />} 
                nextArrow={<RightCircleOutlined />}
                easing="ease-in-out"
				className="viewer"
				style={{
					width: localDimensions.width,
					height: getImageHeight(
						localDimensions.width,
						image.widthHeightRatio
					),
				}}
			>
				<div>
					{/* <h3>1</h3> */}
					{/* <div className="img-container"> */}
					<ImageSingle
						src={image.src}
						refWidth={localDimensions.width}
						widthHeightRatio={image.widthHeightRatio}
						altText={image.altText}
					/>
				</div>
				{/* below: i=0, i<numSlides equivalent in JSX */}
				{[...Array(image.numSlides - 1)].map((e, i) => {
					return <div key={i}></div>;
				})}
			</Carousel>
		</div>
	);
};

export default Viewer;
