import { useState, useEffect } from "react";

export const useDimensions = () => {
	const [appDimensions, setAppDimensions] = useState({
		width: document.body.clientWidth,
		height: document.body.clientHeight,
	});
	//below for antd grid
	const [sideSpans, setSideSpans] = useState(
		document.body.clientWidth >= 1074
			? { colSpanSide: 6, colSpanMain: 18, padding: 0 }
			: {
					colSpanSide: 24,
					colSpanMain: 24,
					padding: "32px 48px 32px 32px",
			  }
	);
	useEffect(() => {
		function updateDimensions() {
			setAppDimensions({
				width: document.body.clientWidth,
				height: document.body.clientHeight,
			});
			if (document.body.clientWidth >= 1074) {
				setSideSpans({ colSpanSide: 6, colSpanMain: 18, padding: 0 });
			} else {
				setSideSpans({
					colSpanSide: 24,
					colSpanMain: 24,
					padding: "32px 48px 32px 32px",
				});
			}
		}
		window.addEventListener("resize", updateDimensions);
		updateDimensions();
		return () => window.removeEventListener("resize", updateDimensions);
	}, []);
	return {
		sideSpans,
		localDimensions: appDimensions,
	};
};
