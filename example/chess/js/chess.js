requirejs.config({
    baseUrl: './js',
    paths: {
        kick: '../../js/kick-debug'
    }
});

requirejs(['kick', 'ChessGame', 'ChessCameraMovementListener', 'ChessField', 'ChessPiece', 'ChessPieceType', 'GameBoard', 'SelectionListener'],
    function (KICK, ChessGame) {
        "use strict";

        var engine,
            vec2 = KICK.math.Vec2,
            vec3 = KICK.math.Vec3,
            quat = KICK.math.Quat;


        function initKick(){
            engine = new KICK.core.Engine('canvas',{
                shadows:false,
                antialias:true,
                enableDebugContext: location.search === "?debug" // debug enabled if query == debug
            });
            var projectLoaded = function(){
                new ChessGame();
            };
            var projectLoadError = function(err){
                debugger;
                console.log(err.stack);
                alert("Error loading KickJS Chess ");
            };
            engine.project.loadProjectByURL("project.json", projectLoaded, projectLoadError);
        }


        initKick();

        window.onFullscreenButton = function onFullscreenButton(){
            if (engine.isFullScreenSupported()){
                engine.setFullscreen(true);
            } else {
                alert("Fullscreen is not supported in this browser");
            }
        }
    });
//YUI().use('tabview','console', "panel", "datatable-base", "dd-plugin",function(Y) {
//    Y.one("#fullscreen").on("click",onFullscreenButton);
//});
