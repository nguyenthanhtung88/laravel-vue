<!DOCTYPE html>
<html lang="{{ config('app.locale') }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.4.0/css/bulma.min.css">

        <title>Laravel</title>
    </head>
    <body>
        <div id="root" class="container">
            <h1>Projects Management</h1>

            {{-- Display project list --}}

            <form action="/projects" method="post" @submit.prevent="onSubmit" @keydown="form.errors.clear($event.target.name)">
                <div class="field">
                    <label class="label">Name</label>
                    <p class="control">
                        <input name="name" class="input" type="text" placeholder="Project name..." v-model="form.name">
                    </p>
                    <span class="help is-danger" v-if="form.errors.has('name')" v-text="form.errors.get('name')"></span>
                </div>

                <div class="field">
                    <label class="label">Description</label>
                    <p class="control">
                        <input name="description" class="input" type="text" placeholder="Project description..." v-model="form.description">
                    </p>
                    <span class="help is-danger" v-if="form.errors.has('description')" v-text="form.errors.get('description')"></span>
                </div>

                <div class="field">
                    <p class="control">
                        <button class="button is-primary" type="submit" :disabled="form.errors.any()">Create</button>
                    </p>
                </div>
            </form>
        </div>

        <script src="/js/vendor.js"></script>
        <script src="/js/app.js"></script>
    </body>
</html>
