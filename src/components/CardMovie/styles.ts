import styled from 'styled-components/native';

interface ICardProps {
    width: string;
    height: string;
    radius: string;
}

export const Card = styled.TouchableOpacity`
    margin: 20px 20px 0px 0px;
`;

export const CardMedia = styled.Image<ICardProps>`
    width: ${(props): string => props.width}px;
    height: ${(props): string => props.height}px;
    border-radius: ${(props): string => props.radius}px;
`;
