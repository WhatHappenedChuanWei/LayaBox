import WebGL = Laya.WebGL;
// 程序入口
class GameMain{
    constructor()
    {
        Laya.init(600,400, WebGL);

      	Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE;
		Laya.stage.alignH = Laya.Stage.ALIGN_CENTER;
		Laya.stage.scaleMode = Laya.Stage.SCALE_FIXED_AUTO;

        var txt = new Laya.Text(); 
        //设置文本内容
        txt.text = "Hello Layabox";  
        //设置文本颜色为白色，默认颜色为黑色
        txt.color = "#ffffff";  
        //将文本内容添加到舞台 
        Laya.stage.addChild(txt);

        txt.on(Laya.Event.CLICK,this,this.onLoaded);
    }
    private onLoaded()
    {
        console.log("点击了Text");
    }
}
new GameMain();