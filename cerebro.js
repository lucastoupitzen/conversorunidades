function filtro() {
    var tipo = document.getElementById("tipo")
    var res = document.getElementById("entrada")
    var outp = document.getElementById("output")
    var num = document.getElementById("numero")
    var bot = document.getElementById("botao")
    num.innerHTML = '<p>Insira a parte numérica: </p><input type="number" name="quantia" id="quantia">'
    switch(tipo.value) {
        case "distancia":
             res.innerHTML = '<p>Selecione a unidade de medida atual: </p><select id="distancia"><option value="inicio">Selecione</option><option value="centimetro">Centímetro</option><option value = "quilometro">Quilometro</option><option value="metro">Metro</option><option value="pé">Pé</option></select>'
             outp.innerHTML = '<p>Selecione a unidade de medida desejada: </p><select id="distanciadesejada"><option value="inicio">Selecione</option><option value="centimetro">Centímetro</option><option value = "quilometro">Quilometro</option><option value="metro">Metro</option><option value="pé">Pé</option></select>'
             bot.innerHTML = '<input type="button" id="disparo" value="Calcular" onclick="calculadora_distancia()"></input>'
             break
        case "massa":
             res.innerHTML = '<p>Selecione a unidade de medida atual: </p><select id="massa"><option value="inicio">Selecione</option><option value="grama">Gramas</option><option value = "quilo">Quilograma</option><option value="libra">Libra</option><option value="onça">Onça</option></select>'
             outp.innerHTML = '<p>Selecione a unidade de medida desejada: </p><select id="massadesejada"><option value="inicio">Selecione</option><option value="grama">Gramas</option><option value = "quilo">Quilograma</option><option value="libra">Libra</option><option value="onça">Onça</option></select>'
             bot.innerHTML = '<input type="button" id="disparo" value="Calcular" onclick="calculadora_massa()"></input>'
             break
        default: res.innerHTML = 'Deu errado'
    }
}
function calculadora_distancia() {
    var inputnum = document.getElementById("quantia").value
    var inputini = document.getElementById("distancia").value
    var inputfin = document.getElementById("distanciadesejada").value
    var dadosMedidas = {
        medidas: ['centimetro','quilometro','metro','pé'],
        quantRel: [0.01,1000,1,0.3048]
    }
    var controleEntrada = 0;
    for (i in dadosMedidas.medidas) {
        if (dadosMedidas.medidas[i] == inputini) {
        break
        }
        else controleEntrada ++
    }
    var controleSaida = 0;
    for (i in dadosMedidas.medidas) {
        if (dadosMedidas.medidas[i] == inputfin) {
        break
        }
        else controleSaida ++
    }
    var resultado = dadosMedidas.quantRel[controleEntrada] / dadosMedidas.quantRel[controleSaida]
    var output = document.getElementById("outpu")
    output.innerHTML = `${inputnum} ${inputini}s são ${(inputnum*resultado)} ${inputfin}s`
}

function calculadora_massa() {
    var inputnum = document.getElementById("quantia").value
    var inputini = document.getElementById("massa").value
    var inputfin = document.getElementById("massadesejada").value
    var dadosMedidas = {
        medidas: ['grama','quilo','libra','onça'],
        quantRel: [1,1000,453.592,28.3495]
    }
    var controleEntrada = 0;
    for (i in dadosMedidas.medidas) {
        if (dadosMedidas.medidas[i] == inputini) {
        break
        }
        else controleEntrada ++
    }
    var controleSaida = 0;
    for (i in dadosMedidas.medidas) {
        if (dadosMedidas.medidas[i] == inputfin) {
        break
        }
        else controleSaida ++
    }
    var resultado = dadosMedidas.quantRel[controleEntrada] / dadosMedidas.quantRel[controleSaida]
    var output = document.getElementById("outpu")
    output.innerHTML = `${inputnum} ${inputini}s são ${(inputnum*resultado)} ${inputfin}s`
}
