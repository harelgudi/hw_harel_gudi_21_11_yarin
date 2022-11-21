import React from 'react'
import "./header.css"


const Header = () => {
  return (
    <div className='body d-flex flex-column justify-content-center col-lg-12 col-md-12 col-sm-12 '>
      <nav className='navA text-white d-flex justify-content-center align-items-center text-center col-lg-12 col-md-12 col-sm-12'>!משלוח חינם בקניה מעל 199 ש"ח</nav>
      {/* <nav className='navB d-flex justify-content-center col-lg-12 col-md-12 col-sm-12'>
        
      <ul className='ul'> 
        <li className='li btn '>קולקציית חורף</li>
        <li className='li btn '>חולצות לבנות</li>
        <li className='li btn '>מכנסיים</li>
        <li className='li btn'>חליפות</li>
        <li className='li btn'>אקססוריז</li>
        <li className='li btn'>SALE</li>
        <li className='li btn'>GIFT CARD</li>
      </ul>
</nav> */}
<nav class="navbar navbar-expand-lg">
  <div class="container-fluid ">
    <a class="navbar-brand" href="#" img="public/bagir-logo-02.png" ></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse " id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">קולקציית חורף</a>
           <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">חולצות מכופתרות שרוול ארוך</a></li>
            <li><a class="dropdown-item" href="#">חלק V סריג</a></li>
            <li><a class="dropdown-item" href="#">סריגים</a></li>
            <li><a class="dropdown-item" href="#">מעילים</a></li>
            <li><a class="dropdown-item" href="#">קרטיגן</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">חולצות לבנות</a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">חולצות לבנות 100% כותנה</a></li>
            <li><a class="dropdown-item" href="#">חולצות לבנות 60% כותנה</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">מכנסיים</a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">מכנסי כותנה</a></li>
            <li><a class="dropdown-item" href="#">מכנסי אלקטרה</a></li>
            <li><a class="dropdown-item" href="#">מכנסי ג'ינס</a></li>
            <li><a class="dropdown-item" href="#">מכנסיים</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            חליפות
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">SLIM</a></li>
            <li><a class="dropdown-item" href="#">CLASSIC</a></li>
            <li><a class="dropdown-item" href="#">בלייזרים</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">אקססוריז</a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">גרביים</a></li>
            <li><a class="dropdown-item" href="#">הלבשה תחתונה</a></li>
            <li><a class="dropdown-item" href="#">חגורות</a></li>
            <li><a class="dropdown-item" href="#">נעליים</a></li>
            <li><a class="dropdown-item" href="#">עניבות</a></li>
            <li><a class="dropdown-item" href="#">פפיונים</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">SALE</a>
        <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">חולצה מכופתרת שרוול ארוך</a></li>
            <li><a class="dropdown-item" href="#">חולצה מכופתרת שרוול קצר</a></li>
            <li><a class="dropdown-item" href="#">מעילים</a></li>
            <li><a class="dropdown-item" href="#">סריגים</a></li>
            <li><a class="dropdown-item" href="#">ברמודה</a></li>
            <li><a class="dropdown-item" href="#">טי שירט לגברים</a></li>
            <li><a class="dropdown-item" href="#">בלייזר</a></li>
          </ul>
        </li>
        
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            GIFT CARD

          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">SLIM</a></li>
            <li><a class="dropdown-item" href="#">CLASSIC</a></li>
            <li><a class="dropdown-item" href="#">בלייזרים</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
    <div className='header d-flex justify-content-center align-items-center text-center col-lg-12 col-md-12 col-sm-12'></div>
    <div className='strong d-flex justify-content-center align-items-center text-center col-lg-12 col-md-12 col-sm-12'></div>
    </div>

  )
}

export default Header
