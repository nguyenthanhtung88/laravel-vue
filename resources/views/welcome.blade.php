<!DOCTYPE html>
<html lang="{{ config('app.locale') }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>
    </head>
    <body>
        <div id="root">
            <ul>
                <li v-for="skill in skills" v-text="skill"></li>
            </ul>
        </div>

        <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
        <script src="http://cdnjs.cloudflare.com/ajax/libs/vue/2.2.0/vue.js"></script>
        <script src="/js/app.js"></script>
    </body>
</html>
