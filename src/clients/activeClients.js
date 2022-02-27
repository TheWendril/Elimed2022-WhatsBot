// Deixando esse comentário aqui para me lembrar de refatorar todo esse código 
// para typescript no futuro 


export class ActiveClients{


    Clients = []


    inList(from){

        for(var i=0 ; i<from.length; i++)
            if(Clients[i].from == from)
                return this.Clients[i];

        return false;
    }

    pushInList(client){
        this.Clients.push(Clients);
    }

    removeFromList(from){

        for(var i=0 ; i<from.length; i++)
            if(Clients[i].from == from)
                this.Clients.slice(i,i);
    }

}

// modelo de clientes ativos
/*
{
    status: bool,
    from: string,
    stage: int
}

*/
