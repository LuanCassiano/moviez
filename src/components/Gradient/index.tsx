import React from 'react';

import { IGradient } from './interface/IGradient';

import * as Styled from './styles';

const Gradient: React.FC<IGradient> = ({ text = 'Filme' }: IGradient) => {
    return (
        <Styled.Container>
            <Styled.Content>
                <Styled.Title>{text}</Styled.Title>
            </Styled.Content>
        </Styled.Container>
    );
};

export default Gradient;
