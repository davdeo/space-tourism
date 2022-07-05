import React from 'react';
import classNames from 'classnames';
import './style.css';

import { Link } from 'react-router-dom';

interface Props {
    to: string;
    id: number;
    title: string;

    isCurrentPage: boolean;

    onClick: () => void;
}

export const NavigationEntry: React.FunctionComponent<Props> = (props: Props) => {
    const { to, id, isCurrentPage, title, onClick } = props;

    return (
        <Link
            to={to}
            className={classNames('navigation-button', {
                'current-page': isCurrentPage
            })}
            onClick={onClick}
            tabIndex={0}
        >
            <span aria-hidden className="navigation-button-number">
                {id.toLocaleString('de-DE', { minimumIntegerDigits: 2, useGrouping: false })}
            </span>
            {title}
        </Link>
    );
};
