# 📋 เอกสาร TestCase จำลอง (Test Case Specification & Execution Report)

**โครงการ:** Laundry Queue - RMUTL (ระบบคิวเครื่องซักผ้าหอพัก)  
**ขอบเขตโมดูล:** `washing-machine-queue/src`  
**ประเภทการทดสอบ:** Functional Testing, Component UI Testing, Integration Testing, Unit Testing  
**สถานะภาพรวม:** ✅ **PASSED (100%)**  
**วันที่ทดสอบ:** 7 กันยายน 2026  
**ผู้จัดทำ/ผู้ทดสอบ:** Automated & Manual QA Simulation  

---

## 📊 สรุปผลการทดสอบ (Test Execution Summary)

| รายการ | จำนวน | คิดเป็นร้อยละ (%) |
| :--- | :---: | :---: |
| **Total Test Cases** | 15 | 100% |
| **Passed (ผ่าน)** | 15 | 100% |
| **Failed (ไม่ผ่าน)** | 0 | 0% |
| **Blocked (ถูกระงับ)** | 0 | 0% |

---

## 📂 รายละเอียด Test Cases จำลองแยกตามโมดูล

---

### 1. โมดูลระบบยืนยันตัวตน (Authentication & Login Module)
**ไฟล์ที่เกี่ยวข้อง:** `src/pages/Login.jsx`, `src/services/authService.js`

| Test ID | รายละเอียดการทดสอบ (Test Description) | ข้อมูลนำเข้า (Test Data) | ผลลัพธ์ที่คาดหวัง (Expected Result) | ผลลัพธ์จริง (Actual Result) | สถานะ (Status) |
| :--- | :--- | :--- | :--- | :--- | :---: |
| **TC-AUTH-001** | ตรวจสอบการเข้าสู่ระบบด้วยรหัสนักศึกษาและรหัสผ่านที่ถูกต้อง | `studentId`: "65001"<br>`password`: "1234" | เข้าสู่ระบบสำเร็จ, ส่งข้อมูลผู้ใช้ (`สมชาย ใจดี`, ห้อง `405`) ไปยัง State หลัก และเปลี่ยนหน้าไปยังหน้าหลัก | เข้าสู่ระบบสำเร็จ และส่งข้อมูลผู้ใช้ถูกต้อง | ✅ **PASS** |
| **TC-AUTH-002** | ตรวจสอบการเข้าสู่ระบบด้วยรหัสผ่านที่ไม่ถูกต้อง | `studentId`: "65001"<br>`password`: "9999" | ระบบแสดงกล่องข้อความแจ้งเตือนข้อผิดพลาด: `"รหัสนักศึกษาหรือรหัสผ่านไม่ถูกต้อง (ทดสอบใช้: 65001 / 1234)"` | แสดงข้อความ Error ตามที่กำหนดถูกต้อง | ✅ **PASS** |
| **TC-AUTH-003** | ตรวจสอบการเข้าสู่ระบบด้วยรหัสนักศึกษาที่ไม่มีในระบบ | `studentId`: "99999"<br>`password`: "1234" | ระบบแสดงข้อความแจ้งเตือน Error Box และไม่อนุญาตให้เข้าสู่ระบบ | แสดง Error Box และปฏิเสธการเข้าสู่ระบบ | ✅ **PASS** |
| **TC-AUTH-004** | ตรวจสอบสถานะการกดปุ่ม Loading ขณะรอ API ตอบกลับ | `studentId`: "65001"<br>`password`: "1234" | ปุ่มเปลี่ยนข้อความเป็น `"กำลังตรวจสอบ..."` และสถานะปุ่มเป็น `disabled` เป็นเวลา ~600ms | ปุ่มแสดงสถานะ Loading และถูก Disable ระหว่างรอผล | ✅ **PASS** |
| **TC-AUTH-005** | ตรวจสอบการทำงานของ Form Validation เมื่อไม่กรอกข้อมูล | `studentId`: `""`<br>`password`: `""` | HTML5 Form Validation ทำงาน แจ้งเตือน Required Field ไม่เกิดการยิง API | เบราว์เซอร์แจ้งเตือนฟิลด์จำเป็น ไม่มีการยิง Request | ✅ **PASS** |
| **TC-AUTH-006** | Unit Test ฟังก์ชัน `mockLogin` ใน `authService.js` | Args: `("65001", "1234")` vs `("wrong", "wrong")` | Return Promise resolve ข้อมูล User เมื่อรหัสถูกต้อง และ Reject Error เมื่อรหัสผิด | Promise ทำงานถูกต้องตามเงื่อนไข (Delay 600ms) | ✅ **PASS** |

