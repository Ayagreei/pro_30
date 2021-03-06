class Octogon{
    constructor(x,y,width,height){

        var options ={
            isStatic : false
        }
     
        this.body = Bodies.polygon(x, y, width, height, (options));
        World.add(world,this.body);
        this.width = width;
        this.height =height;
        this.image = loadImage("octagon.png");
       // this.image.resize(20,20);
    }
    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,50,50);
    }
}