cc.Class({
    extends: cc.Component,

    properties: {
    },

    startGame:function() {
        cc.director.loadScene("Game");
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {},

    start () {

    },

    // update (dt) {},
});
