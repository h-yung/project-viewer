import beach202107 from "../assets/20210716_201604.jpg";
import beach202011 from "../assets/20201128_154905.jpg";
import beach202007 from "../assets/20200725_053907.jpg";
import beach20200725 from "../assets/20200725_060101.jpg";
import beach20200731 from "../assets/20200731_063750.jpg";
import westcoast2014 from "../assets/20141102_164439-1.jpg";
import westcoast202210 from "../assets/20221006_104248.jpg";
import westcoast20221006 from "../assets/20221006_154355.jpg";
import westcoast20221006_2 from "../assets/20221006_180655.jpg";
import westcoast_tomales_part1 from "../assets/20221113_141819.jpg";
import westcoast_tomales_part2 from "../assets/20221113_142348.jpg";
import westcoast_sanfrancisco from "../assets/20221114_100806.jpg";

import centralpark_oneday_longago from "../assets/35935184_10216597128070447_4308334140463251456_n.jpg";
import centralpark20200201 from "../assets/20200201_080552.jpg";
import centralpark20200209 from "../assets/20200209_160509.jpg";

export interface CustomImageInterface {
	name: string;
	src: string;
	altText: string;
	widthHeightRatio: number;
	numSlides: number;
}

export const gallery = {
	Wollaston: [
		{
			name: "beach202007",
			src: beach202007,
			altText: "beach in July 2020",
			widthHeightRatio: 0.7,
			numSlides: 3,
		},
		{
			name: "beach20200725",
			src: beach20200725,
			altText: "beach on July 25 2020",
			widthHeightRatio: 0.57,
			numSlides: 4,
		},
		{
			name: "beach20200731",
			src: beach20200731,
			altText: "beach on July 31 2020",
			widthHeightRatio: 0.65,
			numSlides: 3,
		},
		{
			name: "beach202011",
			src: beach202011,
			altText: "beach in November",
			widthHeightRatio: 0.55,
			numSlides: 3,
		},
		{
			name: "beach202107",
			src: beach202107,
			altText: "beach in July",
			widthHeightRatio: 0.7,
			numSlides: 3,
		},
	] as CustomImageInterface[],
	CentralPark: [
		{
			name: "centralparkoneday",
			src: centralpark_oneday_longago,
			altText: "Central Park one day long ago",
			widthHeightRatio: 0.67,
			numSlides: 3,
		},
		{
			name: "centralpark20200201",
			src: centralpark20200201,
			altText: "Central Park 2020 Feb",
			widthHeightRatio: 0.62,
			numSlides: 3,
		},
		{
			name: "centralpark20200209",
			src: centralpark20200209,
			altText: "Central Park 2020 Feb 09",
			widthHeightRatio: 0.58,
			numSlides: 3,
		},
	] as CustomImageInterface[],
	WestCoast: [
		{
			name: "westcoast2014",
			src: westcoast2014,
			altText: "Land's End",
			widthHeightRatio: 0.44,
			numSlides: 3,
		},
		{
			name: "westcoast202210",
			src: westcoast202210,
			altText: "Point Lobos",
			widthHeightRatio: 0.66,
			numSlides: 3,
		},
		{
			name: "westcoast20221009",
			src: westcoast20221006,
			altText: "Another drive along coast",
			widthHeightRatio: 0.55,
			numSlides: 3,
		},
		{
			name: "westcoast20221009_2",
			src: westcoast20221006_2,
			altText: "Same day along the coast",
			widthHeightRatio: 0.54,
			numSlides: 3,
		},
		{
			name: "westcoasttomales_1",
			src: westcoast_tomales_part1,
			altText: "Tomales arriving at beach",
			widthHeightRatio: 0.52,
			numSlides: 3,
		},
		{
			name: "westcoast20221009_2",
			src: westcoast_tomales_part2,
			altText: "On the beach around Tomales",
			widthHeightRatio: 0.49,
			numSlides: 6,
		},
	] as CustomImageInterface[],
	travels: [] as CustomImageInterface[],
};
