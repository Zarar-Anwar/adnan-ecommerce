import {Helmet} from "react-helmet";
import {Link} from "react-router-dom";
import React, {useEffect, useState} from "react";
import Product from "./include/Product";
import {data, blogs_data} from "../Utils/Data";

function Home() {
    const [blogs, setBlogs] = useState([])
    const [featuredProducts, setFeaturedProducts] = useState([])
    const [topProducts, setTopProducts] = useState([])

    const products_list = async () => {
        try {

            const allProducts = data

            const featuredProducts = allProducts.filter(product => product.featured_product === true);
            setFeaturedProducts(featuredProducts.slice(0, 4));

            const topProducts = allProducts
                .sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
            setTopProducts(topProducts.slice(0, 4));
        } catch (error) {
        }
    };

    const blogs_list = async () => {
        try {
            setBlogs(blogs_data.slice(0, 3));
        } catch (error) {

        }
    };

    useEffect(() => {
        blogs_list();
        products_list()
    }, []);

    return (
        <>
            <Helmet>
                <title>Home</title>
            </Helmet>

            <section className="bd-banner__area dark-bg banner-height-2 d-flex align-items-center p-relative fix">
                <div className="bd-banner__shape-1">
                    <img src="img/product/alo7.png" alt="banner-shape"/>
                </div>
                <div className="bd-banner__discount-shape">
                    <img
                        src="assets/img/banner/discount-shape.png"
                        alt="discount-shape"
                    />
                    <div className="discount-text">
                        <span>50%</span>off
                    </div>
                </div>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="bd-singel__banner mt-70 d-flex align-items-center">
                            <div className="col-xl-7 col-lg-6 col-md-6 col-12">
                                <div className="bd-banner__content__wrapper p-relative">
                                    <div className="bd-banner__text-shape mb-10">
                                        {/* Decorative text or images if needed */}
                                    </div>
                                    <div className="bd-banner__btn-shape">
                                        <img
                                            src="assets/img/banner/curved-arrow.png"
                                            alt="curved-arrow"
                                        />
                                    </div>
                                    <div className="bd-banner__content-2">
                                        <h2>
                                            Summer <br/> Collection
                                        </h2>
                                        <p>
                                            <b>Discover our stylish summer wear and </b> <br/>{" "}
                                            <b>elevate your wardrobe with fresh looks</b>{" "}
                                        </p>
                                        <div className="bd-banner__btn">
                                            <Link className="bd-bn__btn-1" to="/shop">
                                                Shop Now
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-5 col-lg-6 col-md-6">
                                <div className="bd-banner__thumb">
                                    <img src="img/product/alo1.png" width="100%" alt="banner-3.png"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="bd-step__area pt-130 pb-65">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-6 col-lg-7 col-md-8">
                            <div className="bd-section__title-wrapper p-relative mb-85">
                                <div className="bd-section__img w-img">
                                    <img src="assets/img/step/title-img.png" alt="title-img"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 d-flex align-items-center">
                            <div className="bd-step__item text-center p-relative mb-60">
                                <div className="bd-step__arrow mb-3">
                                    <img
                                        src="assets/img/step/step-arrow-1.png"
                                        alt="step-arrow"
                                    />
                                </div>
                                <div className="bd-step__icon mb-3">
                                    <img
                                        style={{width: "40%", height: "auto"}}
                                        src="img/product/alol1.png"
                                        alt="step-icon"
                                    />
                                </div>
                                <div className="bd-step__content">
                                    <h3>
                                        <Link to="about">What is Linen? </Link>
                                    </h3>
                                    <p>
                                        Linen is a lightweight, breathable fabric, ideal for summer wear,
                                        known for its comfort and style.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 d-flex align-items-center">
                            <div className="bd-step__item text-center p-relative mb-60">
                                <div className="bd-step__arrow mb-3">
                                    <img
                                        src="assets/img/step/step-arrow-2.png"
                                        alt="step-arrow"
                                    />
                                </div>
                                <div className="bd-step__icon mb-3">
                                    <img
                                        style={{width: "40%", height: "auto"}}
                                        src="img/product/alol3.png"
                                        alt="step-icon"
                                    />
                                </div>
                                <div className="bd-step__content">
                                    <h3>
                                        <Link to="about">Benefits of Cotton </Link>
                                    </h3>
                                    <p>
                                        Cotton is soft, durable, and hypoallergenic, making it perfect for
                                        all-day comfort and everyday wear.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 d-flex align-items-center">
                            <div className="bd-step__item text-center p-relative mb-60">
                                <div className="bd-step__arrow mb-3">
                                    <img
                                        src="assets/img/step/step-arrow-1.png"
                                        alt="step-arrow"
                                    />
                                </div>
                                <div className="bd-step__icon mb-3">
                                    <img
                                        style={{width: "40%", height: "auto"}}
                                        src="img/product/alol4.png"
                                        alt="step-icon"
                                    />
                                </div>
                                <div className="bd-step__content">
                                    <h3>
                                        <Link to="about">Silk</Link>
                                    </h3>
                                    <p>
                                        Silk is a luxurious fabric that feels soft against the skin, adding a
                                        touch of elegance to any wardrobe.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 d-flex align-items-center">
                            <div className="bd-step__item text-center p-relative mb-60">
                                <div className="bd-step__icon mb-3">
                                    <img
                                        style={{width: "40%", height: "auto"}}
                                        src="img/product/alo7.png"
                                        alt="step-icon"
                                    />
                                </div>
                                <div className="bd-step__content">
                                    <h3>
                                        <Link to="about">Linen & Cotton Blend</Link>
                                    </h3>
                                    <p>
                                        This blend offers a perfect balance of softness and durability,
                                        combining comfort with easy care.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="bd-product__area pt-125 pb-95">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-5 col-lg-5">
                            <div className="bd-section__title-wrapper mb-60">
                                <span className="bd-sub__title">Product</span>
                                <h2 className="bd-section__title mb-30">Top Products</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xxl-12">
                            <div className="tab-content" id="nav-tabContent">
                                <div
                                    className="tab-pane fade show active"
                                    id="nav-product-1"
                                    role="tabpanel"
                                    aria-labelledby="nav-product-1-tab"
                                >
                                    <div className="row">
                                        {featuredProducts.length > 0 ?
                                            featuredProducts.map((object) => (
                                                <div className="col-4">
                                                    <Product product={object}/>
                                                </div>
                                            )) : <div className="text-center">
                                                <span style={{fontSize: "20px"}} className='badge text-danger'>No Featured Products Found</span>
                                            </div>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bd-about__area grey-bg p-relative z-index-1 pt-130 pb-70">
                <div className="container">
                    <div className="bd-about__bg-wrapper p-relative">
                        <img
                            className="bd-about__bg-shape"
                            src="assets/img/about/about-big-shape.png"
                            alt="about-big-shape"
                        />
                    </div>
                    <div className="row align-items-center">
                        <div className="col-xl-6 col-lg-6">
                            <div className="bd-about__content-wrapper mb-60">
                                <div className="bd-section__title-wrapper mb-35">
                                    <span className="bd-sub__title">About Us</span>
                                    <h2 className="bd-section__title mb-35">
                                        We believe in sustainable and organic fashion
                                    </h2>
                                    <p>
                                        We aim to redefine clothing by focusing on pure, natural materials.
                                        Our fabrics, from organic cotton to sustainable linen, provide a blend
                                        of comfort and style that nurtures both the body and the environment.
                                    </p>
                                </div>
                                <div className="bd-about__content">
                                    <div className="bd-about__features">
                                        <div className="bd-adbout__icon">
                                            <img
                                                width="170px"
                                                src="assets/img/about/about-img-1.jpg"
                                                alt="about-icon"
                                            />
                                        </div>
                                        <div className="bd-about__text">
                                            <h4>100% Sustainable Quality</h4>
                                            <p>
                                                Our textiles are sourced responsibly, offering a combination of
                                                durability and comfort. Each piece reflects our commitment to
                                                eco-friendly practices, reducing our impact on the planet while
                                                ensuring quality.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="bd-about__action">
                                        <Link className="bd-bn__btn-1" to="about">
                                            About Us
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <div className="bd-about__thumb-wrapper p-relative mb-60">
                                <div className="bd-about__thumb-2">
                                    <img src="assets/img/about/about-img-2.jpg" alt="about-img"/>
                                </div>
                                <div className="bd-about__quite-box">
                                    <div className="quite-content">
                                        <p>
                                            "Sustainable fashion is our way of contributing to a healthier planet."
                                        </p>
                                    </div>
                                    <div className="quite-icon">
                                        <i className="flaticon-quote"/>
                                    </div>
                                    <div className="bd-about__quite-name">
                                        <span>Daniel Nirob</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="bd-product__area pt-125 pb-95">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-5 col-lg-5">
                            <div className="bd-section__title-wrapper mb-60">
                                <span className="bd-sub__title">Organic</span>
                                <h2 className="bd-section__title mb-30">Featured Products</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xxl-12">
                            <div className="tab-content" id="nav-tabContent">
                                <div
                                    className="tab-pane fade show active"
                                    id="nav-product-1"
                                    role="tabpanel"
                                    aria-labelledby="nav-product-1-tab"
                                >
                                    <div className="row">
                                        {featuredProducts.length > 0 ?
                                            featuredProducts.map((object) => (
                                                <div className="col-4">
                                                    <Product product={object}/>
                                                </div>
                                            )) : <div className="text-center">
                                                <span style={{fontSize: "20px"}} className='badge text-danger'>No Featured Products Found</span>
                                            </div>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bd-why-choose__area WHITE-bg-2 pt-125 pb-195">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="bd-section__title-wrapper text-center mb-60">
                                <span className="bd-sub__title">Why Choose Us</span>
                                <h2 className="bd-section__title mb-30">
                                    6 Reasons to Choose Us
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="row g-0 align-items-center">
                        <div className="col-xl-4 col-lg-4 col-md-6">
                            <div className="bd-choose__wrapper choose-wrapper__left mb-60">
                                <div className="bd-choose__item">
                                    <div className="bd-choose__content text-end">
                                        <h4>100% Organic Materials</h4>
                                        <p>
                                            We source organic cotton and sustainable fibers, providing you with
                                            clothing that's kind to your skin and the environment.
                                        </p>
                                    </div>
                                    <div className="bd-choose__icon choose-icon__left">
                                        <img
                                            src="assets/img/why-choose/why-choose-01.png"
                                            alt="why-choose-img"
                                        />
                                    </div>
                                </div>
                                <div className="bd-choose__item">
                                    <div className="bd-choose__content text-end">
                                        <h4>Ethical Production</h4>
                                        <p>
                                            Our textiles are crafted with care in clean, ethical facilities
                                            that ensure fair labor practices and minimize waste.
                                        </p>
                                    </div>
                                    <div className="bd-choose__icon choose-icon__left">
                                        <img
                                            src="assets/img/why-choose/why-choose-02.png"
                                            alt="why-choose-img"
                                        />
                                    </div>
                                </div>
                                <div className="bd-choose__item">
                                    <div className="bd-choose__content text-end">
                                        <h4>No Harsh Chemicals</h4>
                                        <p>
                                            We avoid synthetic additives, preserving the natural purity and
                                            quality of our fabrics for a healthier wardrobe.
                                        </p>
                                    </div>
                                    <div className="bd-choose__icon choose-icon__left">
                                        <img
                                            src="assets/img/why-choose/why-choose-03.png"
                                            alt="why-choose-img"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6">
                            <div className="bd-choose__thumb text-center w-img mb-30">
                                <img
                                    style={{height: "400px", width: "auto", maxWidth: "100%"}}
                                    src="assets/img/why-choose/why-choose-big.jpg"
                                    alt="choose-big"
                                />
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6">
                            <div className="bd-choose__wrapper choose-wrapper__right mb-60">
                                <div className="bd-choose__item">
                                    <div className="bd-choose__icon choose__icon-right">
                                        <img
                                            src="assets/img/why-choose/why-choose-04.png"
                                            alt="why-choose-img"
                                        />
                                    </div>
                                    <div className="bd-choose__content text-start">
                                        <h4>Premium Quality</h4>
                                        <p>
                                            Our commitment to quality means you receive clothing that's durable,
                                            comfortable, and luxurious.
                                        </p>
                                    </div>
                                </div>
                                <div className="bd-choose__item">
                                    <div className="bd-choose__icon choose__icon-right">
                                        <img
                                            src="assets/img/why-choose/why-choose-05.png"
                                            alt="why-choose-img"
                                        />
                                    </div>
                                    <div className="bd-choose__content text-start">
                                        <h4>Modern Design</h4>
                                        <p>
                                            Our designs combine timeless elegance with contemporary trends for
                                            a look that's both stylish and sustainable.
                                        </p>
                                    </div>
                                </div>
                                <div className="bd-choose__item">
                                    <div className="bd-choose__icon choose__icon-right">
                                        <img
                                            src="assets/img/why-choose/why-choose-06.png"
                                            alt="why-choose-img"
                                        />
                                    </div>
                                    <div className="bd-choose__content text-start">
                                        <h4>Efficient Delivery</h4>
                                        <p>
                                            We ensure fast and efficient delivery, bringing you high-quality,
                                            sustainable fashion quickly and reliably.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="bd-news__area pt-125 pb-60">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="bd-section__title-wrapper text-center mb-60">
                                <span className="bd-sub__title">Blogs Insight</span>
                                <h2 className="bd-section__title mb-30">Recent Blogs</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {blogs.length > 0 ? (
                            blogs.map((object) => (
                                <div className="col-xl-4 col-lg-4 col-md-6" key={object.id}>
                                    <div className="bd-news__item mb-40">
                                        <div className="bd-news__thumb w-img">
                                            <Link to={{
                                                pathname: `/blogs-details/${object.slug}`,
                                            }}
                                                  state={{blog: object}}>
                                                <img
                                                    height="300px"
                                                    src={object.image}
                                                    alt="news-image"
                                                />
                                            </Link>
                                        </div>
                                        <div className="bd-news__content">
                                            <div className="bd-news__meta-list">
                                                <div className="bd-news__meta-item">
                                                    <Link to="news.html">
                                                        <i className="fa-light fa-folder-open"/>
                                                        {object.category}
                                                    </Link>
                                                </div>
                                                <div className="bd-news__meta-item">
                                                    <span>
                                                        <i className="fa-regular fa-clock"/>
                                                        {object.created_at}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="bd-news__title">
                                                <h3>
                                                    <Link to="/blogs-details">
                                                        {object.title}
                                                    </Link>
                                                </h3>
                                            </div>
                                            <Link className="bd-news__btn" to="/blogs-details">
                                                Read More
                                                <span>
                                                    <i className="fa-solid fa-arrow-left"/>
                                                    <i className="fa-solid fa-arrow-left"/>
                                                </span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="text-center">
                                <span style={{fontSize: "20px"}} className='badge text-danger'>No blogs Found</span>
                            </div>
                        )}
                    </div>

                </div>
            </section>
        </>
    );
}

export default Home;
