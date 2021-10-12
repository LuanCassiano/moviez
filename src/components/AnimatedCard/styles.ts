import styled from 'styled-components/native';
import { Animated, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

import { ColorPallete } from '../../global/Colors';
import { FontFamily } from '../../global/Font';

export const Card = styled.TouchableOpacity`
    width: ${width * 0.7}px;
    margin-top: 60px;
    align-items: center;
`;

export const CardContent = styled(Animated.View)`
    margin: 0px 10px;
    align-items: center;
    border-radius: 10px;
`;

export const CardMedia = styled.Image`
    width: 230px;
    height: ${width * 0.7 * 1.2}px;
    border-radius: 10px;
    margin: 0px 0px 10px;
`;

export const CardGradient = styled(Animated.View)`
    width: 230px;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.3);
    height: ${width * 0.7 * 1.2}px;
    border-radius: 10px;
`;

export const CardFooter = styled.View`
    flex: 1;
    justify-content: flex-end;
    margin-bottom: 20px;
    margin-left: 20px;
`;

export const CardTitle = styled.Text`
    font-size: 16px;
    font-family: ${FontFamily.BOLD};
    color: ${ColorPallete.WHITE};
`;
