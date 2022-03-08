import {botTextsPTBR} from '../config.js'

export function commander(client, message){

    if(client.stage === 0){

        let intmessage = parseInt(message.body);
        console.log('MENSAGEM: ' + intmessage);

        if (intmessage == 1)
            client.stage = 1;

        else if(intmessage == 2)
            client.stage = 4;

        else if(intmessage == 3)
            client.stage = 5;

        else if(intmessage == 4)
            client.stage = 6;

        else
            client.stage = 101;
    }


    console.log(client.stage);

    switch(client.stage){

        case 1: client.stage++; return "👱  Digite seu nome completo: ";
        case 2: client.stage++; return "📄 Digite seu CPF: ";
        case 3: client.stage = 100; return "🤒 Descreva brevemente os seus sintomas que em instantes as nossas atendentes entrarão em contato: ";
        case 4: client.stage = 100; return "~BUSCAR CONSULTAS AQUI~";
        case 5: client.stage = 100; return "📄 Digite seu CPF, as nossas atendentes entrarão em contato em breve!";
        case 6: client.stage = 100; return "❓ Digite brevemente sua questão. Nossas atendentes entrarão em contato logo logo!";
        case 100: client.status = false; return "A Elimed agradece o contato! ⚕️🏥";
        case 101: client.status = false; return "Ocorreu um erro, lamento o imprevisto 😥 Tente novamente mais tarde!";
    
    }

    if(client.stage === 100 || client.stage === 101)
        client.status = false;

    
}