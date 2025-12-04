// Questions Database - Support for 100+ questions
// Each question has: question text, options array, and correctAnswer index

const quizQuestions = [
    {
        question: "ما الهدف الأساسي من البيئة الافتراضية؟",
        options: ["زيادة سرعة المعالج","عزل حزم المشروع عن النظام"," تحسين جودة الشاشة","حماية الجهاز من الفيروسات "],
        correctAnswer: 1
    },
    {
        question: "أي أداة مدمجة في بايثون لإنشاء بيئات افتراضية؟",
        options: ["Pipenv", "conda", "venv", "docker"],
        correctAnswer: 2
    },
    {
        question: "venv ما الأمر لإنشاء بيئة افتراضية باستخدام",
        options: ["python -m virtualenv env","python make env","python -m venv env","py install env"],
        correctAnswer: 2
    },
  
    {
        question: "ما الأمر لتفعيل البيئة الافتراضية في ويندوز؟",
        options: ["source env/bin/activate","activate env","env-Scripts-activate","env.activate"],
        correctAnswer: 2
    },

    {
        question: "ما الأمر لإلغاء تفعيل البيئة الافتراضية؟",
        options: ["Quit","deactivate","close env","stop-env"],
        correctAnswer: 1
    },

    {
        question: "أين يتم تخزين الحزم عند تثبيتها داخل بيئة افتراضية؟",
        options: ["داخل النظام الرئيسي","داخل نظام التشغيل","داخل مجلد البيئة نفسها","داخل مجلد المستخدم"],
        correctAnswer: 2
    },

    {
        question: "ما فائدة ملف requirements.txt؟",
        options: ["حذف الحزم","تثبيت إصدار محدّث من بايثون","حفظ قائمة الحزم للمشاركة أو التثبيت لاحقًا","انشاء بيئة جديدة تلقائيًا"],
        correctAnswer: 2
    },

    {
        question: "ما الأمر لتثبيت الحزم من ملف requirements.txt؟",
        options: ["pip install file.txt","pip load requirements.txt","pip install -r requirements.txt","pip get requirements"],
        correctAnswer: 2
    },

    {
        question: "أي مما يلي يعتبر ميزة للبيئات الافتراضية؟",
        options: ["مشاركة جميع المشاريع نفس الحزم","اختلاف إصدار الحزم بين المشاريع بدون مشاكل","زيادة مساحة التخزين","تسريع الحاسوب"],
        correctAnswer: 1
    },

    {
        question: "ما الأمر لعرض الحزم المثبتة في البيئة؟",
        options: ["pip show","pip list","pip install","pip display"],
        correctAnswer: 1
    },

    {
        question: "أي من التالي ليس نظامًا لإدارة البيئات؟",
        options: ["Venv","conda","virtualenv","sudo"],
        correctAnswer: 3
    },

    {
        question: "الأمر الصحيح لإنشاء بيئة باستخدام virtualenv؟",
        options: ["virtualenv env","create env","venv virtual","new virtual"],
        correctAnswer: 0
    },

    {
        question: "ما الامتداد الافتراضي لملف تفعيل البيئة في Linux؟",
        options: [".exe",".bin",".sh",".run"],
        correctAnswer: 2
    },

    {
        question: "في conda، ما الأمر لإنشاء بيئة جديدة؟",
        options: ["conda new","conda create --name env","conda build env","conda start env"],
        correctAnswer: 1
    },

    {
        question: "ما الأمر لحذف بيئة conda؟",
        options: ["conda remove env","conda delete env","conda uninstall env","conda env remove"],
        correctAnswer: 3
    },

    {
        question: "ما المقصود بـ Isolation في البيئات الافتراضية؟",
        options: ["منع استخدام الإنترنت","عزل الحزم عن النظام والمشاريع الأخرى","تغيير مكان التخزين","حماية البيانات"],
        correctAnswer: 1
    },

    {
        question: "هل تحتاج البيئة الافتراضية لحقوق المدير (Admin) لإنشاءها؟",
        options: ["نعم","لا","فقط في Linux","فقط في Windows"],
        correctAnswer: 1
    },

    {
        question: "أي أمر يستخدم لمعرفة مسار البيئة المفعلة؟",
        options: ["pip path","python --where","which python","env-path"],
        correctAnswer: 2
    },

    {
        question: "ما معنى العبارة (env/bin/python)؟",
        options: ["بايثون النظام","بايثون داخل البيئة","محرّك قاعدة البيانات","ملف مؤقت"],
        correctAnswer: 1
    },

    {
        question: "ما الأمر لإنشاء ملف requirements تلقائيًا؟",
        options: ["pip make","pip export","pip freeze > requirements.txt","pip list save"],
        correctAnswer: 2
    },

    {
        question: "عند استخدام بيئة افتراضية، يقوم pip بالتثبيت في",
        options: ["النظام الرئيسي","مجلد المشروع الخارجي","البيئة فقط","السحابة"],
        correctAnswer: 2
    },

    {
        question: "هل يمكن أن تحتوي البيئة الواحدة على عدة إصدارات من نفس الحزمة؟",
        options: ["نعم","لا"],
        correctAnswer: 1
    },

    {
        question: "ما الهدف من virtualenv مقارنة بـ venv؟",
        options: ["يعمل على بايثون ≥ 3.3 فقط","يوفر توافقًا مع إصدارات أقدم من بايثون","بطيء أكثر","غير مدعوم"],
        correctAnswer: 1
    },

    {
        question: "ماذا يحدث عند حذف مجلد env بالكامل؟",
        options: ["تبقى البيئة تعمل","تتلف بايثون النظام","تُحذف البيئة بالكامل","يتم حذف جميع المشاريع"],
        correctAnswer: 2
    },

    {
        question: "الأمر pip uninstall يقوم بـ…",
        options: ["إزالة الحزمة من النظام فقط","إزالة الحزمة من البيئة المفعّلة","تعطيل البيئة","حذف بيئة كاملة",],
        correctAnswer: 1
    },
    
    {
        question: "العلامة التي تظهر عند تفعيل البيئة في الطرفية؟",
        options: ["اسم الحاسوب","اسم النظام","اسم البيئة بين أقواس","مسار المشروع",],
        correctAnswer: 2
    },

    {
        question: "فضل طريقة لنسخ بيئة افتراضية؟",
        options: ["نسخ مجلد env","استخدام requirements.txt","zip للمجلد وتشغيله","نسخ بايثون",],
        correctAnswer: 1
    },

    {
        question: "هل يمكن تشغيل بيئة افتراضية بدون تفعيل؟",
        options: ["نعم باستخدام المسار الكامل لبايثون داخلها","لا"],
        correctAnswer: 0
    },

    {
        question: "pipenv يقدّم ميزة…",
        options: ["إدارة الحزم والبيئات معًا","استضافة المواقع","تسريع بايثون","حذف الأنظمة",],
        correctAnswer: 0
    },

    {
        question: "ملف Pipfile يستخدم لـ…",
        options: ["تعريف قواعد الجدار الناري","تتبع الحزم وإعدادات البيئة","تعريف المتغيرات الأمنية","الاحتفاظ بالنسخ الاحتياطية",],
        correctAnswer: 1
    },

    {
        question: "أي من التالي يحدث خارج البيئة الافتراضية؟",
        options: ["تثبيت الحزم","تشغيل التطبيقات","استخدام pip الخاص بالنظام","تثبيت المتطلبات",],
        correctAnswer: 2
    },

    {
        question: "Conda تختلف عن venv بأنها…",
        options: ["تعمل للحزم فقط","تدير حزم ولغات عديدة","تعمل فقط على Windows","تتطلب إنترنت دائم",],
        correctAnswer: 1
    },

    {
        question: "ما الأمر لعرض البيئات في conda؟",
        options: ["conda list env","conda envs","conda info --envs","conda get",],
        correctAnswer: 2
    },

    {
        question: "مشكلة “Package version conflict” تظهر بسبب",
        options: ["ضعف الإنترنت","اختلاف إصدار الحزمة المطلوبة","بطء النظام","نقص الذاكرة",],
        correctAnswer: 1
    },

    {
        question: "Pyenv يُستخدم لـ…",
        options: ["إنشاء حاويات","إدارة إصدارات بايثون","تثبيت pip","تثبيت conda",],
        correctAnswer: 1
    },

    {
        question: "هل يمكن لبيئتين استخدام إصدارين مختلفين من الحزمة نفسها؟",
        options: ["نعم","لا"],
        correctAnswer: 0
    },

    {
        question: "عند استخدام VS Code، يتم تفعيل البيئة عبر",
        options: ["اختيار Interpreter الصحيح","إعادة تثبيت بايثون","حذف workspace","إنشاء مشروع جديد",],
        correctAnswer: 0
    },

    {
        question: "py -m pi يشير إلى…",
        options: ["pip النظام فقط","pip المرتبط بإصدار py المستخدم","pip داخل المتصفح","pip الظاهري فقط",],
        correctAnswer: 1
    },

    {
        question: "ملف pyproject.toml يستخدم في…",
        options: ["تعريف مشروع بايثون وبيئة البناء","تشغيل الخادم","تعديل النظام","تحديث kernel",],
        correctAnswer: 0
    },

    {
        question: " 40.Poetry هو",
        options: ["محرّر نصوص","نظام إدارة حزم وبيئات","قاعدة بيانات","مترجم لغات",],
        correctAnswer: 1
    },

    {
        question: "ما الأمر لحذف حزمة داخل بيئة؟",
        options: ["pip delete","pip uninstall","remove pip","pkg remove",],
        correctAnswer: 1
    },

    {
        question: "ما مخزن الحزم الخاص بـ pip؟",
        options: ["GitHub","PyPI","Docker Hub","Google Drive",],
        correctAnswer: 1
    },

    {
        question: "عند تشغيل python داخل بيئة افتراضية، فإنه يستخدم…",
        options: [" Python النظام دائمًا","Python المُثبت في البيئة","أحدث إصدار في الإنترنت","Python من السحابة",],
        correctAnswer: 1
    },

    {
        question: "أي من التالي يحدث عند تفعيل البيئة؟",
        options: ["تغيير متغير PATH مؤقتًا","حذف حزم النظام","إعادة تشغيل الجهاز","تنزيل بايثون جديد",],
        correctAnswer: 0
    },

    {
        question: "بيئة venv تعتمد على…",
        options: ["ملفات config.json"," مجلد Scripts أو ","ملف exe وحيد","ملف dll"],
        correctAnswer: 1
    },

    {
        question: "هل تؤثر الحزم داخل البيئة على مشاريع أخرى؟",
        options: ["نعم","لا"],
        correctAnswer: 1
    },

    {
        question: "ما الأمر لعرض تفاصيل حزمة معينة؟",
        options: ["pip info","pip show","pip details","pip inspect",],
        correctAnswer: 2
    },

    {
        question: "ما ميزة virtualenv على venv؟",
        options: ["أسرع دائمًا","يعمل على كل إصدارات بايثون","يحتوي أدوات إدارة إضافية","أكبر حجمًا",],
        correctAnswer: 2
    },

    {
        question: "استخدام البيئات الافتراضية يعتبر من",
        options: ["أفضل ممارسات تطوير البرمجيات","الأمور غير الضرورية","خطوات متقدمة للمحترفين فقط","بديلًا عن Git",],
        correctAnswer: 0 
    },
    

];
