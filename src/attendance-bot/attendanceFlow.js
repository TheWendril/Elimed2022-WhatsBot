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
                
                client.stage = 100;
                linktosend = attendanceConfig.flow.linkPedia;
            }
            else if(client.messages[client.messages.length - 1] == 4){

                client.stage = 101;
                return attendanceConfig.flow.question + attendanceConfig.flow.message101;
            }
            else if(client.messages[client.messages.length - 1] == 5){
                client.stage = 100;
                linktosend = attendanceConfig.flow.elimedFloresLink;
            }
            else if(client.messages[client.messages.length - 1] == 6){
                client.stage = 100;
                return attendanceConfig.flow.goodbye;
            }
            else
                return attendanceConfig.flow.flowError;
    
            client.stage = 100;
            return attendanceConfig.flow.stage0 + '\n' + linktosend;
        }    

    }
}

export const attendanceRunner = new AttendanceRunner(attendanceClients, attendanceConfig);