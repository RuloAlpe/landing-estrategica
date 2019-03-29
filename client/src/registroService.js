const axios = require('axios');
const url = '/';

class RegistroService {
  static async crearRegistro(name, email, phone, company, selected, selected2){
    return axios.post(`${url}create`, {
      txt_name: name,
      txt_email: email,
      txt_phone: phone,
      txt_company: company,
      txtx_selected: selected,
      txtx_selected2: selected2
    });
  }
}

export default RegistroService;