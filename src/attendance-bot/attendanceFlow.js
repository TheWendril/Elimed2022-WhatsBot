import {Clients} from '../clients.js'
import {config} from './config.js'

const attendanceClients = new Clients();

export function startAttendance(client){

    client.onMessage(async message => {

        if(attendanceClients.hasClient(message.from)){

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