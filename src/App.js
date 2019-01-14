import React, { Component } from 'react';

import logo from './img/logo_original.png';
import dining from './img/dining.jpg';
import pepperSauceChicken from './img/pepperSauceChicken.jpg';
import burger from './img/burger.jpg';
import devilBeef from './img/devilBeef.jpg';
import devilCalamari from './img/devilCalamari.jpg';
import muttonBiryani from './img/muttonBiryani.jpg';
import variety from './img/variety.jpg';
import baconCheeseburger from './img/baconCheeseburger.jpg';
import CreamCheeseSpinachVeggieBurger from './img/CreamCheeseSpinachVeggieBurger.jpg';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-inverse navbar-fixed-top">
          <div className="container">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span> 
              </button>
              <a className="navbar-brand" href="#home">con<span className='nav-span'>fused</span> kitchen</a>
            </div>
            <div className="collapse navbar-collapse" id="myNavbar">
              <ul className="nav navbar-nav navbar-right">
                <li><a href="#about">About</a></li>
                <li><a href="#gallery">Gallery</a></li>
                <li><a href="#reviews">Reviews</a></li>
                <li><a href="#location">Location</a></li>
                <li><a href="https://www.instagram.com/confusedkitchen/" rel='noopener noreferrer' target='_blank'>Instagram<i class="icon ion-logo-instagram"></i></a></li>
              </ul>
            </div>
          </div>
        </nav>

        <div className='jumbotron' id='home'>
          <div className='jumbotron-cta'>
            <img src={logo} alt='Confused kitchen logo' />
            <h2>Fusing the best of culinary worlds... <br/> right in our kitchen.</h2>
            <a href="#about" className='btn btn-about'>ABOUT US</a>
          </div>
        </div>

        <section className='section-about' id='about'>
        <div className='container'>

            <div className='about-container'>
              <div className='about-text-container'>
                <div className='about-text'>
                  <h3 className='about-title'> ABOUT US </h3>
                  <p>The team at Confused Kitchen prides ourselves on providing exceptional customer service 
                  and serving quality food. Our goal is to offer you a wide variety of classics and unique fused dishes. 
                  We offer a hot sauce station for those who dare to take on the heat!</p>
                </div>
              </div>

              <div className='about-figure'>
                <figure>
                  <img src={dining} alt="Variety of Confused Kitchen's dishes" />
                </figure>
              </div>
            </div>
        
        </div>
        </section>

        <section className='section-gallery' id='gallery'>
          <div className='gallery-container'>

            <div className='gallery-figure'>
              <img src={CreamCheeseSpinachVeggieBurger} alt='Cream Cheese Spinach Veggie Burger' />
            </div>

            <div className='gallery-figure'>
              <img src={variety} alt='Assortment of food' />
            </div>

            <div className='gallery-figure'>
              <img src={burger} alt='Burger' />
            </div>

            <div className='gallery-figure'>
              <img src={devilCalamari} alt='Devil Calamari' />
            </div>

            <div className='gallery-figure'>
              <img src={muttonBiryani} alt='Mutton Biryani' />
            </div>

            <div className='gallery-figure'>
              <img src={pepperSauceChicken} alt='Pepper Sauce Chicken' />
            </div>

            <div className='gallery-figure'>
              <img src={devilBeef} alt='Devil Beef' />
            </div>

            <div className='gallery-figure'>
              <img src={baconCheeseburger} alt='Bacon Cheeseburger' />
            </div>

          </div>
        </section>

        <section className='section-reviews' id='reviews'>
          <h3 className='reviews-title'> Google Reviews </h3>

          <div className='reviews-container'>
            
            <OwlCarousel
                className="owl-theme"
                margin={10}
                responsive={{
                  0:{
                      items:1
                  },
                  785: {
                    items: 2
                  },
                  900: {
                    items: 3
                  }
                }}
            >   

                <div className="item">
                  <div className='review'>
                    <p className='review-author'>Sam Low</p>      
                    <p className='review-rating'>
                      <ReviewStars />
                      <span className='review-date'>a day ago</span>  
                    </p>
                    <p className='review-content'>Unique, bold menu featuring Sri Lankan fusion, gourmet burgers, big portion of meat, trendy sauce bar, great customer service... and a lot of kick!
                    It is mostly takeout as it only has two tables. Also, bear in mind the limited hours.
                    The menu is in chalk on two walls opposite a sauce bar.</p>
                  </div>
                </div>

                <div className="item">
                    <div className='review'>
                    <p className='review-author'>Vibhu A</p>      
                    <p className='review-rating'>
                      <ReviewStars />
                      <span className='review-date'>4 days ago</span>  
                    </p>
                    <p className='review-content'>Loved this spot for it's amazing Sri Lankan fusion food. Food was awesome, service was great, the small location was cute. <br/>
        The bacon n cheese burger was delish! The  deviled tiger shrimp was also amazing (it's really spicy! Yum!) Loved their collection of hot sauces to spice up my meal. <br/>
        The service was friendly and informative. The location has seating for up to 6.</p>
                    </div>
                </div>

                <div className="item">
                  <div className='review'>
                    <p className='review-author'>Alan Lau</p>      
                    <p className='review-rating'>
                      <ReviewStars />
                      <span className='review-date'>2 weeks ago</span>  
                    </p>
                    <p className='review-content'>This restaurant is awesome food taste delicious. The owner is very friendly, this will be my place for dinner from now on!</p>
                  </div>
                </div>

                <div className="item">
                  <div className='review'>
                    <p className='review-author'>Chi-Hae Marcelo</p>      
                    <p className='review-rating'>
                      <ReviewStars />
                      <span className='review-date'>a month ago</span>  
                    </p>
                    <p className='review-content'>Kids loved the wings - said it was their favourite they’ve tried and they eat lots of wings!  We also tried the pepper sauce chicken and the burger with poutine - delicious!  The mutton rolls and the mac/cheese rolls were delicious too!!  Definitely going back to try more of their menu.</p>
                  </div>
                </div>
                
                <div className="item">
                  <div className='review'>
                    <p className='review-author'>Joey Chin</p>      
                    <p className='review-rating'>
                      <ReviewStars />
                      <span className='review-date'>a month ago</span>  
                    </p>
                    <p className='review-content'>I tried the pepper sauce chicken burger and it was delicious. Owner made accommodations for a less spicy variant, which was greatly appreciated. Also tried their mutton roll, which was very crispy. Definitely would recommend for the food and service.</p>
                  </div>
                </div>

                <div className="item">
                  <div className='review'>
                    <p className='review-author'>Mayuran M</p>      
                    <p className='review-rating'>
                      <ReviewStars />
                      <span className='review-date'>a month ago</span>  
                    </p>
                    <p className='review-content'>The rolls are crispy, the wings are delicious (Habanero is my favourite, Suicide is super hot!)... I've also tried the fusion wraps and the pepper sauce buttermilk chicken burger and they were both tasty. Great food all around... I've enjoyed everything that I've had there and the customer service is excellent. This is my new favourite joint. You won't regret it coming here.</p>
                  </div>
                </div>
            </OwlCarousel>

          </div>

          <p className='reviews-link'><a target='_blank' rel='noopener noreferrer' href='https://www.google.com/search?q=confused+kitchen&oq=confused+kitchen&aqs=chrome..69i57j69i60l3j0l2.2415j0j4&sourceid=chrome&ie=UTF-8#lrd=0x89d4d79815c044a1:0xaf21c2da62c15977,1,,,'>Read More</a></p> 
        </section>

        <section className='section-location' id='location'>

            <div className='location-container'>
              
              <div className='location-address'>
                <p className='title'> Location </p>
                <p><span className="glyphicon glyphicon-home"></span> 5005 Steeles Ave E Unit #107
                    <br/>
                  Scarborough ON, Canada
                    <br/>
                  M1V 5K1 <br/>(On the south-west corner of Brimley/Steeles)
                </p>
                <br/>
                  <p><span className="glyphicon glyphicon-envelope"></span> tj@confusedkitchen.ca</p>
                  <p><span className="glyphicon glyphicon-phone-alt"></span> 416-292-3313</p>
                  <p><span className="glyphicon glyphicon-phone"></span> 647-829-6043</p>
              </div>

              <div className='location-hours'>
                <p className='title'> Hours of Operation </p>
                <p>Monday: Closed</p>
                <p>Tuesday: 4:00pm-10pm</p>
                <p>Wednesday: 4:00pm-10pm</p>
                <p>Thursday: 4:00pm-10pm</p>
                <p>Friday: 4:00pm-11pm</p>
                <p>Saturday: 11:30am-11pm</p>
                <p>Sunday: Closed</p>
              </div>
            
            </div>

        </section>


      </div>
    );
  }
}

const ReviewStars = () => (
  <div className='review-star-container'>
    <span className='review-star glyphicon glyphicon-star'></span>
    <span className='review-star glyphicon glyphicon-star'></span>
    <span className='review-star glyphicon glyphicon-star'></span>
    <span className='review-star glyphicon glyphicon-star'></span>
    <span className='review-star glyphicon glyphicon-star'></span>
  </div>
);

export default App;

