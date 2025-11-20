import React from 'react';
import Image from 'next/image';
import { ChevronUp, ExternalLink } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  videoUrl: string;
  imageUrl: string;
  upvotes: number;
  externalLink: string;
}

const products: Product[] = [
  {
    id: '6918c37eeece859d7cd41ba3',
    name: 'LinguAi',
    tagline: 'تعلم الإنجليزية من خلال المواضيع التي تحبها',
    description: 'يُحدث LinguAI ثورة في تعلم اللغة الإنجليزية من خلال السماح للمتعلمين بإنشاء وحدات تعليمية مخصصة حول المواضيع التي يهتمون بها—الرياضة، التكنولوجيا، الثقافة، الطعام، أو أي موضوع يهمهم.\n\nما يميز LinguAI\n\nالتخصيص بالذكاء الاصطناعي:\n إنشاء وحدات تعليمية مخصصة فورياً حول أي موضوع مع إمكانية تحديد سياق ثقافي\n\nتجربة تعليمية متكاملة:\nكل وحدة تشمل نصوص قرائية، ومفردات، مع إمكانية الاستماع بالصوت، و6 أنواع من التقييمات\n\nالتميز التربوي:\nأنشطة مبنية على 6 استراتيجيات تدريس مثبتة للتعلم الفعال\n\nملاحظات الذكاء الاصطناعي:\nملاحظات شخصية على التحدث والكتابة، مترجمة لأكثر من 130 لغة\n\nدمج المهارات الأربع: \nالقراءة والكتابة والاستماع والتحدث في وحدة واحدة متماسكة\n\nواجهة ثنائية اللغة:\nدعم كامل للعربية والإنجليزية مع تخطيط RTL\n\nترجمة مجانية: \nالمحتوى قابل للترجمة لأكثر من 130 لغة\n\nيحول LinguAI تعلم الإنجليزية من كتب مملة إلى محتوى جذاب وذي صلة يهتم به المتعلمون فعلاً.\n\nوهناك امكانية للتسجيل كطالب منفرد، او مؤسسة، مدرسة/جامعة او اي مجموعة تعليمية بحيث يتم مشاركة حساب التسجيل من قبل مدير واحد واضافة عدد لانهائي من الطلاب على نفس الحساب',
    videoUrl: 'https://www.youtube.com/embed/XUi9AqCNZr0',
    imageUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8272c138-5ae4-4fe1-9428-dc5f5bafab24-mihwarsaad-sa/assets/images/8676fd3b2_Screenshot2025-11-15at162757-1.png',
    upvotes: 39,
    externalLink: '#',
  },
  {
    id: '6918c6398fdd5b6f7b0d0e6f',
    name: 'Linai',
    tagline: 'جميع مستلزمات مطعمك ومقهىك في منصة ذكية واحدة',
    description: 'منصّة مشتريات ذكية للمقاهي والمطاعم في السعودية، تتيح مقارنة الأسعار، طلب المواد الغذائية وغير الغذائية من موردين متعددين، تتبع الطلبات، إدارة الفواتير، وخيارات دفع مرنة — كل ذلك في منصة واحدة سهلة وسريعة.\n\nLinai is a smart procurement platform built for cafés and restaurants in Saudi Arabia\nWe help businesses order all their food and non-food supplies from multiple suppliers in one unified platform, compare prices instantly, track orders, manage invoices, and access flexible payment options — including BNPL — all in a fast, organized, and digital workflow',
    videoUrl: 'https://www.youtube.com/embed/7B6at3GOI1A',
    imageUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8272c138-5ae4-4fe1-9428-dc5f5bafab24-mihwarsaad-sa/assets/images/6909607f1_Screenshot2025-11-15at182720-2.png',
    upvotes: 17,
    externalLink: '#',
  },
  {
    id: '6918cc735b7caf5d9f314c2d',
    name: 'وجهني',
    tagline: 'لأفضل الفرص الوظيفية',
    description: 'منصّة وجهني تقدّم لك تجربة احترافية لتطوير مسارك المهني والوصول لأول وظيفة في السوق السعودي، من خلال أربع مراحل رئيسية:\n\n\t1.\tتحليل المسار بالذكاء الاصطناعي\nتدخل بياناتك الأساسية، والـAI يحلل شخصيتك، مهاراتك واهتماماتك، ويقترح لك مسارات مهنية دقيقة تناسب السوق السعودي، مع توصيات بكورسات مناسبة لمستوى البداية.\n\n\t2.\tجلسة توجيه مع موجه متخصص\nتتواصل مع موجه يمتلك خبرة حقيقية في مجاله، يوضّح لك طبيعة الوظائف، المتطلبات المحلية، والمهارات المطلوبة ليقودك لاختيار المسار الأنسب.\n\n\t3.\tتنفيذ خطة تعلم عملية\nوجهني يبني لك خطة تدريب واقعية تجمع بين كورسات ومشاريع عملية من المنصّة وشركائها، بهدف تزويدك بمهارات قابلة للتوظيف في السوق السعودي بدون الاعتماد على محتوى نظري طويل وغير مفيد.\n\n\t4.\tترشيح فرص عمل مناسبة في السعودية\nبعد استكمال الخطة، توصلك ترشيحات وظائف متوافقة مع قدراتك والمسار الذي اخترته',
    videoUrl: 'https://www.youtube.com/embed/Igydg1_iYPA',
    imageUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8272c138-5ae4-4fe1-9428-dc5f5bafab24-mihwarsaad-sa/assets/images/ade5c46e0_Screenshot2025-11-15at185321-3.png',
    upvotes: 23,
    externalLink: '#',
  },
  {
    id: '6918cdeeb1879584ebcf1b78',
    name: 'Washywash',
    tagline: 'منصة متكاملة لخدمات التنظيف الاحترافية',
    description: 'تقدّم WashyWash حلاً حديثاً لتنظيف الملابس، الأثاث والسجاد بطريقة صديقة للبيئة وفعّالة. يعتمد التطبيق على تقنيات تنظيف مبتكرة تضمن القضاء على الجراثيم وإطالة عمر المفروشات\n\n مع إمكانية استلام وتسليم الطلبات وفق جدول المستخدم. يوفر الفريق دعم عملاء مميزاً ويضمن جودة ثابتة عبر تشغيل مركزي متكامل،\n\n كما يستخدم مواد تنظيف آمنة للبشرة والحساسية. يشيد العملاء بالمهنية والدقة في المواعيد وجودة النتائج، ويعتبر التطبيق وسيلة سهلة لتوفير الوقت والجهد في إدارة أعمال التنظيف اليومية.',
    videoUrl: 'https://www.youtube.com/embed/d-z6Cbt9eV8',
    imageUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8272c138-5ae4-4fe1-9428-dc5f5bafab24-mihwarsaad-sa/assets/images/562d4ff52_Screenshot2025-11-15at185601-4.png',
    upvotes: 34,
    externalLink: '#',
  },
];

