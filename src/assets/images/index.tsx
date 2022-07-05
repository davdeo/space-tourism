import { BackgroundCrew, ImageCrew } from './crew';
import { BackgroundDestination, ImageDestination } from './destination';
import { BackgroundHome } from './home';
import { IconShared } from './shared';
import { BackgroundTechnology, ImageTechnology } from './technology';

export const Background = {
    ...BackgroundCrew,
    ...BackgroundDestination,
    ...BackgroundHome,
    ...BackgroundTechnology
};

export const Image = {
    ...ImageCrew,
    ...ImageDestination,
    ...ImageTechnology
};

export const Icon = {
    ...IconShared
};
