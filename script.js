function mascara_telefone() {
    var tel_formatado = document.getElementById("input-telefone").value
    if (tel_formatado[0] != "(") {
        if (tel_formatado[0] != undefined) {
            document.getElementById("input-telefone").value = "(" + tel_formatado[0];
        }
    }

    if (tel_formatado[3] != ")") {
        if (tel_formatado[3] != undefined) {
            document.getElementById("input-telefone").value = tel_formatado.slice(0, 3) + ")" + tel_formatado[3]
        }
    }

    if (tel_formatado[9] != "-") {
        if (tel_formatado[9] != undefined) {
            document.getElementById("input-telefone").value = tel_formatado.slice(0, 9) + "-" + tel_formatado[9]
        }
    }

    localStorage.setItem("telefone", tel_formatado) 

}

addEventListener("DOMContentLoaded", () => {
    var recebe_telefone = localStorage.getItem("telefone")
    document.getElementById("recebe_telefone").value = recebe_telefone
})


function mascara_cep() {
    var cep_formatado = document.getElementById("input-cep").value
    if (cep_formatado[2] != ".") {
        if (cep_formatado[2] != undefined) {
            document.getElementById("input-cep").value = cep_formatado.slice(0, 2) + "." + cep_formatado[2];
        }
    }

    if (cep_formatado[6] != "-") {
        if (cep_formatado[6] != undefined) {
            document.getElementById("input-cep").value = cep_formatado.slice(0, 6) + "-" + cep_formatado[6]
        }
    }

    localStorage.setItem("cep", cep_formatado) 

}

addEventListener("DOMContentLoaded", () => {
    var recebe_cep = localStorage.getItem("cep")
    document.getElementById("recebe_cep").value = recebe_cep
})

function mascara_cpf() {
    var cpf_formatado = document.getElementById("input-cpf").value
    if (cpf_formatado[3] != ".") {
        if (cpf_formatado[3] != undefined) {
            document.getElementById("input-cpf").value = cpf_formatado.slice(0, 3) + "." + cpf_formatado[3];
        }
    }

    if (cpf_formatado[7] != ".") {
        if (cpf_formatado[7] != undefined) {
            document.getElementById("input-cpf").value = cpf_formatado.slice(0, 7) + "." + cpf_formatado[7];
        }
    }

    if (cpf_formatado[11] != "-") {
        if (cpf_formatado[11] != undefined) {
            document.getElementById("input-cpf").value = cpf_formatado.slice(0, 11) + "-" + cpf_formatado[11];
        }
    }

    localStorage.setItem("cpf", cpf_formatado) 
}

addEventListener("DOMContentLoaded", () => {
    var recebe_cpf = localStorage.getItem("cpf")
    document.getElementById("recebe_cpf").value = recebe_cpf
})

function mascara_cnpj() {
    var cnpj_formatado = document.getElementById("input-cnpj").value
    if (cnpj_formatado[2] != ".") {
        if (cnpj_formatado[2] != undefined) {
            document.getElementById("input-cnpj").value = cnpj_formatado.slice(0, 2) + "." + cnpj_formatado[2];
        }
    }

    if (cnpj_formatado[6] != ".") {
        if (cnpj_formatado[6] != undefined) {
            document.getElementById("input-cnpj").value = cnpj_formatado.slice(0, 6) + "." + cnpj_formatado[6];
        }
    }

    if (cnpj_formatado[10] != "/") {
        if (cnpj_formatado[10] != undefined) {
            document.getElementById("input-cnpj").value = cnpj_formatado.slice(0, 10) + "/" + cnpj_formatado[10];
        }
    }

    if (cnpj_formatado[15] != "-") {
        if (cnpj_formatado[15] != undefined) {
            document.getElementById("input-cnpj").value = cnpj_formatado.slice(0, 15) + "-" + cnpj_formatado[15];
        }
    }

    localStorage.setItem("cnpj", cnpj_formatado) 
}

addEventListener("DOMContentLoaded", () => {
    var recebe_cnpj = localStorage.getItem("cnpj")
    document.getElementById("recebe_cnpj").value = recebe_cnpj
})

function mascara_codigo() {
    var codigo_formatado = document.getElementById("input-codigo").value
    if (codigo_formatado[2] != "_") {
        if (codigo_formatado[2] != undefined) {
            document.getElementById("input-codigo").value = codigo_formatado.slice(0, 2) + "_" + codigo_formatado[2];
        }
    }

    if (codigo_formatado[5] != "/") {
        if (codigo_formatado[5] != undefined) {
            document.getElementById("input-codigo").value = codigo_formatado.slice(0, 5) + "/" + codigo_formatado[5];
        }
    }

    if (codigo_formatado[6] != "/") {
        if (codigo_formatado[6] != undefined) {
            document.getElementById("input-codigo").value = codigo_formatado.slice(0, 6) + "/" + codigo_formatado[6];
        }
    }

    if (codigo_formatado[10] != "-") {
        if (codigo_formatado[10] != undefined) {
            document.getElementById("input-codigo").value = codigo_formatado.slice(0, 10) + "-" + codigo_formatado[10];
        }
    }

    if (codigo_formatado[14] != ".") {
        if (codigo_formatado[14] != undefined) {
            document.getElementById("input-codigo").value = codigo_formatado.slice(0, 14) + "." + codigo_formatado[14];
        }
    }

    
    if (codigo_formatado[15] != "9") {
        if (codigo_formatado[15] != undefined) {
            document.getElementById("input-codigo").value = codigo_formatado.slice(0, 15) + "9" + codigo_formatado[15];
        }
    }


    if (codigo_formatado[16] != ".") {
        if (codigo_formatado[16] != undefined) {
            document.getElementById("input-codigo").value = codigo_formatado.slice(0, 16) + "." + codigo_formatado[16];
        }
    }

    localStorage.setItem("codigo", codigo_formatado) 
}

addEventListener("DOMContentLoaded", () => {
    var recebe_codigo = localStorage.getItem("codigo")
    document.getElementById("recebe_codigo").value = recebe_codigo
})

function nome(){var nome_formatado = document.getElementById("recebe_nome").value
localStorage.setItem("nome", nome_formatado)
}



addEventListener("DOMContentLoaded", () => {
    var recebe_nome = localStorage.getItem("nome")
    document.getElementById("recebe_nome").value = recebe_nome
})


