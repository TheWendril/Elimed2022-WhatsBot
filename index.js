import {attendanceRunner} from './src/attendance-bot/attendanceFlow.js'
import {elimRunner} from './src/elim-bot/elimFlow.js'
import {pediatricsRunner} from './src/pediatrics-bot/pediatricsFlow.js'
import {businessRunner} from './src/business-bot/businessFlow.js'
import {create} from 'venom-bot'


// Bot de atendimento geral  --------------- Portar pediatria --------------

create('attendance')
    .then(client => attendanceRunner.start(client))
    .catch(err => console.error(err));


// Bot de atendimento empresarial
create('business')
    .then(client => businessRunner.start(client))
    .catch(err => console.error(err));


// Bot de atendimento pediátrico 
/* -------------- BOT DESATIVADO POR HORA ------------ 
create('pediatrics')
    .then(client => pediatricsRunner.start(client))
    .catch(err => console.error(err));
*/

// Bot de atendimento do saúde Elim
create('elim')
    .then(client => elimRunner.start(client))
    .catch(err => console.error(err));
