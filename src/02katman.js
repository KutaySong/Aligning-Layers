

class Katman {
  constructor(kelime){
    this.ID= katmanlar.length
    this.kelime= kelime;
    this.y= 100+katmanlar.length*(kutueni+5);
    this.uyanık = 0; // 0 -> uyarılmamış 1+ -> yeni uyarılmış
    this.kaymayonu=0;
    this.balonlar = [];
    const offset= floor(random(solbosluk,width-sagbosluk-kutuadedi*kutueni))
    for (let i = 0; i < kutuadedi; i++) {
      let b = new Balon(offset+i*kutueni, this.y);    // Balon olustur
      this.balonlar.push(b);
    }
  }
  
  move() {
    if (this.uyanık==1) this.tıkımBitti(); // renk matrisinden çıkar
    if (this.uyanık>0) {this.uyanık--;} else if (this.uyanık<0) this.uyanık++;
    if (this.uyanık==0){                  //  OLC-BIC
        
      const tıklıBekleyenler= renktablosu.filter(sütun=> sütun.tıklı==1)
      if (tıklıBekleyenler.length) 
      this.kaykılYapış(tıklıBekleyenler) && this.kaykılYapış(renktablosu)
      else 
      this.kaykılYapış(renktablosu)

      if (this.kaymayonu) {
        for (let b of this.balonlar) {          
          this.kaymayonu>0  ? b.x++ : b.x--   // KAYDIR
          if ((b.meyil>0 && this.kaymayonu>0) || (b.meyil<0 && this.kaymayonu<0))  
          b.yıvarlak= true
          else 
          b.yıvarlak= false
        }
      }                                      
    }
  }
  
  
  kaykılYapış(hangiListe) { 
    this.kaymayonu=0;

    for (let b of this.balonlar) {
      if (b.state) {
        // renktablosu[0] = {renk:1, kim:5, x:307, tıklı:0 }
        const çakışan= hangiListe.find(r => r.renk==b.state && r.x==b.x)
        if (typeof çakışan != "undefined") {
          // parlat
          katmanlar[çakışan.kim].balonlar.filter(diğerb=> !diğerb.parlaklık && diğerb.x==b.x && diğerb.state==b.state)
          .map(diğerb=> diğerb.parlaklık= 1)
          b.parlaklık=1 ;
          // tabloya ekle
          this.balonlar.filter(b=>b.state&&!b.parlaklık)
          .map(b=> renktablosu.push({renk:b.state, kim:this.ID, x:b.x, tıklı:0}))
          this.uyanık<200 ? this.uyanık=200 : 0
          return true
        } else {
          this.kaymayonu += b.sagasolahesapla()    
        } 
      }
    }
    return true
  }
  
  yeniTıklandım() { // fareyle fiziken
    this.uyanık= 200;
    for (let b of this.balonlar) {
      if (b.state && !b.parlaklık) {
        renktablosu.push({renk:b.state, kim:this.ID, x:b.x, tıklı:1})
      }
    }
  }
  
  
  tıkımBitti() {
    this.uyanık=-100;     // yorul ki uyardıkların seni tekrar uyarmasın
    renktablosu= renktablosu.reduce((h,sütun)=> (sütun.kim==this.ID && h.push(sütun) ,h),[])
    for (let b of this.balonlar) {
      if (b.state!=0) { 
        b.parlaklık=0
      }
    }
    const endeks= tıklanan.indexOf(this.ID)
    if(this.ID>-1) tıklanan.splice(endeks,1)
  }
  
  
  show() {              //  Balonlar ve kelime
    for (let b of this.balonlar) {
      b.show(this.uyanık);
    }
    fill('white');
    text(this.kelime,solbosluk+3*kutuadedi*kutueni, this.y+kutueni);  // KELIMEYI GOSTER
  }
}