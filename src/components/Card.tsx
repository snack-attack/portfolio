import * as React from 'react';
import { Cactus1 } from './Cactus1';
import { Cactus2 } from './Cactus2';
import { Cactus3 } from './Cactus3';
import { Cactus4 } from './Cactus4';

export interface ICardProps extends React.HTMLAttributes<HTMLDivElement> {
    title?: string;
    subtitle?: string;
    tags?: string[];

    cactus: number;

    siteUrl?: string;
    repoUrl?: string;

    className?: string;
}

export const Card: React.FunctionComponent<ICardProps> = ({
    title,
    subtitle,
    tags,

    cactus,

    siteUrl,
    repoUrl,

    className,
}) => {
    const switchCactus = (cacti: number) => {
        switch (cacti) {
            case 1:
                return <Cactus1 />;
            case 2:
                return <Cactus2 />;
            case 3:
                return <Cactus3 />;
            case 4:
                return <Cactus4 />;
            default:
                return <Cactus1 />;
        }
    };

    return (
        <div className={`work-card ${className}`}>
            <div className="meta">{switchCactus(cactus)}</div>
            <div className="description">
                <div>
                    <h2>{title}</h2>

                    {tags && <h4>{tags.join(', ')}</h4>}

                    <p>{subtitle}</p>
                </div>
                <div>
                    {siteUrl && (
                        <a href={siteUrl}>
                            <button className="read-more">Visit Site</button>
                        </a>
                    )}
                    {repoUrl && (
                        <a href={repoUrl}>
                            <button className="read-more code">
                                View Code
                            </button>
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};
