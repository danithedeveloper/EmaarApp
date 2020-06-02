import Dimensions from './Dimensions';

export const Constraints = {
    screenWidth: 375,
    screenHeight: 662,
};

export const GetHeight = height =>
    Dimensions.getHeight(
        Math.max((height / Constraints.screenHeight) * 100, 0.5),
    );
export const GetWidth = width =>
    Dimensions.getWidth(
        Math.max((width / Constraints.screenWidth) * 100, 0.5),
    );
