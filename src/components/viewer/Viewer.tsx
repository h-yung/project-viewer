import { Carousel } from "antd";
import "./Viewer.css";
import { CustomImageInterface } from "../../utils/imagery";
import { getImageHeight } from "../../utils/hooks/helpers";
import { useMemo, useEffect } from "react";
import ImageSingle from "../ImageSingle";

interface ViewerProps {
	localDimensions: { width: number; height: number };
    image: CustomImageInterface;
}
const Viewer = ({ localDimensions, image }: ViewerProps) => {
	const onChange = (currentSlide: number) => {
		console.log(currentSlide);
	};

	return (
		<div key={image.name} className="viewer-container">
			<Carousel
				afterChange={onChange}
				className="viewer"
				style={{
					border: "2px solid red",
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
					return <div key={i}>{i}</div>;
				})}
			</Carousel>
		</div>
    )
};

export default Viewer;
