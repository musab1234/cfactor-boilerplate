export default class LoadingAnimationComponent extends Phaser.Group{
    private circleGraphics:Phaser.Graphics;
    constructor(game:Phaser.Game,parent?:PIXI.DisplayObjectContainer){
        super(game,parent);
        let bg:Phaser.Graphics = this.game.add.graphics(0,0,this);
        bg.beginFill(0);
        bg.drawRect(0,0,this.game.canvas.width,this.game.canvas.height);
        bg.endFill();

        this.circleGraphics = this.game.add.graphics(0,0,this);
        this.circleGraphics.beginFill(0x0097D7);

        let radius = this.game.canvas.width * .015;
        this.circleGraphics.drawCircle(0,0,radius * 2);


        let cx = (this.game.canvas.width - radius) / 2;
        let cy = (this.game.canvas.height - radius) / 2;

        this.circleGraphics.x = cx;
        this.circleGraphics.y = cy;

        this.circleGraphics.scale = new PIXI.Point(0,0)
        
        // this.circleGraphics.pivot = new PIXI.Point(.5,.5)
        this.game.add.tween(this.circleGraphics.scale).to({x:1.25,y:1.25},1000,undefined,true,0,1000);
        this.game.add.tween(this.circleGraphics).to({
            x:(this.game.canvas.width - radius) / 2
            ,y:(this.game.canvas.height - radius) / 2,
            alpha:0
        },1000,undefined,true,0,1000);
    }

    update(){
        
        
    }
}