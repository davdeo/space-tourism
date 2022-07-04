import { BackgroundCrew, ImageCrew } from './crew';
import { BackgroundDestination, ImageDestination } from './destination';
import { BackgroundHome } from './home';
import { IconShared } from './shared';
import { BackgroundTechnology, ImageTechnology } from './technology';

export const BACKGROUND = {
    ...BackgroundCrew,
    ...BackgroundDestination,
    ...BackgroundHome,
    ...BackgroundTechnology
};

export const IMAGE = {
    ...ImageCrew,
    ...ImageDestination,
    ...ImageTechnology
};

export const ICON = {
    ...IconShared
};
