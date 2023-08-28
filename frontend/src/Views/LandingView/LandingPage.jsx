import React, { useEffect } from 'react';
import $ from 'jquery'; 
import '../../Styles/LandingPage.css'; 
import'../../StylesKit/DoubleScreenScroll.scss';
import Intro from './Intro'; 
import Signup from '../../Components/SignupForm'
import Login from '../../Components/LoginForm';

const LandingPage = () => {
  useEffect(() => {
    var curPage = 1;
    var numOfPages = $(".skw-page").length;
    var animTime = 1000;
    var scrolling = false;
    var pgPrefix = ".skw-page-";

    function pagination() {
      scrolling = true;

      $(pgPrefix + curPage).removeClass("inactive").addClass("active");
      $(pgPrefix + (curPage - 1)).addClass("inactive");
      $(pgPrefix + (curPage + 1)).removeClass("active");

      setTimeout(function() {
        scrolling = false;
      }, animTime);
    }

    function navigateUp() {
      if (curPage === 1) return;
      curPage--;
      pagination();
    }

    function navigateDown() {
      if (curPage === numOfPages) return;
      curPage++;
      pagination();
    }

    $(document).on("mousewheel DOMMouseScroll", function(e) {
      if (scrolling) return;
      if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
        navigateUp();
      } else { 
        navigateDown();
      }
    });

    $(document).on("keydown", function(e) {
      if (scrolling) return;
      if (e.which === 38) {
        navigateUp();
      } else if (e.which === 40) {
        navigateDown();
      }
    });
  }, []);

  return (

<div class="skw-pages">
<div class="skw-page skw-page-1 active">
  <div class="skw-page__half skw-page__half--left">
    <div class="skw-page__skewed">
      <div class="skw-page__content">
        <Intro />
      </div>
    </div>
  </div>
  <div class="skw-page__half skw-page__half--right">
    <div class="skw-page__skewed">
      <div class="skw-page__content">
        <h2 class="skw-page__heading">intro view image or text</h2>
        <p class="skw-page__description">Just scroll down</p>
      </div>
    </div>
  </div>
</div>
<div class="skw-page skw-page-2">
  <div class="skw-page__half skw-page__half--left">
    <div class="skw-page__skewed">
      <div class="skw-page__content">
        {/* Content for Signup Component */}
        <Signup />
      </div>
    </div>
  </div>
  <div class="skw-page__half skw-page__half--right">
    <div class="skw-page__skewed">
      <div class="skw-page__content">
        <h2 class="skw-page__heading">still haven't signed up? What are you waiting for</h2>
        <p class="skw-page__description">Are you already a user? Scroll down for login!</p>
      </div>
    </div>
  </div>
</div>
<div class="skw-page skw-page-3">
  <div class="skw-page__half skw-page__half--left">
    <div class="skw-page__skewed">
      <div class="skw-page__content">
        
        {/* Content for Login Component */}
        <Login />
      </div>
    </div>
  </div>
  <div class="skw-page__half skw-page__half--right">
    <div class="skw-page__skewed">
      <div class="skw-page__content">
      <h2 class="skw-page__heading">login now!</h2>
        <p class="skw-page__description">Come and buy some stuff</p>
        {/* Content for Right Side */}
      </div>
    </div>
  </div>
</div>
  <div class="skw-page skw-page-4">
    <div class="skw-page__half skw-page__half--left">
      <div class="skw-page__skewed">
        <div class="skw-page__content">
          <h2 class="skw-page__heading">visit us on our social media!</h2>
        </div>
      </div>
    </div>
    <div class="skw-page__half skw-page__half--right">
      <div class="skw-page__skewed">
        <div class="skw-page__content">
          <h2 class="skw-page__heading">links to insta, git, linkedin...</h2>
        </div>
      </div>
    </div>
  </div>
  <div class="skw-page skw-page-5">
    <div class="skw-page__half skw-page__half--left">
      <div class="skw-page__skewed">
        <div class="skw-page__content">
          <h2 class="skw-page__heading">rotating DALL-E generating images</h2>
        </div>
      </div>
    </div>
    <div class="skw-page__half skw-page__half--right">
      <div class="skw-page__skewed">
        <div class="skw-page__content">
          <h2 class="skw-page__heading">rotating DALL-E generating images</h2>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default LandingPage;