---

### 2. โมดูลหน้าหลักและการจัดการเซสชัน (App Main & Session Management)
**ไฟล์ที่เกี่ยวข้อง:** `src/App.jsx`

| Test ID | รายละเอียดการทดสอบ (Test Description) | ข้อมูลนำเข้า / การกระทำ | ผลลัพธ์ที่คาดหวัง (Expected Result) | ผลลัพธ์จริง (Actual Result) | สถานะ (Status) |
| :--- | :--- | :--- | :--- | :--- | :---: |
| **TC-APP-001** | ตรวจสอบสถานะเริ่มต้นเมื่อยังไม่ได้เข้าสู่ระบบ (Initial State) | เปิดหน้าเว็บครั้งแรก | แสดงฟอร์มเข้าสู่ระบบ (`<Login />`), ไม่แสดงกล่องต้อนรับ Welcome Box | แสดงฟอร์ม Login เป็นหน้าแรกตามปกติ | ✅ **PASS** |
| **TC-APP-002** | ตรวจสอบการแสดงผลกล่องต้อนรับผู้ใช้หลังเข้าสู่ระบบสำเร็จ | เข้าสู่ระบบสำเร็จด้วย 65001 | แสดงข้อความ `"ยินดีต้อนรับ"`, ชื่อ `"คุณ สมชาย ใจดี (ห้อง 405)"` และปุ่ม `"ออกจากระบบ"` | แสดงข้อมูลชื่อและห้องของผู้ใช้ถูกต้องครบถ้วน | ✅ **PASS** |
| **TC-APP-003** | ตรวจสอบการทำงานของปุ่ม Logout (ออกจากระบบ) | คลิกปุ่ม `"ออกจากระบบ"` ใน Welcome Box | เคลียร์ค่า `isLoggedIn = false`, `currentUser = null`, สลับ `currentPage = 'login'` กลับสู่หน้าฟอร์ม Login | ระบบล้างเซสชันและกลับหน้า Login ทันที | ✅ **PASS** |

---

### 3. โมดูลส่วนหัวและแถบนำทาง (Header & Bottom Navigation)
**ไฟล์ที่เกี่ยวข้อง:** `src/components/Header.jsx`, `src/components/BottomNav.jsx`

| Test ID | รายละเอียดการทดสอบ (Test Description) | ข้อมูลนำเข้า / การกระทำ | ผลลัพธ์ที่คาดหวัง (Expected Result) | ผลลัพธ์จริง (Actual Result) | สถานะ (Status) |
| :--- | :--- | :--- | :--- | :--- | :---: |
| **TC-NAV-001** | ตรวจสอบการแสดงผลส่วนหัว (Header) | โหลดหน้าแอปพลิเคชัน | แสดงหัวข้อ `"Laundry Queue - RMUTL"` ด้านบนสุดเสมอ | แสดงผล Header สวยงามและถูกต้อง | ✅ **PASS** |
| **TC-NAV-002** | ตรวจสอบการสลับหน้าผ่าน Bottom Navigation | คลิกแท็บ `"📱 หน้าหลัก (Layout)"` | ค่า `currentPage` เปลี่ยนเป็น `'blank'`, แท็บถูกไฮไลต์คลาส `active` | สลับหน้าได้ถูกต้องและไฮไลต์แท็บ active | ✅ **PASS** |
| **TC-NAV-003** | ตรวจสอบการคลิกกลับแท็บ Login ผ่าน BottomNav | คลิกแท็บ `"🔐 Login"` | ค่า `currentPage` เปลี่ยนเป็น `'login'`, แท็บ Login ถูกไฮไลต์ `active` | สลับกลับมาแท็บ Login สำเร็จ | ✅ **PASS** |

---

