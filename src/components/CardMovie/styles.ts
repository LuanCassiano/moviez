import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

export const Card = styled.TouchableOpacity`
    width: ${Dimensions.get('window').width - 40}px;
    height: 200px;
    border-radius: 10px;
`;

export const CardMedia = styled.Image`
    width: ${Dimensions.get('window').width - 50}px;
    height: 200px;
    border-radius: 10px;
`;
