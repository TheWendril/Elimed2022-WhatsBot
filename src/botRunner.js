
export class BotRunner{

    constructor(clients, config){
        this._Config = config;
        this._Clients = clients;
    }

    start(client){

        client.onMessage(async message => {
    
            if(this._Clients.hasClient(message.from)){
    
                let actualClient = this._Clients.getClient(message.from);
                actualClient.messages.push(message.body);
    
                await client.sendText(actualClient.phone, this.defineFlow(actualClient))
                    .then(res => console.log(res))
                    .catch(err => console.log(err));
    
    
                if(actualClient.stage == 100)
                    this._Clients.removeClient(actualClient.phone);
    
            }else{
                
                this._Clients.createClient(message.from, 0, true);
                await client.sendText(message.from, this._Config.initialText)
                    .then(res => console.log(res))
                    .catch(err => console.log(err));
    
                await client.sendText(message.from, this._Config.options)
                    .then(res => console.log(res))
                    .catch(err => console.log(err));
    
            }
    
        });
    
    }

    defineFlow(client){}


}