
# โปรเจกต์ thxkshop

## ภาพรวม
โปรเจกต์นี้ประกอบด้วย 3 ส่วนหลัก:
1. **Frontend**: เว็บไซต์สำหรับผู้ใช้งาน สร้างด้วย React, Vite, และ Tailwind CSS
2. **Admin Panel**: แดชบอร์ดสำหรับจัดการสินค้า ผู้ใช้ คำสั่งซื้อ และการตั้งค่าเว็บไซต์ (สร้างด้วย React)
3. **Backend**: เซิร์ฟเวอร์ Express.js พร้อมฐานข้อมูล MySQL ใช้จัดการระบบล็อกอิน สินค้า คำสั่งซื้อ การตั้งค่าเว็บไซต์ และหน้าเนื้อหา

---

## วิธีติดตั้ง

### ✅ Frontend
1. เข้าไปที่โฟลเดอร์ `frontend`
2. ติดตั้ง dependencies:  
   ```bash
   npm install
   ```
3. สร้างไฟล์ `.env` โดยอ้างอิงจาก `.env.example`  
   (เช่น เพิ่ม `REACT_APP_RECAPTCHA_SITE_KEY`)
4. เริ่มเซิร์ฟเวอร์พัฒนา:  
   ```bash
   npm run dev
   ```

### ✅ Admin Panel
1. เข้าไปที่โฟลเดอร์ `admin`
2. ติดตั้ง dependencies:  
   ```bash
   npm install
   ```
3. สร้างไฟล์ `.env` (อ้างอิงจาก `.env.example` หากมี)
4. เริ่มใช้งานแดชบอร์ดแอดมิน:  
   ```bash
   npm run dev
   ```
   🔐 หน้าเข้าสู่ระบบแอดมินอยู่ที่ `/admin/login`

### ✅ Backend (Express.js + MySQL)
1. เข้าไปที่โฟลเดอร์ `backend`
2. ติดตั้ง dependencies:  
   ```bash
   npm install
   ```
3. สร้างไฟล์ `.env` โดยใช้ `.env.example` เป็นต้นแบบ  
   (กำหนดตัวแปรเช่น `JWT_SECRET`, `DB_USER`, `RECAPTCHA_SECRET_KEY` เป็นต้น)
4. นำเข้า `schema.sql` ลงในฐานข้อมูล MySQL ของคุณ
5. เริ่มเซิร์ฟเวอร์ backend:  
   ```bash
   npm start
   ```

---

## API ที่มีให้ใช้งาน

### 🔐 Authentication
- `POST /api/auth` – ล็อกอินหรือสมัครสมาชิก (ผู้ใช้ทั่วไป)
- `POST /api/admin/login` – ล็อกอิน (สำหรับแอดมิน)
- `GET /api/admin/me` – รับข้อมูลผู้ดูแลระบบที่ล็อกอิน

### 🛍️ Products
- `GET /api/products` – รับรายการสินค้าทั้งหมด
- `POST /api/products` – เพิ่มสินค้าใหม่
- `PUT /api/products/:id` – แก้ไขสินค้า
- `DELETE /api/products/:id` – ลบสินค้า

### 🧾 Orders
- `POST /api/orders` – สร้างคำสั่งซื้อ
- `GET /api/orders` – ดูคำสั่งซื้อ (ใช้ได้กับผู้ใช้และแอดมิน)

### ⚙️ Site Settings
- `GET /api/config` – ดึงค่าตั้งค่าเว็บไซต์ (ชื่อ โลโก้ สีธีม)
- `PUT /api/config` – อัปเดตค่าการตั้งค่า

### 📄 หน้าเนื้อหา (Terms, Privacy, Contact)
- `GET /api/content/:slug` – ดึงข้อมูลหน้าข้อตกลง ความเป็นส่วนตัว หรือการติดต่อ
- `PUT /api/content/:slug` – แก้ไขเนื้อหาหน้าเหล่านี้ผ่านแอดมิน

### ✅ reCAPTCHA
- `POST /api/verify-captcha` – ตรวจสอบ Google reCAPTCHA Token

### 💳 การชำระเงิน (QR Payment จำลอง)
- `GET /api/payment/qr` – สร้าง QR Code จำลองไว้รอเชื่อมต่อระบบชำระเงินจริงในอนาคต

---

## หมายเหตุ
- ระบบล็อกอินใช้ JWT (JSON Web Token)
- มีการใช้งาน Google reCAPTCHA ในหน้า "สมัครสมาชิก" และ "เข้าสู่ระบบ" เพื่อป้องกันบอท
- แอดมินสามารถ:
  - แก้ไขสินค้า
  - จัดการคำสั่งซื้อ
  - ปรับแต่งเว็บไซต์ (ชื่อ สี โลโก้)
  - แก้ไขเนื้อหาหน้าข้อตกลง/ความเป็นส่วนตัว/ติดต่อ
- มีระบบชำระเงินแบบ QR ที่สามารถพัฒนาเชื่อมต่อ API จริงได้ภายหลัง

---

## โครงสร้างโฟลเดอร์
```
thxkshop/
├── frontend/        # เว็บไซต์ผู้ใช้งาน (React + Vite + Tailwind)
├── admin/           # Dashboard สำหรับแอดมิน
├── backend/         # Express.js API + MySQL
│   ├── schema.sql   # ไฟล์สร้างฐานข้อมูล
│   └── .env.example
└── README.md
```

---

## การรันโปรเจกต์ทั้งหมด (แนะนำรัน 3 ส่วนนี้พร้อมกัน)
1. Frontend: `npm run dev` ที่โฟลเดอร์ `frontend`
2. Admin Panel: `npm run dev` ที่โฟลเดอร์ `admin`
3. Backend: `npm start` ที่โฟลเดอร์ `backend`

---

ขอให้สนุกกับการใช้งาน thxkshop! ✨
