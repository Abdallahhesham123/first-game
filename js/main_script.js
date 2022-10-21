
function Character( name , strengt , health) {
    
    this.name = name;
    this.strengt = strengt;
    this.health = health;
    this.elements = new UIelements(this.name);



}

function UIelements(name) {

        this.healthStatusprogress = document.querySelector(
          `.container .person .${name}-heath span`
    );
        this.healthStatusprogresscap = document.querySelector(
              `.container .person .${name}-heath p`
            );
    this.attackBtn = document.getElementById(`${name}-attack`);
    this.healthBtn = document.getElementById(`${name}-make-health`);
    this.alive = document.getElementById(`${name}-alive`);
    this.image = document.getElementById(`${name}-img`);
    this.box = document.getElementById(`${name}-box`);
    this.statusBtn = document.getElementById(`${name}-status`);
    this.statushealth = document.querySelector(`.box-${name} .${name}-health`);
    this.statusstrength = document.querySelector(
       `.box-${name} .${name}-strength`
    );
    this.statusbox = document.getElementById(`status-${name}-container`);
}

Character.prototype.attack = function (opponant) {
  // abdallah.attack(amany)
  // console.log("this", this); // abdallah
  // console.log("opponant", opponant); // amany
    if (opponant.health > 0) {
      opponant.health -= this.strengt;
      // console.log(opponant.health);
        opponant.elements.healthStatusprogress.style.width = `${opponant.health}%`;
        opponant.elements.healthStatusprogresscap.innerHTML = `${opponant.health}%`;
         this.elements.healthStatusprogresscap.innerHTML = `${this.health}%`;
      if (opponant.health < 30) {
        opponant.elements.box.classList.add("bg-danger");
      }
    } else {
        setTimeout(function () {
            opponant.elements.image.style.filter = "blur(3Px)";
             opponant.elements.alive.innerHTML = `${opponant.name} is died and looser`;
        },2000)
        opponant.elements.attackBtn.remove();
        opponant.elements.healthBtn.remove();
          opponant.elements.statusBtn.remove();
       
    }
    

}

Character.prototype.status = function () {
    console.log(`name : ${this.name}`)
    console.log(`strenth : ${this.strengt}`);
    console.log(`health : ${this.health} `);

    this.elements.statushealth.innerHTML = `<span style="color:var( --black)">${this.name} Healthy is :</span><p style="color:var(--main-color);">${this.health}</p> `;
    this.elements.statusstrength.innerHTML = `<span style="color:var( --black)">${this.name}  Strength is :</span><p style="color:var(--main-color);">${this.strengt}</p>`;


};
Character.prototype.makeHealth = function () {

    if (this.health < 100) {
        
        this.health += 2;
        this.elements.healthStatusprogress.style.width = `${this.health}%`;
        this.elements.healthStatusprogresscap.innerHTML = `${this.health}%`;
        if (this.health > 30) {
            this.elements.box.classList.remove("bg-danger");

        }
    }

        if (this.health > 100) {
          this.health = 100;
        }
    
    
};
let abdallah = new Character('abdallah', 10, 100);
let amany = new Character('amany', 5, 100);
abdallah.elements.attackBtn.addEventListener("click", function () {
  abdallah.attack(amany);
});
amany.elements.attackBtn.addEventListener("click", function () {
  amany.attack(abdallah);
});

abdallah.elements.healthBtn.addEventListener("click", function () {
  abdallah.makeHealth();
});
amany.elements.healthBtn.addEventListener("click", function () {
  amany.makeHealth();
});

abdallah.elements.statusBtn.addEventListener("click", function () {
    abdallah.elements.statusbox.classList.toggle("d-none");
  abdallah.status();
});
amany.elements.statusBtn.addEventListener("click", function () {
    amany.elements.statusbox.classList.toggle("d-none");
  amany.status();
});