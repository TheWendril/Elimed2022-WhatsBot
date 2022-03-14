import {Clients} from '../clients.js'
import {salesConfig} from './config.js'
import {BotRunner} from '../botRunner.js'


const salesClients = new Clients();


class SalesRunnes extends BotRunner{


    constructor(client, config){
        super(client, config);
    }

    defineFlow(client){

        if(client.stage == 0){
            

        }

    } 

}


export const salesRunnes = SalesRunnes(salesClients, salesConfig);