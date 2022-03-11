export const attendanceConfig = {
    initialText: "🤖 Olá, me chamo Sarah e sou a atendente virtual da clínica Elimed! 🏥 \nPara começar selecione uma área na qual deseja tratar e enviaremos um link para contato!",
    options: "1️⃣ Central de Empresas\n2️⃣ Central Saúde Elim\n3️⃣ Central de Pediatria\n4️⃣ Marcação de ASO e exames laboratoriais\n5️⃣ Tirar dúvidas\n6️⃣ Cancelar",

    flow: {
        linkPedia: "http://linkpedi.com",
        linkBusiness: "https://wa.me/message/42GEGMDROL5EG1?src=qr",
        linkElim: "https://wa.me/message/GMQ6EFB7NDLBG1",
        stage0: "🤖 A seguir, enviarei um link para outro chat responsável pela área que desejas 😁\n\n Não se preocupe, estarei lá também para te auxiliar, até logo!",
        flowError: "Ops! Parece que você digitou a opção errada, tente novamente",
        attendanceDefault: "Aguarde um minutinho, um(a) atendente irá te responder em breve!",
        question: "Digite sua dúvida, um(a) atendente irá te responder em breve!",
        message101: "\n\n🤖 Caso deseje conversar novamente comigo, digite exatamente essas palavras 'ola sarah' sem aspas!",
        goodbye: '🤖 Tudo bem! Sempre que precisar, basta me enviar uma mensagem\nAté mais! 👋'
    }
}