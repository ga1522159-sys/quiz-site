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

    ];
