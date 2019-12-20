( English description below     )
( Project Name: Arranging Layers)


# NE YAPAR ?                                

Aynı renkteki kareler, dikeyde hizalanır. Hizalanan katman kendi de uyarılmış duruma geçer, diğerlerini hizalar. Katmanlar isimlendirilebilir.

![Alt Text](images/EK1.jpg?raw=true "EkranKesiti")

![Alt Text](images/EK2.jpg?raw=true "EkranKesiti")


## Örnek Kullanım
Renkleri temizleyin. Girdi kısmına "hayvan kedi köpek" yazın. hayvan-kedi için herhangi birer kareyi orta tıkla kırmızıya boyayın , hayvan-köpek için de herhangi iki kareyi orta tıkla maviye boyayın. Sonra kedi'ye tıklayın. Kedinin önce hayvanı, sonra köpeği çağrıştırdığını göreceksiniz.

## Kullanıcı Etkileşimi

1. Fare Sol Tık:    Katmanı uyanık duruma geçirir.
2. Fare Tekerlek:   Katmanı sağa sola hareket ettirir.
3. Fare Orta Tık:   Karenin rengini değiştirir.

## Geliştirici Notları

#### NAKARATLAR :                            (05-2018) (12-2019) 

    33    space ile pause eklendi
    32    renktablosu array[objects]
    31    2-66'ya kadar renkTablosu dönüştürüldü
    30    son ufak debuglar
    29    Karıştır butonu eklendi

#### İLERİSİ İÇİN :

Kodun Evrimsel Gelişimi şu şekilde olabilir :
1. Öncelikle belli bir cüzzi iradeye sahip nöronlar genel mutluluğu gözlemleyerek ufak değişiklikler yaparak mutluluğu nasıl değiştirdiklerine bakabilirler. A takımından B takımına geçen bir nöron A'daki ve B'deki mutluluğun yükseldiğini gördüğünde iki Takım için de iyi birşey yaptığına anlamış olur misal. 

Bu metodta önemli nokta çakışan hareketler yapmamak. Gerçek zamanlı olmadığı gibi bir de saat sinyaline bağlı nöronlarda flip flop gibi birbiriyle yarışan durumlar görülebilir. Yine cevaplanması gereken bir soru nöron B takımına geçtiğinde sadece B'nin kaptanının mutluluğuna mı bakacak yoksa herkesin genel mutluluğunu mu averajlamaya çalışacak mı?

2. İkinci evrimsel aşama, tek bir nöronun SEÇİM yasalarını yazmak olabilir. Hepsinin aynı anda sağa sola zıpladığı modelde iyileştirme yapmaya çalışmak yerine bu kez bir tanesi iyileştirilip onun özelliklerini diğerlerine kopyalamış olurum. Ondan sonra da sürekli-güncellenim (continuous integration) problemleri ele alınır.

3. Neticeyi akıldan çıkarmamak gerekiyor. Bu yazılım zeki insanları birbirine bağlamak için bilgisayar oyunlarına bir alternatif olacak. "Öyle şey olur mu?" => "Olmadı mı, sosyal medyada vakit geçiren gençlerin sayısı bilgisayar oynayanları bilgisayar programlayanları sollamadı mı? Bal gibi olur. İnsanlar birbirlerini tanımak istiyor ama bunu minimum problem ve kayıp yaşayarak maksimum uygunlukla sağlamak istiyorlar. Doğru insanların doğru fikirlerde duygularda buluşması da bir tür Birleşik Zeka zaten. Benim yapacağım buna elverişli bir arayüz ve arka harezmiler tasarlamak.




# FOR WHAT ?

Squares of the same color gets vertically aligned. Aligned layer itself becomes in agitated state, and tries to align others as well. The layers can be labeled.

![Alt Text](images/EK1.jpg?raw=true "EkranKesiti")

![Alt Text](images/EK2.jpg?raw=true "EkranKesiti")


## Example Usage
Clear the squares by the "Temizle" button. Enter text "animal cat dog". For animal-cat layers color any each square to red with middle mouse click. For animal-dog layers color any each square to blue. Now click on cat layer and observe cat agitates animal first and animal agitates dog last.


## User IO

1. Mouse Left Click:    Agitate any layer
2. Mouse wheel:         Shift the layer to left right
3. Mouse Middle Click:  Changes the color of square