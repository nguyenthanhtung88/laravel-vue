<!DOCTYPE html>
<html lang="{{ config('app.locale') }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>
    </head>
    <body>
        <div id="one">
            <h1>
                @{{ shared.user.name }}
            </h1>
        </div>

        <div id="two">
            <h1>
                @{{ shared.user.name }}
            </h1>
        </div>

        <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
        <script src="http://cdnjs.cloudflare.com/ajax/libs/vue/2.2.0/vue.js"></script>
        <script src="/js/shared-state.js"></script>
    </body>
</html>
