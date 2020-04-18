import * as React from 'react';
import Img from 'gatsby-image';
import { usePink } from '../hooks/staticQueries/usePink';
import { useYellow } from '../hooks/staticQueries/useYellow';

export interface ICardProps extends React.HTMLAttributes<HTMLDivElement> {
    title?: string;
    subtitle?: string;
    tags?: string[];
    tools?: string[];
    backgroundColor: 'mint' | 'orange' | 'pink' | 'teal' | 'yellow';

    siteUrl?: string;
    repoUrl?: string;

    className?: string;
}

export const Card: React.FunctionComponent<ICardProps> = ({
    title,
    subtitle,
    tags,
    tools,

    // backgroundColor,

    siteUrl,
    repoUrl,

    className,
}) => {
    const { pink } = usePink();
    const { yellow } = useYellow();

    return (
        <div className={`work-card ${className}`}>
            <div className="meta">
                <Img
                    fixed={yellow}
                    className="photo"
                    alt="stucco-like texture"
                ></Img>
            </div>
            <div className="description">
                <h2>{title}</h2>

                {tags && <h4>{tags.join(', ')}</h4>}

                <p>{subtitle}</p>

                {tools && <h4>{tools.join(', ')}</h4>}

                {siteUrl && (
                    <p className="read-more">
                        <a href={siteUrl}>Visit Site</a>
                    </p>
                )}
                {repoUrl && (
                    <p className="read-more code">
                        <a href={repoUrl}>View Code</a>
                    </p>
                )}
            </div>
        </div>
    );
};
