import {startAttendance} from './src/attendance-bot/attendanceFlow.js'
import {startElim} from './src/elim-bot/elimFlow.js'
import {startPediatrics} from './src/pediatrics-bot/pediatricsFlow.js'
import {startBusiness} from './src/business-bot/businessFlow.js'
import {create} from 'venom-bot'


// Bot de atendimento geral
create('attendance')
    .then(client => startAttendance(client))
    .catch(err => console.error(err));


/* Bot de atendimento empresarial
create('business')
    .then(client => startBusiness(client))
    .catch(err => console.error(err));


// Bot de atendimento pediátrico
create('pediatrics')
    .then(client => startPediatrics(client))
    .catch(err => console.error(err));


// Bot de atendimento do saúde Elim
create('elim')
    .then(client => startElim(client))
    .catch(err => console.error(err));



*/