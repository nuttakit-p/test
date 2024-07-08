import { Questions } from '../types/questionsType';

const questionsTh: Questions = [
  {
    id: 1,
    text: 'คุณลักษณะใดที่สำคัญที่สุดสำหรับ software engineer ที่ดี?',
    answers: [
      { id: 1, text: 'ความสามารถในการเขียนโค้ดเร็ว' },
      { id: 2, text: 'การสื่อสารที่ดี' },
      { id: 3, text: 'ความเชี่ยวชาญในภาษาโปรแกรมมิ่งเฉพาะ' },
      { id: 4, text: 'การทำงานล่วงเวลาเป็นประจำ' },
    ],
    correctAnswerId: 2,
  },
  {
    id: 2,
    text: 'ข้อใดเป็นทักษะที่สำคัญที่สุดในการแก้ปัญหา (Problem Solving) สำหรับ software engineer?',
    answers: [
      { id: 1, text: 'การจำโค้ดได้มาก' },
      { id: 2, text: 'การคิดวิเคราะห์อย่างเป็นระบบ' },
      { id: 3, text: 'การใช้ Stack Overflow บ่อยๆ' },
      { id: 4, text: 'การเขียนโค้ดให้ซับซ้อนที่สุด' },
    ],
    correctAnswerId: 2,
  },
  {
    id: 3,
    text: 'ข้อใดไม่ใช่หลักการของ Clean Code?',
    answers: [
      { id: 1, text: 'การตั้งชื่อที่มีความหมาย' },
      { id: 2, text: 'การแบ่งโค้ดเป็นฟังก์ชันขนาดเล็ก' },
      { id: 3, text: 'การเขียนคอมเมนต์ทุกบรรทัด' },
      { id: 4, text: 'การหลีกเลี่ยงการทำซ้ำ (DRY principle)' },
    ],
    correctAnswerId: 3,
  },
  {
    id: 4,
    text: 'ข้อใดเป็นประโยชน์ของการใช้ Version Control System เช่น Git?',
    answers: [
      { id: 1, text: 'ทำให้โค้ดทำงานเร็วขึ้น' },
      { id: 2, text: 'ช่วยในการทำงานร่วมกันและติดตามการเปลี่ยนแปลง' },
      { id: 3, text: 'ลดความจำเป็นในการทดสอบ' },
      { id: 4, text: 'เพิ่มความปลอดภัยของระบบโดยอัตโนมัติ' },
    ],
    correctAnswerId: 2,
  },
  {
    id: 5,
    text: 'ข้อใดเป็นประโยชน์หลักของการเขียน Unit Test?',
    answers: [
      { id: 1, text: 'ทำให้โค้ดทำงานเร็วขึ้น' },
      { id: 2, text: 'ลดเวลาในการพัฒนา' },
      { id: 3, text: 'ช่วยตรวจจับข้อผิดพลาดได้เร็วขึ้นและทำให้โค้ดน่าเชื่อถือ' },
      { id: 4, text: 'ทำให้ไม่ต้องทดสอบด้วยตนเองอีกเลย' },
    ],
    correctAnswerId: 3,
  },
  {
    id: 6,
    text: 'ข้อใดไม่ใช่หลักการของ SOLID principles?',
    answers: [
      { id: 1, text: 'Single Responsibility Principle' },
      { id: 2, text: 'Open-Closed Principle' },
      { id: 3, text: 'Speedy Development Principle' },
      { id: 4, text: 'Dependency Inversion Principle' },
    ],
    correctAnswerId: 3,
  },
  {
    id: 7,
    text: 'การ Refactoring คืออะไร?',
    answers: [
      { id: 1, text: 'การเขียนโค้ดใหม่ทั้งหมด' },
      { id: 2, text: 'การปรับปรุงโครงสร้างภายในของโค้ดโดยไม่เปลี่ยนพฤติกรรมภายนอก' },
      { id: 3, text: 'การเพิ่มฟีเจอร์ใหม่' },
      { id: 4, text: 'การลบโค้ดที่ไม่ใช้แล้วออก' },
    ],
    correctAnswerId: 2,
  },
  {
    id: 8,
    text: 'ข้อใดเป็นประโยชน์ของการใช้ Design Patterns?',
    answers: [
      { id: 1, text: 'ทำให้โค้ดทำงานเร็วขึ้นเสมอ' },
      { id: 2, text: 'ช่วยแก้ปัญหาที่พบบ่อยด้วยวิธีที่ได้รับการพิสูจน์แล้ว' },
      { id: 3, text: 'ทำให้โค้ดซับซ้อนขึ้นเสมอ' },
      { id: 4, text: 'ลดความจำเป็นในการทดสอบ' },
    ],
    correctAnswerId: 2,
  },
  {
    id: 9,
    text: 'ข้อใดเป็นวิธีที่ดีที่สุดในการจัดการกับ Technical Debt?',
    answers: [
      { id: 1, text: 'ละเลยและหวังว่าจะหายไปเอง' },
      { id: 2, text: 'แก้ไขทันทีที่พบโดยไม่คำนึงถึงผลกระทบ' },
      { id: 3, text: 'วางแผนและจัดการอย่างเป็นระบบในระยะยาว' },
      { id: 4, text: 'รอให้ลูกค้าร้องเรียนก่อนจึงแก้ไข' },
    ],
    correctAnswerId: 3,
  },
  {
    id: 10,
    text: 'ข้อใดเป็นประโยชน์ของการใช้ Continuous Integration (CI)?',
    answers: [
      { id: 1, text: 'ลดความจำเป็นในการเขียนโค้ด' },
      { id: 2, text: 'ตรวจจับปัญหาการรวมโค้ดได้เร็วขึ้น' },
      { id: 3, text: 'เพิ่มความเร็วในการประมวลผลของแอปพลิเคชัน' },
      { id: 4, text: 'ลดความจำเป็นในการทดสอบ' },
    ],
    correctAnswerId: 2,
  },
  {
    id: 11,
    text: 'ข้อใดเป็นวิธีที่ดีที่สุดในการจัดการกับข้อผิดพลาดในโค้ด?',
    answers: [
      { id: 1, text: 'ใช้ try-catch ทุกที่ที่เป็นไปได้' },
      { id: 2, text: 'ละเลยและหวังว่าจะไม่เกิดขึ้น' },
      { id: 3, text: 'จัดการเฉพาะข้อผิดพลาดที่คาดการณ์ได้และบันทึก (log) ข้อผิดพลาดที่ไม่คาดคิด' },
      { id: 4, text: 'ปิดการแจ้งเตือนข้อผิดพลาดทั้งหมด' },
    ],
    correctAnswerId: 3,
  },
  {
    id: 12,
    text: 'ข้อใดเป็นแนวทางที่ดีที่สุดในการเขียนเอกสารประกอบโค้ด (Documentation)?',
    answers: [
      { id: 1, text: 'เขียนเอกสารให้ละเอียดที่สุดเท่าที่จะทำได้' },
      { id: 2, text: 'ไม่จำเป็นต้องเขียนเอกสาร เพราะโค้ดควรอธิบายตัวเองได้' },
      { id: 3, text: 'เขียนเอกสารเฉพาะส่วนที่ซับซ้อนและอธิบายเหตุผลเบื้องหลังการตัดสินใจสำคัญ' },
      { id: 4, text: 'ให้ทีม QA เป็นผู้เขียนเอกสารทั้งหมด' },
    ],
    correctAnswerId: 3,
  },
  {
    id: 13,
    text: 'ข้อใดเป็นประโยชน์ของการใช้ Code Review?',
    answers: [
      { id: 1, text: 'ทำให้โค้ดทำงานเร็วขึ้น' },
      { id: 2, text: 'ช่วยแบ่งปันความรู้และปรับปรุงคุณภาพของโค้ด' },
      { id: 3, text: 'ลดความจำเป็นในการทดสอบ' },
      { id: 4, text: 'ทำให้การพัฒนาเร็วขึ้นเสมอ' },
    ],
    correctAnswerId: 2,
  },
  {
    id: 14,
    text: 'ข้อใดไม่ใช่ลักษณะของ Agile Software Development?',
    answers: [
      { id: 1, text: 'การทำงานเป็นทีมแบบ cross-functional' },
      { id: 2, text: 'การวางแผนระยะยาวอย่างละเอียดและไม่ยืดหยุ่น' },
      { id: 3, text: 'การส่งมอบซอฟต์แวร์ที่ใช้งานได้บ่อยครั้ง' },
      { id: 4, text: 'การปรับตัวต่อการเปลี่ยนแปลงอย่างรวดเร็ว' },
    ],
    correctAnswerId: 2,
  },
  {
    id: 15,
    text: 'ข้อใดเป็นวิธีที่ดีที่สุดในการจัดการกับ Legacy Code?',
    answers: [
      { id: 1, text: 'เขียนใหม่ทั้งหมดทันที' },
      { id: 2, text: 'ปล่อยไว้และไม่แตะต้อง' },
      { id: 3, text: 'ค่อยๆ ปรับปรุงทีละส่วนพร้อมเพิ่ม Unit Test' },
      { id: 4, text: 'ให้ทีมใหม่รับผิดชอบทั้งหมด' },
    ],
    correctAnswerId: 3,
  },
  {
    id: 16,
    text: 'ข้อใดเป็นประโยชน์ของการใช้ Microservices Architecture?',
    answers: [
      { id: 1, text: 'ทำให้การพัฒนาและการปรับขนาดของแต่ละส่วนของระบบทำได้ง่ายขึ้น' },
      { id: 2, text: 'ลดความซับซ้อนของระบบโดยรวม' },
      { id: 3, text: 'ทำให้การ deploy เร็วขึ้นเสมอ' },
      { id: 4, text: 'ลดความจำเป็นในการทดสอบ' },
    ],
    correctAnswerId: 1,
  },
  {
    id: 17,
    text: 'ข้อใดเป็นวิธีที่ดีที่สุดในการรักษาความปลอดภัยของแอปพลิเคชัน?',
    answers: [
      { id: 1, text: 'ใช้ไลบรารีความปลอดภัยที่ทันสมัยและอัปเดตอยู่เสมอ' },
      { id: 2, text: 'เข้ารหัสข้อมูลทั้งหมด' },
      { id: 3, text: 'จำกัดการเข้าถึงจากภายนอกทั้งหมด' },
      { id: 4, text: 'ใช้วิธีการรักษาความปลอดภัยหลายชั้นและทดสอบอย่างสม่ำเสมอ' },
      // ต่อจากข้อ 17
    ],
    correctAnswerId: 4,
  },
  {
    id: 18,
    text: 'ข้อใดเป็นวิธีที่ดีที่สุดในการจัดการกับ Performance Issues?',
    answers: [
      { id: 1, text: 'เพิ่ม Hardware ให้แรงขึ้น' },
      { id: 2, text: 'ใช้เครื่องมือวัดประสิทธิภาพเพื่อระบุจุดที่เป็นปัญหาและแก้ไขอย่างตรงจุด' },
      { id: 3, text: 'ลดฟีเจอร์ของแอปพลิเคชันลง' },
      { id: 4, text: 'เขียนโค้ดใหม่ทั้งหมด' },
    ],
    correctAnswerId: 2,
  },
  {
    id: 19,
    text: 'ข้อใดเป็นประโยชน์ของการใช้ Containerization (เช่น Docker)?',
    answers: [
      { id: 1, text: 'ทำให้แอปพลิเคชันทำงานเร็วขึ้นโดยอัตโนมัติ' },
      { id: 2, text: 'ช่วยให้การ deploy และการจัดการสภาพแวดล้อมทำได้ง่ายและสม่ำเสมอ' },
      { id: 3, text: 'ลดความจำเป็นในการเขียนโค้ด' },
      { id: 4, text: 'เพิ่มความปลอดภัยให้กับแอปพลิเคชันโดยอัตโนมัติ' },
    ],
    correctAnswerId: 2,
  },
  {
    id: 20,
    text: 'ข้อใดเป็นคุณสมบัติที่สำคัญที่สุดของ software engineer ในการทำงานเป็นทีม?',
    answers: [
      { id: 1, text: 'ความสามารถในการทำงานได้โดยไม่ต้องพึ่งพาผู้อื่น' },
      { id: 2, text: 'ความสามารถในการสื่อสารและทำงานร่วมกับผู้อื่นได้อย่างมีประสิทธิภาพ' },
      { id: 3, text: 'ความสามารถในการเขียนโค้ดได้เร็วที่สุดในทีม' },
      { id: 4, text: 'ความสามารถในการทำงานได้ทุกตำแหน่งในทีม' },
    ],
    correctAnswerId: 2,
  },
];

