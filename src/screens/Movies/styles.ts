import styled from 'styled-components/native';
import { ColorPallete } from '../../global/Colors';
import { FontFamily } from '../../global/Font';

export const Container = styled.View`
    flex: 1;
    background-color: ${ColorPallete.PRIMARY};
`;

export const Section = styled.View`
    padding: 20px;
`;

export const SectionTitle = styled.Text`
    font-size: 22px;
    font-family: ${FontFamily.BLACK};
    color: ${ColorPallete.WHITE};
`;
