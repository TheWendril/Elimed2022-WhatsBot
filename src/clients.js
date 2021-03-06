
export class Clients{

    constructor(){
        this.attendanceClients = [];
    }


    createClient(phone, stage, active){

        this.attendanceClients.push(
            {phone: phone, stage: stage, active: active, messages: []}
        );
    }


    removeClient(phone){

        for(var i = 0; i < this.attendanceClients.length; i++)
            if(this.attendanceClients[i].phone == phone)
                this.attendanceClients.splice(i, 1);

    }


    hasClient(phone){

        for(var i = 0; i < this.attendanceClients.length; i++)
            if(this.attendanceClients[i].phone == phone)
                return true;
    
        return false; 
    }

    getClient(phone){

        for(var i = 0; i < this.attendanceClients.length; i++)
            if(this.attendanceClients[i].phone == phone)
                return this.attendanceClients[i];

        return false; 
    }
}