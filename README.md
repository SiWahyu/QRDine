# QR Dine Frontend

Frontend aplikasi **QR Dine** yang dibuat menggunakan React. Aplikasi ini digunakan oleh customer untuk melakukan scan QR Code meja, melihat daftar menu, membuat pesanan, dan melakukan pembayaran secara online.

> **Catatan**
>
> Project ini membutuhkan **QRDine-Backend (Laravel API)** agar seluruh fitur dapat berjalan dengan baik.
>
> **Repository Backend:**  
> https://github.com/SiWahyu/QRDine-Backend.git

---

## Fitur

- Scan QR Code meja
- Validasi token meja
- Menampilkan informasi restoran
- Menampilkan nomor meja
- Daftar menu berdasarkan kategori
- Menambahkan menu ke keranjang
- Mengubah jumlah pesanan
- Menghapus pesanan dari keranjang
- Mengisi informasi customer
- Halaman pembayaran

---

## Tech Stack

- React
- React Router
- TanStack Query
- Zustand
- React Hook Form
- Zod
- Axios
- Tailwind CSS
- Shadcn UI
- Lucide React

---

## Requirement

Sebelum menjalankan frontend, pastikan backend QR Dine sudah berjalan.

Backend Repository:

https://github.com/SiWahyu/QRDine-Backend.git

Frontend mengambil seluruh data melalui REST API Laravel, seperti:

- Informasi restoran
- Daftar menu
- Kategori
- Data meja
- Checkout
- Payment

---

## Menjalankan Backend

1. Clone repository backend.

```bash
git clone https://github.com/SiWahyu/QRDine-Backend.git
```

2. Masuk ke folder project.

```bash
cd QRDine-Backend
```

3. Install dependency.

```bash
composer install
```

4. Copy file environment.

```bash
cp .env.example .env
```

5. Generate application key.

```bash
php artisan key:generate
```

6. Atur koneksi database pada file `.env`.

7. Jalankan migrasi database.

```bash
php artisan migrate
```

8. Jalankan server Laravel.

```bash
php artisan serve
```

Secara default backend berjalan di:

```
http://127.0.0.1:8000
```

---

## Menjalankan Frontend

1. Clone repository frontend.

```bash
git clone https://github.com/SiWahyu/QRDine.git
```

2. Install dependency.

```bash
npm install
```

3. Buat file `.env`.

```env
VITE_API_HOST=http://127.0.0.1:8000
VITE_API_PORT=8080
```

4. Jalankan development server.

```bash
npm run dev
```

---

## Database

Project ini menggunakan **MySQL** yang dikelola melalui backend Laravel.

Frontend tidak berkomunikasi langsung dengan database, tetapi menggunakan REST API untuk mengambil dan mengirim data.

---

## Struktur Fitur

```text
src/
└── features/
    ├── cart
    ├── category
    ├── menu
    ├── payment
    ├── restaurant
    ├── scanner
    └── table
```

---

## Todo

### Customer

- ✅ Scan QR Code meja
- ✅ Validasi QR Code meja
- ✅ Menampilkan informasi restoran
- ✅ Menampilkan nomor meja
- ✅ Melihat daftar menu
- ✅ Menambahkan menu ke keranjang
- ✅ Mengubah jumlah pesanan
- ✅ Menghapus pesanan
- ✅ Mengisi informasi customer
- ⏳ Integrasi Midtrans
- ⏳ Layar antrian pesanan
- ⏳ Riwayat pesanan

### Admin

- ⏳ Dashboard admin
- ⏳ Manajemen restoran
- ⏳ Manajemen kategori
- ⏳ Manajemen menu
- ⏳ Manajemen meja
- ⏳ Manajemen pesanan

### Kitchen

- ⏳ Dashboard dapur
- ⏳ Update status pesanan
