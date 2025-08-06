import { pricesSVG, reserveSVG, salesSVG, contractsSVG, collectSVG, handoutSVG, maintainSVG } from "./getSVG.js";

export const dashboardItems = [
    {
        text: "عرض الاسعار",
        link: "#",
        icon: pricesSVG,
        children: []
    },
    {
        text: "الحجز",
        link: "#",
        icon: reserveSVG,
        children: [
            { text: "تسجيل دخول العميل", link: "#", grandchildren: [
                { text: "تفاصيل تسجيل دخول", link: "#" },
                { text: "مشاكل تسجيل الدخول", link: "#" }
            ]},
            { text: "التعامل مع عملائي", link: "#", grandchildren: [
                { text: "إضافة عميل جديد", link: "#" },
                { text: "تعديل بيانات عميل", link: "#" }
            ]},
            { text: "تسديد الرسوم ورفع والمرفقات", link: "#", grandchildren: [
                { text: "سجل المدفوعات", link: "#" },
                { text: "رفع مرفق جديد", link: "#" }
            ]},
            { text: "مقارنة حجوزات المنصة", link: "#", grandchildren: [
                { text: "تقرير مقارنة", link: "#" },
                { text: "تحليل الحجوزات", link: "#" }
            ]},
            { text: "متابعة تنفيذ العقود", link: "#", grandchildren: [
                { text: "عقود قيد التنفيذ", link: "#" },
                { text: "عقود منتهية", link: "#" }
            ]},
            { text: "إدارة ملف العميل", link: "#", grandchildren: [
                { text: "عرض ملفات العملاء", link: "#" },
                { text: "تحديث ملف العميل", link: "#" }
            ]},
            { text: "بحث عن عميل", link: "#", grandchildren: [
                { text: "بحث بالاسم", link: "#" },
                { text: "بحث بالهوية", link: "#" }
            ]},
            { text: "بحث عن وحده", link: "#", grandchildren: [
                { text: "بحث برقم الوحدة", link: "#" },
                { text: "بحث بنوع الوحدة", link: "#" }
            ]}
        ]
    },
    {
        text: "المبيعات تفاعلية",
        link: "#",
        icon: salesSVG,
        children: []
    },
    {
        text: "العقود",
        link: "#",
        icon: contractsSVG,
        children: [
            { text: "تسجيل دخول العميل", link: "#", grandchildren: [
                { text: "تفاصيل تسجيل دخول العقود", link: "#" },
                { text: "مشاكل تسجيل الدخول العقود", link: "#" }
            ]},
            { text: "التعامل مع عملائي", link: "#", grandchildren: [
                { text: "إضافة عميل جديد للعقود", link: "#" },
                { text: "تعديل بيانات عميل للعقود", link: "#" }
            ]},
            { text: "تسديد الرسوم ورفع والمرفقات", link: "#", grandchildren: [
                { text: "سجل مدفوعات العقود", link: "#" },
                { text: "رفع مرفق جديد للعقود", link: "#" }
            ]},
            { text: "مقارنة حجوزات المنصة", link: "#", grandchildren: [
                { text: "تقرير مقارنة العقود", link: "#" },
                { text: "تحليل حجوزات العقود", link: "#" }
            ]},
            { text: "متابعة تنفيذ العقود", link: "#", grandchildren: [
                { text: "عقود قيد التنفيذ تفصيلي", link: "#" },
                { text: "عقود منتهية تفصيلي", link: "#" }
            ]},
            { text: "إدارة ملف العميل", link: "#", grandchildren: [
                { text: "عرض ملفات عملاء العقود", link: "#" },
                { text: "تحديث ملف عميل العقود", link: "#" }
            ]},
            { text: "بحث عن عميل", link: "#", grandchildren: [
                { text: "بحث عن عميل بالعقد", link: "#" },
                { text: "بحث عن عميل بالاسم", link: "#" }
            ]},
            { text: "بحث عن وحده", link: "#", grandchildren: [
                { text: "بحث عن وحدة بالعقد", link: "#" },
                { text: "بحث عن وحدة بالرقم", link: "#" }
            ]}
        ]
    },
    {
        text: "التحصيل",
        link: "#",
        icon: collectSVG,
        children: [
            { text: "تحديث نسب الإنجاز", link: "#", grandchildren: [
                { text: "تحديث فردي", link: "#" },
                { text: "تحديث جماعي", link: "#" }
            ]},
            { text: "تحديث نسب الإنجاز الجميع الوحدات", link: "#", grandchildren: [
                { text: "تقرير إنجاز الوحدات", link: "#" },
                { text: "متابعة إنجاز الوحدات", link: "#" }
            ]},
            { text: "تسجيل تحصيل وحدة", link: "#", grandchildren: [
                { text: "تسجيل تحصيل يدوي", link: "#" },
                { text: "تسجيل تحصيل آلي", link: "#" }
            ]},
            { text: "تسجيل تحصيل مجموعة من الوحدات", link: "#", grandchildren: [
                { text: "تحصيل دفعات", link: "#" },
                { text: "تحصيل أقساط", link: "#" }
            ]},
            { text: "حذف تحصيل وحدة", link: "#", grandchildren: [
                { text: "سجل الحذف", link: "#" },
                { text: "استعادة تحصيل", link: "#" }
            ]}
        ]
    },
    {
        text: "التسليم",
        link: "#",
        icon: handoutSVG,
        children: [
            { text: "تحديد موعد التسليم", link: "#", grandchildren: [
                { text: "مواعيد مجدولة", link: "#" },
                { text: "تعديل موعد", link: "#" }
            ]},
            { text: "متابعة عملاء لم يتم الرد", link: "#", grandchildren: [
                { text: "قائمة انتظار الرد", link: "#" },
                { text: "إعادة تواصل", link: "#" }
            ]},
            { text: "متابعة عملاء لم يتم التسليم", link: "#", grandchildren: [
                { text: "قائمة عملاء لم يتم التسليم", link: "#" },
                { text: "أسباب التأخير", link: "#" }
            ]},
            { text: "متابعة عملاء عدم الحضور", link: "#", grandchildren: [
                { text: "تقرير عدم الحضور", link: "#" },
                { text: "إعادة جدولة", link: "#" }
            ]},
            { text: "اختبار فرق التسليم", link: "#", grandchildren: [
                { text: "نتائج الاختبار", link: "#" },
                { text: "تحليل الفروقات", link: "#" }
            ]},
            { text: "تسجيل نتائج زيارات العملاء", link: "#", grandchildren: [
                { text: "سجل الزيارات", link: "#" },
                { text: "إضافة زيارة جديدة", link: "#" }
            ]},
            { text: "معالجة ملاحظات العملاء", link: "#", grandchildren: [
                { text: "ملاحظات مفتوحة", link: "#" },
                { text: "ملاحظات مغلقة", link: "#" }
            ]}
        ]
    },
    {
        text: "الصيانة",
        link: "#",
        icon: maintainSVG,
        children: [
            { text: "جدولة الصيانة", link: "#", grandchildren: [
                { text: "جدولة وقائية", link: "#" },
                { text: "جدولة طارئة", link: "#" }
            ]},
            { text: "إدارة الأصول", link: "#", grandchildren: [
                { text: "قائمة الأصول", link: "#" },
                { text: "إضافة أصل جديد", link: "#" }
            ]},
            { text: "أوامر العمل", link: "#", grandchildren: [
                { text: "إنشاء أمر عمل", link: "#" },
                { text: "متابعة أوامر العمل", link: "#" }
            ]},
            { text: "مراقبة الحالة", link: "#", grandchildren: [
                { text: "حالة الأصول", link: "#" },
                { text: "تقارير الحالة", link: "#" }
            ]},
            { text: "الفحوصات والتدقيق", link: "#", grandchildren: [
                { text: "جدولة الفحوصات", link: "#" },
                { text: "نتائج التدقيق", link: "#" }
            ]},
            { text: "الجدولة الوقائية", link: "#", grandchildren: [
                { text: "خطط الصيانة الوقائية", link: "#" },
                { text: "سجل الصيانة الوقائية", link: "#" }
            ]},
            { text: "إدارة الموردين", link: "#", grandchildren: [
                { text: "قائمة الموردين", link: "#" },
                { text: "تقييم الموردين", link: "#" }
            ]},
            { text: "تتبع الأصول", link: "#", grandchildren: [
                { text: "موقع الأصول", link: "#" },
                { text: "تاريخ الأصول", link: "#" }
            ]},
            { text: "تنبيهات استباقية", link: "#", grandchildren: [
                { text: "إعداد التنبيهات", link: "#" },
                { text: "سجل التنبيهات", link: "#" }
            ]}
        ]
    }
];
