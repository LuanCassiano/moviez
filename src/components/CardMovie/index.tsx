import React from 'react';

import { IMAGE_URL } from '../../global/Constants';

import { ICardMovie } from './interfaces/ICardMovie';

import * as Styled from './styles';

import Gradient from '../Gradient';

const CardMovie: React.FC<ICardMovie> = ({ info }: ICardMovie) => {
    return (
        <Styled.Card>
            <Styled.CardMedia
                source={{ uri: `${IMAGE_URL}${info.backdrop_path}` }}
            />

            <Gradient text={info.title} />
        </Styled.Card>
    );
};

export default CardMovie;
