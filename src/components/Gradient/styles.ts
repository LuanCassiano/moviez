import styled from 'styled-components/native';

import { ColorPallete } from '../../global/Colors';
import { FontFamily } from '../../global/Font';

interface ContainerProps {
    width: string;
    height: string;
    radius: string;
}

export const Container = styled.View<ContainerProps>`
    background-color: rgba(0, 0, 0, 0.3);
    position: absolute;
    width: ${(props): string => props.width}px;
    height: ${(props): string => props.height}px;
    border-radius: ${(props): string => props.radius}px;
`;

export const Content = styled.View`
    flex: 1;
    justify-content: flex-end;
    margin-bottom: 20px;
    margin-left: 20px;
`;

export const Title = styled.Text`
    font-size: 16px;
    font-family: ${FontFamily.BOLD};
    color: ${ColorPallete.WHITE};
`;
