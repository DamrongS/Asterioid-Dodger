class AsteroidClass
{
    constructor(x, y, d, speed)
    {
        this.x = x;
        this.y = y;
        this.d = d;
        this.speed = speed;
        this.damage = (this.d * (this.speed * this.speed)) / 10
        this.hasHit = false;
        this.angle = 0;
    }

    Show()
    {
        fill(100);
        imageMode(CENTER)
        
        this.angle += 1

        if(this.angle > 360)
        {
            this.angle = 0;
        }

        push()
        translate(this.x, this.y)
        rotate(this.angle)
        image(asteroidImg, 0, 0, this.d, this.d)
        pop()
        this.x += this.speed;
        this.Bounds();
        if(dist(this.x, this.y, player.x, player.y) < this.d + 5 && player.shield == false)
        {
            if(this.hasHit == false)
            {
                this.hasHit = true;
                player.loseHealth = player.health - this.damage * 5;
                player.health = lerp(player.health, player.loseHealth, 0.1);
                console.log(this.damage);
            }
        }
    }

    Bounds()
    {
        if(this.x > width + this.d)
        {
            this.x = -10 - this.d;
            this.y = random(0,height);
            this.speed = random(5,10)
            this.d = random(15,40);
            Level += 0.1;
            this.hasHit = false;
            if(Level < 5)
            {
                for(let asteroid = 0; asteroid < Level * 2; asteroid += 10)
                {
                    asteroids.push(new AsteroidClass(this.x, random(0,height), random(15,40), random(5,10)));
                }
            }
        }
    }

}