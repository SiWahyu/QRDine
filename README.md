# QR Dine Frontend

Frontend aplikasi **QR Dine** yang dibuat menggunakan React. Aplikasi ini digunakan oleh customer untuk melakukan scan QR Code meja, melihat menu, membuat pesanan, dan melakukan pembayaran.

> **Catatan**
>
> Project ini membutuhkan **QRDine-Backend (Laravel API)** agar seluruh fitur dapat berjalan dengan baik.
>
> **Repository Backend:**
>
> https://github.com/SiWahyu/QRDine-Backend.git

---

## Fitur

### Customer

- Scan QR Code meja
- Validasi token meja
- Menampilkan informasi restoran
- Menampilkan nomor meja
- Menampilkan daftar menu berdasarkan kategori
- Menambahkan menu ke keranjang
- Mengubah jumlah pesanan
- Menghapus pesanan dari keranjang
- Menambahkan catatan pada pesanan
- Mengisi informasi customer
- Checkout dan membuat pesanan
- Pembayaran cash melalui kasir
- Pembayaran online menggunakan Midtrans
- Realtime notifikasi pembayaran menggunakan Pusher
- Halaman payment success
- Proteksi halaman payment success

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
- Midtrans Snap
- Pusher

---

## Requirement

Sebelum menjalankan frontend, pastikan **QRDine-Backend** sudah berjalan.

Backend Repository:

https://github.com/SiWahyu/QRDine-Backend.git

Frontend mengambil seluruh data melalui REST API Laravel, seperti:

- Informasi restoran
- Daftar menu
- Kategori
- Data meja
- Checkout
- Order
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

6. Atur koneksi database dan konfigurasi aplikasi pada file `.env`.

7. Jalankan migrasi database.

```bash
php artisan migrate
```

8. Jalankan server Laravel.

```bash
php artisan serve
```

Secara default backend berjalan di:

```text
http://127.0.0.1:8000
```

> Pastikan konfigurasi Midtrans dan Pusher pada backend sudah diatur jika ingin menggunakan fitur pembayaran online dan realtime notification.

---

## Menjalankan Frontend

1. Clone repository frontend.

```bash
git clone https://github.com/SiWahyu/QRDine.git
```

2. Masuk ke folder project.

```bash
cd QRDine
```

3. Install dependency.

```bash
npm install
```

4. Buat file `.env`.

```env
VITE_API_HOST=http://127.0.0.1
VITE_API_PORT=8000

VITE_PUSHER_APP_KEY=
VITE_PUSHER_APP_CLUSTER=

VITE_MIDTRANS_CLIENT_KEY=
VITE_MIDTRANS_IS_PRODUCTION=
```

5. Jalankan development server.

```bash
npm run dev
```

---

## Database

Project ini menggunakan **MySQL** yang dikelola melalui backend Laravel.

Frontend tidak berkomunikasi langsung dengan database. Seluruh komunikasi data dilakukan melalui REST API Laravel.

---

## Payment Flow

QR Dine mendukung dua metode pembayaran:

### Cash

```text
Customer
   ↓
Create Order
   ↓
Cash Payment
   ↓
Customer menunjukkan order kepada kasir
   ↓
Kasir melakukan pembayaran
   ↓
Order Paid
   ↓
Realtime notification
```

### Online

```text
Customer
   ↓
Create Order
   ↓
Midtrans Snap
   ↓
Customer melakukan pembayaran
   ↓
Midtrans Webhook
   ↓
Laravel update payment status
   ↓
Pusher notification
   ↓
Payment Success
```

---

## Realtime Payment Notification

QR Dine menggunakan **Pusher** untuk memberikan notifikasi pembayaran secara realtime kepada customer.

Setiap order menggunakan channel khusus:

```text
order.{order_number}
```

Dengan pendekatan tersebut, notification pembayaran hanya diterima oleh customer yang terkait dengan order tersebut.

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
    ├── table
    └── order
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
- ✅ Menambahkan catatan pesanan
- ✅ Mengisi informasi customer
- ✅ Membuat pesanan
- ✅ Pembayaran cash
- ✅ Pembayaran online dengan Midtrans
- ✅ Realtime payment notification dengan Pusher
- ✅ Payment success flow
- ✅ Email receipt
- ⏳ Layar status pesanan
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
- ⏳ Realtime order notification
- ⏳ Update status pesanan
- ⏳ Drag and drop order management
