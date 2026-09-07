export const mockLogin = async (studentId, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // ข้อมูลจำลองสำหรับทดสอบ (รหัสนักศึกษา: 65001, รหัสผ่าน: 1234)
      if (studentId === "65001" && password === "1234") {
        resolve({
          success: true,
          message: "เข้าสู่ระบบสำเร็จ",
          user: { studentId: "65001", name: "สมชาย ใจดี", room: "405" }
        });
      } else {
        reject(new Error("รหัสนักศึกษาหรือรหัสผ่านไม่ถูกต้อง (ทดสอบใช้: 65001 / 1234)"));
      }
    }, 600);
  });
};