### 4. โมดูลหน้าว่างสำหรับโครงร่างหลัก (Blank Page Layout)
**ไฟล์ที่เกี่ยวข้อง:** `src/pages/BlankPage.jsx`

| Test ID | รายละเอียดการทดสอบ (Test Description) | ข้อมูลนำเข้า / การกระทำ | ผลลัพธ์ที่คาดหวัง (Expected Result) | ผลลัพธ์จริง (Actual Result) | สถานะ (Status) |
| :--- | :--- | :--- | :--- | :--- | :---: |
| **TC-PAGE-001** | ตรวจสอบการแสดงผลหน้า BlankPage เมื่อสลับแท็บ | ผู้ใช้เข้าสู่ระบบแล้วเลือกแท็บ `blank` | แสดงหัวข้อ `"หน้าเปล่า (Blank Page)"` และคำอธิบายความพร้อมของโครงสร้าง Layout | แสดงเนื้อหาหน้า Blank Page ครบถ้วน | ✅ **PASS** |

---

### 5. การทดสอบการทำงานต่อเนื่อง (End-to-End Integration Flow)
**ไฟล์ที่เกี่ยวข้อง:** ทุกคอมโพเนนต์ใน `src/` ทำงานร่วมกัน

| Test ID | รายละเอียดการทดสอบ (Test Description) | ลำดับขั้นตอน (Steps) | ผลลัพธ์ที่คาดหวัง (Expected Result) | ผลลัพธ์จริง (Actual Result) | สถานะ (Status) |
| :--- | :--- | :--- | :--- | :--- | :---: |
| **TC-E2E-001** | ทดสอบ User Journey การใช้งานสมบูรณ์แบบ (Happy Path) | 1. เข้าหน้าเว็บ<br>2. กรอก 65001 / 1234<br>3. กดเข้าสู่ระบบ<br>4. ตรวจสอบหน้า BlankPage<br>5. กดออกจากระบบ | 1. แสดงหน้า Login<br>2. เข้าสู่ระบบสำเร็จแสดงชื่อ สมชาย ใจดี<br>3. แสดง BlankPage<br>4. ออกจากระบบกลับสู่หน้าเริ่มต้นได้สมบูรณ์ | ระบบทำงานลื่นไหล ถูกต้องตรงตาม Flow 100% | ✅ **PASS** |
| **TC-E2E-002** | ทดสอบสลับหน้าขณะยังไม่ Login | คลิกสลับแท็บใน BottomNav ก่อนทำการ Login | ฟอร์ม Login ยังคงแสดงผลอยู่ด้านบนตามเงื่อนไข `!isLoggedIn` | การควบคุมสภาวะของ UI สอดคล้องกับ State | ✅ **PASS** |

---

## 💻 จำลองผลการรัน Automated Test Log (Test Runner Output)

```bash
 RUN  v2.1.8 /workspace/washing-machine-queue

 ✓ src/services/authService.test.js (2 tests) 612ms
   ✓ mockLogin > resolves user data when studentId and password are valid (602ms)
   ✓ mockLogin > rejects with error message on invalid credentials (10ms)
 ✓ src/pages/Login.test.jsx (4 tests) 78ms
   ✓ renders login form with studentId and password fields
   ✓ triggers validation when submitting empty fields
   ✓ displays loading state while request is pending
   ✓ displays error alert box on login failure
 ✓ src/components/Header.test.jsx (1 test) 15ms
   ✓ renders header with title "Laundry Queue - RMUTL"
 ✓ src/components/BottomNav.test.jsx (3 tests) 32ms
   ✓ renders both navigation buttons
   ✓ applies active class to current selected tab
   ✓ calls setCurrentPage when tab clicked
 ✓ src/pages/BlankPage.test.jsx (1 test) 12ms
   ✓ renders layout placeholder text
 ✓ src/App.test.jsx (4 tests) 115ms
   ✓ initial view shows login card
   ✓ logs in user and transitions to welcome box + blank page
   ✓ navigates between tabs using bottom navigation
   ✓ logouts user and resets state back to initial login

 Test Files  6 passed (6)
      Tests  15 passed (15)
   Start at  22:31:00
   Duration  864ms (transform 120ms, setup 45ms, collect 85ms, tests 864ms)

All simulated test suites passed successfully! 🎉
```
