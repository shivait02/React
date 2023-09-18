import React from "react";
import { Outlet, Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            {/* <!-- wrapper --> */}
            <div className="mil-wrapper" >
                {/* <!-- top bar --> */}
                <div className="mil-top-position mil-fixed">
                    <div className="mil-top-panel mil-top-panel-transparent mil-animated">
                        {/* <!-- mil-top-panel-transparent --> */}
                        <div className="container">
                            <link to="#!"
                                className="mil-logo"
                                style={{ width: "140px" }}
                            ></link>
                            <div className="mil-navigation">
                                <nav>
                                    <ul>
                                        <li className="mil-has-children">
                                            <Link to='/' className='mil-has-children' > Home </Link>
                                        </li>
                                        <li>
                                            <Link to="/about" className='mil-has-children' >About</Link>
                                        </li>
                                        <li className="mil-has-children">
                                            <Link to="/services" className='mil-has-children' >services</Link>
                                            {/* <ul>
                                                <li>
                                                    <a href="service-1.html">Service 1</a>
                                                </li>
                                                <li>
                                                    <a href="service-2.html">Service 2</a>
                                                </li>
                                                <li>
                                                    <a href="service-3.html">Service 3</a>
                                                </li>
                                                <li>
                                                    <a href="service-4.html">Service 4</a>
                                                </li>
                                            </ul> */}
                                        </li>
                                        <li className="mil-has-children">
                                            <a href="#.">Solutions</a>
                                            <ul>
                                                <li>
                                                    <a href="solution-1.html">Solution 1</a>
                                                </li>
                                                <li>
                                                    <a href="solution-2.html">Solution 2</a>
                                                </li>
                                                <li>
                                                    <a href="solution-3.html">Solution 3</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                           <Link to="/blog">Blog</Link>
                                        </li>
                                        <li>
                                            <a href="contact.html">Contact Us</a>
                                        </li>
                                        <li className="mil-has-children">
                                            <a href="#.">Other</a>
                                            <ul>
                                                <li>
                                                    <a href="coming-soon.html">Coming Soon</a>
                                                </li>
                                                <li>
                                                    <a href="404.html">404</a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                    <div className="mil-search-icon">
                                        <svg
                                            width="21"
                                            height="20"
                                            viewBox="0 0 21 20"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M20.5848 19.7029C20.3908 19.8999 20.1358 19.997 19.8808 19.997C19.6268 19.997 19.3718 19.8999 19.1778 19.7029L15.5118 16.2199C13.9778 17.2549 12.3798 17.997 9.92584 17.997C4.98484 17.997 0.964844 13.959 0.964844 8.99695C0.964844 4.34995 4.98484 0.199951 9.92584 0.199951C14.8668 0.199951 18.8858 4.34995 18.8858 8.99695C18.8858 11.118 18.1468 13.68 16.9188 14.608L20.5848 18.29C20.9738 18.681 20.9738 19.3129 20.5848 19.7029ZM9.92584 1.99695C6.82984 1.99695 2.95684 5.13695 2.95684 8.99695C2.95684 12.857 6.82984 15.998 9.92584 15.998C11.8398 15.998 13.5758 15.217 14.8368 13.957C14.8408 13.952 14.8418 13.945 14.8468 13.941C14.8518 13.936 14.8578 13.935 14.8628 13.93C16.1168 12.663 16.8948 10.92 16.8948 8.99695C16.8948 5.13695 13.7678 1.99695 9.92584 1.99695Z"
                                            />
                                        </svg>
                                    </div>
                                </nav>
                            </div>
                            {/* <!-- mobile menu button --> */}
                            <div className="mil-menu-btn">
                                <span></span>
                            </div>
                            {/* <!-- mobile menu button end --> */}
                        </div>
                    </div>
                </div>
                {/* <!-- top bar end -->

 <!-- banner --> */}
                <div className="mil-banner mil-top-space-0">
                    <div className="swiper-container mil-banner-slideshow">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <img
                                    src="assets/img/photo/1.jpg"
                                    className="mil-background-image"
                                    style={{ objectPosition: "center" }}
                                    data-swiper-parallax="-100"
                                    data-swiper-parallax-scale="1.1"
                                    alt="image"
                                />
                            </div>
                            <div className="swiper-slide">
                                <img
                                    src="assets/img/photo/2.jpg"
                                    className="mil-background-image"
                                    style={{ objectPosition: "center" }}
                                    data-swiper-parallax="-100"
                                    data-swiper-parallax-scale="1.1"
                                    alt="image"
                                />
                            </div>
                            <div className="swiper-slide">
                                <img
                                    src="assets/img/photo/3.jpg"
                                    className="mil-background-image"
                                    style={{ objectPosition: "center" }}
                                    data-swiper-parallax="-100"
                                    data-swiper-parallax-scale="1.1"
                                    alt="image"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="mil-overlay"></div>

                    <div className="mil-banner-content">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-xl-8">
                                    <span className="mil-suptitle mil-mb-60">
                                        <span className="mil-light">The Next</span>{" "}
                                        <span className="mil-accent">Gen</span>
                                    </span>
                                    <h1 className="mil-mb-60">
                                        <span className="mil-uppercase mil-light">
                                            We Provide Services <br />
                                            and Solutions
                                        </span>{" "}
                                        <span className="mil-font-3 mil-accent">To Enterprise</span>
                                    </h1>
                                    <div className="mil-flex-hori-center">
                                        <div>
                                            <a
                                                href="contact.html"
                                                className="mil-button mil-border mil-light"
                                            >
                                                <span>Let’s Talk</span>
                                            </a>
                                        </div>
                                        <p className="mil-button-descr mil-light-soft">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                            sed do eiusmod tempor incididunt ut labore et dolore magna
                                            aliqua.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-xl-4">
                                    <div className="mil-illustration-1">
                                        <div className="mil-item mil-item-1">
                                            <div className="mil-plus">
                                                <div className="mil-hover-window">
                                                    <div className="mil-window-content">
                                                        <h5 className="mil-dark mil-mb-15">Experts</h5>
                                                        <div className="mil-divider mil-divider-left mil-mb-15"></div>
                                                        <p className="mil-text-sm">
                                                            And here's some amazing content. It's very
                                                            engaging. Right?
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="mil-item-hover">
                                                    <div className="mil-plus-icon">+</div>
                                                    <h6 className="mil-light">Dedicated Team</h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mil-item mil-item-2">
                                            <div className="mil-plus">
                                                <div className="mil-hover-window">
                                                    <div className="mil-window-content">
                                                        <h5 className="mil-dark mil-mb-15">Experts</h5>
                                                        <div className="mil-divider mil-divider-left mil-mb-15"></div>
                                                        <p className="mil-text-sm">
                                                            And here's some amazing content. It's very
                                                            engaging. Right?
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="mil-item-hover">
                                                    <div className="mil-plus-icon">+</div>
                                                    <h6 className="mil-light">Developers</h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mil-item mil-item-3">
                                            <div className="mil-plus">
                                                <div className="mil-hover-window">
                                                    <div className="mil-window-content">
                                                        <h5 className="mil-dark mil-mb-15">Experts</h5>
                                                        <div className="mil-divider mil-divider-left mil-mb-15"></div>
                                                        <p className="mil-text-sm">
                                                            And here's some amazing content. It's very
                                                            engaging. Right?
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="mil-item-hover">
                                                    <div className="mil-plus-icon">+</div>
                                                    <h6 className="mil-light">Designers</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- banner end -->

 <!-- partners --> */}
                <div className="mil-partners mil-p-90-60">
                    <div className="container">
                        <div className="mil-partners-frame">
                            <a href="#.">
                                <img src="assets/img/partners/1.png" alt="partner" />
                            </a>
                            <a href="#.">
                                <img src="assets/img/partners/2.png" alt="partner" />
                            </a>
                            <a href="#.">
                                <img src="assets/img/partners/3.png" alt="partner" />
                            </a>
                            <a href="#.">
                                <img src="assets/img/partners/4.png" alt="partner" />
                            </a>
                            <a href="#.">
                                <img src="assets/img/partners/5.png" alt="partner" />
                            </a>
                            <a href="#.">
                                <img src="assets/img/partners/6.png" alt="partner" />
                            </a>
                        </div>
                    </div>
                </div>
                {/* <!-- partners end --> */}

                <div className="container">
                    <div className="mil-divider"></div>
                </div>

                {/* <!-- services --> */}
                <section className="mil-services mil-p-120-90">
                    <div className="mil-deco" style={{ top: "0", right: "20%" }}></div>
                    <div className="container">
                        <h2 className="mil-mb-30">
                            How We Can <span className="mil-accent">Help You</span>
                        </h2>
                        <div className="row">
                            <div className="col-lg-6 col-xl-6">
                                <h4 className="mil-mb-60 mil-mt-30">IT Services</h4>
                                <div className="mil-divider mil-divider-left"></div>
                                <div className="mil-service-item">
                                    <div className="mil-service-icon">
                                        <div className="mil-icon-frame mil-icon-frame-md">
                                            <img src="assets/img/icons/md/1.svg" alt="icon" />
                                        </div>
                                    </div>
                                    <div className="mil-service-text">
                                        <h5 className="mil-mb-30">
                                            <span className="mil-accent">01</span> Dedicated Team
                                        </h5>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                            sed do eiusmod tempor incididunt ut labore et dolore magna
                                            aliqua.
                                        </p>
                                    </div>
                                </div>
                                <div className="mil-divider mil-divider-left"></div>
                                <div className="mil-service-item">
                                    <div className="mil-service-icon">
                                        <div className="mil-icon-frame mil-icon-frame-md">
                                            <img src="assets/img/icons/md/2.svg" alt="icon" />
                                        </div>
                                    </div>
                                    <div className="mil-service-text">
                                        <h5 className="mil-mb-30">
                                            <span className="mil-accent">02</span> QA and Testing
                                        </h5>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                            sed do eiusmod tempor incididunt ut labore et dolore magna
                                            aliqua.
                                        </p>
                                    </div>
                                </div>
                                <div className="mil-divider mil-divider-left"></div>
                                <div className="mil-service-item">
                                    <div className="mil-service-icon">
                                        <div className="mil-icon-frame mil-icon-frame-md">
                                            <img src="assets/img/icons/md/3.svg" alt="icon" />
                                        </div>
                                    </div>
                                    <div className="mil-service-text">
                                        <h5 className="mil-mb-30">
                                            <span className="mil-accent">03</span> SaaS
                                        </h5>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                            sed do eiusmod tempor incididunt ut labore et dolore magna
                                            aliqua.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-xl-6">
                                <h4 className="mil-mb-60 mil-mt-30">IT Solutions</h4>
                                <div className="mil-divider mil-divider-left"></div>
                                <div className="mil-service-item">
                                    <div className="mil-service-icon">
                                        <div className="mil-icon-frame mil-icon-frame-md">
                                            <img src="assets/img/icons/md/4.svg" alt="icon" />
                                        </div>
                                    </div>
                                    <div className="mil-service-text">
                                        <h5 className="mil-mb-30">
                                            <span className="mil-accent">01</span> Blockchain
                                        </h5>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                            sed do eiusmod tempor incididunt ut labore et dolore magna
                                            aliqua.
                                        </p>
                                    </div>
                                </div>
                                <div className="mil-divider mil-divider-left"></div>
                                <div className="mil-service-item">
                                    <div className="mil-service-icon">
                                        <div className="mil-icon-frame mil-icon-frame-md">
                                            <img src="assets/img/icons/md/5.svg" alt="icon" />
                                        </div>
                                    </div>
                                    <div className="mil-service-text">
                                        <h5 className="mil-mb-30">
                                            <span className="mil-accent">02</span> Artificial
                                            Intelligence
                                        </h5>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                            sed do eiusmod tempor incididunt ut labore et dolore magna
                                            aliqua.
                                        </p>
                                    </div>
                                </div>
                                <div className="mil-divider mil-divider-left"></div>
                                <div className="mil-service-item">
                                    <div className="mil-service-icon">
                                        <div className="mil-icon-frame mil-icon-frame-md">
                                            <img src="assets/img/icons/md/6.svg" alt="icon" />
                                        </div>
                                    </div>
                                    <div className="mil-service-text">
                                        <h5 className="mil-mb-30">
                                            <span className="mil-accent">03</span> Internet of Things
                                        </h5>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                            sed do eiusmod tempor incididunt ut labore et dolore magna
                                            aliqua.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- services end --> */}

                <div className="container">
                    <div className="mil-divider"></div>
                </div>

                {/* <!-- portfolio --> */}
                <section className="mil-works mil-p-120-90">
                    <div className="mil-deco" style={{ top: "0", right: "20%" }}></div>
                    <div className="container">
                        <div className="row align-items-center mil-mb-60-adapt">
                            <div className="col-md-6 col-xl-6">
                                <h2 className="mil-mb-30">Latest Projects</h2>
                            </div>
                            <div className="col-md-6 col-xl-6">
                                <div className="mil-adaptive-right">
                                    <div className="mil-slider-nav mil-mb-30">
                                        <div className="mil-slider-btn-prev mil-works-prev">
                                            <i className="fas fa-arrow-left"></i>
                                            <span className="mil-h6">Prev</span>
                                        </div>
                                        <div className="mil-slider-btn-next mil-works-next">
                                            <span className="mil-h6">Next</span>
                                            <i className="fas fa-arrow-right"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="swiper-container mil-works-slider mil-mb-90">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                    <a href="project.html" className="mil-card">
                                        <div className="mil-cover-frame">
                                            <img src="assets/img/projects/1.jpg" alt="project" />
                                        </div>
                                        <div className="mil-description">
                                            <div className="mil-card-title">
                                                <h4 className="mil-mb-20">
                                                    Easy & Most Powerful Server Platform.
                                                </h4>
                                                <h6>
                                                    by: <span className="mil-accent">Jane Meldrum</span>
                                                </h6>
                                            </div>
                                            <div className="mil-card-text">
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing
                                                    elit, sed do eiusmod tempor incididunt ut labore et
                                                    dolore magna aliqua.
                                                </p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="swiper-slide">
                                    <a href="project.html" className="mil-card">
                                        <div className="mil-cover-frame">
                                            <img src="assets/img/projects/2.jpg" alt="project" />
                                        </div>
                                        <div className="mil-description">
                                            <div className="mil-card-title">
                                                <h4 className="mil-mb-20">
                                                    Easy & Most Powerful Server Platform.
                                                </h4>
                                                <h6>
                                                    by: <span className="mil-accent">Nguta Ithya</span>
                                                </h6>
                                            </div>
                                            <div className="mil-card-text">
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing
                                                    elit, sed do eiusmod tempor incididunt ut labore et
                                                    dolore magna aliqua.
                                                </p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="swiper-slide">
                                    <a href="project.html" className="mil-card">
                                        <div className="mil-cover-frame">
                                            <img src="assets/img/projects/3.jpg" alt="project" />
                                        </div>
                                        <div className="mil-description">
                                            <div className="mil-card-title">
                                                <h4 className="mil-mb-20">
                                                    Easy & Most Powerful Server Platform.
                                                </h4>
                                                <h6>
                                                    by: <span className="mil-accent">Roy Bricks</span>
                                                </h6>
                                            </div>
                                            <div className="mil-card-text">
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing
                                                    elit, sed do eiusmod tempor incididunt ut labore et
                                                    dolore magna aliqua.
                                                </p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="swiper-slide">
                                    <a href="project.html" className="mil-card">
                                        <div className="mil-cover-frame">
                                            <img src="assets/img/projects/4.jpg" alt="project" />
                                        </div>
                                        <div className="mil-description">
                                            <div className="mil-card-title">
                                                <h4 className="mil-mb-20">
                                                    Easy & Most Powerful Server Platform.
                                                </h4>
                                                <h6>
                                                    by: <span className="mil-accent">Nguta Ithya</span>
                                                </h6>
                                            </div>
                                            <div className="mil-card-text">
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing
                                                    elit, sed do eiusmod tempor incididunt ut labore et
                                                    dolore magna aliqua.
                                                </p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="row align-items-center">
                            <div className="col-md-6 col-xl-6">
                                <a href="portfolio.html" className="mil-link mil-mb-30">
                                    <span>View All Cases</span>
                                    <i className="fas fa-arrow-right"></i>
                                </a>
                            </div>
                            <div className="col-md-6 col-xl-6">
                                <div className="mil-adaptive-right">
                                    <a
                                        href="contact.html"
                                        className="mil-button mil-border mil-mb-30"
                                    >
                                        <span>Get Started</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- portfolio end -->

 <!-- how it works --> */}
                <section className="mil-how-it-works mil-deep-bg mil-p-120-90">
                    <div className="mil-deco" style={{ top: 0, right: "20%" }}></div>
                    <div className="mil-deco" style={{ bottom: "0", left: "30%" }}></div>
                    <div className="container">
                        <span className="mil-suptitle mil-suptitle-2 mil-mb-30">
                            Discover Our Company
                        </span>
                        <h2 className="mil-mb-90">
                            How We <span className="mil-accent">Collaborate</span> With You
                        </h2>
                        <div className="row">
                            <div className="col-md-6 col-xl-3">
                                <div className="mil-mb-60">
                                    <div className="mil-icon-box-head mil-mb-30">
                                        <div className="mil-icon-frame mil-icon-frame-sm">
                                            <img src="assets/img/icons/sm/1.svg " alt="icon" />
                                        </div>
                                        <h5>Thinking Big</h5>
                                    </div>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                        do eiusmod tempor incididunt ut labore et dolore magna
                                        aliqua.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-6 col-xl-3">
                                <div className="mil-mb-60">
                                    <div className="mil-icon-box-head mil-mb-30">
                                        <div className="mil-icon-frame mil-icon-frame-sm">
                                            <img src="assets/img/icons/sm/2.svg " alt="icon" />
                                        </div>
                                        <h5>Starting Small</h5>
                                    </div>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                        do eiusmod tempor incididunt ut labore et dolore magna
                                        aliqua.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-6 col-xl-3">
                                <div className="mil-mb-60">
                                    <div className="mil-icon-box-head mil-mb-30">
                                        <div className="mil-icon-frame mil-icon-frame-sm">
                                            <img src="assets/img/icons/sm/3.svg " alt="icon" />
                                        </div>
                                        <h5>Creating Fast</h5>
                                    </div>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                        do eiusmod tempor incididunt ut labore et dolore magna
                                        aliqua.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-6 col-xl-3">
                                <div className="mil-mb-60">
                                    <div className="mil-icon-box-head mil-mb-30">
                                        <div className="mil-icon-frame mil-icon-frame-sm">
                                            <img src="assets/img/icons/sm/4.svg " alt="icon" />
                                        </div>
                                        <h5>Innovating Scale</h5>
                                    </div>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                        do eiusmod tempor incididunt ut labore et dolore magna
                                        aliqua.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row align-items-center">
                            <div className="col-md-6 col-xl-6">
                                <a href="#." className="mil-link mil-mb-30">
                                    <span>Learn More</span>
                                    <i className="fas fa-arrow-right"></i>
                                </a>
                            </div>
                            <div className="col-md-6 col-xl-6">
                                <div className="mil-adaptive-right">
                                    <a href="#." className="mil-button mil-border mil-mb-30">
                                        <span>How We Work</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- how it works end -->

 <!-- skills --> */}
                <section className="mil-skills mil-p-120-90">
                    <div className="container">
                        <div className="row align-items-end mil-mb-90">
                            <div className="col-xl-6">
                                <span className="mil-suptitle mil-suptitle-2 mil-mb-30">
                                    Our Skill
                                </span>
                                <h2>
                                    Business <span className="mil-accent">Success</span> With{" "}
                                    <br />
                                    Technology
                                </h2>
                            </div>
                            <div className="col-xl-6">
                                <p className="mil-mt-60-adapt">
                                    It is a long established fact that a reader will be distracted
                                    by the readable content of a page when looking at its layout.
                                    The point of using Lorem Ipsum is that it has a more-or-less
                                    normal distribution of letters, as opposed to using content
                                    here.
                                </p>
                            </div>
                        </div>

                        <div className="row align-items-center">
                            <div className="col-md-6 col-xl-3">
                                <h6 className="mil-mb-30">Software Development</h6>

                                <div className="mil-skill-frame mil-mb-60">
                                    <div className="mil-skill-track">
                                        <div
                                            className="mil-skill-prog"
                                            style={{ width: "65%" }}
                                        ></div>
                                    </div>
                                    <div className="mil-text-sm">65%</div>
                                </div>
                            </div>
                            <div className="col-md-6 col-xl-3">
                                <h6 className="mil-mb-30">Web Development</h6>

                                <div className="mil-skill-frame mil-mb-60">
                                    <div className="mil-skill-track">
                                        <div
                                            className="mil-skill-prog"
                                            style={{ width: "90%" }}
                                        ></div>
                                    </div>
                                    <div className="mil-text-sm">90%</div>
                                </div>
                            </div>
                            <div classNameName="col-md-6 col-xl-3">
                                <h6 classNameName="mil-mb-30">UX / UI Design</h6>

                                <div classNameName="mil-skill-frame mil-mb-60">
                                    <div classNameName="mil-skill-track">
                                        <div
                                            classNameName="mil-skill-prog"
                                            style={{ width: "50%" }}
                                        ></div>
                                    </div>
                                    <div classNameName="mil-text-sm">50%</div>
                                </div>
                            </div>
                            <div classNameName="col-md-6 col-xl-3">
                                <h6 classNameName="mil-mb-30">App Development</h6>

                                <div classNameName="mil-skill-frame mil-mb-60">
                                    <div classNameName="mil-skill-track">
                                        <div
                                            classNameName="mil-skill-prog"
                                            style={{ width: "95%" }}
                                        ></div>
                                    </div>
                                    <div classNameName="mil-text-sm">95%</div>
                                </div>
                            </div>
                            <div classNameName="col-md-6 col-xl-3">
                                <h6 classNameName="mil-mb-30">Internet of Things</h6>

                                <div classNameName="mil-skill-frame mil-mb-60">
                                    <div classNameName="mil-skill-track">
                                        <div
                                            classNameName="mil-skill-prog"
                                            style={{ width: "60%" }}
                                        ></div>
                                    </div>
                                    <div classNameName="mil-text-sm">60%</div>
                                </div>
                            </div>
                            <div classNameName="col-md-6 col-xl-3">
                                <h6 classNameName="mil-mb-30">Artificial Intelligence</h6>

                                <div classNameName="mil-skill-frame mil-mb-60">
                                    <div classNameName="mil-skill-track">
                                        <div
                                            className="mil-skill-prog"
                                            style={{ width: "90%" }}
                                        ></div>
                                    </div>
                                    <div className="mil-text-sm">90%</div>
                                </div>
                            </div>
                            <div className="col-md-6 col-xl-3">
                                <h6 className="mil-mb-30">Blockchain</h6>

                                <div className="mil-skill-frame mil-mb-60">
                                    <div className="mil-skill-track">
                                        <div
                                            className="mil-skill-prog"
                                            style={{ width: "80%" }}
                                        ></div>
                                    </div>
                                    <div className="mil-text-sm">80%</div>
                                </div>
                            </div>
                            <div className="col-md-6 col-xl-3 mil-text-center">
                                <a href="#." className="mil-link mil-mb-30">
                                    <span>More</span>
                                    <i className="fas fa-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- skills end --> */}

                <div className="container">
                    <div className="mil-divider"></div>
                </div>

                {/* <!-- blog --> */}
                <section className="mil-blog mil-p-120-120">
                    <div className="mil-deco" style={{ top: 0, right: "30%" }}></div>
                    <div className="container">
                        <div className="row align-items-center mil-mb-90">
                            <div className="col-md-6 col-xl-6">
                                <span className="mil-suptitle mil-suptitle-2 mil-mb-30">
                                    Our Latest News
                                </span>
                                <h2>Latest Thinking</h2>
                            </div>
                            <div className="col-md-6 col-xl-6">
                                <div className="mil-adaptive-right mil-mt-60-adapt">
                                    <div className="mil-slider-nav">
                                        <div className="mil-slider-btn-prev mil-blog-prev">
                                            <i className="fas fa-arrow-left"></i>
                                            <span className="mil-h6">Prev</span>
                                        </div>
                                        <div className="mil-slider-btn-next mil-blog-next">
                                            <span className="mil-h6">Next</span>
                                            <i className="fas fa-arrow-right"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-container mil-blog-slider mil-mb-90">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide mil-slide-50">
                                    <a href="publication.html" className="mil-card">
                                        <div className="mil-cover-frame">
                                            <img src="assets/img/blog/1.jpg" alt="project" />
                                        </div>
                                        <div className="mil-description">
                                            <div className="mil-card-title">
                                                <h4 className="mil-mb-20">
                                                    Easy & Most Powerful Server Platform.
                                                </h4>
                                                <h6>
                                                    by: <span className="mil-accent">Jane Meldrum</span>
                                                </h6>
                                            </div>
                                            <div className="mil-card-text">
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing
                                                    elit, sed do eiusmod tempor incididunt ut labore et
                                                    dolore magna aliqua.
                                                </p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="swiper-slide mil-slide-25">
                                    <a
                                        href="publication.html"
                                        className="mil-card mil-card-sm mil-reverse-sm"
                                    >
                                        <div className="mil-description">
                                            <div className="mil-card-title">
                                                <h4 className="mil-mb-20">
                                                    Easy & Most Powerful Server Platform.
                                                </h4>
                                                <h6>
                                                    by: <span className="mil-accent">Jane Meldrum</span>
                                                </h6>
                                            </div>
                                            <div className="mil-card-text">
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing
                                                    elit, sed do eiusmod tempor incididunt ut labore et
                                                    dolore magna aliqua.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="mil-cover-frame">
                                            <img src="assets/img/blog/2.jpg" alt="project" />
                                        </div>
                                    </a>
                                </div>
                                <div className="swiper-slide mil-slide-25">
                                    <a href="publication.html" className="mil-card mil-card-sm">
                                        <div className="mil-cover-frame">
                                            <img src="assets/img/blog/3.jpg" alt="project" />
                                        </div>
                                        <div className="mil-description">
                                            <div className="mil-card-title">
                                                <h4 className="mil-mb-20">
                                                    Easy & Most Powerful Server Platform.
                                                </h4>
                                                <h6>
                                                    by: <span className="mil-accent">Jane Meldrum</span>
                                                </h6>
                                            </div>
                                            <div className="mil-card-text">
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing
                                                    elit, sed do eiusmod tempor incididunt ut labore et
                                                    dolore magna aliqua.
                                                </p>
                                            </div>
                                        </div>
                                    </a>
                                </div>

                                <div className="swiper-slide mil-slide-50">
                                    <a href="publication.html" className="mil-card">
                                        <div className="mil-cover-frame">
                                            <img src="assets/img/blog/4.jpg" alt="project" />
                                        </div>
                                        <div className="mil-description">
                                            <div className="mil-card-title">
                                                <h4 className="mil-mb-20">
                                                    Easy & Most Powerful Server Platform.
                                                </h4>
                                                <h6>
                                                    by: <span className="mil-accent">Jane Meldrum</span>
                                                </h6>
                                            </div>
                                            <div className="mil-card-text">
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing
                                                    elit, sed do eiusmod tempor incididunt ut labore et
                                                    dolore magna aliqua.
                                                </p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="swiper-slide mil-slide-25">
                                    <a
                                        href="publication.html"
                                        className="mil-card mil-card-sm mil-reverse-sm"
                                    >
                                        <div className="mil-description">
                                            <div className="mil-card-title">
                                                <h4 className="mil-mb-20">
                                                    Easy & Most Powerful Server Platform.
                                                </h4>
                                                <h6>
                                                    by: <span className="mil-accent">Jane Meldrum</span>
                                                </h6>
                                            </div>
                                            <div className="mil-card-text">
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing
                                                    elit, sed do eiusmod tempor incididunt ut labore et
                                                    dolore magna aliqua.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="mil-cover-frame">
                                            <img src="assets/img/blog/5.jpg" alt="project" />
                                        </div>
                                    </a>
                                </div>
                                <div className="swiper-slide mil-slide-25">
                                    <a href="publication.html" className="mil-card mil-card-sm">
                                        <div className="mil-cover-frame">
                                            <img src="assets/img/blog/6.jpg" alt="project" />
                                        </div>
                                        <div className="mil-description">
                                            <div className="mil-card-title">
                                                <h4 className="mil-mb-20">
                                                    Easy & Most Powerful Server Platform.
                                                </h4>
                                                <h6>
                                                    by: <span className="mil-accent">Jane Meldrum</span>
                                                </h6>
                                            </div>
                                            <div className="mil-card-text">
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing
                                                    elit, sed do eiusmod tempor incididunt ut labore et
                                                    dolore magna aliqua.
                                                </p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="row align-items-center">
                            <div className="col-12">
                                <a href="blog.html" className="mil-link">
                                    <span>View More Insights</span>
                                    <i className="fas fa-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- blog end -->

 <!-- reviews --> */}
                <section className="mil-reviews mil-deep-bg mil-p-120-120">
                    <div className="mil-deco" style={{ top: 0, right: "30%;" }}></div>
                    <div className="container">
                        <div className="row align-items-center mil-mb-90">
                            <div className="col-md-6 col-xl-6">
                                <span className="mil-suptitle mil-suptitle-2 mil-mb-30">
                                    Testimonial
                                </span>
                                <h2>
                                    What Our <span className="mil-accent">Clients</span> Say
                                </h2>
                            </div>
                            <div className="col-md-6 col-xl-6">
                                <div className="mil-adaptive-right mil-mt-60-adapt">
                                    <div className="mil-slider-nav">
                                        <div className="mil-slider-btn-prev mil-revi-prev">
                                            <i className="fas fa-arrow-left"></i>
                                            <span className="mil-h6">Prev</span>
                                        </div>
                                        <div className="mil-slider-btn-next mil-revi-next">
                                            <span className="mil-h6">Next</span>
                                            <i className="fas fa-arrow-right"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-container mil-revi-slider">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                    <div className="mil-review">
                                        <div className="mil-stars mil-mb-30">
                                            <img src="assets/img/icons/sm/11.svg " alt="quote" />
                                            <ul>
                                                <li>
                                                    <i className="fas fa-star"></i>
                                                </li>
                                                <li>
                                                    <i className="fas fa-star"></i>
                                                </li>
                                                <li>
                                                    <i className="fas fa-star"></i>
                                                </li>
                                                <li>
                                                    <i className="fas fa-star"></i>
                                                </li>
                                                <li>
                                                    <i className="fas fa-star"></i>
                                                </li>
                                            </ul>
                                        </div>
                                        <p className="mil-mb-30">
                                            It is a long established fact that a reader will be
                                            distracted by the readable content of a page when looking
                                            at its layout.
                                        </p>
                                        <div className="mil-author">
                                            <img src="assets/img/faces/1.jpg" alt="Customer" />
                                            <div className="mil-name">
                                                <h6 className="mil-mb-5">Tamzyn French</h6>
                                                <span className="mil-text-sm">Agency Design</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="mil-review">
                                        <div className="mil-stars mil-mb-30">
                                            <img src="assets/img/icons/sm/11.svg " alt="quote" />
                                            <ul>
                                                <li>
                                                    <i className="fas fa-star"></i>
                                                </li>
                                                <li>
                                                    <i className="fas fa-star"></i>
                                                </li>
                                                <li>
                                                    <i className="fas fa-star"></i>
                                                </li>
                                                <li>
                                                    <i className="fas fa-star"></i>
                                                </li>
                                                <li>
                                                    <i className="fas fa-star"></i>
                                                </li>
                                            </ul>
                                        </div>
                                        <p className="mil-mb-30">
                                            It is a long established fact that a reader will be
                                            distracted by the readable content of a page when looking
                                            at its layout.
                                        </p>
                                        <div className="mil-author">
                                            <img src="assets/img/faces/2.jpg" alt="Customer" />
                                            <div className="mil-name">
                                                <h6 className="mil-mb-5">Margaret Williams</h6>
                                                <span className="mil-text-sm">Agency Design</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="mil-review">
                                        <div className="mil-stars mil-mb-30">
                                            <img src="assets/img/icons/sm/11.svg " alt="quote" />
                                            <ul>
                                                <li>
                                                    <i className="fas fa-star"></i>
                                                </li>
                                                <li>
                                                    <i className="fas fa-star"></i>
                                                </li>
                                                <li>
                                                    <i className="fas fa-star"></i>
                                                </li>
                                                <li>
                                                    <i className="fas fa-star"></i>
                                                </li>
                                                <li>
                                                    <i className="fas fa-star"></i>
                                                </li>
                                            </ul>
                                        </div>
                                        <p className="mil-mb-30">
                                            It is a long established fact that a reader will be
                                            distracted by the readable content of a page when looking
                                            at its layout.
                                        </p>
                                        <div className="mil-author">
                                            <img src="assets/img/faces/3.jpg" alt="Customer" />
                                            <div className="mil-name">
                                                <h6 className="mil-mb-5">Tarryn Gillies</h6>
                                                <span className="mil-text-sm">Agency Design</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="mil-review">
                                        <div className="mil-stars mil-mb-30">
                                            <img src="assets/img/icons/sm/11.svg " alt="quote" />
                                            <ul>
                                                <li>
                                                    <i className="fas fa-star"></i>
                                                </li>
                                                <li>
                                                    <i className="fas fa-star"></i>
                                                </li>
                                                <li>
                                                    <i className="fas fa-star"></i>
                                                </li>
                                                <li>
                                                    <i className="fas fa-star"></i>
                                                </li>
                                                <li>
                                                    <i className="fas fa-star"></i>
                                                </li>
                                            </ul>
                                        </div>
                                        <p className="mil-mb-30">
                                            It is a long established fact that a reader will be
                                            distracted by the readable content of a page when looking
                                            at its layout.
                                        </p>
                                        <div className="mil-author">
                                            <img src="assets/img/faces/4.jpg" alt="Customer" />
                                            <div className="mil-name">
                                                <h6 className="mil-mb-5">Tamzyn French</h6>
                                                <span className="mil-text-sm">Agency Design</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="mil-review">
                                        <div className="mil-stars mil-mb-30">
                                            <img src="assets/img/icons/sm/11.svg " alt="quote" />
                                            <ul>
                                                <li>
                                                    <i className="fas fa-star"></i>
                                                </li>
                                                <li>
                                                    <i className="fas fa-star"></i>
                                                </li>
                                                <li>
                                                    <i className="fas fa-star"></i>
                                                </li>
                                                <li>
                                                    <i className="fas fa-star"></i>
                                                </li>
                                                <li>
                                                    <i className="fas fa-star"></i>
                                                </li>
                                            </ul>
                                        </div>
                                        <p className="mil-mb-30">
                                            It is a long established fact that a reader will be
                                            distracted by the readable content of a page when looking
                                            at its layout.
                                        </p>
                                        <div className="mil-author">
                                            <img src="assets/img/faces/2.jpg" alt="Customer" />
                                            <div className="mil-name">
                                                <h6 className="mil-mb-5">Margaret Williams</h6>
                                                <span className="mil-text-sm">Agency Design</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- reviews end -->

 <!-- contact --> */}
                <section className="mil-contact mil-gradient-bg mil-p-120-0">
                    <div
                        className="mil-deco mil-deco-accent"
                        style={{ top: 0, right: "10%" }}
                    ></div>
                    <div className="container">
                        <h2 className="mil-light mil-mb-90">
                            Contact <span className="mil-accent">Us</span>
                        </h2>
                        <form>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="mil-input-frame mil-mb-30">
                                        <label>
                                            <span className="mil-light">Name</span>
                                            <span className="mil-accent">Required</span>
                                        </label>
                                        <input type="text" placeholder="Enter Your Name Here" />
                                    </div>
                                    <div className="mil-input-frame mil-mb-30">
                                        <label>
                                            <span className="mil-light">Email Adress</span>
                                            <span className="mil-accent">Required</span>
                                        </label>
                                        <input type="email" id="email" placeholder="Your Email" />
                                    </div>
                                    <div className="mil-input-frame mil-mb-60">
                                        <label>
                                            <span className="mil-light">Phone</span>
                                            <span className="mil-light-soft">Optional</span>
                                        </label>
                                        <input type="number" placeholder="Your Phone" />
                                    </div>
                                    <div className="mil-attach-frame mil-mb-60">
                                        <i className="fas fa-paperclip"></i>
                                        <label className="mil-custom-file-input">
                                            <span>Attach your file</span>
                                            <input type="file" id="mil-file-input" />
                                        </label>
                                        <p className="mil-text-sm mil-light-soft">up to 20MB</p>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="mil-input-frame mil-mb-30">
                                        <label>
                                            <span className="mil-light">Email Adress</span>
                                            <span className="mil-accent">Required</span>
                                        </label>
                                        <textarea placeholder="Your Message"></textarea>
                                    </div>
                                    <p className="mil-text-sm mil-light-soft mil-mb-15">
                                        We will process your personal information in accordance with
                                        our Privacy Policy.
                                    </p>

                                    <div className="mil-checbox-frame mil-mb-60">
                                        <input
                                            className="mil-checkbox"
                                            id="checkbox-1"
                                            type="checkbox"
                                            value="value"
                                        />
                                        <label for="checkbox-1" className="mil-text-sm mil-light">
                                            I would like to be contacted with news and updates about
                                            your{" "}
                                            <a href="#." className="mil-accent">
                                                events and services
                                            </a>
                                        </label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <button className="mil-button mil-accent-bg mil-fw">
                                        <span>Send Message Now</span>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </section>
                {/* <!-- contact end -->

 <!-- footer --> */}
                <footer className="mil-dark-bg">
                    <img
                        src="assets/img/deco/map.png"
                        alt="background"
                        className="mil-footer-bg"
                    />
                    <div className="container">
                        <div className="mil-footer-content mil-p-120-90">
                            <div className="row justify-content-between align-items-center">
                                <div className="col-xl-4 mil-mb-30">
                                    <img
                                        src="assets/img/logo/logo-light.png"
                                        alt=""
                                        className="mil-logo mil-mb-30"
                                        style={{ width: "140px" }}
                                    />

                                    <p className="mil-light-soft mil-mb-30">
                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                                        sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                                        magna aliquam erat volutpat.
                                    </p>

                                    <a href="#." className="mil-app-btn mil-mb-5">
                                        <i className="fab fa-google-play"></i>
                                        <div className="mil-app-text">
                                            <span className="mil-accent mil-text-sm">
                                                Available on the
                                            </span>
                                            <div className="mil-h6">Google Play</div>
                                        </div>
                                    </a>

                                    <a href="#." className="mil-app-btn">
                                        <i className="fab fa-apple"></i>
                                        <div className="mil-app-text">
                                            <span className="mil-accent mil-text-sm">
                                                Download on the
                                            </span>
                                            <div className="mil-h6">App Store</div>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-xl-7 mil-mt-60-adapt">
                                    <div className="row">
                                        <div className="col-lg-7 mil-mb-30">
                                            <h3 className="mil-light mil-up-font mil-mb-30">
                                                Join The <span className="mil-accent">ITSulu</span>{" "}
                                                <br />
                                                Experience
                                            </h3>
                                            <p className="mil-light-soft">
                                                Lorem ipsum dolor sit amet, consectetuer
                                                <br /> adipiscing elit, sed diam nonummy.
                                            </p>
                                        </div>
                                        <div className="col-lg-5 mil-mb-30">
                                            <form>
                                                <input
                                                    className="mil-rounded-input mil-text-center mil-mb-5"
                                                    type="text"
                                                    placeholder="Your email address"
                                                />
                                                <button className="mil-button mil-accent-bg mil-fw">
                                                    <span>Subscribe Now</span>
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mil-divider mil-light"></div>

                        <div className="mil-footer-links">
                            <ul className="mil-social mil-light">
                                <li className="mil-adapt-links">
                                    <a href="#.">Facebook</a>
                                    <a href="#.">FB</a>
                                </li>
                                <li className="mil-adapt-links">
                                    <a href="#.">Instagram</a>
                                    <a href="#.">IG</a>
                                </li>
                                <li className="mil-adapt-links">
                                    <a href="#.">LinkedIn</a>
                                    <a href="#.">IN</a>
                                </li>
                                <li className="mil-adapt-links">
                                    <a href="#.">Twitter</a>
                                    <a href="#.">TW</a>
                                </li>
                                <li className="mil-adapt-links">
                                    <a href="#.">YouTube</a>
                                    <a href="#.">YT</a>
                                </li>
                            </ul>
                            <ul className="mil-additional-links mil-light">
                                <li>
                                    <a href="#.">Terms & Condition</a>
                                </li>
                                <li>
                                    <a href="#.">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="#.">Sitemap</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="mil-footer-bottom">
                        <div className="container">
                            <p className="mil-text-sm mil-light">© ITSulu 2023.</p>
                            <p className="mil-text-sm mil-light">All Rights Reserved.</p>
                        </div>
                    </div>
                </footer>
                {/* <!-- footer end --> */}
            </div>

            <div className="bsl-popup" data-theme="itsulu" data-category="html">
                <div className="bsl-popup__buttons"></div>
                <div className="bsl-popup__content bsl-popup__content-related">
                    <div className="bsl-popup__menu"></div>
                    <div className="bsl-popup__tabs">
                        <div className="bsl-popup__tab bsl-popup__tab-demo"></div>
                        <div className="bsl-popup__tab bsl-popup__tab-all"></div>
                        <div className="bsl-popup__tab bsl-popup__tab-related"></div>
                        <div className="bsl-popup__tab bsl-popup__tab-version"></div>
                    </div>
                </div>
                <div className="bsl-popup__content bsl-popup__content-help"></div>
            </div>
            {/* <!-- bslthemes.com buttons html end --> */}
            {/* 
<!-- bslthemes.com buttons assets begin --> */}
            <link
                rel="stylesheet"
                href="../../bslthms-advanced-btns/assets/style.css"
            />
            <script src="../../bslthms-advanced-btns/assets/script.js"></script>
        </>
    );
};

export default Home;