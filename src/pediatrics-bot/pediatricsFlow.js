import {Clients} from '../clients.js'
import {pediatricConfig} from './config.js'
import {BotRunner} from '../botRunner.js'
import {botLinks} from '../links.js'


const pediatricsClients = new Clients();

class BusinessRunner extends BotRunner {
    
    constructor(client, config){
        super(client, config);
    }

    defineFlow(client){

        if(client.stage === 0){

            if(client.messages[client.messages.length - 1] != 1 && 
                client.messages[client.messages.length - 1] != 2 && 
                client.messages[client.messages.length - 1] != 3 && 
                client.messages[client.messages.length - 1] != 4 && 
                client.messages[client.messages.length - 1] != 5 && 
                client.messages[client.messages.length - 1] != 6 && 
                client.messages[client.messages.length - 1] != 7 && 
                client.messages[client.messages.length - 1] != 8 &&
                client.messages[client.messages.length - 1] != 9 && 
                client.messages[client.messages.length - 1] != 10)
                return "Por favor, digite uma opção válida";
    
            if(client.messages[client.messages.length - 1] == 1){
                client.stage = 100;
                return pediatricConfig.flow.workHour;
            }
            
            if(client.messages[client.messages.length - 1] == 8){
                client.stage = 100;
                return pediatricConfig.flow.messagelinkConsultory + botLinks.sst;
            }

            if(client.messages[client.messages.length - 1] == 9){
                client.stage = 100;
                return pediatricConfig.flow.messagelinkConsultory + botLinks.linksales;
            }

            if(client.messages[client.messages.length - 1] == 10){
                client.stage = 101;
                return pediatricConfig.flow.message101;
            }

            client.stage = 101;
            return pediatricConfig.flow.stage0 + pediatricConfig.flow.message101;
        }
    }
}

export const pediatricsRunner = new BusinessRunner(pediatricsClients, pediatricConfig);

