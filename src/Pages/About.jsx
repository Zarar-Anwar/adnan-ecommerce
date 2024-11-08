import React from "react";
import Catagories from "./include/Catagories";
import {Helmet} from "react-helmet";

const About = ({title}) => {
    return (
        <div>
            <Helmet>
                <title>{title}</title>
            </Helmet>
            <Catagories title={title}/>
            <section
                className="bd-page__banner-area include-bg page-overlay"
                data-background="assets/img/banner/page-banner-1.webp"
                style={{
                    backgroundImage: 'url("assets/img/banner/page-banner-1.webp")',
                }}
            >
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="bd-page__banner-content text-center">
                                <h2>About Business E-commerce</h2>
                                <span>An organic and ideal skin care shop</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bd-about__area pt-130 pb-65">
                <div className="container">
                    <div className="row g-0">
                        <div className="col-xxl-5 col-xl-5 col-lg-6">
                            <div className="bd-about__wrapper mb-60">
                                <div className="bd-about__image-1 m-img mb-60">
                                    <img
                                        src="assets/img/about/about-img-1.jpg"
                                        alt="about-image"
                                    />
                                </div>
                                <div className="bd-about__image-2 m-img">
                                    <img
                                        src="assets/img/about/about-img-2.jpg"
                                        alt="about-image"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-7 col-xl-7 col-lg-6">
                            <div className="bd-about__content-box mb-60">
                                <div className="bd-section__title-wrapper mb-50">
                                    <span className="bd-sub__title">About Us</span>
                                    <h2 className="bd-section__title mb-30">
                                        We believe in timeless <br/> style and quality craftsmanship

                                    </h2>
                                </div>
                                <div className="bd-about__inner">
                                    <div className="bd-about__image-3">
                                        <img
                                            src="img/product/alo1.png"
                                            alt="about-imgage"
                                        />
                                    </div>
                                    <div className="bd-about__info">
                                        <p>
                                            We have reached new heights in wearable fashion with our commitment to
                                            quality and timeless design, creating pieces that offer both style and
                                            durability. Our dedication to excellence reflects our passion for delivering
                                            the best in wearable craftsmanship and elegance.

                                        </p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
