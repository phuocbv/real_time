(function (){
    Pusher.logToConsole = true;

    var pusher = new Pusher('1461c126b87a6ff70025');

    var channel = pusher.subscribe('da-cuoi');
    channel.bind('App\\Events\\HelloPusherEvent', function(data) {
      alert(data.message);
    });
})();