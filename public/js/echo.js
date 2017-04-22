window.Pusher = require('pusher-js');

import Echo from "laravel-echo"

window.echo = new Echo('your pusher key here');

echo.channel('da-cuoi')
    .listen('App\\Events\\HelloPusherEvent', function (data) {
        console.log(data.user, data.chatMessage);
    });
