class Block{
constructor(x,y,width,height){
    var options ={
        isStatic : false
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
 // this.Visibility = 255;
}
display(){
    if (this.body.speed < 3)  {
        var pos = this.body.position;
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);
    }
    else{
        push();
        this.Visibility = this.Visibility - 5
        tint(255,this.Visibility)
        rect(9999,9999,this.width,this.hight);
        pop();
    }
}
}