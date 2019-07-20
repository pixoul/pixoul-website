import React from "react"
import "./SideMenu.scss"

function MenuItems(){
  return(
    <ul class="sidebar-menu">
      <li>
        <a href="#">Home</a>
      </li>
      <li>
        <a href="#">About</a>
      </li>
      <li>
        <a href="#">Services</a>
      </li>
      <li>
        <a href="#">Contact</a>
      </li>
    </ul>
  )
}

export default function SideMenu(){
  return(
    <div class="sidebar sidebar--dark">
      <div class="close">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewbox="0 0 24 24">
          <path fill="#ffffff" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
          <path d="M0 0h24v24H0z" fill="none"></path>
        </svg>
      </div>
      <a class="sidebar-brand" href="#">
        <img class="sidebar-brand__image" src="/images/general/logo-circle-filled-white.svg" alt="Shards Pro - Overlayed Cover 1 - The Desert" />
      </a>
      <ul class="sidebar-menu">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
      <ul class="sidebar-submenu">
        <li>
          <a href="#">Terms & Conditions</a>
        </li>
        <li>
          <a href="#">Privacy Policy</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
      <ul class="sidebar-social">
        <li>
          <a href="#" class="text-black">
            <i class="fab fa-facebook"></i>
          </a>
        </li>
        <li>
          <a href="#" class="text-black">
            <i class="fab fa-twitter"></i>
          </a>
        </li>
        <li>
          <a href="#" class="text-black">
            <i class="fab fa-linkedin"></i>
          </a>
        </li>
        <li>
          <a href="#" class="text-black">
            <i class="fab fa-dribbble"></i>
          </a>
        </li>
      </ul>
    </div>
  )
}
