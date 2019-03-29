<template>
  <div>

    <!-- Regìstrate
    ================================================== -->
    <div class="col-xs-12 bg-primary py-5" id="signup">
      <img src="../assets/img/curva.png" alt="curva" aria-hidden="true" class="curva" />
      <div class="container">
        <div id="relativeblock">
          <div class="row">
            <!-- Column -->
            <div class="col-xs-12 col-md-6 text-left">
              <div class="col-xs-12 col-md-12">
                <p class="lema ">EPISODIO 01: 11 abril 2019</p>
                <h1>Become a <br> Webinar Pro</h1>
                <p class="txt1 my-4">Bienvenido al primer episodio de nuestro <b>Marketing Trail</b>, un evento presencial donde conocerás el poder del webinar como tecnología interactiva para reforzar tu estrategia de ventas a través de contenido de valor y que te dará un reconocimiento de marca dentro de tu audiencia meta.</p>
              </div>
              <div class="col-xs-12 col-md-9 text-justify">
                <p>El mundo del marketing es inmenso, por esta razón Estratégica ha creado <b>Marketing Trail,</b> Una serie que te guiará en el camino de las mejores prácticas en la industria del marketing para llevar a tu empresa al éxito con la mejor estrategia de generación de demanda.</p>
                <p>Interactúa con nuestros speakers y expertos operativos y vive la experiencia de generación de una campaña de webinar con On24. Visualiza como potencializar la comunicación de tu empresa y alcanzar el objetivo de ventas de tus servicios o productos. </p>
              </div>
            </div>

            <!-- Column -->
            <div class="col-xs-12 col-md-5 col-md-offset-1">
              <div class="form-wrapper text-left">
                <h3 class="capitalize">Regístrate</h3>
                <p>Regístrate, adquiere tu insignia de <b>Webinar Pro</b> y participa en la rifa para usar
                    nuestra cabina de webinars.</p>
                <form name="sentMessage" id="contactForm" role="form" novalidate>
                  <div class="row">
                    <div class="control-group form-group col-lg-12">
                      <div class="controls">
                        <label>Nombre completo</label>
                        <input type="text" v-model="name" class="form-control" id="name" required
                            data-validation-required-message="Please enter your name.">
                      </div>
                    </div>
                    <div class="control-group form-group col-lg-12">
                      <div class="controls">
                        <label>Correo electrónico</label>
                        <input type="email" v-model="email" class="form-control" id="email" required
                            data-validation-required-message="Please enter your email address.">
                      </div>
                    </div>
                    <div class="control-group form-group col-lg-12">
                      <div class="controls">
                        <label>Teléfono</label>
                        <input type="tel" v-model="phone" class="form-control" id="phone" required
                            data-validation-required-message="Please enter your phone number.">
                      </div>
                    </div>
                    <div class="control-group form-group col-lg-12">
                      <div class="controls">
                        <label>Empresa</label>
                        <input type="text" v-model="company" class="form-control" id="corp" required
                            data-validation-required-message="Please enter your corp.">
                      </div>
                    </div>

                    <div class="control-group form-group col-lg-12">
                      <label for="travel">¿Qué lugar te gustaría conocer en el 2020?</label>
                      <select v-model="selected" class="form-control" id="travel">
                        <option>El Taj Mahal</option>
                        <option>Torre Eiffel</option>
                        <option>Bora Bora</option>
                        <option>Maui (Hawai)</option>
                        <option>Stonehenge</option>
                      </select>
                    </div>

                    <div class="control-group form-group col-lg-12">
                      <label for="travel">¿Cómo planeas llegar al evento?</label>
                      <select v-model="selected2" class="form-control" id="travel">
                        <option>Auto propio </option>
                        <option>En Uber, cortesía de Estratégica</option>
                      </select>
                    </div>

                    <div class="col-xs-12 noPadding check text-right">
                      <input v-model="terms" type="checkbox" id="box-1">
                      <label for="box-1">Acepto la política de privacidad</label>
                    </div>

                    <div class="control-group form-group col-lg-12 text-right">
                      <div class="controls">
                        <button @click="nuevoRegistro()" class="btn btn-primary btn-lg">Enviar</button>
                      </div>
                    </div>

                    <p v-if="errors.length">
                      <b>Corrige el siguiente error(es):</b>
                      <ul>
                        <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
                      </ul>
                    </p>

                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Speakers
    ================================================== -->
    <div class="banner bkgnd attach" v-bind:style="{'background-image':'url('+ require('../assets/img/bg-speakers.png')+')'}">
      <div class="py-4"></div>

        <!-- title -->
        <div class="row py-5">
          <div class="col-lg-12 text-inverted text-center">
            <h1 class="noSpanWhite">Speakers</h1>
            <!-- <p>Nuestros expertos en marketing digital están listos para compartir contigo todo lo que necesitas saber para cumplir con tus objetivos empresariales. </p> -->
          </div>
        </div>

        <!-- Sandra Armendariz -->
        <div class="row py-5">
            <div class="col-md-3 col-md-offset-3 text-center">
                <img src="../assets/img/speaker-one.png">
            </div>
            <div class="col-md-6">
                <div class="block block-right">
                    <h3>Sandra Armendariz</h3>
                    <p>HP PARTNER BUSINESS MANAGER</p>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt
                        ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
                        tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum
                        iriure dolor </p>
                </div>
            </div>
        </div>
        <!-- Arturo Lopéz Gallo -->
        <div class="row py-5">
            <div class="col-md-6">
                <div class="block block-left">
                    <h3>Arturo Lopéz Gallo</h3>
                    <p>HP PARTNER BUSINESS MANAGER</p>
                    <p>Cuenta con más de 18 años experiencia en marketing B2B y B2C, lo cual lo ha llevado a ser
                        fundador y director de Estratégica Smarter Marketing.</p>
                    <p>Su experiencia en JUCONI, Compaq, Purina y Procter & Gamble le han dado amplios conocimientos en
                        las etapas y herramientas del marketing funnel. Así como en ventas, uso de redes sociales,
                        manejo de data, mejores prácticas de la industria, marketing cloud, estrategias de generación de
                        demanda, entre otras áreas.</p>
                    <p>Es emprendedor, visionario tecnológico, estratega y profesor del ITAM.</p>
                </div>
            </div>
            <div class="col-md-3 text-center">
                <img src="../assets/img/speaker-two.png">
            </div>
        </div>
        <!-- FPaulina Albores -->
        <div class="row py-5">
            <div class="col-md-3 col-md-offset-3 text-center">
                <img src="../assets/img/speaker-one.png">
            </div>
            <div class="col-md-6">
                <div class="block block-right">
                    <h3>Paulina Albores</h3>
                    <p>HP PARTNER BUSINESS MANAGER</p>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt
                        ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
                        tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum
                        iriure dolor </p>
                </div>
            </div>
        </div>
    </div>


    <!-- Regístrate
    ================================================== -->
    <div class="bg-primary py-5" id="headquarters">
        <section class="container">
            <div class="row">
                <!-- Column -->
                <div class="col-md-6 col-md-offset-3 text-center">
                    <h1 class="noSpanWhite">Sede</h1>
                    <p>La cita es este jueves 11 de abril, a las 8:00 hrs, en <b>Estratégica Smarter Marketing</b>,
                        ubicada en Benjamín Franklin 161, Hipódromo Condesa, Cuauhtémoc, Ciudad de México, C.P. 06170.
                    </p>
                </div>
            </div>
        </section>
    </div>

    <!-- Map
    ================================================== -->
    <!-- <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3763.177411660615!2d-99.1771785!3d19.4047391!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff69a8f147f5%3A0xc29788b2f4088ad1!2sEstrat%C3%A9gica!5e0!3m2!1ses-419!2smx!4v1553192745160"
        width="100%" height="350" frameborder="0" style="border:0" allowfullscreen></iframe> -->

    <!-- On24
    ================================================== -->
    <div class="bg-secondary py-5" id="headquarters">
        <section class="container">
            <div class="row">
                <!-- Column -->
                <div class="col-md-8 col-md-offset-2 text-center">

                    <div class="col-lg-12 text-center">
                        <h1 class="no-span">On24</h1>
                    </div>
                    <p>Es una plataforma de contenido multimedia y registro de datos, los cuales te permitirán tomar
                        decisiones importantes para atraer, cautivar y hacer crecer tu audiencia.</p>
                    <p>Crea experiencias de contenido atractivas y personalizadas para tu audiencia -Califica a tus
                        clientes potenciales de forma más rápida - Aumenta tus ventas </p>
                </div>
            </div>
        </section>
    </div>

    <!-- Copyright
    ================================================== -->
    <div class="bg-primary py-5">
        <section class="container">
            <div class="row">
                <div class="col-md-6 col-md-offset-3 text-center py-6" id="benefits">
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt
                        ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
                        tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum
                        iriure dolor
                    </p>
                    <button class="btn btn-primary btn-sm">Regístrate</button>
                </div>
                <!-- Column one -->
                <div class="col-md-8 text-center">
                    <p class="fl_left">Benjamín Franklin 161, Hipódromo Condesa, Cuauhtémoc, Ciudad de México, C.P.
                        06170. Tel: 55 4170 0911.<br> Lee nuestro <a href="#">aviso de privacidad.</a>
                    </p>
                </div>
                <!-- Column two -->
                <div class="col-md-4 text-left">
                    <img class="fl_right img-responsive" src="../assets/img/logo.png">
                </div>
            </div>
        </section>
    </div>

  </div>
