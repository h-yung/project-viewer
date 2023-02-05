import Viewer from "./../components/viewer/Viewer";
import { gallery } from "../utils/imagery";

interface LayoutProps {
	localDimensions: { width: number; height: number };
}

const AppLayout = ({ localDimensions }: LayoutProps) => {
	return (
		<div className="Layout">
			{gallery.map((image) => (
				<Viewer
					key={image.name}
					localDimensions={localDimensions}
					image={image}
				/>
			))}
		</div>
	);
};
export default AppLayout;
