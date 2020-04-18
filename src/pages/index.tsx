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
                <div className="top-header sticky">
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
                            <a href="https://github.com/snack-attack">
                                <FontAwesomeIcon
                                    className="social-nav"
                                    icon={['fab', 'github']}
                                />
                            </a>
                        </li>
                        <li>
                            <a href="https://codepen.io/snack-attack/">
                                <FontAwesomeIcon
                                    className="social-nav"
                                    icon={['fab', 'codepen']}
                                />
                            </a>
                        </li>
                        <li>
                            <a href="https://dev.to/snackattack">
                                <FontAwesomeIcon
                                    className="social-nav"
                                    icon={['fab', 'dev']}
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
                    <strong>full stack developer</strong>.
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
                    <p>
                        A selection of client case studies and personal
                        projects.
                    </p>
                </div>

                <main>
                    <Card
                        backgroundColor="yellow"
                        title="Drinkly"
                        subtitle="Social app that keeps track of ordering rounds at the pub."
                        tags={['Mobile App']}
                        tools={['React', 'Typescript', 'Ionic', 'GCP']}
                        siteUrl="#"
                        repoUrl="https://github.com/snack-attack/drinkly"
                    />
                    <Card
                        backgroundColor="pink"
                        title="Doginator"
                        subtitle="An app that scrapes data from the Top Dog API to list dog breeds
                        and photos."
                        tags={['API', 'Database Scraping']}
                        tools={['PHP', 'MySQL', 'Javascript', 'HTML5', 'CSS3']}
                        className="alt"
                        siteUrl="https://dev.maydenacademy.co.uk/projects/2019Feb/2019-rmp-doginator"
                        repoUrl="https://github.com/Mayden-Academy/2019-rmp-doginator"
                    />
                    <Card
                        backgroundColor="mint"
                        title="Whack-A-Rat"
                        subtitle="Whack-A-Mole game built with vanilla Javascript."
                        tags={['Game']}
                        tools={['Javascript']}
                        siteUrl="https://dev.maydenacademy.co.uk/projects/2019Feb/2019-whack-a-rat/"
                        repoUrl="https://github.com/Mayden-Academy/2019-whack-a-rat"
                    />
                    <Card
                        backgroundColor="orange"
                        title="European Conference on Politics & Gender"
                        subtitle="Fully responsive custom theme using Concrete5 CMS and a plugin that handles conference submissions for hundreds of users and allows site admins to manage submission decisions and create reports."
                        tags={['Site Redesign', 'Custom Plugin']}
                        tools={[
                            'PHP',
                            'Javascript',
                            'Bootstrap 3/4',
                            'Concrete5 CMS',
                        ]}
                        className="alt"
                        siteUrl="https://www.ecpg.eu/"
                        repoUrl="https://github.com/snack-attack/ECPG/tree/master/public/application"
                    />
                    <Card
                        backgroundColor="teal"
                        title="Bath Institute for Rheumatic Disease"
                        subtitle="Custom WordPress theme development."
                        tags={['Site Redesign']}
                        tools={['WordPress', 'Docker']}
                        siteUrl="https://birdbath.org.uk"
                        repoUrl="https://github.com/snack-attack/birdbath-theme"
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
                        I'm a fullstack developer and reluctant designer
                        originally from Dallas, Texas. These days, I call a
                        60-foot narrowboat on the River Avon in Southwest
                        England my home.
                    </p>
                    <p>
                        In my spare time, I co-organize {''}
                        <a href="https://www.meetup.com/CodeHub-Bristol/">
                            CodeHub Bristol
                        </a>
                        , a local group for people interested in all things
                        code.
                    </p>
                    <p>
                        With one years freelance web development experience, I
                        am looking to join a team as a fullstack developer in a
                        role that could potentially evolve to training or
                        mentoring others.
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
                            <a href="https://github.com/snack-attack">
                                <FontAwesomeIcon
                                    className="icon"
                                    icon={['fab', 'github']}
                                />
                            </a>
                        </li>
                        <li>
                            <a href="https://codepen.io/snack-attack/">
                                <FontAwesomeIcon
                                    className="icon"
                                    icon={['fab', 'codepen']}
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
                    </ul>
                </nav>
            </footer>
        </>
    );
};

export default IndexPage;
