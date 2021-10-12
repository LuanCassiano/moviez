import React from 'react';

import { IMAGE_URL } from '../../global/Constants';
import { IAnimatedCard } from './interfaces/IAnimatedCard';

import * as Styled from './styles';

const AnimatedCard: React.FC<IAnimatedCard> = ({
    data,
    translateY,
}: IAnimatedCard) => {
    return (
        <Styled.Card>
            <Styled.CardContent
                style={{
                    transform: [{ translateY }],
                }}
            >
                <Styled.CardMedia
                    source={{
                        uri: `${IMAGE_URL}${data.backdrop_path}`,
                    }}
                    resizeMode="cover"
                />
            </Styled.CardContent>

            <Styled.CardGradient
                style={{
                    transform: [{ translateY }],
                }}
            >
                <Styled.CardFooter>
                    <Styled.CardTitle>{data.title}</Styled.CardTitle>
                </Styled.CardFooter>
            </Styled.CardGradient>
        </Styled.Card>
    );
};

export default AnimatedCard;