const ProductGrid = () => {
    return (
        <section className="bg-[#edebe0] p-6 sm:p-8 lg:p-12">
            <div className="mb-8">
                <h2 className="font-display text-xl sm:text-3xl lg:text-4xl font-semibold text-foreground">
                    دفعة مؤسسين عين على سوريا - أسبوع #١
                </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
                {products.map((product) => (
                    <a
                        key={product.id}
                        href={`/productdetail?id=${product.id}`}
                        className="group flex flex-col rounded-2xl bg-card text-foreground overflow-hidden border-2 border-secondary/30 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                    >
                        <div className="relative aspect-video w-full bg-muted">
                            <iframe
                                src={product.videoUrl}
                                title={`${product.name} Video Showcase`}
                                className="w-full h-full"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>

                        <div className="relative aspect-[4/3] w-full overflow-hidden">
                            <Image
                                src={product.imageUrl}
                                alt={`${product.name} Showcase`}
                                width={400}
                                height={300}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                unoptimized
                            />
                        </div>

                        <div className="p-4 flex flex-col flex-1">
                            <h3 className="font-display text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                                {product.name}
                            </h3>
                            <div className="border-t border-secondary/20 my-3"></div>
                            <p className="text-sm text-secondary">
                                {product.tagline}
                            </p>
                            <div className="border-t border-secondary/20 my-3"></div>
                            <div className="mb-3">
                                <p className="text-xs text-foreground/70 whitespace-pre-wrap line-clamp-3 lg:line-clamp-6">
                                    {product.description}
                                </p>
                                <button type="button" className="text-xs text-primary hover:underline font-medium mt-1">
                                    عرض المزيد
                                </button>
                            </div>
                            <div className="flex items-stretch gap-4 pt-4 border-t border-secondary/20 mt-auto">
                                <button type="button" className="relative flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg transition-all duration-300 font-bold text-sm bg-gradient-to-b from-[#edebe0] to-white text-foreground border border-secondary hover:bg-secondary/10">
                                    <ChevronUp className="w-5 h-5" />
                                    <span>{product.upvotes}</span>
                                </button>
                                <button type="button" className="flex items-center gap-1.5 px-3 py-2 rounded-lg border transition-all bg-primary/10 border-primary hover:bg-primary/20">
                                    <ExternalLink className="w-4 h-4 text-primary" />
                                </button>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default ProductGrid;