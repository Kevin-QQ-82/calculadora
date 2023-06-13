let funcionPredeterminada = () => {
    const formulario = document.getElementById('formulario');
    formulario.addEventListener('submit', (evento) => {//callback= es una funcion flecha con el parametro envento
        evento.preventDefault();
        let valorPorHora = parseFloat(document.getElementById('valorPorHora').value)
        
        let interfazHoras = parseFloat(document.getElementById('interfazHoras').value)
        let testingHoras = parseFloat(document.getElementById('testingHoras').value)
        let APIs= parseFloat(document.getElementById('API´s').value)

        let estilos = parseFloat(document.getElementById('estilosCSS').value)
        let adicional = parseFloat(document.getElementById('adicional').value)

        let resultado = (valorPorHora * interfazHoras)+ (valorPorHora * testingHoras) + (APIs)+(valorPorHora*estilos)+ ((valorPorHora/2)*adicional)

        document.getElementById('valorTotal').value = resultado
        
      })
}
funcionPredeterminada();