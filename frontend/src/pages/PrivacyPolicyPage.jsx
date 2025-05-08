import React from "react";
import { motion } from "framer-motion";
import { UserCheck, BarChart3, ShieldCheck, LockKeyhole } from "lucide-react";

// 🔹 เนื้อหานโยบายความเป็นส่วนตัว
const policyItems = [
  {
    icon: <UserCheck className="text-green-500 w-5 h-5" />,
    title: "1. ข้อมูลที่เรารวบรวม",
    content:
      "เราอาจรวบรวมข้อมูลส่วนบุคคล เช่น ชื่อ อีเมล เบอร์โทรศัพท์ และข้อมูลการใช้งานเมื่อคุณใช้บริการของเรา",
  },
  {
    icon: <BarChart3 className="text-blue-500 w-5 h-5" />,
    title: "2. วิธีการใช้ข้อมูล",
    content:
      "เราใช้ข้อมูลเพื่อให้บริการ ตอบคำถาม ปรับปรุงเว็บไซต์ และเพื่อวัตถุประสงค์ทางการตลาด (ถ้ามีการยินยอม)",
  },
  {
    icon: <ShieldCheck className="text-yellow-500 w-5 h-5" />,
    title: "3. สิทธิของผู้ใช้",
    content:
      "คุณสามารถเข้าถึง แก้ไข หรือลบข้อมูลของคุณได้ทุกเมื่อ โดยติดต่อเราผ่านช่องทางที่ให้ไว้",
  },
  {
    icon: <LockKeyhole className="text-red-500 w-5 h-5" />,
    title: "4. ความปลอดภัยของข้อมูล",
    content:
      "เราใช้มาตรการความปลอดภัยเพื่อปกป้องข้อมูลของคุณจากการเข้าถึงโดยไม่ได้รับอนุญาต",
  },
];

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen pt-24 px-4 md:ml-60 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
          นโยบายความเป็นส่วนตัว
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {policyItems.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow hover:shadow-lg transition"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 + index * 0.15 }}
              whileHover={{ scale: 1.03 }}
            >
              <div className="flex items-center gap-2 mb-2">
                {item.icon}
                <h2 className="font-semibold text-lg">{item.title}</h2>
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-sm">{item.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
