import { Carousel } from "antd";
import { RightCircleOutlined, LeftCircleOutlined } from "@ant-design/icons";
import "./Viewer.css";
import { CustomImageInterface } from "../../utils/imagery";
import { getImageHeight } from "../../utils/hooks/helpers";
import { useRef, RefObject } from "react";
import ImageSingle from "../ImageSingle";

interface ViewerProps {
	localDimensions: { width: number; height: number };
	image: CustomImageInterface;
}
const Viewer = ({ localDimensions, image }: ViewerProps) => {
    const ref= useRef(image.name); //need to fix current ref as it points at just one carousel
	const onChange = (currentSlide: number) => {
        console.log('yooo')
		console.log(currentSlide);
	};
    const goBack=()=>{
        //not great but
        if (image.numSlides)
        ref.current!.prev();
    }
    const goFwd=()=>{
        //not great but
        ref.current!.next();
    }

	return (
		<div key={image.name} className="viewer-container">
            {/* <div className="view-control-container">
						<span
							type="button"
                            onClick={goBack}
							aria-label="shift image left"
							className="view-control"
						>
							<LeftCircleOutlined />
						</span>
						<span
							type="button"
                            onClick={goFwd}
							aria-label="shift image right"
							className="view-control"
						>
							<RightCircleOutlined />
						</span>
					</div> */}
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
