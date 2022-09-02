class Box {
    
    constructor(x, y, w, h){
        let options = {
            isStatic:false,
        };
        
        this.body = Bodies.rectangle(x, y, w, h, options);
        this.w = w;
        this.h = h;

        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        push();
        rectMode(CENTER);
        fill("gray");
        rect(pos.x, pos.y, this.w, this.h);
        pop();
    }
}