
# DynamoDB ile CRUD İşlemleri

Bu projede Amazon DynamoDB'de oluşturulan "Product" adlı tabloya veri ekleme, veri çekme
, veri güncelleme, veri silme, belli bir özelliğe göre veri çekme ve ID'ye göre veri çekme
işlemleri yapılmıştır. Veri tabanlıyla ilgili işlemler "services" katmanında yazılmıştır. 

DynamoDB'de veri eklemek için "put" fonksiyonu, tüm verileri çekmek için "scan" fonksiyonu,
veri güncellemek için "update" fonksiyonu, veri silmek için "delete" fonksiyonu kullanılmaktadır.
ID'ye göre veri çekmek için "Key" özelliği kullanılıyor. Belirli bir özelliğe göre filtreleme
yapmak içinse yine "scan" fonksiyonu kullanılıyor. "scan" fonksiyonuyla beraber "FilterExpression"
özelliğini de kullanmak gerekiyor. Fazlaca veriye sahip olan tablolarda filtremele işlemi için 
"scan" fonksiyonu kullanılması önerilmemektedir. Çünkü "scan" fonksiyonu tablodaki tüm verileri getirdikten
sonra filtreleme işlemi yapmaktadır. Bu da yavaşlığa neden olmaktadır.

Yukarıda açıklanan fonksiyonları Node.JS'de kullanabilmek için "aws-sdk" paketini projeye eklememiz 
gerekmektedir. 

```npm i aws-sdk```


# NoSQL ve SQL arasındaki Farklar

Bu iki kavramın arasındaki farklardan bahsetmeden önce ne anlama geldiklerinden bahsedelim.
SQL yani "Structured Query Language" verileri yönetmek ve tasarlamak için kullanılan bir dildir.
SQL ile ilişkisel veri tabanlarını oluşturabilir, oluşturulan veri tabanından veri çekilebilir.
NoSQL ise aslında "Not Only SQL" açılımının kısaltılmışıdır. Yani sadece SQL'den ibaret değildir.
NoSQL, ilişkisel veritabanlarının eksiklerini gidermek amacıyla ortaya çıkmış yeni ve bir hayli geniş bir olgudur.



| **SQL** | **NoSQL**     | 
| :-------- | :------- |
| SQL veritabanları esas olarak ilişkisel veritabanıdır (RDBMS). |NoSQL veritabanları esas olarak ilişkisel olmayan veya dağıtılmış veritabanlarıdır. |
| SQL veritabanları satır ve sütunlar biçiminde tablo tabanlıdır ve standart şema tanımlarına kesinlikle uymalıdır. Çok sıralı işlemlere ihtiyaç duyan uygulamalar için daha iyi bir seçenektir.|NoSQL veritabanları belgelere, anahtar / değer çiftlerine, grafiklere veya sütunlara dayalı olabilir ve standart şema tanımlarına bağlı kalmaları gerekmez. |
| Ölçeklendirme maliyeti yüksektir.|  İlişkisel veritabanlarına kıyasla ölçeklendirmek daha ucuzdur.|
| Hiyerarşik veri depolamaya uygun değildir. | Hiyerarşik veri depolamak ve büyük veri kümelerini depolamak için uygundur (Örn.Büyük Veri). |
| SQL veritabanına yeni veri eklemek, verileri doldurmak, şemaları değiştirmek gibi bazı değişikliklerin yapılmasını gerektirir. |Yeni veriler, önceden herhangi bir adım gerektirmediğinden, NoSQL veritabanlarına kolayca eklenebilir. |
| SQL veritabanları örneği: MySQL, Oracle, MS-SQL, SQLite. | NoSQL veritabanı örnekleri: DynamoDB, MongoDB, Apache CouchDB, Redis, HBase.|
