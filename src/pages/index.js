import * as React from "react";
import { Helmet } from "react-helmet";

import "../styles/normalize.css";
import "../styles/styles.css";

export default () => {
    <>
        <Helmet>
            <meta charset="utf-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
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
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="66"
                                height="10"
                                viewBox="0 0 73.94 14.19"
                            >
                                <polyline
                                    points="2.83 2.83 11.36 11.36 19.9
                                    2.83 28.43 11.36 36.97 2.83 45.5 11.36 54.04
                                    2.83 62.58 11.36 71.11 2.83"
                                ></polyline>
                            </svg>
                        </a>
                    </i>
                    <p className="name inline">Audrey Hayes</p>
                </div>
            </div>
            <nav>
                <ul className="hidden-md-down">
                    <li>
                        <a href="https://github.com/snack-attack">
                            <i className="fab fa-github"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://codepen.io/snack-attack/">
                            <i className="fab fa-codepen"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://dev.to/snackattack">
                            <i
                                className="fab
                        fa-dev"
                            ></i>
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
                My name is <strong>Audrey</strong> and I'm a{" "}
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
                <p>A selection of client case studies and personal projects.</p>
            </div>

            <div>
                <div className="work-card">
                    <div className="meta">
                        <img
                            src="assets/img/workcard-backgrounds/9.jpg"
                            className="photo"
                            alt="photo of colored stucco-like
                        texture"
                        ></img>
                    </div>
                    <div className="description">
                        <h2>Drinkly</h2>
                        <h4>Native Mobile App</h4>
                        <p>
                            Social app that keeps track of ordering rounds at
                            the pub.
                        </p>
                        <h4>
                            React Native, Javascript, Node.js, Express, MongoDB
                        </h4>
                        <p className="read-more">
                            <a href="#">Visit Site</a>
                        </p>
                        <p className="read-more code">
                            <a href="https://github.com/snack-attack/drinkly">
                                View Code
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </>;
};
