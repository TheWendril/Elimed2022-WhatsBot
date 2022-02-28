import { create } from 'venom-bot'
import {botTextsPTBR} from './config.js'
import { commander } from './attendance_flow/botStages.js';
import {ActiveClients} from '../clients/activeClients.js'

let activeClients = new ActiveClients();

async function startAttendance(client){

    client.onMessage(async message => {

        console.log('MENSAGEM FROM: ' + message.from);

        let actualClient = activeClients.inList(message.from);

        if(actualClient && actualClient.status){

            client.sendText(actualClient.from, commander(actualClient, message))
                .then(result => {console.log(result)})
                .catch(err => {console.log(err)});


            if(actualClient.stage === 100)
                activeClients.removeFromList(actualClient.from);

            else if(actualClient.stage === 101)
                activeClients.removeFromList(actualClient.from);

        }

        else{

            actualClient = {status: true, from: message.from, stage: 1}
            activeClients.pushInList(actualClient);

            await client.sendText(message.from, botTextsPTBR.welcome)
                .then(result => {console.log(result)})
                .catch(err => {console.error(err)});

            await client.sendText(message.from, botTextsPTBR.initialMenuOptions)
                .then(result => {console.log(result)})
                .catch(err => {console.error(err)});
        }

    });


    client.onAck(ack => {
        
        if(ack.status === -6)
            console.log('CLIENTE INATIVO');

        else if(ack.status === -2)
            console.log('CLIENTE EXPIRADO');

    });
}


export function startAttendanceSession(){

    create( {session:'attendance-bot', useChrome: true, headless: true, multidevice: true} )
        .then(async client => startAttendance(client))
        .catch(err => console.error(err));
}