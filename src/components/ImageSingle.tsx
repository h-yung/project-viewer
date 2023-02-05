import { getImageHeight } from "../utils/hooks/helpers";
import { useMemo } from 'react';

interface ImageSingleProps{
    src:string; refWidth:number; widthHeightRatio: number;altText: string
}

const ImageSingle = ({src, refWidth, widthHeightRatio, altText}:ImageSingleProps)=>{

    const imgHeight = useMemo(()=> {
        return getImageHeight(refWidth, widthHeightRatio);
    }, [refWidth, widthHeightRatio])

    return (
        <img
            src={src}
            alt={altText}
            // className="img-p1"
            height={imgHeight}
		/>
    )
}

export default ImageSingle;