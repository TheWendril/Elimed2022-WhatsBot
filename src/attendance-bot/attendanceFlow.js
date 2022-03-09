import { Clients } from '../clients.js'
import { BotRunner } from '../botRunner.js';
import { config } from './config.js'


const attendanceClients = new Clients();


class AttendanceRunner extends BotRunner {
    
    constructor(client, config){
        super(client, config);
    }

    defineFlow(client){

        if(client.stage === 0){

            let linktosend = '';
    
            if(client.messages[client.messages.length - 1] == 1)
                linktosend = config.flow.linkBusiness;
            else if(client.messages[client.messages.length - 1] == 2)
                linktosend = config.flow.linkElim;
            else if(client.messages[client.messages.length - 1] == 3)
                linktosend = config.flow.linkPedia;
            else
                return config.flow.flowError;
    
            client.stage = 100;
            return config.flow.stage0 + '\n' + linktosend;
        }
        
        return "Mensagem padrão de erro!";

    }
}

export const attendanceRunner = new AttendanceRunner(attendanceClients, config);