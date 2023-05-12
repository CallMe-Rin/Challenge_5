
# Challenge 5 Cars API

* Repository ini ditujukan sebagai boilerplate dalam membuat sebuah HTTP Server menggunakan Express.js
* Repository ini menggunakan Service Repository Pattern, yang artinya di dalam repository ini terdapat modul model, controller, service, dan repository.


## Getting Started
* Perintah untuk menginstall dependencies yang digunakan
```http
  npm install
```
* Perintah untuk membuat database. Perintah untuk melakukan migrate yang berfungsi untuk membuat atau perubahan pada tabel-tabel di database. Perintah untuk melakukan penambahan data super admin. Perintah untuk melakukan penambahan data super admin.


```
sequelize db:create
sequelize db:migrate
sequelize db:seed:all
```
* Data super admin untuk login
```
email: "rin@superadmin.com",
password: "rin1234"
```
* API Document
```
http://localhost:8000
```
