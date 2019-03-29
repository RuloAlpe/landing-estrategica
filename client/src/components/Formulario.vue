<template>
  <div class="hello">
    <h3>Formulario de contacto</h3>
    
    <div class="info-form">
      <form>
        <div class="form-group">
          <label for="name">Nombre completo</label>
          <input v-model="name" type="text" class="form-control" id="name">
        </div>

        <div class="form-group">
          <label for="email">Correo electronico</label>
          <input v-model="email" type="email" class="form-control" id="email">
        </div>

        <div class="form-group">
          <label for="phone">Telefono</label>
          <input v-model="phone" type="text" class="form-control" id="phone">
        </div>

        <div class="form-group">
          <label for="company">Empresa</label>
          <input v-model="company" type="text" class="form-control" id="company">
        </div>

        <div class="form-group">
          <select v-model="selected">
            <option>A</option>
            <option>B</option>
            <option>C</option>
          </select>
        </div>
        
        <div class="form-group">
          <select v-model="selected2">
            <option>En uber, cortesia de estrategica</option>
            <option>b</option>
          </select>
        </div>

        <input type="checkbox" id="terms" v-model="terms">
        <label for="terms">Aceptó terminos y condiciones</label>
      </form>

      <p v-if="errors.length">
        <b>Corrige el siguiente error(es):</b>
        <ul>
          <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
        </ul>
      </p>

      <!-- <button class="btn btn-primary" v-if="!this.todo.id" @click="createTodo()" ><span>Create</span>
      <button class="btn btn-primary" v-if="this.todo.id" @click="updateTodo()" ><span>Update</span></button> 

      <button class="btn btn-primary" @click="newTodo()" >New..</button>-->
      <button class="btn btn-primary" @click="nuevoRegistro()">Enviar</button>
    </div>
    
  </div>
</template>

<script>
import RegistroService from '../registroService';

export default {
  name: 'Formulario',

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
