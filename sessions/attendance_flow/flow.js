export async function showInitalOptions(client, message, options){
    
    await client.sendText(message.from, options);
    var selectOption = 0; 
    

    while(selectOption === 0){

        client.onMessage(newmessage => {selectOption = Integer(newmessage.body)})
            .then(result => console.log(result))
            .catch(err => console.error(err));

        if(selectOption === 0 || selectOption > 4)
            selectOption = 0;
    
    }

    return selectOption;

}