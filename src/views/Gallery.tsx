import Viewer from "../components/viewer/Viewer";
import {
	CustomImageInterface,
	GalleryInterface,
	gallery,
} from "../utils/gallery";
import "./Gallery.css";

interface LayoutProps {
	localDimensions: { width: number; height: number };
	openInfoBox(imgName: string, imgAlt: string): void;
}

const AppGallery = ({ localDimensions, openInfoBox }: LayoutProps) => {
	return (
		<div className="Gallery">
			{Object.keys(gallery).map((set:keyof GalleryInterface) => (
				<div key={set}>
					<p id={set}>{set} | <a href="/#gallery-menu">Return to top</a></p>
					{gallery[set].map((image: CustomImageInterface) => (
						<Viewer
							key={image.name}
							localDimensions={localDimensions}
							image={image}
							openInfoBox={openInfoBox}
						/>
					))}
				</div>
			))}

			<div className="card">
				<h1>Views and such</h1>

				<p>LCM. Using Ant Design library, TypeScript, React.</p>
				<span>
					<a href="/#gallery-menu">Return to top</a>
				</span>
				{/* <button onClick={() => setCount((count) => count + 1)}>
					count is {count}
				</button> */}
			</div>
		</div>
	);
};
export default AppGallery;