</template>

<script>
import RegistroService from '../registroService';

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },

  data() {
    return {
      errors: [],
      name: null,
      email: null,
      phone: null,
      company: null,
      selected: '',
      selected2: '',
      terms: false
    };
  },

  methods: {
    validarForm(){
      this.errors = [];

      if (!this.name) {
        this.errors.push("Nombre requerido.");
      }
      if (!this.email) {
        this.errors.push('Correo electronico requerido');
      } else if (!this.validarEmail(this.email)) {
        this.errors.push('Correo electronico no valido.');
      }
      if (!this.phone) {
        this.errors.push("Telefono requerido.");
      }
      if (!this.company) {
        this.errors.push("Empresa requerido.");
      }

      if(this.terms == false){
        this.errors.push("Aceptar terminos y condiciones");
      }
      if (!this.errors.length) {
        return true;
      }

      return false;
    },

    validarEmail(email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },

    async nuevoRegistro(){
      // eslint-disable-next-line no-console
      // console.log(this.email);

      if(this.validarForm()){
        await RegistroService.crearRegistro(this.name, this.email, this.phone, this.company, this.selected, this.selected2);
        this.name = null;
        this.email = null;
        this.phone = null;
        this.company = null;
        this.selected = '';
        this.selected2 = '';
      }
    }
  }
}
</script>

