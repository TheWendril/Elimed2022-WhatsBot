import {botTextsPTBR} from '../config'

export function commander(client){

    switch(client.stage){

        case 1: client.stage++; return "Digite seu nome completo: ";
        case 2: client.stage++; return "Digite seu CPF: ";
        case 3: client.stage = 100; return "Ótimo, as nossas atendentes entrarão em contato em breve!";
        case 4: client.stage++; return "BUSCAR CONSULTAS AINDA";
        case 5: client.stage = 100; return "Digite seu CPF, as atendentes entrarão em contato em breve!";
        case 100: client.status = false; return "A Elimed agradece o contato! ⚕️🏥"
    
    }

    
}