const readline = require('readline')
const calcINSS = require('./calculo_inss');
const calcIR = require('./calculo_imposto_renda')
const calcLiquidPay = require('./calculo_salario_liquido')

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let name = ""
input.question("Por favor, digite seu nome completo:", (nameImput) => {
    name = nameImput

    let CPF = 0
    input.question("Por favor, digite seu CPF:", (cpfImput) => {
        CPF = cpfImput

        let month = 0
        input.question("Por favor, digite o mês do pagamento:", (monthImput) => {
            month = monthImput

            let grossPay = 0
            input.question("Por favor, digite o seu salário bruto:", (grossPayImput) => {
                grossPay = grossPayImput

                const INSS = calcINSS(grossPay)
                const IR = calcIR(grossPay)
                const liquidPay = calcLiquidPay(grossPay)

                console.log('\n___ Folha de Pagamento ___')
                console.log(`Nome: ${name}`)
                console.log(`CPF: ${CPF}`)
                console.log(` ======================== `)
                console.log(`Mês do Pagamento: ${month}`)
                console.log(`Salário Bruto: R$${grossPay}`)
                console.log(`INSS: R$${INSS}`)
                console.log(`Imposto de Renda: R$${IR}`)
                console.log(`Outros Descontos: R$0,00`)
                console.log(` ======================== `)
                console.log(`Salário Líquido: R$${liquidPay}`)

                input.close()
            })
        })
    })
})