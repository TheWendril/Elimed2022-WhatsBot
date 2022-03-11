import {Clients} from '../clients.js'
import {elimConfig} from './config.js'
import {BotRunner} from '../botRunner.js'


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
                client.messages[client.messages.length - 1] != 6)
                return "Por favor, digite uma opção válida";
    

            client.stage = 101;
            return elimConfig.flow.stage0 + elimConfig.flow.message101;
        }
    
        return "ocorreu um erro";
    }
}

export const elimRunner = new ElimRunner(elimClients, elimConfig);
