# Ionic-Framework-ile-Mobil-Uygulama

Ürün satış ilanı verme, satılık ürünleri listeleme ve satılık ürünleri kategorilere göre filtreleme gibi özellikler mevcuttur.

# Kurulum

Terminalden proje dizinine giriniz ve aşağıdaki komutları sırasıyla yazınız.
```
npm install
ionic serve
```
Kurulum tamamlanmıştır ve karşınıza böyle bir pencere açılacaktır.

## Ana Sayfa

![anasayfa](<anasayfa.png>)

## Satılık Ürünleri Listele

Tüm ürünlerin kart şeklinde listelenmiş şekilde görürsünüz.

![satiliklistele](<satiliklistele.png>)

## Satılık Ürünleri Filtrele

Seçtiğiniz kategoriye göre ürünleri kart şeklinde listelenmiş görürsünüz.
Aşağıdaki örnekte saat kategorisine göre filtrelenmiştir.

![filtrelesaat](<filtrelesaat.png>)

## Ürün Sat

Bütün bilgileri eksiksiz olarak girdiğinizde ürünün satılık ilanını vermenize olanak sağlar.

![ürünsat](<ürünsat.png>)

# Not

Projede InMemoryDbService kullanıldığından sayfa her yenilendiğinde database resetlenir.
Bu yüzden sekmeler arası geçiş yapmak için butonları kullanınız.
