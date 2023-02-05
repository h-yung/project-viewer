import Viewer from "./../components/viewer/Viewer";
import { gallery } from "../utils/gallery";
import "./Layout.css";

interface LayoutProps {
	localDimensions: { width: number; height: number };
}

const AppLayout = ({ localDimensions }: LayoutProps) => {

	return (
		<div className="Layout">
            <span>Wollaston, 2020-2021</span>
			{gallery.Wollaston.map((image) => (
				<Viewer
					key={image.name}
					localDimensions={localDimensions}
					image={image}
				/>
			))}

            <span>Central Park, 2020</span>
            {gallery.CentralPark.map((image) => (
				<Viewer
					key={image.name}
					localDimensions={localDimensions}
					image={image}
				/>
			))}
            <span>West Coast, 2014, 2022</span>
            {gallery.WestCoast.map((image) => (
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
