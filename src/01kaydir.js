let katmanlar=[], renktablosu=[];
const kutuadedi=8; const renkadedi=6;
const kaymaeni=6; const kutueni=36;
const solbosluk=50; const sagbosluk=150;
let paused= false
let girdi, kelimeler=[]
let tıklanan=[]


function setup() {    //katmanları olustur
  createCanvas(innerWidth-30, innerHeight-40);
  colorMode(HSB);
  textSize(25);
  
  girdi = createInput();
  girdi.position(100,20);
  girdi.changed(yenicümle);
  const ekle=     createButton('Katman Ekle').position(girdi.x + girdi.width+5, 20).mousePressed(boskatmanekle);
  const karıştır= createButton('Karıştır').position(ekle.x + ekle.width+5, 20).mousePressed(xlerikarıstır);
  const temizle=  createButton('Temizle').position(karıştır.x+karıştır.width+5,20).mousePressed(hepsiniyıka);
  createButton('RasgeleRenkle').position(temizle.x+temizle.width+5,20).mousePressed(rasgeleboya);
  
  boskatmanekle()
  boskatmanekle()
  rasgeleboya()
  rasgeleboya()

  // frameRate(2)
  // setInterval(()=> console.log(renktablosu), 3000)
}

function draw() {     // ESAS DONGU
  background(0);
  for (let k of katmanlar) {
    k.move();
    k.show();
  }
}

function mousePressed() {
  if(mouseButton === LEFT) { soltık(); }
  if(mouseButton === CENTER) { ortatık(); }
}

function mouseWheel(event) {
  if(event.delta<0) { kaydır("sağa"); }  //  YOHARI
  if(event.delta>0) { kaydır("sola"); }  //  ASAGI
}

function keyPressed () {
  if (keyCode == 32) {  //SPACE
    paused= !paused
  }
  if (paused) noLoop()
  else loop()
}

function kaydır(hangitarafa) {
  for (let k of katmanlar) {  // kaydır       
    if ((mouseY>k.y) && (mouseY<k.y+kutueni)) {
      for (let b of k.balonlar) {           
        hangitarafa=="sağa" ? b.x+=kaymaeni : b.x-=kaymaeni ;
      }
      if (k.uyanık>0) k.tıkımBitti()
    }
  }
}


function xlerikarıstır() {
  for (let k of katmanlar) {        //  ÖNCE BUTONLAR
    const offset= floor(random(solbosluk,width-sagbosluk-kutuadedi*kutueni))
    for (let i = 0; i < kutuadedi; i++) {
      k.balonlar[i].x = offset+i*kutueni
    }
  }
}


function soltık() {
  for (let k of katmanlar) {        //  ÖNCE BUTONLAR
    for (let b of k.balonlar) {     // SONRA KUTULAR
      if (abs(mouseY-(b.y+kutueni/2))<kutueni/2) {
        if (tıklanan.includes(k.ID)) {
          tıklanan.splice(tıklanan.indexOf(k.ID),1)
          k.tıkımBitti();       // renk matrisinden çıkar
          k.uyanık= 0;
        } else {
          tıklanan.push(k.ID)
          k.yeniTıklandım();    // renk matrislerine ekle
          k.uyanık= 350;
        }
        return
      }
    }
  }
}


function ortatık() {
  for (let k of katmanlar) {  // boya
    for (let b of k.balonlar) {     
      if ((abs(mouseX-(b.x+kutueni/2))<kutueni/2)&&(abs(mouseY-(b.y+kutueni/2))<kutueni/2)) {
        b.state = (b.state+1)%(renkadedi+1)
        return
      }
    }
  }
}


function rasgeleboya() {
  for (let k of katmanlar) {
    for (let b of k.balonlar) {
      let rendo = floor(random(1,4*renkadedi));
      rendo<=renkadedi ? b.state=rendo : 0;
    }
  }
}

function hepsiniyıka() {
  for (let k of katmanlar) {
    for (let b of k.balonlar) {
      b.state=0;
    }
  }
}

function yenicümle() {
  let s = girdi.value();
  let gelenkelimeler = splitTokens(s, ' ');
  for (var g=0; g<gelenkelimeler.length; g++) {
    if (kelimeler.indexOf(gelenkelimeler[g]) === -1) {
      kelimeler.push(gelenkelimeler[g]);
      let endüks= katmanlar.findIndex(k=> k.kelime== ' ') 
      if (endüks>-1) katmanlar[endüks].kelime= gelenkelimeler[g]
      else katmanlar.push(new Katman(gelenkelimeler[g]))
    }
  }
}

function boskatmanekle() {
  katmanlar.push(new Katman(' '));
  katmanlar.push(new Katman(' '));
  katmanlar.push(new Katman(' '));
  katmanlar.push(new Katman(' '));
}