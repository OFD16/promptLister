# promptLister
 This is basic script project


# Getting Started

*1- Node.js Kurulumu:* İlk adım, Node.js'i bilgisayarınıza kurmaktır. Node.js, JavaScript'i sunucu tarafında çalıştırmanıza olanak tanır. Node.js'i resmi web sitesinden indirebilir ve kurabilirsiniz.

*2- Proje Dizinini Oluşturma:* Bir proje dizini oluşturun ve bu dizine geçin. Konsol (terminal) kullanarak aşağıdaki komutu kullanabilirsiniz:

```
mkdir excel-projesi
cd excel-projesi
```

*3- Yeni Bir Node.js Projesi Oluşturma:* Projeyi başlatmak için aşağıdaki komutu kullanarak bir package.json dosyası oluşturun:
```
npm init -y
```

*4- xlsx Kütüphanesini Eklemek:* Excel dosyasını işlemek için xlsx kütüphanesini projenize ekleyin. Bu kütüphane, Excel dosyaları ile etkileşim kurmanızı sağlar:
```
npm install xlsx
```

*5- Kodunuzu Oluşturma:* Bir metin düzenleyici (örneğin, Visual Studio Code) kullanarak projenizin ana dizininde bir JavaScript dosyası (örneğin, app.js) oluşturun ve aşağıdaki kodu içine yapıştırın:

```
const XLSX = require('xlsx');

// Excel dosyasını okuyun
const dosyaAdi = 'veriler.xlsx';
const workbook = XLSX.readFile(dosyaAdi);

// Çalışma sayfasını seçin (örneğin, "Sheet1")
const sayfaAdi = 'Sheet1';
const sayfa = workbook.Sheets[sayfaAdi];

// Verileri alın
const veriler = XLSX.utils.sheet_to_json(sayfa);

// Verileri görüntüle
veriler.forEach(veri => {
  console.log(veri);
});
```

*6- Excel Dosyasını Eklemek:* veriler.xlsx adında bir Excel dosyası oluşturun veya mevcut bir Excel dosyasını projenizin ana dizinine ekleyin.

*7- Projeyi Çalıştırma:* Terminalde projenizin ana dizinindeyken aşağıdaki komutu kullanarak projenizi çalıştırabilirsiniz:

```
node app.js
````


Bu komut, app.js dosyasını çalıştırarak Excel dosyasındaki verileri konsola yazdırmalıdır.

Bu adımları izleyerek, JavaScript kullanarak Excel dosyasından veri alabilen bir projeyi başlatmış olmalısınız. İhtiyacınıza göre kodu özelleştirebilir ve Excel dosyasındaki verileri kullanarak istediğiniz işlemleri gerçekleştirebilirsiniz.```