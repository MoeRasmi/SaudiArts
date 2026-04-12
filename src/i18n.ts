import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      nav: {
        about: 'About',
        works: 'Works of Art',
        private: 'Private Viewing',
        services: 'Services',
        gifting: 'Corporate Gifting',
        inquire: 'Inquire',
      },
      hero: {
        title: 'A curated world of art, heritage and acquisition',
        subtitle: 'Where heritage meets contemporary artistry',
        cta: 'Discover',
        microritm: 'Est. 1978',
      },
      about: {
        title: 'About the Museum',
        content: 'Alqalá Museum is a private institution dedicated to the preservation and exhibition of rare heritage items and masterpieces of art. Each piece in our collection tells a story of craftsmanship, history, and excellence.',
      },
      works: {
        title: 'Works of Art',
        categories: {
          ceramics: 'Ceramics',
          metalworks: 'Metalworks',
          glass: 'Glass',
          paintings: 'Paintings & prints',
          arms: 'Arms & armour',
          gifts: 'Gifts, curios & collectibles',
          hospitality: 'Hospitality & tableware',
          textiles: 'Textiles & tapestries',
          carpets: 'Carpets & rugs',
          woodwork: 'Woodwork & furniture',
          misc: 'Miscellaneous',
        }
      },
      private: {
        title: 'The Private Vault',
        salon: 'Private Salon',
        salonDesc: 'An intimate setting for private consultation and viewing of our most exceptional masterpieces.',
        curator: 'Curator-Led Access',
        curatorDesc: 'A deeply personal exploration of heritage guided by our lead curator and subject matter experts.',
        appointment: 'By Appointment',
        appointmentDesc: 'Exclusively arranged viewings tailored to your specific areas of interest and schedule.',
        description: 'An exclusive sanctuary for connoisseurs seeking discretion and rarity.',
        requestAccess: 'Request Access',
        quote: 'Discretion is the luxury of kings, and our private vault is its ultimate sanctuary.',
      },
      services: {
        title: 'Art, Furniture & Event Styling Services',
        subtitle: 'Excellence in Design',
        content: 'Our bespoke styling services offer a unique blend of historical accuracy and contemporary elegance for your most prestigious events and spaces.',
        curation: {
          title: 'Art and Heritage Curation',
          desc: 'Our specialists collaborate with architects and interior designers to curate collections that integrate historical significance with modern luxury. Whether for a private residence or a public institution, our vision ensures that art becomes an enduring part of your space.',
        },
        events: {
          title: 'Elite Event Styling',
          desc: 'Transforming prestigious venues into immersive historical environments. From royal state dinners to intimate luxury gatherings, we provide authentic furniture, textiles, and artifacts that create an unparalleled atmosphere of authority and refinement.',
        },
        contact: 'Direct Inquiry',
        email: 'services@alqala.museum',
      },
      gifting: {
        title: 'Corporate Gifting',
        subtitle: 'Heritage for the Modern Leader',
        content: 'Present the gift of heritage. Our curated corporate gifting selection embodies prestige and thoughtfulness.',
        desc: 'Elevate your professional relationships with gifts that carry the weight of history. Our curated selection offers rare, museum-quality artifacts suitable for the most significant corporate acknowledgments.',
        consultation: 'Personalized Consultation',
        consultationDesc: 'Allow our specialists to assist you in selecting the perfect expression of heritage for your corporate gifting needs.',
        callUs: 'Call us',
        phone: '+966 11 123 4567',
        email: 'Email',
        emailAddress: 'gifting@alqala.museum',
        requestCatalogue: 'Request Gift Catalogue',
      },
      inquire: {
        title: 'Inquire',
        subtitle: 'Experience the legacy of Alqala. Each inquiry is handled with the reverence and discretion it deserves.',
        location: 'Riyadh, Saudi Arabia',
        locationLabel: 'Location',
        response: 'Response Time',
        responseTime: '24-48 Hours',
        confidentiality: 'Confidentiality',
        confidentialityText: 'All inquiries are handled with absolute discretion.',
        discreet: 'Discreet response within 24-48 hours',
        titlePlaceholder: 'Royal Highness / Excellency / Mr. / Ms.',
        fields: {
          name: 'Full Name',
          email: 'Email',
          type: 'Inquiry Type',
          message: 'Message',
          types: {
            viewing: 'Private Viewing',
            acquisition: 'Acquisition',
            commission: 'Commission',
            gifting: 'Gifting',
          }
        },
        submit: 'Submit Inquiry',
      }
    }
  },
  ar: {
    translation: {
      nav: {
        about: 'حول المتحف',
        works: 'الأعمال الفنية',
        private: 'عرض خاص',
        services: 'الخدمات',
        gifting: 'هدايا الشركات',
        inquire: 'استفسار',
      },
      hero: {
        title: 'عالم منسق من الفن والتراث والاقتناء',
        subtitle: 'حيث يلتقي التراث بالفن المعاصر',
        cta: 'اكتشف',
        microritm: 'تأسست 1978',
      },
      about: {
        title: 'حول المتحف',
        content: 'متحف القلعة هو مؤسسة خاصة مكرسة للحفاظ على وعرض القطع التراثية النادرة والروائع الفنية. تروي كل قطعة في مجموعتنا قصة حرفية وتاريخ وتميز.',
      },
      works: {
        title: 'الأعمال الفنية',
        categories: {
          ceramics: 'خزفيات',
          metalworks: 'أعمال معدنية',
          glass: 'زجاجيات',
          paintings: 'لوحات ومطبوعات',
          arms: 'أسلحة ودروع',
          gifts: 'هدايا وتحف ومقتنيات',
          hospitality: 'الضيافة وأواني المائدة',
          textiles: 'منسوجات ومفروشات',
          carpets: 'سجاد وبسط',
          woodwork: 'أعمال خشبية وأثاث',
          misc: 'متنوعات',
        }
      },
      private: {
        title: 'القبو الخاص',
        salon: 'الصالون الخاص',
        salonDesc: 'بيئة حميمة للاستشارة الخاصة ومشاهدة أروع تحفنا استثنائية.',
        curator: 'بإشراف المنسق',
        curatorDesc: 'استكشاف عميق للتراث بإشراف منسقنا الرئيسي وخبراء الموضوع.',
        appointment: 'بموعد مسبق',
        appointmentDesc: 'عروض مرتبة حصرياً وفقاً لمجالات اهتمامك وجدولك الزمني.',
        description: 'ملاذ حصري للمتذوقين الباحثين عن الخصوصية والندرة.',
        requestAccess: 'طلب الوصول',
        quote: 'التحفظ هو رفاهية الملوك، والقبو الخاص هو ملاذها الأقصى.',
      },
      services: {
        title: 'خدمات تنسيق الفن والأثاث والفعاليات',
        subtitle: 'التصميم المتميز',
        content: 'تقدم خدماتنا المخصصة للتنسيق مزيجاً فريداً من الدقة التاريخية والأناقة المعاصرة لأرقى فعالياتكم ومساحاتكم.',
        curation: {
          title: 'تنسيق الفن والتراث',
          desc: 'يتعاون متخصصونا مع المهندسين المعماريين ومصممي الديكور الداخلي لتنسيق مجموعات تجمع بين الأهمية التاريخية والرفاهية العصرية. سواء للمسكن الخاص أو المؤسسة العامة، تضمن رؤيتنا أن يصبح الفن جزءاً دائماً من مساحتك.',
        },
        events: {
          title: 'تنسيق الفعاليات الفاخرة',
          desc: 'تحويل الأماكن المرموقة إلى بيئات تاريخية غامرة. من ولائم الدولة الملكية إلى التجمعات الفاخرة الحميمة، نقدم أثاثاً أصيلاً ومنسوجات وقطعاً أثرية تخلق أجواءً من السلطة والتأنق لا مثيل لها.',
        },
        contact: 'استفسار مباشر',
        email: 'services@alqala.museum',
      },
      gifting: {
        title: 'هدايا الشركات',
        subtitle: 'تراث للقائد المعاصر',
        content: 'قدم هدية التراث. تجسد مجموعتنا المختارة لهدايا الشركات المكانة والتقدير.',
        desc: 'ارتقِ بعلاقاتك المهنية بهدايا تحمل ثقل التاريخ. تقدم مجموعتنا المختارة قطعاً نادرة بجودة المتحف مناسبة لأهم التكريمات المؤسسية.',
        consultation: 'استشارة مخصصة',
        consultationDesc: 'اسمح لمتخصصينا بمساعدتك في اختيار التعبير المثالي عن التراث لاحتياجات هدايا شركتك.',
        callUs: 'اتصل بنا',
        phone: '+966 11 123 4567',
        email: 'البريد الإلكتروني',
        emailAddress: 'gifting@alqala.museum',
        requestCatalogue: 'طلب كتالوج الهدايا',
      },
      inquire: {
        title: 'استفسار',
        subtitle: 'جرب إرث القلعة. يتم التعامل مع كل استفسار بالاحترام والتحفظ الذي يستحقه.',
        location: 'الرياض، المملكة العربية السعودية',
        locationLabel: 'الموقع',
        response: 'وقت الاستجابة',
        responseTime: '24-48 ساعة',
        confidentiality: 'السرية',
        confidentialityText: 'يتم التعامل مع جميع الاستفسارات بسرية تامة.',
        discreet: 'استجابة سرية خلال 24-48 ساعة',
        titlePlaceholder: 'صاحب السمو الملكي / صاحب السعادة / السيد / السيدة',
        fields: {
          name: 'الاسم الكامل',
          email: 'البريد الإلكتروني',
          type: 'نوع الاستفسار',
          message: 'الرسالة',
          types: {
            viewing: 'عرض خاص',
            acquisition: 'اقتناء',
            commission: 'تكليف',
            gifting: 'إهداء',
          }
        },
        submit: 'إرسال الاستفسار',
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    }
  });

export default i18n;