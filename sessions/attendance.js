import { create } from 'venom-bot'
import {botTextsPTBR} from '../config.js'


async function sendButtons(client, message, buttons){

    console.log(buttons);

    await client.sendButtons(message.from, 'Clique na opção que desejas: ', buttons, ' ')
    .then(result => console.log(result))
    .catch(err => console.error(err));


}


async function startAttendance(client){

    await client.onMessage(async message => {

        console.log(client)

        client.sendText(message.from, botTextsPTBR.welcome)
            .then(result => {console.log(result)})
            .catch(err => {console.error(err)})
        
        // Initial select menu
        await sendButtons(client, message, botTextsPTBR.initialMenuOptionsButtons);
 
    });
}

export function startAttendanceSession(){

    create( {session:'attendance-bot'} ).then(async client => startAttendance(client));
}