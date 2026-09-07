import express from 'express';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

// SUB-01 & SUB-02: จำลองฐานข้อมูล (Users Schema สำหรับหอพัก)
const mockDatabaseUsers = [
  { id: 1, student_id: '65001', password: '1234', name: 'สมชาย ใจดี', room_number: '405' }
];

// SUB-03 & SUB-04: สร้าง API POST /login พร้อม Validation และ Error Handling
app.post('/api/login', (req, res) => {
  const { studentId, password } = req.body;

  if (!studentId || !password) {
    return res.status(400).json({
      success: false,
      message: 'กรุณากรอกรหัสนักศึกษาและรหัสผ่านให้ครบถ้วน'
    });
  }

  const user = mockDatabaseUsers.find(u => u.student_id === studentId);

  if (!user) {
    return res.status(401).json({
      success: false,
      message: 'ไม่พบรหัสนักศึกษานี้ในระบบหอพัก'
    });
  }

  if (user.password !== password) {
    return res.status(401).json({
      success: false,
      message: 'รหัสผ่านไม่ถูกต้อง กรุณาลองใหม่อีกครั้ง'
    });
  }

  return res.status(200).json({
    success: true,
    message: 'เข้าสู่ระบบสำเร็จ',
    user: {
      studentId: user.student_id,
      name: user.name,
      room: user.room_number
    }
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Mock Backend Server running on http://localhost:${PORT}`);
});
