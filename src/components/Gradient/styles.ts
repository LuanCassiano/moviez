import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

import { ColorPallete } from '../../global/Colors';
import { FontFamily } from '../../global/Font';

export const Container = styled.View`
    background-color: rgba(0, 0, 0, 0.2);
    position: absolute;
    width: ${Dimensions.get('window').width - 50}px;
    height: 200px;
    border-radius: 10px;
`;

export const Content = styled.View`
    flex: 1;
    justify-content: flex-end;
    margin-bottom: 20px;
    margin-left: 10px;
`;

export const Title = styled.Text`
    font-size: 16px;
    font-family: ${FontFamily.BOLD};
    color: ${ColorPallete.WHITE};
`;
