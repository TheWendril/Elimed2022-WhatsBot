import { Clients } from '../clients.js'
import { BotRunner } from '../botRunner.js';
import { attendanceConfig } from './config.js'

// Configurações de suply
import { pediatricConfig } from '../pediatrics-bot/config.js';

const attendanceClients = new Clients();


class AttendanceRunner extends BotRunner {
    
    constructor(client, config){
        super(client, config);
    }

    defineFlow(client){

        if(client.stage === 0){

            let linktosend = '';
    
            if(client.messages[client.messages.length - 1] == 1){
                linktosend = attendanceConfig.flow.linkBusiness;
            }
            else if(client.messages[client.messages.length - 1] == 2){
                linktosend = attendanceConfig.flow.linkElim;
            }
            else if(client.messages[client.messages.length - 1] == 3){
                
                client.stage = 1;
                linktosend = attendanceConfig.flow.linkPedia;

                // Código novo apenas de emergência
                return pediatricConfig.options;
            }
            else
                return attendanceConfig.flow.flowError;
    
            client.stage = 100;
            return attendanceConfig.flow.stage0 + '\n' + linktosend;
        }
        else if(client.stage === 1){

            if(client.messages[client.messages.length - 1] != 1 && 
                client.messages[client.messages.length - 1] != 2 && 
                client.messages[client.messages.length - 1] != 3 && 
                client.messages[client.messages.length - 1] != 4)
                return "Por favor, digite uma opção válida";

            client.stage = 100;
            return pediatricConfig.flow.stage0;
        }
        
        return "Mensagem padrão de erro!";

    }
}

export const attendanceRunner = new AttendanceRunner(attendanceClients, attendanceConfig);