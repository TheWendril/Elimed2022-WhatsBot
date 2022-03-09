import {Clients} from '../clients.js'
import {config} from './config.js'

const attendanceClients = new Clients();


export function startAttendance(client){

    client.onMessage(async message => {

        if(attendanceClients.hasClient(message.from)){

            let actualClient = attendanceClients.getClient(message.from);
            actualClient.messages.push(message.body);

            await client.sendText(actualClient.phone, defineFlow(actualClient))
                .then(res => console.log(res))
                .catch(err => console.log(err));


            if(actualClient.stage == 100){
                console.log('CLIENTE REMOVIDO');
                attendanceClients.removeClient(actualClient.phone);
            }

        }else{
            
            attendanceClients.createClient(message.from, 0, true);
            await client.sendText(message.from, config.initialText)
                .then(res => console.log(res))
                .catch(err => console.log(err));

            await client.sendText(message.from, config.options)
                .then(res => console.log(res))
                .catch(err => console.log(err));

        }

    });

}

function defineFlow(client){

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