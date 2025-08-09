export const menuItems = [
    { text: "الرئيسية", link: "./project.html", icon: "home.svg", active: true, children: [] },
    { text: "المشاريع", link: "#", icon: "projects.svg", children: [
        { text: "سكني", link: "#", grandchildren: [
            { text: "جدايا الرياض", link: "./project.html?page=جدايا الرياض" },
            { text: "المرسي جدة", link: "./project.html?page=المرسي جدة" },
            { text: "البيت مكة", link: "./project.html?page=البيت مكة" },
            { text: "سديل مكة", link: "./project.html?page=سديل مكة" }, 
            { text: "جزالا جدة", link: "./project.html?page=جزالا جدة" }, 
            { text: "الواحة الدمام", link: "./project.html?page=الواحة الدمام" }, 
            { text: "الفيصلية الخبر", link: "./project.html?page=الفيصلية الخبر" }, 
            { text: "الربيع الرياض", link: "./project.html?page=الربيع الرياض" }, 
            { text: "الشروق جدة", link: "./project.html?page=الشروق جدة" }
        ]},
        { text: "المشاريع السكنية", link: "./project.html?page=المشاريع السكنية", grandchildren: [
            { text: "مشروع سكني 1", link: "./project.html?page=مشروع سكني 1" },
            { text: "مشروع سكني 2", link: "./project.html?page=مشروع سكني 2" }
        ]},
        { text: "الارضي", link: "#", grandchildren: [
            { text: "أرض 1", link: "./project.html?page=أرض 1" },
            { text: "أرض 2", link: "#" }
        ]},
        { text: "المشاريع التجارية", link: "./project.html?page=المشاريع التجارية", grandchildren: [
            { text: "مشروع تجاري 1", link: "./project.html?page=مشروع تجاري 1" },
            { text: "مشروع تجاري 2", link: "./project.html?page=مشروع تجاري 2" }
        ]},
        { text: "المشاريع اللوجستية", link: "./project.html?page=المشاريع اللوجستية", grandchildren: [
            { text: "مشروع لوجستي 1", link: "./project.html?page=مشروع لوجستي 1" },
            { text: "مشروع لوجستي 2", link: "./project.html?page=مشروع لوجستي 2" }
        ]}
    ]},
    { text: "PMO", link: "#", icon: "pmo.svg", children: [
        { text: "تقرير 1", link: "#", grandchildren: [
            { text: "تفاصيل تقرير 1.1", link: "#" },
            { text: "تفاصيل تقرير 1.2", link: "#" }
        ]},
        { text: "تقرير 2", link: "#", grandchildren: [
            { text: "تفاصيل تقرير 2.1", link: "#" },
            { text: "تفاصيل تقرير 2.2", link: "#" }
        ]}
    ]},
    { text: "إدارة الاملاك", link: "#", icon: "management.svg", children: [
        { text: "عقار 1", link: "#", grandchildren: [
            { text: "تفاصيل عقار 1.1", link: "#" },
            { text: "تفاصيل عقار 1.2", link: "#" }
        ]},
        { text: "عقار 2", link: "#", grandchildren: [
            { text: "تفاصيل عقار 2.1", link: "#" },
            { text: "تفاصيل عقار 2.2", link: "#" }
        ]}
    ]},
    { text: "خدمة العملاء", link: "#", icon: "customerservice.svg", children: [] },
    { text: "التطوير والاستثمار", link: "#", icon: "development.svg", children: [
        { text: "فرصة 1", link: "#", grandchildren: [
            { text: "تفاصيل فرصة 1.1", link: "#" },
            { text: "تفاصيل فرصة 1.2", link: "#" }
        ]},
        { text: "فرصة 2", link: "#", grandchildren: [

        ]},
        { text: "فرصة 3", link: "#", grandchildren: [
            { text: "تفاصيل فرصة 3.1", link: "#" },
            { text: "تفاصيل فرصة 3.2", link: "#" }
        ]}
    ]},
    { text: "المواد التسويقية", link: "#", icon: "marketing.svg", children: [] },
    { text: "المشتريات", link: "#", icon: "purchases.svg", children: [
        { text: "طلب شراء 1", link: "#", grandchildren: [
            { text: "تفاصيل طلب شراء 1.1", link: "#" },
            { text: "تفاصيل طلب شراء 1.2", link: "#" }
        ]},
        { text: "طلب شراء 2", link: "#", grandchildren: [
            { text: "تفاصيل طلب شراء 2.1", link: "#" },
            { text: "تفاصيل طلب شراء 2.2", link: "#" }
        ]}
    ]},
    { text: "المعاملات الحكومية", link: "#", icon: "gov.svg", children: [] },
    { text: "التقارير والاحصائيات", link: "#", icon: "reports.svg", children: [
        { text: "تقرير مبيعات", link: "#", grandchildren: [
            { text: "تفاصيل مبيعات شهرية", link: "#" },
            { text: "تفاصيل مبيعات سنوية", link: "#" }
        ]},
        { text: "تقرير أداء", link: "#", grandchildren: [
            { text: "تفاصيل أداء الموظفين", link: "#" },
            { text: "تفاصيل أداء المشاريع", link: "#" }
        ]}
    ]},
    { text: "الاعدادات", link: "#", icon: "settings.svg", children: [] }
];
