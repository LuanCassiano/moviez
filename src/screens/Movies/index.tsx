import React, { useEffect } from 'react';
import { FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import * as Styled from './styles';

import CardMovie from '../../components/CardMovie';

import * as MovieActions from '../../store/module/Movie/actions';

import { RootState } from '../../store/module/rootReducer';

const Home: React.FC = () => {
    const dispatch = useDispatch();

    const { upcoming } = useSelector((state: RootState) => state.movie);

    useEffect(() => {
        dispatch(MovieActions.getUpcomingRequest());
    }, []);

    return (
        <Styled.Container>
            <Styled.Section>
                <Styled.SectionTitle>Em breve</Styled.SectionTitle>

                <FlatList
                    keyExtractor={item => String(item.id)}
                    data={upcoming}
                    renderItem={({ item }) => (
                        <CardMovie
                            height="150"
                            width="280"
                            radius="10"
                            info={item}
                        />
                    )}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    bounces={false}
                />
            </Styled.Section>
        </Styled.Container>
    );
};

export default Home;
