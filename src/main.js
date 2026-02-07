"use strict";

//Configuração do dayjs
import "./libs/dayjs";

//CSS
import "./styles/global.css";
import "./styles/schedule.css";
import "./styles/form.css";

// JS
import dayjs from "dayjs";

import "./modules/form/submit.js";
import "./modules/page-load.js";
import "./modules/form/date-changed.js";

console.log(dayjs().format("DD HH:mm"));