const questionsEn: Questions = [
  {
    id: 1,
    text: 'What is the most important attribute for a good software engineer?',
    answers: [
      {
        id: 1,
        text: 'The ability to code quickly',
      },
      {
        id: 2,
        text: 'Good communication',
      },
      {
        id: 3,
        text: 'Expertise in a specific programming language',
      },
      {
        id: 4,
        text: 'Regularly working overtime',
      },
    ],
    correctAnswerId: 2,
  },
  {
    id: 2,
    text: 'What is the most important skill for problem-solving for a software engineer?',
    answers: [
      {
        id: 1,
        text: 'Memorizing a lot of code',
      },
      {
        id: 2,
        text: 'Analytical thinking',
      },
      {
        id: 3,
        text: 'Frequent use of Stack Overflow',
      },
      {
        id: 4,
        text: 'Writing the most complex code',
      },
    ],
    correctAnswerId: 2,
  },
  {
    id: 3,
    text: 'Which of the following is not a principle of Clean Code?',
    answers: [
      {
        id: 1,
        text: 'Meaningful names',
      },
      {
        id: 2,
        text: 'Small functions',
      },
      {
        id: 3,
        text: 'Commenting on every line',
      },
      {
        id: 4,
        text: 'Avoiding duplication (DRY principle)',
      },
    ],
    correctAnswerId: 3,
  },
  {
    id: 4,
    text: 'What is a benefit of using a Version Control System like Git?',
    answers: [
      {
        id: 1,
        text: 'Speeds up code execution',
      },
      {
        id: 2,
        text: 'Helps collaboration and tracks changes',
      },
      {
        id: 3,
        text: 'Reduces the need for testing',
      },
      {
        id: 4,
        text: 'Automatically increases system security',
      },
    ],
    correctAnswerId: 2,
  },
  {
    id: 5,
    text: 'What is the main benefit of writing Unit Tests?',
    answers: [
      {
        id: 1,
        text: 'Speeds up code execution',
      },
      {
        id: 2,
        text: 'Reduces development time',
      },
      {
        id: 3,
        text: 'Helps detect errors early and makes code reliable',
      },
      {
        id: 4,
        text: 'Eliminates the need for manual testing',
      },
    ],
    correctAnswerId: 3,
  },
  {
    id: 6,
    text: 'Which of the following is not a SOLID principle?',
    answers: [
      {
        id: 1,
        text: 'Single Responsibility Principle',
      },
      {
        id: 2,
        text: 'Open-Closed Principle',
      },
      {
        id: 3,
        text: 'Speedy Development Principle',
      },
      {
        id: 4,
        text: 'Dependency Inversion Principle',
      },
    ],
    correctAnswerId: 3,
  },
  {
    id: 7,
    text: 'What is Refactoring?',
    answers: [
      {
        id: 1,
        text: 'Rewriting all code',
      },
      {
        id: 2,
        text: 'Improving internal code structure without changing its external behavior',
      },
      {
        id: 3,
        text: 'Adding new features',
      },
      {
        id: 4,
        text: 'Removing unused code',
      },
    ],
    correctAnswerId: 2,
  },
  {
    id: 8,
    text: 'What is a benefit of using Design Patterns?',
    answers: [
      {
        id: 1,
        text: 'Always makes code run faster',
      },
      {
        id: 2,
        text: 'Solves common problems with proven solutions',
      },
      {
        id: 3,
        text: 'Always makes code more complex',
      },
      {
        id: 4,
        text: 'Reduces the need for testing',
      },
    ],
    correctAnswerId: 2,
  },
  {
    id: 9,
    text: 'What is the best way to manage Technical Debt?',
    answers: [
      {
        id: 1,
        text: 'Ignore it and hope it goes away',
      },
      {
        id: 2,
        text: 'Fix it immediately regardless of impact',
      },
      {
        id: 3,
        text: 'Plan and manage it systematically in the long term',
      },
      {
        id: 4,
        text: 'Wait for customer complaints before fixing',
      },
    ],
    correctAnswerId: 3,
  },
  {
    id: 10,
    text: 'What is a benefit of using Continuous Integration (CI)?',
    answers: [
      {
        id: 1,
        text: 'Reduces the need for coding',
      },
      {
        id: 2,
        text: 'Detects integration issues earlier',
      },
      {
        id: 3,
        text: 'Speeds up application processing',
      },
      {
        id: 4,
        text: 'Reduces the need for testing',
      },
    ],
    correctAnswerId: 2,
  },
  {
    id: 11,
    text: 'What is the best way to handle errors in code?',
    answers: [
      {
        id: 1,
        text: 'Use try-catch everywhere possible',
      },
      {
        id: 2,
        text: "Ignore them and hope they don't happen",
      },
      {
        id: 3,
        text: 'Handle only expected errors and log unexpected errors',
      },
      {
        id: 4,
        text: 'Disable all error notifications',
      },
    ],
    correctAnswerId: 3,
  },
  {
    id: 12,
    text: 'What is the best practice for writing code documentation?',
    answers: [
      {
        id: 1,
        text: 'Document as much detail as possible',
      },
      {
        id: 2,
        text: 'No need for documentation as code should be self-explanatory',
      },
      {
        id: 3,
        text: 'Document complex parts and explain key decisions',
      },
      {
        id: 4,
        text: 'Let the QA team write all documentation',
      },
    ],
    correctAnswerId: 3,
  },
  {
    id: 13,
    text: 'What is a benefit of Code Review?',
    answers: [
      {
        id: 1,
        text: 'Makes code run faster',
      },
      {
        id: 2,
        text: 'Shares knowledge and improves code quality',
      },
      {
        id: 3,
        text: 'Reduces the need for testing',
      },
      {
        id: 4,
        text: 'Always speeds up development',
      },
    ],
    correctAnswerId: 2,
  },
  {
    id: 14,
    text: 'Which of the following is not a characteristic of Agile Software Development?',
    answers: [
      {
        id: 1,
        text: 'Cross-functional team collaboration',
      },
      {
        id: 2,
        text: 'Detailed and inflexible long-term planning',
      },
      {
        id: 3,
        text: 'Frequent delivery of working software',
      },
      {
        id: 4,
        text: 'Quick adaptation to changes',
      },
    ],
    correctAnswerId: 2,
  },
  {
    id: 15,
    text: 'What is the best way to manage Legacy Code?',
    answers: [
      {
        id: 1,
        text: 'Rewrite all of it immediately',
      },
      {
        id: 2,
        text: 'Leave it untouched',
      },
      {
        id: 3,
        text: 'Gradually improve it while adding Unit Tests',
      },
      {
        id: 4,
        text: 'Assign it to a new team',
      },
    ],
    correctAnswerId: 3,
  },
  {
    id: 16,
    text: 'What is a benefit of using Microservices Architecture?',
    answers: [
      {
        id: 1,
        text: 'Easier to deploy and scale independently',
      },
      {
        id: 2,
        text: 'Always reduces the number of bugs',
      },
      {
        id: 3,
        text: 'Simplifies debugging',
      },
      {
        id: 4,
        text: 'Eliminates the need for version control',
      },
    ],
    correctAnswerId: 1,
  },
  {
    id: 17,
    text: 'What is a primary characteristic of a RESTful API?',
    answers: [
      {
        id: 1,
        text: 'Stateful operations',
      },
      {
        id: 2,
        text: 'Uses SOAP protocol',
      },
      {
        id: 3,
        text: 'Stateless operations',
      },
      {
        id: 4,
        text: 'Always requires a WSDL file',
      },
    ],
    correctAnswerId: 3,
  },
  {
    id: 18,
    text: 'What is the main benefit of using Docker?',
    answers: [
      {
        id: 1,
        text: 'Speeds up code execution',
      },
      {
        id: 2,
        text: 'Ensures consistent environments across different stages of development',
      },
      {
        id: 3,
        text: 'Reduces the need for testing',
      },
      {
        id: 4,
        text: 'Improves the performance of the code',
      },
    ],
    correctAnswerId: 2,
  },
  {
    id: 19,
    text: "What is the benefit of using the DRY (Don't Repeat Yourself) principle?",
    answers: [
      {
        id: 1,
        text: 'Increases the complexity of the code',
      },
      {
        id: 2,
        text: 'Reduces redundancy and improves maintainability',
      },
      {
        id: 3,
        text: 'Makes the code run faster',
      },
      {
        id: 4,
        text: 'Eliminates the need for code reviews',
      },
    ],
    correctAnswerId: 2,
  },
  {
    id: 20,
    text: 'What is a characteristic of a good User Story in Agile development?',
    answers: [
      {
        id: 1,
        text: 'Detailed and complex',
      },
      {
        id: 2,
        text: 'Vague and open-ended',
      },
      {
        id: 3,
        text: 'Independent, Negotiable, Valuable, Estimable, Small, and Testable (INVEST)',
      },
      {
        id: 4,
        text: 'Non-testable',
      },
    ],
    correctAnswerId: 3,
  },
];

const questions = {
  th: questionsTh,
  en: questionsEn,
};

export default questions;
