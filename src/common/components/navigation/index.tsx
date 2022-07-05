import React, { useState } from 'react';
import './style.css';

import { useLocation } from 'react-router-dom';
import classNames from 'classnames';
import { View } from '../../../enums';
import { Icon } from '../../../assets/images';
import { NavigationEntry } from './navigation-entry';

const NavigationEntries: { pathname: string; title: string }[] = [
    { pathname: View.APP + View.HOME, title: 'Home' },
    { pathname: View.APP + View.CREW, title: 'Crew' },
    { pathname: View.APP + View.DESTINATION, title: 'Destination' },
    { pathname: View.APP + View.TECHNOLOGY, title: 'Technology' }
];

export const Navigation: React.FunctionComponent = () => {
    const location = useLocation();
    const [navigationBarHidden, setNavigationBarHidden] = useState(true);

    function toggleNavigationBarVisibility(): void {
        setNavigationBarHidden(!navigationBarHidden);
    }

    return (
        <div className="navigation">
            <img src={Icon.LOGO} alt="logo" className="navigation-logo" />
            <div
                className={classNames('navigation-burger-button', {
                    hidden: navigationBarHidden
                })}
                role="button"
                aria-label="Navigation Button"
                tabIndex={0}
                onKeyPress={toggleNavigationBarVisibility}
                onClick={toggleNavigationBarVisibility}
            />
            <nav
                className={classNames('navigation-bar', {
                    hidden: navigationBarHidden
                })}
            >
                {NavigationEntries.map((entry, index) => (
                    <NavigationEntry
                        to={entry.pathname}
                        id={index}
                        title={entry.title}
                        isCurrentPage={location.pathname === entry.pathname}
                        onClick={() => toggleNavigationBarVisibility()}
                    />
                ))}
            </nav>
        </div>
    );
};
