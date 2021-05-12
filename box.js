class box1
{
	constructor(x,y,w,h)
	{
		var options={
			isStatic:true,
			restitution :0,
            friction :1,			
		}
		this.x=x;
		this.y=y;
		this.w=w
		this.h=h
		this.body=Bodies.rectangle(x, y, w, h, options);
 		World.add(world, this.body);
	}

    display()
	{
		var boxPos=this.body.position;		
		push()
		translate(boxPos.x, boxPos.y);		
		rotate(this.body.angle)
		rectMode(CENTER)
		//ellipseMode(CENTER);
        rect(0,0,this.w, this.h);
		pop()			
	}
}
