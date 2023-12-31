/* 

    #############################################################
      
          @@@@@@@@@@    &&&&&&&&&&&&&&&&&&&    %%%%%%%%%%

(   By ~Aryan Maurya Mr.perfect https://amsrportfolio.netlify.app  )

          @@@@@@@@@@    &&&&&&&&&&&&&&&&&&&    %%%%%%%%%%

    #############################################################

*/

onload = setup_audio;

var TOUCH_ENABLED = false;
var LANDSCAPE_MODE = true;
var CLICK_TO_SHOOT_MODE = false;

function main() {
    $("banner").style.display = "none";
    $("cnvs").style.display = "block";
    if ($("enableTouchControl")) {
        TOUCH_ENABLED = !!$("enableTouchControl").checked;
    }
    if ($("enableLandscapeMode")) {
        LANDSCAPE_MODE = !!$("enableLandscapeMode").checked;
    }
    if ($("clickToShootMode")) {
        CLICK_TO_SHOOT_MODE = !!$("clickToShootMode").checked;
    }
    // setup_audio();
    // setTimeout(game_main, 250);
    document.body.requestFullscreen().then(game_main).catch(game_main);
    // game_main();
}

var SOUND_POOL;

function setup_audio() {
    let _baseUrl = "https://prashanthkumar0.github.io/Center-Or-Death-2/";
    let auds = [
        new Sound("tank_fire", _baseUrl + "Audio/SFX/fire-magic.mp3"),
        new Sound("tank_barrel", _baseUrl + "Audio/SFX/nozzle_turn.mp3"),
        new Sound("tank_move", _baseUrl + "Audio/SFX/tank-engine-loop.mp3"),
        // new Sound("enemy_destroy", _baseUrl + "Audio/SFX/big-impact.mp3"),
        new Sound(
            "enemy_destroy",
            _baseUrl + "Audio/SFX/heavy-beam-weapon-7052.mp3"
        ),
        new Sound("wall_collide", _baseUrl + "Audio/SFX/kick-tech-5825.mp3"),
        new Sound(
            "tank_destroyed",
            _baseUrl + "Audio/SFX/transmission-activated.mp3"
        ),
        new Sound("tank_angry", _baseUrl + "Audio/SFX/plasma-gun-power.mp3"),

        new Sound(
            "bgm_main",
            _baseUrl + "Audio/Music/geovane-bruno-game-amp-action-2205.mp3" //from pixabay
        ),
    ];

    SOUND_POOL = new SoundPool(
        auds,
        on_audio_loaded_callback,
        on_audio_progress_callback
    );
}

function on_audio_progress_callback(numLoaded, totalSounds) {
    $("loadStatus").innerHTML +=
        "Loaded Audio :" + numLoaded + " / " + totalSounds + "<br>";
}

function on_audio_loaded_callback() {
    $("loadStatus").innerHTML += "all Done.. <br> initializing the game";
    setTimeout(function () {
        $("loader").style.display = "none";
        $("banner").style.display = "block";
    }, 400);
}


/* 

    #############################################################
      
          @@@@@@@@@@    &&&&&&&&&&&&&&&&&&&    %%%%%%%%%%

(   By ~Aryan Maurya Mr.perfect https://amsrportfolio.netlify.app  )

          @@@@@@@@@@    &&&&&&&&&&&&&&&&&&&    %%%%%%%%%%

    #############################################################

*/