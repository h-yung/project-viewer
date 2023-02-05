/**example
 * Import your images etc. or retrieve from db.
 *
 * The interface below will work with the current viewer. *
 *
 */

//individual image
export interface CustomImageInterface {
	name: string;
	src: string;
	altText: string;
	widthHeightRatio: number;
	numSlides: number;
}

//export your gallery as follows
export interface GalleryInterface {
	[key: string]: CustomImageInterface[]; //individual image sets
}
