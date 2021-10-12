import { Animated } from 'react-native';
import { IMovie } from '../../../interfaces/IMovie';

export interface IAnimatedCard {
    data: IMovie;
    translateY: number | Animated.Value | Animated.AnimatedInterpolation;
}
