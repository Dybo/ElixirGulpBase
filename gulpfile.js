var elixir = require('laravel-elixir');

elixir(function(mix) {
    mix.sass('app.scss');

    // Path to bower_components: '../../../bower_components/'
    // Path to resources: '../../../resources/'
    mix.scripts([
        '../../../resources/assets/js/app.js'
    ]);
});