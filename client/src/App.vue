<template>
  <div>
      <notifications group="foo" />
      <nav class="navbar navbar-default navbar-fixed-top" role="navigation" id="mainNav">
        <div class="container">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse"
                    data-target="#bs-example-navbar-collapse-1">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand page-scroll" href="#home">
                    <img alt="Brand" src="./assets/img/logo.png">
                </a>
            </div>
            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav navbar-right">
                    <li><a class="page-scroll" href="#signup">Regístrate</a></li>
                    <li><a class="page-scroll" href="#speakers">Speakers</a></li>
                    <li><a class="page-scroll" href="#diary">Agenda</a></li>
                    <li><a class="page-scroll" href="#headquarters">Sede</a></li>
                    <li><a class="page-scroll" href="#benefits">Beneficios</a></li>
                </ul>
            </div>
        </div>
    </nav>
    

      <!-- Header
      ================================================== -->
      <header class="col-xs-12" id="home">
        <div class="header-content">
            <img src="./assets/img/logo-mkt-trail.png" alt="Marketing Trail" data-aos="fade-up" data-aos-duration="600" />
        </div>
        <div class="months hidden-xs">
            <img src="./assets/img/months.png" alt="Abril, Junio, Agosto, Octubre" data-aos="fade-up" data-aos-duration="900"
                data-aos-delay="100" />
        </div>
    </header>

      <HelloWorld/>
    </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style>
@import './assets/css/bootstrap.min.css';
@import './assets/css/framework.css';
@import './assets/css/layout.css';
@import './assets/fonts/proxima/stylesheet.css';
/* @import './assets/css/aos.css'; */

/* @import './assets/js/vendor/bootstrap.min.js';
@import './assets/js/main.js';
@import './assets/js/vendor/aos.js';
@import './assets/js/vendor/jquery.easing.min.js';
@import './assets/js/vendor/landing-page.js'; */

</style> 
