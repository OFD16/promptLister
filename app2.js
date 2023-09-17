const XLSX = require('xlsx');

// Excel dosyasını okuyun
const dosyaAdi = 'veriler.xlsx';
const workbook = XLSX.readFile(dosyaAdi);

// Çalışma sayfasını seçin (örneğin, "Sheet1")
const sayfaAdi = 'Patterns';
const sayfa = workbook.Sheets[sayfaAdi];

const promptListesi = [];

// Verileri alın
const veriler = XLSX.utils.sheet_to_json(sayfa);

var i = 0;
// Verileri görüntüle
veriler.forEach((veri, index) => {
  // `__EMPTY` anahtarına sahip değeri alın
  const emptyValue = veri['__EMPTY'];

  // Eğer `__EMPTY` anahtarı boş değilse, listeye ekleyin
  if (emptyValue !== undefined && emptyValue !== null && emptyValue.trim() !== '') {
    promptListesi.push(i + '- ' + emptyValue + "\n");
    i++;
  }
});

// Listeyi görüntüle
// console.log('promptListesi', promptListesi);


const fs = require('fs');

// Dosyaya yazmak istediğiniz metin dosyasının adını belirtin
const promptListesiTxt = 'promptListesiPatterns.txt';

// promptListesi dizisini satır satır metin dosyasına yazın
fs.writeFileSync(promptListesiTxt, promptListesi.join('\n'), 'utf-8');

console.log(`Veriler "${promptListesiTxt}" dosyasına yazıldı.`);
