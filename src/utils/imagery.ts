import beach202107 from "../assets/20210716_201604.jpg";
import beach202011 from "../assets/20201128_154905.jpg";

export interface CustomImageInterface {
	name: string;
	src: string;
	altText: string;
	widthHeightRatio: number;
	numSlides: number;
}

export const gallery: CustomImageInterface[] = [
	{
		name: "beach202107",
		src: beach202107,
		altText: "beach in July",
		widthHeightRatio: 0.7,
		numSlides: 3,
	},
	{
		name: "beach202011",
		src: beach202011,
		altText: "beach in November",
		widthHeightRatio: 0.7,
		numSlides: 4,
	},
];
