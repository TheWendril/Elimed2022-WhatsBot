import {Clients} from '../clients.js'
import {pediatricConfig} from './config.js'
import {BotRunner} from '../botRunner.js'


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
                client.messages[client.messages.length - 1] != 8)
                return "Por favor, digite uma opção válida";

            if(client.messages[client.messages.length - 1] == 8){
                client.stage = 101;
                return pediatricConfig.flow.message101;
            }

            client.stage = 101;
            return pediatricConfig.flow.stage0 + pediatricConfig.flow.message101;
        }
    }
}

export const pediatricsRunner = new BusinessRunner(pediatricsClients, pediatricConfig);

