
export function formatar(mascara, campo){
    var documento = document.getElementById(campo)
    var i = documento.value.length;
    var saida = mascara.substring(0,1);
    var texto = mascara.substring(i);
    if (texto.substring(0,1) != saida){
      documento.value += texto.substring(0,1);
    }
  }
