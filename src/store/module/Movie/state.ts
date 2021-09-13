import { IMovie } from '../../../interfaces/IMovie';

export interface IMovieStateReducer {
    readonly loading: boolean;
    readonly upcoming: IMovie[];
}
