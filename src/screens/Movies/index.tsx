import React, { useEffect, useState, useRef } from 'react';
import { Dimensions, FlatList, View, Animated } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import * as Styled from './styles';

import CardMovie from '../../components/CardMovie';
import AnimatedCard from '../../components/AnimatedCard';

import * as MovieActions from '../../store/module/Movie/actions';

import { RootState } from '../../store/module/rootReducer';
import { IMovie } from '../../interfaces/IMovie';

const { width } = Dimensions.get('window');

const ITEM_SIZE = width * 0.7;
const SPACER_ITEM_SIZE = (width - ITEM_SIZE) / 3;

const Home: React.FC = () => {
    const dispatch = useDispatch();

    const scrollX = useRef(new Animated.Value(0)).current;

    const { upcoming, nowPlaying } = useSelector(
        (state: RootState) => state.movie,
    );

    const [movies, setMovies] = useState<IMovie[]>();

    useEffect(() => {
        if (nowPlaying && nowPlaying.length > 0) {
            setMovies([
                {
                    id: 0,
                    backdrop_path: '',
                    poster_path: '',
                    title: '',
                },
                ...nowPlaying,
                {
                    id: 9999,
                    backdrop_path: '',
                    poster_path: '',
                    title: '',
                },
            ]);
        }
    }, [nowPlaying]);

    useEffect(() => {
        dispatch(MovieActions.getUpcomingRequest());
        dispatch(MovieActions.getNowPlayingRequest());
    }, []);

    return (
        <Styled.Container showsVerticalScrollIndicator={false}>
            <Styled.Section>
                <Styled.SectionTitle>Em breve</Styled.SectionTitle>

                <FlatList
                    keyExtractor={item => String(item.id)}
                    data={upcoming}
                    renderItem={({ item }) => <CardMovie info={item} />}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                    contentContainerStyle={{ marginTop: 20 }}
                />
            </Styled.Section>

            <Styled.Section>
                <Styled.SectionTitle>Em cartaz</Styled.SectionTitle>

                <Animated.FlatList
                    keyExtractor={item => String(item.id)}
                    data={movies}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{
                        marginBottom: 60,
                        alignItems: 'center',
                    }}
                    snapToInterval={ITEM_SIZE}
                    decelerationRate={0}
                    bounces={false}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                        { useNativeDriver: true },
                    )}
                    scrollEventThrottle={16}
                    renderItem={({ item, index }) => {
                        if (item.id === 0) {
                            return (
                                <View
                                    style={{
                                        width: SPACER_ITEM_SIZE,
                                    }}
                                />
                            );
                        }

                        const inputRange = [
                            (index - 2) * ITEM_SIZE,
                            (index - 1) * ITEM_SIZE,
                            index * ITEM_SIZE,
                        ];

                        const translateY = scrollX.interpolate({
                            inputRange,
                            outputRange: [0, -50, 0],
                        });

                        return (
                            <AnimatedCard data={item} translateY={translateY} />
                        );
                    }}
                />
            </Styled.Section>
        </Styled.Container>
    );
};

export default Home;
