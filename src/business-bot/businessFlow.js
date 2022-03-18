import {Clients} from '../clients.js'
import {businessConfig} from './config.js'
import {BotRunner} from '../botRunner.js'


const businessClients = new Clients();

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
                client.messages[client.messages.length - 1] != 7)
                return "Por favor, digite uma opção válida";
    

            client.stage = 101;
            return businessConfig.flow.stage0 + businessConfig.flow.message101;
        }
    }
}

export const businessRunner = new BusinessRunner(businessClients, businessConfig);

