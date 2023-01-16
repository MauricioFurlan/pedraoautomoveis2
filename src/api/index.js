
import $ from 'jquery';


const URL = window.location.hostname.includes('127.0.0.1')
  ? 'http://localhost:3000'
  : 'https://pedraoautomoveis.herokuapp.com';

export const getAllCategoriesAsync = async () => {
  const crudeResponse = await fetch(`${URL}/veiculos`);
  const response = await crudeResponse.json();
  return response['veiculos'];
};

export const getCarAsync = async (id) => {
  const crudeResponse = await fetch(`${URL}/veiculos`);
  const response = await crudeResponse.json();
  const result = response['veiculos'].filter(item => item['id'] == id)[0];
  return result
};

export function sendPost(postData, address) {
  $.ajax({
    method: "POST",
    url: address,
    data: postData,
    success  : function( resultado ){
      console.log('resultado', resultado)
      // document.location.href="/";
      $('#name_input').val(''),
      $('#email_input').val(''),
      $('#phone_input').val(''),
      $('#msg_text').val(''),
      alert('Solicitação realizada com sucesso')
    }
 })
}
