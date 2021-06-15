## Burger Builder

3 farklı malzemeyle bir hamburger oluşturabildiğimiz bu küçük projede context-api pratiği yapacağız.

<p align="center">
  <img src="/burger-builder.png" alt="burger-builder"/>
</p>

### Proje Nasıl Çalıştırılır

- Projeyi fork'ladıktan ya da indirdikten sonra projenin bulunduğu klasörde "npm install" komutu ile gerekli paketlerin yüklenmesi gerekiyor.
- Daha sonra "npm run start" komutu ile uygulama başlatılabilir.

### Proje Hakkında

Menüden eklenen bütün malzemeleri tutabilmek için HamburgerContext içerisinde useState hook'u ile bir array oluşturulmuştur. Seçilen malzemeleri barındıran bu array kullanılarak getCalculatedTotalPrice fonksiyonu ile malzemelerin fiyatlarına göre toplam tutar hesaplanmaktadır. HamburgerContext içerisinde tanımlanan seçilen malzemeler state'i ve getCalculatedTotalPrice fonksiyonu gerekli component'lerde kullanılmak üzere HamburgerContext.Provider içinde value olarak geçilir. Menu ve Burger component'leri useContext hook'u sayesinde value olarak geçilen değerlere erişebilir.

Not: Malzeme çeşitleri ve fiyatlar ingredients.js içerisindedir.

### Yapılacaklar

Belirtilen yerlerdeki eksikleri tamamlayınız.

1. HamburgerContext içerisinde tanımlanan gerekli state'i value prop'u ile dışarıya aktarınız.
2. Menu.js component'i içerisinde HamburgerContext'ten gelecek olan gerekli state'i ekleyiniz.
3. Menu.js component'i içerisinde handleRemoveIngredient adlı fonksiyonun içerisindeki ingredients değişkenini doğru state değeri ile eşitleyiniz.
4. Burger.js component'i içerisinde HamburgerContext'ten gelecek olan gerekli state'i ekleyiniz.
5. index.js içerisinde tüm uygulamayı context provider component'i ile sarmalayınız.
