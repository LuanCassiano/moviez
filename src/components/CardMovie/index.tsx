import React from 'react';
import { Image } from 'react-native';

import { IMAGE_URL } from '../../global/Constants';

import { ICardMovie } from './interfaces/ICardMovie';

import * as Styled from './styles';

import Gradient from '../Gradient';

const CardMovie: React.FC<ICardMovie> = ({
    height,
    info,
    radius,
    width,
}: ICardMovie) => {
    return (
        <Styled.Card>
            <Image
                source={{ uri: `${IMAGE_URL}${info.backdrop_path}` }}
                style={{
                    height: parseInt(height),
                    width: parseInt(width),
                    borderRadius: parseInt(radius),
                }}
            />

            <Gradient width="280" height="150" radius="10" text={info.title} />
        </Styled.Card>
    );
};

export default CardMovie;
