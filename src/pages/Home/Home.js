import React from 'react'
import './Home.css'
import HomeImg from '../../assets/home-img.webp'
import Chocolate from '../../assets/chocolate.png'
import Mojito from '../../assets/mojito.png'
import Suzan from '../../assets/suzan.png'
import AppStore from '../../assets/app store.png'
import { FaAngleDoubleRight,
        FaClock,FaMapMarkedAlt, 
        FaPhoneSquareAlt,
        FaRegHeart,
        FaStar,
        FaFacebookF,
        FaInstagram,
        FaTwitter,
        FaGithub,
        FaGoogle,
        FaMapMarkerAlt,
        FaMobile,
        FaYoutube,
        FaBell
     } from 'react-icons/fa';
import {Link} from 'react-router-dom'



const Home = () => {

  return (
    <>
        <div className='home-container'>

{/* Contact Section.......................................... */}
            <div className="home" id="home">
                <div className="home-text">
                    <h1>Meet, <span>Eat & <br/>
                    </span>Enjoy The True Taste</h1>
                    <Link to="/menu" className="btn">Explore Menu<i><FaAngleDoubleRight/></i></Link>
                    <Link to="/menu" className="btn2">Order Now</Link>
                </div>
                <div className="home-img">
                    <img src={HomeImg} alt=""/>
                </div>
            </div>

{/* Container Section.......................................... */}
            <section className="container">
                <div className="container-box">
                    <i><FaClock /></i>
                    <h3>11:00 am - 8:00 pm</h3>
                    <a href="">Working Hours</a>
                </div>

                <div className="container-box">
                    <i><FaMapMarkedAlt/></i>
                    <h3>Kathmandu, Nepal</h3>
                    <a href="">Get Directions</a>
                </div>

                <div className="container-box">
                    <i><FaPhoneSquareAlt/></i>
                    <h3>(977) 9876543210</h3>
                    <a href="">Call Us Now</a>
                </div>
            </section>

{/* About Section.......................................... */}          
            <section className="about" id="about">
                <div className="about-img">
                    <img src="https://freepngimg.com/thumb/food/1-2-food-free-png-image-thumb.png" alt=""/>
                </div>
                <div className="about-text">
                    <h2>Living well beings <br/>with eating well.</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Fuga magni quisquam similique aliquid illo asperiores maiores 
                    sit dolorum doloribus assumenda?<br/><br/>Lorem ipsum dolor sit amet 
                    consectetur adipisicing elit. Animi, officiis?</p>
                    <Link to="/about" className="btn">Explore Story<i><FaAngleDoubleRight /></i></Link>
                </div>
            </section>

{/* Shop Section.......................................... */}
            <section class="shop" id="shop">
                <div class="middle-text">
                    <h4>Our Shop</h4>
                    <h2>Lets Check Popular Items</h2>
                </div>

                <div class="shop-content">
                    <div class="row">
                        <img src={Chocolate} alt=""/>
                        <h3>Chocolate Milkshake</h3>
                        <p>Lorem ipsum dolor, 
                        sit amet consectetur adipisicing elit. Consequuntur, commodi!</p>
                        <div class="in-text">
                            <div class="price">
                                <h6>Rs.200</h6>
                            </div>
                            <div class="s-btn">
                                <Link to="/menu" href="#">View Menu</Link>
                            </div>
                        </div>
                            <div class="top-icon">
                                <a href=""><i><FaRegHeart /></i></a>
                            </div>
                    </div>

                    <div class="row">
                        <img src="https://static.vecteezy.com/system/resources/previews/036/160/719/original/ai-generated-mocha-by-a-combination-of-espresso-steamed-milk-and-chocolate-with-transparent-background-free-png.png" alt=""/>
                        <h3>Mocha</h3>
                        <p>Lorem ipsum dolor, 
                        sit amet consectetur adipisicing elit. Consequuntur, commodi!</p>
                        <div class="in-text">
                            <div class="price">
                                <h6>Rs.200</h6>
                            </div>
                            <div class="s-btn">
                                <Link to="/menu" href="#">View Menu</Link>
                            </div>
                        </div>
                        <div class="top-icon">
                            <a href=""><i><FaRegHeart /></i></a>
                        </div>
                    </div>

                    <div class="row">
                        <img src={Mojito} alt=""/>
                        <h3>Mojito</h3>
                        <p>Lorem ipsum dolor, 
                        sit amet consectetur adipisicing elit. Consequuntur, commodi!</p>
                        <div class="in-text">
                            <div class="price">
                                <h6>Rs.200</h6>
                            </div>
                            <div class="s-btn">
                                <Link to="/menu" href="#">View Menu</Link>
                            </div>
                        </div>
                        <div class="top-icon">
                            <a href=""><i><FaRegHeart /></i></a>
                        </div>
                    </div>
                </div>

                <div class="row-btn">
                <Link to="/menu" class="btn">All Items<i><FaAngleDoubleRight /></i></Link>
                </div>
            </section>

{/* Review Section.......................................... */}
            <section class="review" id="review">
                <div class="middle-text">
                    <h4>Our Customer</h4>
                    <h2>Clients Review About Our Food</h2>
                </div>

                <div class="review-content">
                    <div class="box">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero, temporibus.</p>
                        <div class="in-box">
                            <div class="bx-img">
                                <img src={Suzan} alt=""/>
                            </div>
                            <div class="bx-text">
                                <h4>Suzan Balami</h4>
                                <h5>Food Vlogger</h5>
                                <div class="rattings">
                                    <a href="#"><i><FaStar /></i></a>
                                    <a href="#"><i><FaStar /></i></a>
                                    <a href="#"><i><FaStar /></i></a>
                                    <a href="#"><i><FaStar /></i></a>
                                    <a href="#"><i><FaStar /></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="box">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero, temporibus.</p>
                        <div class="in-box">
                            <div class="bx-img">
                                <img src="https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png" alt=""/>
                            </div>
                            <div class="bx-text">
                                <h4>Shailee Marahatta</h4>
                                <h5>Food Vlogger</h5>
                                <div class="rattings">
                                    <a href="#"><i><FaStar /></i></a>
                                    <a href="#"><i><FaStar /></i></a>
                                    <a href="#"><i><FaStar /></i></a>
                                    <a href="#"><i><FaStar /></i></a>
                                    <a href="#"><i><FaStar /></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="box">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero, temporibus.</p>
                        <div class="in-box">
                            <div class="bx-img">
                                <img src="https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png" alt=""/>
                            </div>
                            <div class="bx-text">
                                <h4>Kriteeka Adhikari</h4>
                                <h5>Food Vlogger</h5>
                                <div class="rattings">
                                    <a href="#"><i><FaStar /></i></a>
                                    <a href="#"><i><FaStar /></i></a>
                                    <a href="#"><i><FaStar /></i></a>
                                    <a href="#"><i><FaStar /></i></a>
                                    <a href="#"><i><FaStar /></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

{/* Contact Section.......................................... */}
            <section class="contact" id="contact">
                <div class="contact-content">
                    <div class="contact-img">
                        <div class="c-one">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/e/ee/Google_Play_logo.png" alt=""/>
                        </div>
                        <div class="c-one">
                            <img src={AppStore} alt=""/>
                        </div>
                    </div>
                    <div class="contact-text">
                        <h2>Contact Us</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, rerum?</p>
                        <div class="social">
                            <a href="" class="clr"><i><FaFacebookF /></i></a>
                            <a href=""><i><FaInstagram /></i></a>
                            <a href=""><i><FaTwitter /></i></a>
                            <a href=""><i><FaGithub /></i></a>
                            <a href=""><i><FaGoogle /></i></a>
                        </div>
                    </div>
                    <div class="details">
                        <div class="main-d">
                            <a href=""><i><FaMapMarkerAlt /></i>Kathmandu,Nepal</a>
                        </div>
                        <div class="main-d">
                            <a href=""><i><FaMobile /> </i>9812345678</a>
                        </div>
                        <div class="main-d">
                            <a href=""><i><FaYoutube /> </i>PG Restro</a>
                        </div>
                        <div class="main-d">
                            <a href=""><i><FaBell /></i>Subscribde</a>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    </>
  )
}

export default Home