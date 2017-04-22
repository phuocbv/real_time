<!DOCTYPE html>
<html>
<head>
    <title>Laravel-React</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/react/0.14.0/react.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/react/0.14.0/react-dom.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.6.15/browser.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
</head>
<body>
    <div id="content"></div>
    <script type="text/babel" src="{{ asset('js/a.js') }}"></script>

    <script src="https://js.pusher.com/4.0/pusher.min.js"></script>
    <script src="{{ asset('js/pusher.js') }}"></script>
</body>
</html>
