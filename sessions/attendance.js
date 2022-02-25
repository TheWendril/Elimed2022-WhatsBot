import { create } from 'venom-bot'
import {botTextsPTBR} from '../config.js'
import {showInitalOptions} from './attendance_flow/flow.js'


async function sendButtons(client, message, buttons){

    console.log(buttons);
    console.log(message.from);

    await client.sendButtons(message.from, 'Clique na opção que desejas: ', buttons, ' ')
        .then(result => console.log(result))
        .catch(err => console.error(err));

}


async function startAttendance(client){

    await client.onMessage(async message => {

        client.sendText(message.from, botTextsPTBR.welcome)
            .then(result => {console.log(result)})
            .catch(err => {console.error(err)})

        showInitalOptions(client, message, botTextsPTBR.initialMenuOptions);
        

    });

    process.on(() => client.close());

}

export function startAttendanceSession(){

    create( {session:'attendance-bot'} )
        .then(async client => startAttendance(client));
}