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
                <p class="lema ">EPISODIO 01: 11 abril 2019 / 08:30am</p>
                <h1>Become a <br> Webinar Pro</h1>

                <a class="btn btn-primary btn-lg visible-xs page-scroll" href="#signup">Regístrate</a>

                <p class="txt1 my-4">Bienvenido al primer episodio de nuestro <b>Marketing Trail</b>, un
                    evento presencial donde conocerás el poder del webinar como tecnología interactiva para
                    reforzar tu estrategia de ventas a través de contenido de valor y que te dará un
                    reconocimiento de marca dentro de tu audiencia meta.</p>
              </div>
              <div class="col-xs-12 col-md-9 text-justify mb-5">
                <p>El mundo del marketing es inmenso, por esta razón Estratégica ha creado <b>Marketing
                        Trail,</b> Una serie que te guiará en el camino de las mejores prácticas en la
                    industria del marketing para llevar a tu empresa al éxito con la mejor estrategia de
                    generación de demanda.</p>
                <p>Interactúa con nuestros speakers y expertos operativos y vive la experiencia de
                    generación de una campaña de webinar con On24. Visualiza como potencializar la
                    comunicación de tu empresa y alcanzar el objetivo de ventas de tus servicios o
                    productos. </p>
              </div>
            </div>

            <!-- Column -->
            <div class="col-xs-12 col-md-5 col-md-offset-1" id="signup">
              <div class="form-wrapper text-left">
                <h3 class="capitalize">Regístrate</h3>
                <p>Regístrate, adquiere tu insignia de <b>Webinar Pro</b> y participa en la rifa para usar
                    nuestra cabina de webinars.</p>
                <div name="sentMessage" id="contactForm" role="form" novalidate>
                  <div class="row">
                    <div class="col-xs-12 control-group form-group col-lg-12">
                      <div class="controls">
                        <label>Nombre completo</label>
                        <input type="text" v-model="name" class="form-control" id="name" required
                            data-validation-required-message="Please enter your name.">
                      </div>
                    </div>
                    <div class="col-xs-12 control-group form-group col-lg-12">
                      <div class="controls">
                        <label>Correo electrónico</label>
                        <input type="email" v-model="email" class="form-control" id="email" required
                            data-validation-required-message="Please enter your email address.">
                      </div>
                    </div>
                    <div class="col-xs-12 control-group form-group col-lg-12">
                      <div class="controls">
                        <label>Teléfono</label>
                        <input type="tel" v-model="phone" class="form-control" id="phone" required
                            data-validation-required-message="Please enter your phone number.">
                      </div>
                    </div>
                    <div class="col-xs-12 control-group form-group col-lg-12">
                      <div class="controls">
                        <label>Empresa</label>
                        <input type="text" v-model="company" class="form-control" id="corp" required
                            data-validation-required-message="Please enter your corp.">
                      </div>
                    </div>

                    <div class="col-xs-12 control-group form-group col-lg-12">
                      <label for="travel">¿Qué lugar te gustaría conocer en el 2020?</label>
                      <select v-model="selected" class="form-control" id="travel">
                        <option>El Taj Mahal</option>
                        <option>Torre Eiffel</option>
                        <option>Bora Bora</option>
                        <option>Maui (Hawai)</option>
                        <option>Stonehenge</option>
                      </select>
                    </div>

                    <div class="col-xs-12 control-group form-group col-lg-12">
                      <label for="travel">¿Cómo planeas llegar al evento?</label>
                      <select v-model="selected2" class="form-control" id="travel">
                        <option>Auto propio </option>
                        <option>En Uber, cortesía de Estratégica</option>
                      </select>
                    </div>

                    <div class="col-xs-12 noPadding check text-left">
                      <input v-model="terms" type="checkbox" id="box-1" :checked="terms">
                      <label for="box-1">Acepto la política de privacidad</label>
                    </div>

                    <div class="col-xs-12 control-group form-group col-lg-12 text-right">
                      <div class="controls">
                        <button @click="nuevoRegistro()" class="btn btn-primary btn-lg btn-block">Enviar</button>
                      </div>
                    </div>

                    <p class="text-center font-xs">Lee nuestras <a data-toggle="modal"
                                            data-target="#ventana1">políticas de privacidad</a></p>

                    <p v-if="errors.length">
                      <b>Corrige el siguiente error(es):</b>
                      <ul>
                        <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
                      </ul>
                    </p>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Speakers
    ================================================== -->
    <div class="col-xs-12 noPadding banner bkgnd attach fondoPiedra" id="speakers">

        <!-- pleca -->
        <div class="pleca mb-5">
            <img src="../assets/img/pleca.png">
        </div>

        <!-- title -->
        <div class="row py-7">
            <div class="col-lg-12 text-inverted text-center">
                <h1 class="noSpanWhite">Speakers</h1>
            </div>
        </div>

        <!-- Sandra Armendariz -->
        <div class="row py-5">
            <div class="col-xs-12 col-xs-offset-0 col-sm-5 col-sm-offset-1 text-center">
                <img src="../assets/img/speaker-one.png" class="mb-5" data-aos="fade-up" alt="Sandra Armendariz">
            </div>
            <div class="col-xs-offset-1 col-xs-11 col-sm-6 col-sm-offset-0 ">
                <div class="block block-right">
                    <h3 class="mb-0">Sandra Armendariz</h3>
                    <h5 class="mt-0">HP PARTNER BUSINESS MANAGER</h5>
                    <p>Proximamente</p>
                </div>
            </div>
        </div>

        <!-- Arturo Lopéz Gallo -->
        <div class="row py-5 speakers">
            <div class="col-xs-12 col-xs-offset-0 text-center visible-xs">
                <img src="../assets/img/speaker-two.png" class="mb-5" data-aos="fade-up" alt="Arturo López Gallo" />
            </div>
            <div class="col-xs-11 col-sm-6">
                <div class="block block-left">
                    <h3 class="mb-0">Arturo Lopéz Gallo</h3>
                    <h5 class="mt-0">CEO ESTRATÉGICA SMARTER MARKETING</h5>
                    <p>Cuenta con más de 18 años experiencia en marketing B2B y B2C, lo cual lo ha llevado a ser
                        fundador y director de Estratégica Smarter Marketing.</p>
                    <p>Su experiencia en JUCONI, Compaq, Purina y Procter & Gamble le han dado amplios conocimientos en
                        las etapas y herramientas del marketing funnel. Así como en ventas, uso de redes sociales,
                        manejo de data, mejores prácticas de la industria, marketing cloud, estrategias de generación de
                        demanda, entre otras áreas.</p>
                    <p>Es emprendedor, visionario tecnológico, estratega y profesor del ITAM.</p>
                </div>
            </div>
            <div class="col-sm-5 col-sm-offset-0 text-center visible-sm visible-md visible-lg">
                <img src="../assets/img/speaker-two.png" data-aos="fade-up" alt="Arturo López Gallo" />
            </div>
        </div>

        <!-- FPaulina Albores -->
        <div class="row py-5">
            <div class="col-xs-12 col-xs-offset-0 col-sm-5 col-sm-offset-1 text-center">
                <img src="../assets/img/speaker-three.png" class="mb-5" data-aos="fade-up" alt="Paulina Albores">
            </div>
            <div class="col-xs-offset-1 col-xs-11 col-sm-6 col-sm-offset-0">
                <div class="block block-right">
                    <h3 class="mb-0">Paulina Albores</h3>
                    <h5 class="mt-0">HP PARTNER BUSINESS MANAGER</h5>
                    <p>Próximamente</p>
                </div>
            </div>
        </div>
    </div>


    <!-- Agenda
    ================================================== -->
    <section class="col-xs-12 diary" id="diary">
        <div class="container">

            <div class="bg-tertiary py-5">
                <div class="col-lg-12 text-center mb-6">
                    <h1 class="no-span">Agenda</h1>
                </div>
            </div>

            <div class="row bg-tertiary">
                <div class="col-xs-3 col-xs-offset-0 col-sm-2 col-sm-offset-1 col-md-1 col-md-offset-2 text-right">
                    <p><b>9:00 h</b></p>
                </div>
                <div class="col-xs-8 col-sm-8 col-md-8">
                    <p> Registro</p>
                </div>
            </div>

            <div class="row bg-tertiary">
                <div class="col-xs-3 col-xs-offset-0 col-sm-2 col-sm-offset-1 col-md-1 col-md-offset-2 text-right">
                    <p><b>9:20 h</b></p>
                </div>
                <div class="col-xs-8 col-sm-7 col-md-8">
                    <p>Desayuno con bienvenida de ALG</p>
                </div>
            </div>

            <div class="row bg-tertiary">
                <div class="col-xs-3 col-xs-offset-0 col-sm-2 col-sm-offset-1 col-md-1 col-md-offset-2 text-right">
                    <p><b>10:00 h</b></p>
                </div>
                <div class="col-xs-8 col-sm-7 col-md-8">
                    <p>Plática de speakers<br>
                        - <b>Arturo López Gallo:</b> Webinars: Smart lead generation<br>
                        - <b>Sandra Armendariz.</b><br>
                        - <b>Paulina Albores:</b> Como planear y ejecutar webinars efectivos que impacten en ventas<br>
                    </p>
                </div>
            </div>

            <div class="row bg-tertiary">
                <div class="col-xs-3 col-xs-offset-0 col-sm-2 col-sm-offset-1 col-md-1 col-md-offset-2 text-right">
                    <p><b>10:30 h</b></p>
                </div>
                <div class="col-xs-8 col-sm-7 col-md-8">
                    <p>Experiencia práctica</p>
                </div>
            </div>

            <div class="row bg-tertiary">
                <div class="col-xs-3 col-xs-offset-0 col-sm-2 col-sm-offset-1 col-md-1 col-md-offset-2 text-right">
                    <p><b>11:00 h</b></p>
                </div>
                <div class="col-xs-8 col-sm-7 col-md-8">
                    <p>Rifa de cabina de webinar <br> Encuesta de satisfacción</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Regístrate
    ================================================== -->
    <div class="col-xs-12 bg-primary py-5" id="headquarters">
        <section class="container">
            <div class="row">

                <div class="col-xs-12">
                    <div class="col-lg-12 text-center mb-5">
                        <h1 class="noSpanWhite">Sede</h1>
                    </div>
                </div>

                <div class="col-md-6 col-md-offset-3 text-center">
                    <p>La cita es este jueves 11 de abril, a las 8:30 hrs, en <b>Estratégica Smarter Marketing</b>,
                        ubicada en Benjamín Franklin 161, Hipódromo Condesa, Cuauhtémoc, Ciudad de México, C.P. 06170.
                    </p>
                </div>

            </div>
        </section>
    </div>

    <!-- On24
    ================================================== -->
    <div class="col-xs-12 noPadding bg-secondary nospace">

        <!-- Map -->
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3763.177411660615!2d-99.1771785!3d19.4047391!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff69a8f147f5%3A0xc29788b2f4088ad1!2sEstrat%C3%A9gica!5e0!3m2!1ses-419!2smx!4v1553192745160"
            width="100%" height="350" frameborder="0" style="border:0" allowfullscreen></iframe>

        <section class="container">
            <div class="row">

                <div class="py-5" id="benefits">
                    <div class="col-lg-12 text-center mb-5">
                        <h1 class="no-span">Beneficios</h1>
                    </div>
                </div>

                <!-- Column -->
                <div class="col-md-8 col-md-offset-2 text-center">
                    <img src="../assets/img/logo-estrategica-on24.png" class="mb-5" alt="Estratégica con On 24" />
                    <p class="mb-5">Es una plataforma de contenido multimedia y registro de datos, los cuales te
                        permitirán tomar <br> decisiones importantes para atraer, cautivar y hacer crecer tu audiencia.
                    </p>

                    <p>Crea experiencias de contenido atractivas <br> y personalizadas para tu audiencia </p>
                    <hr>
                    <p>Califica a tus clientes potenciales <br> de forma más rápida</p>
                    <hr>
                    <p>Aumenta tus ventas</p>
                </div>

            </div>
        </section>
    </div>

    <!-- Agenda
    ================================================== -->
    <section class="col-xs-12 twenty-four">
        <div class="container">

            <!-- Marketing Icons Section -->
            <div class="row">
                <div class="col-lg-12 text-center">
                    <h3 class="text-center mb-5 heading">
                        Estos son algunos de los componentes <br> de una buena estrategia de webinar:
                    </h3>
                </div>

                <div class="col-md-4 text-center">
                    <div class="wrapperbox">
                        <div class="infobox">
                            <i class="fa fa-microphone"></i>
                            <p>Obtén material de comunicación en cada Webinar, antes, como convocatoria y después, como
                                agradecimiento a tu audiencia.</p>
                        </div>
                    </div>
                    <h4>Administración</h4>
                    <p>Dirigimos tus mensajes en el momento adecuado y al público que te interesa atraer.</p>
                </div>

                <div class="col-md-4 text-center">
                    <div class="wrapperbox">
                        <div class="infobox">
                            <i class="fa fa-users"></i>
                            <p>Tocamos todos los contactos de tu base de datos, si no la tienes, crea una a través del
                                nuestro servicio de Contact Center para llegar a clientes potenciales.</p>
                        </div>
                    </div>
                    <h4>Implementación</h4>
                    <p>Ponemos en funcionamiento esta plataforma para que cumpla con tus objetivos empresariales y de comunicación.</p>
                </div>

                <div class="col-md-4 text-center">
                    <div class="wrapperbox">
                        <div class="infobox">
                            <i class="fa fa-pencil"></i>
                            <p>Obtén assets, diseño de branding y lleva la creación y dirección de tu campaña digital de
                                la mano de nuestros expertos.</p>
                        </div>
                    </div>
                    <h4>Capacitación</h4>
                    <p>Si necesitas saber más de esta herramienta, nosotros te enseñamos. </p>
                </div>

            </div>

        </div>
    </section>

    <!-- Copyright
    ================================================== -->
    <div class="col-xs-12 bg-primary py-5">
        <section class="container">
            <div class="row">
                <div class="col-md-6 col-md-offset-3 text-center py-6">
                    <h2>¿Estás listo para convertirte en un Webinar Pro?</h2>
                    <p class="mb-5">

                        Completa el registro y descubre el potencial del webinar para tus estrategias de generación de
                        demanda.
                    </p>
                    <a class="btn btn-inverse btn-lg page-scroll" href="#signup">Regístrate</a>
                </div>
                <!-- Column one -->
                <div class="col-md-9 text-center"><br>
                    <p>Benjamín Franklin 161, Hipódromo Condesa, Cuauhtémoc, Ciudad de México, C.P.
                        06170. Tel: 55 4170 0911.<br> Lee nuestro <a data-toggle="modal" data-target="#ventana1">aviso
                            de privacidad.</a>
                    </p>
                </div>
                <!-- Column two 
                <div class="col-md-3 text-center">
                    <img src="img/logo.png" class="img-responsive">
                </div>-->


                <div class="col-md-3 text-center">
                    <img src="../assets/img/logo.png" class="mb-5" alt="Estratégica" />
                </div>

            </div>
        </section>
    </div>

    <!-- Inicio de ventana #1-->
    <div class="modal fade" id="ventana1">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button tyle="button" class="close" data-dismiss="modal"
                        aria-hidden="true">&times;</button>
                    <h4 class="modal-title">Política de privacidad</h4>
                </div>

                <div class="modal-body">
                    <p>De conformidad con lo dispuesto por los 15, 16 Y 17 de la Ley
                        Federal de Protección de Datos Personales en Posesión de los
                        Particulares <b>(LFPDPPP)</b>, en lo sucesivo “LA LEY”, se emite
                        y da a conocer el presente Aviso de Privacidad conforme a lo
                        siguiente:</p>

                    <p><b>RESPONSABLE DE LOS DATOS</b></p>

                    <p>La empresa <b style="color: #00b5e6">Estratégica Smarter
                            Marketing S.A.P.I. de C.V.</b>, en los sucesivo <b
                            style="color: #00b5e6">Estratégica</b> con domicilio en
                        Benjamín Franklin 161 piso 1, Delegación Cuauhtémoc, Colonia
                        Condesa, C.P. 06140 en la Ciudad de México, es responsable del
                        tratamiento sus datos personales y Derechos de privacidad de los
                        mismos.</p>

                    <p><b>MEDIOS DE OBTENCIÓN DE DATOS PERSONALES</b></p>

                    <p>Los datos personales que Estratégica recabe de usted, serán
                        destinados únicamente para los fines descritos en el presente
                        aviso de privacidad y podrán ser recabados;
                    </p>
                    <ul style="margin-left:50px;">
                        <li>De manera directa, ingresando sus datos a través de la
                            página <b style="color: #00b5e6">www.estrategica.com</b>
                        </li>
                        <li>De manera personal, a través de nuestros representantes.
                        </li>
                    </ul>
                    <p></p>
                    <p><b>MEDIOS DE OBTENCIÓN DE DATOS PERSONALES</b></p>
                    <p>
                    </p>
                    <ul style="margin-left:50px;">
                        <li>Nombre</li>
                        <li>Teléfono fijo y/o celular</li>
                        <li>Correo Electrónico</li>
                    </ul>
                    <p></p>

                    <p>Sus datos personales serán tratados con base a en los principios
                        de licitud, consentimiento, información, calidad, finalidad,
                        lealtad, proporcionalidad y responsabilidad en términos de la
                        Legislación.</p>

                    <p><b>CATEGORIA DE LA INFORMACIÓN</b></p>

                    <p>Dicha información es considerada y será tratada, como información
                        estándar, por ser información de contacto.</p>

                    <p><b>FINALIDADES A QUE SE SUJETARA EL TRATAMIENTO DE DATOS
                            PERSONALES</b></p>

                    <p>Su información personal será utilizada para las siguientes
                        finalidades:
                    </p>
                    <ul style="margin-left:50px;">
                        <li>Envío de mensajes y realización de llamadas con el fin de
                            contactarlo.</li>
                        <li>Promover los servicios y productos referidos en la página de
                            internet http://www.estrategica.com/ a través de la cual se
                            recabaron sus datos personales.</li>
                        <li>Notificarle sobre nuevos productos que tengan relación con
                            los ya referidos y/o cambio en los mismos.</li>
                        <li>Realizar evaluaciones periódicas sobre nuestros productos y
                            servicios.</li>
                        <li>Evaluar la calidad de los productos y servicios que
                            brindamos.</li>
                        <li>Proveer los productos, servicios o información requeridos
                            por usted</li>
                        <li>Informar sobre cambios o nuevos productos o servicios que
                            estén relacionados con el contratado o adquirido por el
                            cliente</li>
                        <li>Dar cumplimiento a obligaciones contraídas con nuestros
                            clientes</li>
                        <li>Evaluar la calidad del servicio</li>
                        <li>Realizar estudios internos sobre hábitos de consumo</li>
                    </ul>
                    <p></p>

                    <p><b>MEDIOS PARA EL EJERCICIO DE DERECHOS DEL TITULAR</b></p>

                    <p><b style="color: #00b5e6">ESTRATÉGICA SMARTER MARKETING S.A.P.I.
                            DE C.V.</b> se obliga a tratar los datos revelados con
                        estricto apego a lo estipulado por “LA LEY” y su reglamento,
                        empleando las medidas físicas y tecnológicas necesarias a fin de
                        salvaguardar la integridad de los datos personales.</p>

                    <p>Le informamos que para el ejercicio de su derecho de Acceso,
                        Rectificación, Cancelación u Oposición (ARCO) al uso o
                        tratamiento de los datos personales para lo cuales nos ha
                        autorizado el uso, deberá enviar una solicitud dirigida a
                        nuestro <b style="color: #00b5e6">DEPARTAMENTO DE PROTECCIÓN DE
                            DATOS PERSONALES</b>; especificando el derecho a ejercitar,
                        con su nombre, domicilio y/o correo electrónico en donde le
                        podamos comunicar la respuesta a su solicitud, descripción clara
                        y precisa de los datos personales respecto de los que se busca
                        ejercer algún derecho <b style="color: #00b5e6">(ARCO)</b>,
                        adjuntando a la solicitud: documento que acredite su identidad o
                        en sus caso la representación legal del titular de la
                        información, dicha solicitud deberá ser enviada al correo
                        electrónico <b
                            style="color: red">protecciondedatos@estrategicamx.com</b> o
                        al domicilio ubicado en Benjamín Franklin 161 piso 1, delegación
                        Cuauhtémoc, Col. Hipódromo Condesa, México D.F, CP.06170. </p>

                    <p><b style="color: #00b5e6">ESTRATÉGICA SMARTER MARKETING S.A.P.I.
                            DE C.V.</b>, generara una respuesta a la solicitud
                        interpuesta por el titular, a través de los medios señalados en
                        la solicitud, en un término 10 días hábiles contados a partir
                        del día en que sea recibida la solicitud.</p>

                    <p>Si los datos proporcionados por el titular no fueran, correctos o
                        suficientes para ejecutar la solicitud del mismo; <b
                            style="color: #00b5e6">ESTRATÉGICA SMARTER MARKETING
                            S.A.P.I. DE C.V.</b> solicitará dentro del término referido
                        con antelación la información complementaria para el ejercicio
                        el derecho del titular; el término de la respuesta se novara por
                        un periodo igual contado a partir de la recepción de la
                        ampliación o aclaración de los datos del titular.</p>

                    <p><b>TRANSFERENCIA DE DATOS PERSONALES.</b></p>

                    <p><b style="color: #00b5e6">ESTRATÉGICA SMARTER MARKETING S.A.P.I.
                            DE C.V.</b> podrá realizar la transferencia y/o remisión de
                        datos a: Las empresas afiliadas y subsidiarias del Grupo y/o
                        Terceros proveedores de servicios:
                    </p>
                    <ul style="margin-left:50px;">
                        <li>FRICOISA, SA DE CV</li>
                        <li>CRECE, SA DE CV</li>
                        <li>ECSA CONCEPTOS, SA DE CV</li>
                        <li>EDENRED MEXICO, SA DE CV</li>
                        <li>Grupo Financiero Banorte, S.A.B. de C.V</li>
                        <li>Grupo Financiero Santander México, S.A.B. de C.V</li>
                        <li>Grupo Financiero BBVA Bancomer, S.A. de C.V.</li>
                    </ul>
                    <p></p>

                    <p>Los terceros y las entidades receptoras de datos personales,
                        asumen las mismas obligaciones y/o responsabilidades de <b
                            style="color: #00b5e6">ESTRATÉGICA SMARTER MARKETING
                            S.A.P.I. DE C.V.</b>, de conformidad con lo descrito en el
                        presente Aviso de Privacidad. </p>

                    <p>Para las finalidades señaladas anteriormente se entenderá que ha
                        otorgado su consentimiento si usted no manifiesta su oposición a
                        través del correo <b
                            style="color: red">protecciondedatos@estrategicamx.com</b>
                        y/o a la dirección Benjamín Franklin 161 piso 1, delegación
                        Cuauhtémoc, Col. Hipódromo Condesa, México D.F, CP.06170; para
                        que sus datos personales sean trasferidos a terceras personas.
                    </p>

                    <p><b>CAMBIOS AL AVISO DE PRIVACIDAD</b></p>

                    <p>Cualquier cambio al presente aviso de privacidad, le será
                        informado a través de la página de internet <b
                            style="color: #00b5e6">http://www.estrategica.com</b></p>

                    <p><b>FECHA DE LA ÚLTIMA ACTUALIZACIÓN</b></p>

                    <p>17 de marzo de 2017.</p>

                    <p>Si requiere mayor información sobre el uso de sus datos
                        personales y/o hacer ejercicio de sus derechos <b
                            style="color: #00b5e6">ARCO (acceder, rectificar y
                            cancelar)</b>; puede usted contactar a nuestro <b
                            style="color: #00b5e6">DEPARTAMENTO DE PROTECCIÓN DE DATOS
                            PERSONALES</b> a través del correo <b
                            style="color: red">protecciondedatos@estrategicamx.com</b>.
                    </p>
                </div>

                <div class="modal-footer">
                    <button type="button" class="btn btn-inverse btn-lg btn-block"
                        data-dismiss="modal">Cerrar</button>
                </div>
            </div>
        </div>
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
      selected: 'El Taj Mahal',
      selected2: 'Auto propio',
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
        this.selected = 'El Taj Mahal',
        this.selected2 = 'Auto propio',
        this.terms = false,

        this.$notify({
          group: 'foo',
          width: '400px',
          duration: 4000,
          title: 'Gracias por participar',
          text: 'Se te enviará un email en un momento.'
        });
      }
    }
  }
}
</script>
