import * as React from 'react';
import { Helmet } from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

import '../styles/normalize.css';
import '../styles/styles.css';
import { Card } from '../components/Card';
import { Texas } from '../components/Texas';

library.add(fab);

export const IndexPage: React.FunctionComponent = () => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <title>Audrey Hayes :: Developer</title>
                <meta
                    name="description"
                    content="A portfolio site showing the work of
        developer Audrey Hayes"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" type="image/png" />
            </Helmet>
            <header>
                <div className="top-header">
                    <div className="brand">
                        <i className="icon inline">
                            <a href="#top">
                                <img src={require('../assets/ui/logo.svg')} />
                            </a>
                        </i>
                        <p className="name inline">Audrey Hayes</p>
                    </div>
                </div>
                <nav>
                    <ul className="hidden-md-down">
                        <li>
                            <a href="https://www.linkedin.com/in/audrey-hayes/">
                                <FontAwesomeIcon
                                    className="icon"
                                    icon={['fab', 'linkedin']}
                                />
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/snack-attack">
                                <FontAwesomeIcon
                                    className="icon"
                                    icon={['fab', 'github']}
                                />
                            </a>
                        </li>
                        <li>
                            <a href="https://dev.to/snackattack">
                                <FontAwesomeIcon
                                    className="icon"
                                    icon={['fab', 'dev']}
                                />
                            </a>
                        </li>
                        <li>
                            <a href="https://stackoverflow.com/users/13503646/snack-attack">
                                <FontAwesomeIcon
                                    className="icon"
                                    icon={['fab', 'stack-overflow']}
                                />
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>
            <section id="top" className="howdy">
                <h1>
                    Ho
                    <div>
                        wdy<span className="dot">!</span>
                    </div>
                </h1>
                <p>
                    My name is <strong>Audrey</strong> and I'm a{' '}
                    <strong>fullstack developer</strong>.
                </p>
            </section>

            <section className="work">
                <div className="work-title">
                    <h1 className="work-header">
                        <div>Port</div>
                        <div>
                            folio<span className="dot">.</span>
                        </div>
                    </h1>
                    <p>A selection of client case studies and side projects.</p>
                </div>

                <main>
                    <Card
                        title="European Conference on Politics & Gender"
                        subtitle="Fully responsive custom theme using Concrete5 CMS. Developed a plugin that manages conference submissions for hundreds of users."
                        tags={['Design', 'PHP', 'Javascript', 'Bootstrap']}
                        cactus={3}
                        className="alt"
                        siteUrl="https://www.ecpg.eu/"
                        repoUrl="https://github.com/snack-attack/ECPG/tree/master/public/application"
                    />
                    <Card
                        title="Bath Institute for Rheumatic Disease"
                        subtitle="Designed and developed a custom WordPress theme for a local Bath charity group."
                        tags={['Design', 'WordPress', 'Docker']}
                        cactus={4}
                        siteUrl="https://birdbath.org.uk"
                        repoUrl="https://github.com/snack-attack/birdbath-theme"
                    />
                    <Card
                        title="Whack-A-Rat!"
                        subtitle="'Whack-A-Mole' game built while attending Mayden Academy. I was mainly responsible for randomising the molerats and scoring."
                        tags={['Game', 'Javascript']}
                        cactus={2}
                        siteUrl="https://dev.maydenacademy.co.uk/projects/2019Feb/2019-whack-a-rat/"
                        repoUrl="https://github.com/Mayden-Academy/2019-whack-a-rat"
                    />
                    <Card
                        title="Doginator"
                        subtitle="An app that scrapes data from the Top Dog API to display dog breeds
                        and photos."
                        tags={['PHP', 'MySQL', 'Javascript']}
                        cactus={1}
                        className="alt"
                        siteUrl="https://dev.maydenacademy.co.uk/projects/2019Feb/2019-rmp-doginator"
                        repoUrl="https://github.com/Mayden-Academy/2019-rmp-doginator"
                    />
                </main>
            </section>

            <section className="about">
                <div className="details">
                    <h1>
                        <div>Ab</div>
                        out<span className="dot">.</span>
                    </h1>
                    <p>
                        I'm a developer originally from Dallas, Texas. These
                        days, I call a 60-foot narrowboat on the River Avon in
                        Southwest England my home.
                    </p>
                    <p>
                        I've been working in tech since 2017 and have a passion
                        for both front and back-end development as well as an
                        interest in dev ops and infrastructure. I enjoy building
                        products that will improve the world and our experience
                        of it.
                    </p>
                    <p>
                        These days, I dedicate my spare time to{' '}
                        <a href="https://dev.to/snackattack">
                            {' '}
                            writing about things I'm learning and doing
                        </a>{' '}
                        and increasing my{' '}
                        <a href="https://github.com/snack-attack">
                            {' '}
                            contributions to open source software
                        </a>
                        .
                    </p>
                    <p>
                        In a past life, I co-organised {''}
                        <a href="https://www.meetup.com/CodeHub-Bristol/">
                            CodeHub Bristol
                        </a>
                        , a local group for people interested in all things
                        code.
                    </p>
                </div>
                <div className="texas">
                    <Texas />
                </div>
            </section>

            <section className="contact">
                <div className="title">
                    <h3>Want to work with me?</h3>
                    <h1>
                        Get in
                        <div>
                            touch<span className="dot">.</span>
                        </div>
                    </h1>
                </div>
                <div className="contact-details">
                    <address>
                        <i className="icon block">
                            <img src={require('../assets/ui/logo.svg')} />
                        </i>
                        <p>
                            howdy<strong>(at)</strong>audreyhayes
                            <strong>(dot)</strong>dev
                        </p>
                    </address>
                </div>
            </section>

            <footer>
                <nav className="socials">
                    <ul>
                        <li>
                            <a href="https://www.linkedin.com/in/audrey-hayes/">
                                <FontAwesomeIcon
                                    className="icon"
                                    icon={['fab', 'linkedin']}
                                />
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/snack-attack">
                                <FontAwesomeIcon
                                    className="icon"
                                    icon={['fab', 'github']}
                                />
                            </a>
                        </li>
                        <li>
                            <a href="https://dev.to/snackattack">
                                <FontAwesomeIcon
                                    className="icon"
                                    icon={['fab', 'dev']}
                                />
                            </a>
                        </li>
                        <li>
                            <a href="https://stackoverflow.com/users/13503646/snack-attack">
                                <FontAwesomeIcon
                                    className="icon"
                                    icon={['fab', 'stack-overflow']}
                                />
                            </a>
                        </li>
                    </ul>
                </nav>
            </footer>
        </>
    );
};

export default IndexPage;
