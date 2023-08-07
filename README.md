# BetterSocial Test

Buatlah sebuah sistem backend untuk seorang user melakukan pendaftaran ke aplikasi. Sistem
backend ini terdiri atas API dan Database.
Saat melakukan registrasi terdapat ketentuan sebagai berikut (lampiran gambar hanya sebagai
visualisasi):
1. User diharuskan memasukkan username, username hanya boleh terdiri dari huruf dan
angka (alphanumeric), tidak boleh terdapat simbol di dalamnya, dan setiap username
adalah unik.
2. User dapat mengunggah gambar sebagai profile picture (optional)
3. Buatlah validasi dari semua API yang dikerjakan
4. Buatlah dokumentasi dari semua API yang dikerjakan (Postman, Swagger, atau yang
lainnya)
5. Buatlah unit test dan integration testnya, menggunakan Postman lebih disukai

## Requirements

This project is developed with:

- Node 18 LTS
- PostgreSQL 15

## Installation

Clone the project

```bash
git clone git@github.com:appleinautumn/bettersocial-test-firdaus.git
```

Go to the project directory

```bash
cd bettersocial-test-firdaus
```

This service contains a `.env.example` file that defines environment variables you need to set. Copy and set the variables to a new `.env` file.

```bash
cp .env.example .env
```

Start the app

```bash
npm run dev
```

## API Documentation

https://documenter.getpostman.com/view/3021947/2s9XxzuCmZ

## Database

If you have not created the database, please create one before going to the next step.

This microservice depends on `sequelize-cli` package. To install globally
```
npm install -g sequelize-cli
```

### Running Migrations

Run database migration
```
sequelize db:migrate
```

### Running Seeds

No seeds because this API is only for registration.

## Testing

Test the service

```bash
npm test
```

Example
```bash
$ npm run test

> bettersocial-test@0.0.0 test
> NODE_ENV=test mocha --timeout 10000 --exit './test/**/*.test.js'



  API Controller Unit Test
    Test createUser method
      ✔ should register a user

  User Repository Unit Test
    ✔ tests create method

  User Service Unit Test
    ✔ tests create method (197ms)

```