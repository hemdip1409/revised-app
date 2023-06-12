import React from "react";
import './Home.css'

export default function Home()
{
    return(
        <>
              <div class="slide-container">
  <span id="slider1"></span>
  <span id="slider2"></span>
  <span id="slider3"></span>
  <span id="slider4"></span>
  <span id="slider5"></span>
  <div class="image-container">
    <img src="https://images.unsplash.com/flagged/photo-1556667885-a6e05b14f2eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" alt="" class="slider-image one"></img>
    <img src="https://images.unsplash.com/photo-1556815054-cd8e705a758e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="" class="slider-image two"></img>
    <img src="https://images.unsplash.com/photo-1556228721-e65f06ab45c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="" class="slider-image three"></img>
    <img src="https://images.unsplash.com/photo-1556228578-626e9590b81f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="" class="slider-image four"></img>
    <img src="https://images.unsplash.com/photo-1556228454-1690896f350c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="" class="slider-image five"></img>
  </div>
  <div class="button-container">
    <a href="#slider1" class="slider-button"></a>
    <a href="#slider2" class="slider-button"></a>
    <a href="#slider3" class="slider-button"></a>
    <a href="#slider4" class="slider-button"></a>
    <a href="#slider5" class="slider-button"></a>
  </div>
</div>
        </>
    )
}