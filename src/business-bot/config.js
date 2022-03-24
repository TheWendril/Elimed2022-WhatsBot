import {botLinks} from '../links.js'

export const businessConfig = {
    initialText: "❗Este agora é um número de atendimento empresarial! Para informações gerais ou saúde elim, acesse esse link:\n" + botLinks.linkElim + "\n\n🤖 Olá, eu sou a Sarah, assistente virtual da Elimed! 🏥\n Selecione a opção que desejas digitando (apenas) o número correspondente",
    options: "1️⃣ Horário de funcionamento\n2️⃣ E-social\n3️⃣ Agendar ASO, audiometrias ou exames\n4️⃣ Consultar valores\n5️⃣ Solicitar visita do engenheiro\n6️⃣ Conversar com atendente\n7️⃣ Sair do bot ",

    flow: {
        stage0: "Ok, nosso(a) atendente irá responder em breve, aguarde um pouco!",
        message101: "\n\n🤖 Caso deseje conversar novamente comigo, digite exatamente essas palavras 'ola sarah' sem aspas e acentos!",
        workHour: "🤖 Nosso horário de funcionamento é de 07:00hrs às 17:00hrs"
    }
}