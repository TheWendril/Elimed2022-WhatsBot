import {Clients} from '../clients.js'
import {elimConfig} from './config.js'
import {BotRunner} from '../botRunner.js'
import {botLinks} from '../links.js'


const elimClients = new Clients();

class ElimRunner extends BotRunner {
    
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
                client.messages[client.messages.length - 1] != 9 )
                return "Por favor, digite uma opção válida!";
 

            if(client.messages[client.messages.length - 1] == 9){
                client.stage = 100;
                return elimConfig.flow.goodbye;
            }

            else if(client.messages[client.messages.length - 1] == 5){
                client.stage = 100;
                return elimConfig.flow.messagelinkConsultory + botLinks.linkped;
            }
            else if(client.messages[client.messages.length - 1] == 6){
                client.stage = 100;
                return elimConfig.flow.messagelinkConsultory + botLinks.sst;
            }
            else if(client.messages[client.messages.length - 1] == 7){
                client.stage = 100;
                return elimConfig.flow.messagelinkConsultory + botLinks.linksales;
            }
            

            client.stage = 101;
            return elimConfig.flow.stage0 + elimConfig.flow.message101;
        }
    }
}

export const elimRunner = new ElimRunner(elimClients, elimConfig);
