

class Balon {
  constructor(x, y) {
    this.katmanNo = katmanlar.length
    this.x = x;
    this.y = y;
    this.state = 0;
    this.meyil = 0;
    this.mousedokanıyormu = 0;
    this.parlaklık= 0;
    this.yıvarlak= false
  }
  
  
  sagasolahesapla(){
    this.meyil = 0;
    renktablosu.filter(r => r.renk==this.state)
    .map(r => {
      r.x<this.x ?
      this.meyil-= width/abs(this.x-r.x) :
      this.meyil+= width/abs(r.x-this.x) ;
    })
    return this.meyil
  }
  
  
  
  show(uyanık) {
    this.cerceveyirenklendir(uyanık);
    this.sınırkaydıysaduzelt();
    
    if(this.state==0){              
      fill('black');
    }
    else {
      let renk= (101*this.state)%360

      fill(renk,100,50+40*this.parlaklık)
    }
    rect(this.x, this.y, kutueni, kutueni);
  }
  
  cerceveyirenklendir(uyanık){
    if (tıklanan.includes(this.katmanNo)) {
      stroke("white");          
      strokeWeight(3);
    } else {
      stroke('grey');           
      strokeWeight(2);
    }
  }
  
  sınırkaydıysaduzelt() {
    if (this.x > width-sagbosluk) {     // SINIRI KAYDI MI
      this.x -= width - sagbosluk - solbosluk
    } else if (this.x < solbosluk) {
      this.x += width - sagbosluk - solbosluk
    }
  }
}