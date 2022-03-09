import {Clients} from '../clients.js'
import {config} from './config.js'
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
                client.messages[client.messages.length - 1] != 5)
                return "Por favor, digite uma opção válida";

            client.stage = 100;
            return config.flow.stage0;
        }
    
        return "ocorreu um erro";
    }
}

export const pediatricsRunner = new BusinessRunner(pediatricsClients, config);

