import {botTextsPTBR} from '../config.js'

export function commander(client, message){

    if(client.stage === 0){
        
        switch(Integer(message.body)){

            case 1: client.stage = 1;
            case 2: client.stage = 3;
            case 3: client.stage = 4;
            case 4: client.stage = 5;
            default: client.stage = 101;
        }

    }

    switch(client.stage){

        case 1: client.stage++; return "Digite seu nome completo: ";
        case 2: client.stage++; return "Digite seu CPF: ";
        case 3: client.stage = 100; return "Descreva brevemente os seus sintomas que em instantes as nossas atendentes entrarão em contato: ";
        case 4: client.stage++; return "BUSCAR CONSULTAS AINDA";
        case 5: client.stage = 100; return "Digite seu CPF, as nossas atendentes entrarão em contato em breve!";
        case 100: client.status = false; return "A Elimed agradece o contato! ⚕️🏥"
        case 101: client.status = false; return "Ocorreu um erro comigo, lamento o imprevisto 😥 Tente novamente mais tarde!";
    
    }

    
}