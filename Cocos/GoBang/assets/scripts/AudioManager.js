cc.Class({
    extends: cc.Component,

    properties: {
        winAudio: {
            default: null,
            url: cc.AudioClip
        },
        
        loseAudio: {
            default: null,
            url: cc.AudioClip
        },

        computePlaceAudio: {
            default: null,
            url: cc.AudioClip
        },

        playerPlaceAudio: {
            default: null,
            url: cc.AudioClip
        },

        bgmAudio: {
            default: null,
            url: cc.AudioClip
        },
    },

    playBgmMusic () {
        cc.audioEngine.playMusic(this.bgmAudio, true);
    },

    pauseBgmMusic () {
        cc.audioEngine.pauseMusic();
    },

    _playSFX (clip) {
        cc.audioEngine.playEffect(clip, false);
    },

    playWin () {
        this._playSFX(this.winAudio);
    },

    playLose () {
        this._playSFX(this.loseAudio);
    },

    playComputePlaceChess () {
        this._playSFX(this.computePlaceAudio);
    },

    playPlayerPlaceChess () {
        this._playSFX(this.playerPlaceAudio);
    },
});
