// src/data/coursesData.js

// استيراد الصور أولاً لضمان عملها بعد الـ Build
import reactImg from '../assets/react.jpg';
import nodeImg from '../assets/node.jpg';
import uiuxImg from '../assets/../assets/uiux.png';
import pythonImg from '../assets/python.png';
import jsImg from '../assets/js.png';
import nextImg from '../assets/next.png';
import tacssImg from '../assets/tailwindcss.png';

export const coursesData = [
  {
    id: 1,
    title: "Mastering React 🔥",
    shortDescription: "تعلم بناء واجهات احترافية ومشتعلة باستخدام ريأكت.",
    fullDescription: "هذا الكورس يأخذك في رحلة من الصفر حتى الاحتراف في مكتبة ريأكت، مع التركيز على الأداء العالي والتنسيقات الحديثة.",
    lessonsCount: 24,
    level: "Intermediate",
    price: 49.99,
    category: "Frontend",
    duration: "4 Weeks",
    instructor: "ProCoder Ali",
    language: "Arabic",
    image: reactImg // نستخدم المتغير المستورد هنا
  },
  {
    id: 2,
    title: "Full-Stack Node.js",
    shortDescription: "ابنِ سيرفرات قوية وسريعة جداً.",
    fullDescription: "تعمق في عالم الـ Backend باستخدام Node.js و Express، وتعلم كيف تدير قواعد البيانات باحترافية.",
    lessonsCount: 30,
    level: "Advanced",
    price: 75.00,
    category: "Backend",
    duration: "6 Weeks",
    instructor: "Sara Ahmed",
    language: "Arabic",
    image: nodeImg
  },

    {

    id: 3,

    title: "Tailwind CSS Mastery",

    shortDescription: "صمم واجهاتك بسرعة البرق.",

    fullDescription: "تعلم كيف تستخدم Tailwind CSS لإنشاء تصاميم متجاوبة ومذهلة مثل هذا المشروع تماماً.",

    lessonsCount: 15,

    level: "Beginner",

    price: 29.99,

    category: "Design",

    duration: "2 Weeks",

    instructor: "Zaid Omar",

    language: "Arabic",

    image: tacssImg

  },

  {
    id: 6,
    title: "UI/UX Design Secrets",
    shortDescription: "سر الألوان والتنسيقات المريحة.",
    fullDescription: "تعلم كيف يفكر المستخدم وكيف تحول واجهاتك إلى تجربة لا تُنسى.",
    lessonsCount: 18,
    level: "Beginner",
    price: 45.00,
    category: "Design",
    duration: "3 Weeks",
    instructor: "Noor J.",
    language: "Arabic",
    image: uiuxImg
  },
  {
    id: 4,
    title: "Python for Data Science",
    shortDescription: "حلل البيانات واستخرج الكنوز.",
    fullDescription: "طريقك المختصر لتعلم بايثون واستخدامها في تحليل البيانات الضخمة والذكاء الاصطناعي.",
    lessonsCount: 40,
    level: "Intermediate",
    price: 60.00,
    category: "Data Science",
    duration: "8 Weeks",
    instructor: "Hassan Ali",
    language: "Arabic",
    image: pythonImg
  },
  {
    id: 5,
    title: "Modern JavaScript (ES6+)",
    shortDescription: "أساس كل شيء في الويب الحديث.",
    fullDescription: "افهم خبايا جافاسكريبت الحديثة وكيفية كتابة كود نظيف وقابل للصيانة.",
    lessonsCount: 20,
    level: "Beginner",
    price: 35.50,
    category: "Frontend",
    duration: "3 Weeks",
    instructor: "Mona Adel",
    language: "English",
    image: jsImg
  },

   {

    id: 7,

    title: "Mastering Next 🔥",

    shortDescription: "تعلم بناء واجهات احترافية",

    fullDescription: "هذا الكورس يأخذك من الصفر حتى الاحتراف في مكتبة Next باستخدام أحدث التقنيات.",

    lessonsCount: 24,

    level: "Intermediate",

    price: 49,

    category: "Frontend",

    duration: "2 Weeks",

    instructor: "Ali Mohamed",

    language: "Arabic",

    image: nextImg

  },
];