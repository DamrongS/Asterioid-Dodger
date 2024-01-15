class PlayerClass
{
    constructor(x, y)
    {
        this.x = x;
        this.y = y;
        this.angle = -135;
        this.upordown = 0;
        this.leftright = 0;
        this.speed = 5;
        this.maxSpeed = 5;
        this.realsize = 20;
        this.maxHealth = 1000;
        this.health = 1000;
        this.heal = 0;
        this.loseHealth = 1000;
        this.shield = false;
        this.shieldDebounce = false;
        this.maxStamina = 100;
        this.stamina = 100;
    }

    Show()
    {

        //red
        noStroke();
        fill(252, 134, 134);
        rect(this.x - 50, this.y + 18, 70, 10);

        fill(252, 134, 134);
        rect(this.x - 50, this.y + 36, 70, 10);

        let healthPercentage = constrain(this.health, 0, this.maxHealth) / this.maxHealth;

        let staminaPercentage = constrain(this.stamina, 0, this.maxStamina) / this.maxStamina;

        let innerWidth = 70 * healthPercentage;

        let innerWidth2 = 70 * staminaPercentage;

        //green
        fill(144, 255, 79);
        rect(this.x - 50, this.y + 18, innerWidth, 10);

        //blue
        fill(0, 0, 255);
        rect(this.x - 50, this.y + 36, innerWidth2, 10);

        fill(100);
        textAlign(CENTER)

        text("Health: "+int(this.health)+"/"+this.maxHealth,this.x - 15, this.y + 27)
        text("Stamina: "+int(this.stamina)+"/"+this.maxStamina,this.x - 15, this.y + 45)

        push();
        translate(this.x += this.leftright * this.speed,this.y += this.upordown * this.speed)
        this.angle = lerp(this.angle, -135, 0.1);
        rotate(this.angle)
        imageMode(CENTER);
        image(rocketImg,0,0,75,75)

        if(this.shield)
        {
            image(shieldImg, 0, 0, 100, 100);
            this.stamina -= 0.5;
            if(this.stamina < 0)
            {
                this.shield = false;
            }
        }

        pop();



        this.Movement();

        this.Heal();

        if(this.health < 0)
        {
            Reset();
        }

    }

    Heal()
    {
        this.heal += 1;
        if(this.heal > 60)
        {
            if(this.health < this.maxHealth)
            {
                this.health += 20
            }
            if(this.stamina < this.maxStamina && this.shield == false)
            {
                this.stamina += 20;
            }
            this.heal = 0;
        }
    }

    Movement()
    {
        console.log(keyCode);

        if(keyIsDown(27))
        {
            Reset();
        }

        if(keyIsPressed && keyCode == 32)
        {
            if(this.shieldDebounce == false && this.stamina > 0)
            {
                this.shieldDebounce = true;
                this.shield = !this.shield;
            }
        }
        else
        {
            this.shieldDebounce = false;
        }

        if (keyIsDown(40))
        {
            this.upordown = 1;
            this.angle = lerp(this.angle, -180, 0.2);
        }
        else if (keyIsDown(38))
        {
            this.upordown = -1;
            this.angle = lerp(this.angle, -90, 0.2);
        }
        else
        {
            this.upordown = 0;
            this.angle = lerp(this.angle, -135, 0.2);
        }

        if (keyIsDown(37))
        {
            this.leftright = -1;
        }
        else if (keyIsDown(39))
        {
            this.leftright = 1;
        }
        else
        {
            this.speed = lerp(this.speed, 5, 0.5);
            this.leftright = 0;
        }

        if(this.x + this.realsize > width)
        {
            this.x = width - this.realsize
        }
        if(this.x - this.realsize < 0)
        {
            this.x = this.realsize;
        }
        if(this.y + this.realsize > height)
        {
            this.y = height - this.realsize
        }
        if(this.y - this.realsize < 0)
        {
            this.y = this.realsize
        }

    }

}