import { useState, useEffect } from "react";

export const getImageHeight = (refWidth: number, customRatio: number) => {
	return refWidth * customRatio;
};
