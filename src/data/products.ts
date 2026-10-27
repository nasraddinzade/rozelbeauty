// TODO уточнить у владельца, совпадают ли цены на сайте с ценами в магазине
// Источник цен: страница магазина «Rozel beauty» на Birmarket (merchant 11983).
// sourceId хранится для сверки с источником, на сайт не выводится.

export type Category =
  | "Dodaq"
  | "Göz"
  | "Üz makiyajı"
  | "Üz baxımı"
  | "Saç"
  | "Bədən"
  | "Dırnaq"
  | "Ətir"
  | "Aksesuar";

export type Product = {
  id: string;
  sourceId: number;
  brand: string;
  name: string;
  volume: string;
  price: number;
  oldPrice: number | null;
  category: Category;
  noImage: boolean;
};

export const products: Product[] = [
  { id: "topface-maye-dodaq-boyasi-instyle-extreme-matte-lip-paint-018", sourceId: 92661, brand: "Topface", name: "Maye dodaq boyası Instyle Extreme Matte Lip Paint 018", volume: "3.5 ml", price: 10, oldPrice: null, category: "Dodaq", noImage: false },
  { id: "nivea-dodaqlar-ucun-balzam-albali-parlaqligi", sourceId: 658433, brand: "Nivea", name: "Dodaqlar üçün balzam Albalı parlaqlığı", volume: "4.8 q", price: 5.66, oldPrice: 6.29, category: "Dodaq", noImage: false },
  { id: "golden-rose-dodaq-qelemi-dream-lipliner-504", sourceId: 52778, brand: "Golden Rose", name: "Dodaq qələmi Dream Lipliner 504", volume: "", price: 4.49, oldPrice: null, category: "Dodaq", noImage: false },
  { id: "golden-rose-dodaq-ucun-qelem-dream-lips-518", sourceId: 234309, brand: "Golden Rose", name: "Dodaq üçün qələm Dream Lips 518", volume: "", price: 4.49, oldPrice: null, category: "Dodaq", noImage: false },
  { id: "luxvisage-dodaqlar-ucun-tint-aqua-gel-05-wine-red", sourceId: 608749, brand: "Luxvisage", name: "Dodaqlar üçün tint AQUA GEL 05 Wine Red", volume: "", price: 8.27, oldPrice: 9.19, category: "Dodaq", noImage: false },
  { id: "luxvisage-dodaqlar-ucun-tint-aqua-gel-06-toffee", sourceId: 608750, brand: "Luxvisage", name: "Dodaqlar üçün tint AQUA GEL 06 Toffee", volume: "", price: 8.27, oldPrice: 9.19, category: "Dodaq", noImage: false },
  { id: "wati-dodaq-balzami-for-skin-vanilla-pdrn-hyaluronic-acid-volufroshot", sourceId: 2156782, brand: "Wati", name: "Dodaq balzamı for Skin Vanilla PDRN Hyaluronic Acid Volufroshot", volume: "20 ml", price: 8.99, oldPrice: null, category: "Dodaq", noImage: false },
  { id: "vivienne-sabo-dodaq-ucun-parildadici-le-grand-volume-10", sourceId: 467408, brand: "Vivienne Sabo", name: "Dodaq üçün parıldadıcı Le grand Volume 10", volume: "3 ml", price: 11.89, oldPrice: null, category: "Dodaq", noImage: false },
  { id: "vivienne-sabo-dodaq-ucun-pomada-nude-createur-n06-aciq-saftali-rengi", sourceId: 499601, brand: "Vivienne Sabo", name: "Dodaq üçün pomada Nude Createur №06 Açıq-şaftalı rəngi", volume: "", price: 8.59, oldPrice: null, category: "Dodaq", noImage: false },
  { id: "topface-dodaq-parildadicisi-supernova-volume-pt209-007", sourceId: 499503, brand: "Topface", name: "Dodaq parıldadıcısı Supernova Volume PT209 007", volume: "4 ml", price: 10, oldPrice: null, category: "Dodaq", noImage: false },
  { id: "neverti-dodaq-qelemi-kiss-couture-waterproof-liner-ton-np-102-004", sourceId: 1832251, brand: "Neverti", name: "Dodaq qələmi Kiss Couture Waterproof Liner ton NP 102-004", volume: "", price: 6.9, oldPrice: 9.2, category: "Dodaq", noImage: false },
  { id: "neverti-dodaq-qelemi-kiss-couture-waterproof-liner-ton-np-102-002", sourceId: 1832249, brand: "Neverti", name: "Dodaq qələmi Kiss Couture Waterproof Liner ton NP 102-002", volume: "", price: 6.9, oldPrice: 9.2, category: "Dodaq", noImage: false },
  { id: "nivea-dodaq-balzami-blackberry-shine", sourceId: 2152670, brand: "Nivea", name: "Dodaq balzamı Blackberry Shine", volume: "4.8 q", price: 5.66, oldPrice: 6.29, category: "Dodaq", noImage: false },
  { id: "sheglam-dodaq-ucun-parildadici-pout-perfect-shine-hot-cocoa", sourceId: 767496, brand: "Sheglam", name: "Dodaq üçün parıldadıcı Pout-Perfect Shine Hot cocoa", volume: "2 q", price: 22.99, oldPrice: null, category: "Dodaq", noImage: false },
  { id: "luxvisage-qaslar-ucun-berkidici-brow-laminator-extreme-fix", sourceId: 1248502, brand: "Luxvisage", name: "Qaşlar üçün bərkidici Brow Laminator Extreme Fix", volume: "", price: 8.27, oldPrice: 9.19, category: "Göz", noImage: false },
  { id: "revolution-goz-kolgeleri-paleti-makeup-velvet-rose", sourceId: 211976, brand: "Revolution", name: "Göz kölgələri paleti Makeup Velvet Rose", volume: "", price: 18, oldPrice: null, category: "Göz", noImage: false },
  { id: "vivienne-sabo-kirpikler-ucun-tus-cabaret-premiere-qara", sourceId: 207136, brand: "Vivienne Sabo", name: "Kirpiklər üçün tuş Cabaret Premiere Qara", volume: "9 ml", price: 12.69, oldPrice: null, category: "Göz", noImage: false },
  { id: "golden-rose-kirpikler-ucun-tus-longest-lash-tubing-mascara", sourceId: 2118304, brand: "Golden Rose", name: "Kirpiklər üçün tuş Longest Lash Tubing Mascara", volume: "", price: 12.99, oldPrice: null, category: "Göz", noImage: false },
  { id: "topface-kirpikler-ucun-tus-3d-dimension-pt314", sourceId: 92962, brand: "Topface", name: "Kirpiklər üçün tuş 3D Dimension PT314", volume: "8 ml", price: 15.71, oldPrice: 18.48, category: "Göz", noImage: false },
  { id: "golden-rose-goz-qelemi-dream-eyes-eyeliner-401-qara", sourceId: 52776, brand: "Golden Rose", name: "Göz qələmi Dream Eyes Eyeliner 401 Qara", volume: "1.4 q", price: 4.49, oldPrice: null, category: "Göz", noImage: false },
  { id: "revolution-goz-kolgeleri-palitrasi-makeup-the-enchanted-icon", sourceId: 962268, brand: "Revolution", name: "Göz kölgələri palitrası Makeup The Enchanted Icon", volume: "8.4 q", price: 25.9, oldPrice: null, category: "Göz", noImage: false },
  { id: "vivienne-sabo-kirpikler-ucun-tus-cabaret-premiere-artistic-volume-mascara-ton-05-qehveyi", sourceId: 468722, brand: "Vivienne Sabo", name: "Kirpiklər üçün tuş Cabaret Premiere Artistic Volume Mascara ton 05 qəhvəyi", volume: "9 ml", price: 12.69, oldPrice: null, category: "Göz", noImage: false },
  { id: "technic-goz-kolgeleri-paleti-smokey-quartz-pressed-pigment", sourceId: 1019469, brand: "Technic", name: "Göz kölgələri paleti Smokey Quartz Pressed Pigment", volume: "30 q", price: 24, oldPrice: null, category: "Göz", noImage: false },
  { id: "topface-goz-layneri-carbon-black-shine-qara", sourceId: 93004, brand: "Topface", name: "Göz layneri Carbon Black Shine Qara", volume: "2.5 ml", price: 7, oldPrice: null, category: "Göz", noImage: false },
  { id: "technic-kirpikler-ucun-tus-intense-lash-qara", sourceId: 1202331, brand: "Technic", name: "Kirpiklər üçün tuş Intense Lash, qara", volume: "10 ml", price: 15, oldPrice: null, category: "Göz", noImage: false },
  { id: "ghali-or-paris-kirpikler-ucun-tus-insta-big-volume-qara", sourceId: 1041047, brand: "Ghali'or Paris", name: "Kirpiklər üçün tuş Insta Big Volume Qara", volume: "20 ml", price: 23.3, oldPrice: null, category: "Göz", noImage: false },
  { id: "note-mum-qaslar-ucun-brow-master-wax", sourceId: 669675, brand: "Note", name: "Mum qaşlar üçün Brow Master Wax", volume: "50 ml", price: 19.48, oldPrice: null, category: "Göz", noImage: false },
  { id: "influence-beauty-konsiler-ultra-eraser-02-medium", sourceId: 1035551, brand: "Influence Beauty", name: "Konsiler Ultra Eraser 02 Medium", volume: "6.5 ml", price: 16.61, oldPrice: null, category: "Üz makiyajı", noImage: false },
  { id: "influence-beauty-konsiler-ultra-eraser-01-light", sourceId: 1035546, brand: "Influence Beauty", name: "Konsiler Ultra Eraser 01 Light", volume: "6.5 ml", price: 16.61, oldPrice: null, category: "Üz makiyajı", noImage: false },
  { id: "note-tonal-krem-3-in-1-glowing-skin-tinted-moisturizer-spf50", sourceId: 1039586, brand: "Note", name: "Tonal krem 3 in 1 Glowing Skin Tinted Moisturizer SPF50", volume: "30 ml", price: 15.99, oldPrice: null, category: "Üz makiyajı", noImage: false },
  { id: "note-enlik-stick-blush-20", sourceId: 2195769, brand: "Note", name: "Ənlik Stick Blush 20", volume: "", price: 16.99, oldPrice: null, category: "Üz makiyajı", noImage: false },
  { id: "missha-tonal-krem-kuson-velvet-finish-cushion-spf50-pa-light-beige-21", sourceId: 217788, brand: "Missha", name: "Tonal krem-kuşon Velvet Finish Cushion SPF50+/PA+++ Light Beige 21", volume: "15 q", price: 29.9, oldPrice: null, category: "Üz makiyajı", noImage: false },
  { id: "missha-bb-krem-perfect-cover-bb-cream-natural-beige-spf42-pa-n23", sourceId: 257258, brand: "Missha", name: "BB krem Perfect Cover BB Cream Natural Beige SPF42 / PA+++ №23", volume: "20 ml", price: 18.53, oldPrice: null, category: "Üz makiyajı", noImage: false },
  { id: "topface-tonal-krem-tonal-matte-skin-editor-pt465-001", sourceId: 92268, brand: "Topface", name: "Tonal krem Tonal Matte Skin Editor PT465-001", volume: "32 ml", price: 18, oldPrice: null, category: "Üz makiyajı", noImage: false },
  { id: "topface-tonal-krem-tonal-skin-twin-pt464-001", sourceId: 92258, brand: "Topface", name: "Tonal krem Tonal Skin Twin PT464-001", volume: "32 ml", price: 23.76, oldPrice: null, category: "Üz makiyajı", noImage: false },
  { id: "sheglam-tonal-krem-complexion-pro-long-lasting-matte-nude", sourceId: 1005863, brand: "Sheglam", name: "Tonal krem Complexion Pro Long Lasting Matte Nude", volume: "30 ml", price: 39, oldPrice: null, category: "Üz makiyajı", noImage: false },
  { id: "sheglam-tonal-krem-complexion-pro-long-lasting-matte-shell", sourceId: 1005856, brand: "Sheglam", name: "Tonal krem Complexion Pro Long Lasting Matte Shell", volume: "30 ml", price: 39, oldPrice: null, category: "Üz makiyajı", noImage: false },
  { id: "golden-rose-cc-krem-skin-perfector-light-102-ivory-spf50", sourceId: 2396487, brand: "Golden Rose", name: "CC krem Skin Perfector Light 102 Ivory SPF50", volume: "30 ml", price: 14.49, oldPrice: null, category: "Üz makiyajı", noImage: false },
  { id: "golden-rose-mineral-kompakt-kirsan-terracotta-02-natural", sourceId: 962260, brand: "Golden Rose", name: "Mineral kompakt kirşan Terracotta 02 Natural", volume: "12 q", price: 16.99, oldPrice: null, category: "Üz makiyajı", noImage: false },
  { id: "enough-tonal-krem-8-peptide-full-cover-perfect-foundation-peptidli-13-spf50", sourceId: 197718, brand: "Enough", name: "Tonal krem 8 Peptide Full Cover Perfect Foundation peptidli 13 SPF50", volume: "100 ml", price: 19.89, oldPrice: null, category: "Üz makiyajı", noImage: false },
  { id: "enough-kompakt-kirsan-collagen-hydro-moisture-two-way-cake-powder-spf25-n13", sourceId: 202592, brand: "Enough", name: "Kompakt kirşan Collagen Hydro Moisture Two Way Cake Powder SPF25 №13", volume: "", price: 24.99, oldPrice: null, category: "Üz makiyajı", noImage: false },
  { id: "the-purest-solutions-asindirici-ve-temizleyici-tonik-qlikolik-tursusu-ile-5-aha-bha", sourceId: 249568, brand: "The Purest Solutions", name: "Aşındırıcı və təmizləyici tonik qlikolik turşusu ilə 5% AHA + BHA", volume: "200 ml", price: 24.9, oldPrice: null, category: "Üz baxımı", noImage: false },
  { id: "the-purest-solutions-uz-ucun-serum-intensive-pore-tightening-lightening", sourceId: 242032, brand: "The Purest Solutions", name: "Üz üçün serum Intensive Pore Tightening & Lightening", volume: "30 ml", price: 25.9, oldPrice: null, category: "Üz baxımı", noImage: false },
  { id: "the-purest-solutions-uz-ucun-krem-hydration-booster-daily-cream", sourceId: 252237, brand: "The Purest Solutions", name: "Üz üçün krem Hydration Booster Daily Cream", volume: "50 ml", price: 26.5, oldPrice: null, category: "Üz baxımı", noImage: false },
  { id: "the-purest-solutions-goz-etrafi-deri-ucun-zerdab-radiance-eye-contour-serum", sourceId: 249520, brand: "The Purest Solutions", name: "Göz ətrafı dəri üçün zərdab Radiance Eye Contour Serum", volume: "30 ml", price: 27.9, oldPrice: null, category: "Üz baxımı", noImage: false },
  { id: "enough-uz-ucun-krem-collagen-moisture-essential", sourceId: 461765, brand: "Enough", name: "Üz üçün krem Collagen Moisture Essential", volume: "50 ml", price: 13.99, oldPrice: null, category: "Üz baxımı", noImage: false },
  { id: "enough-deniz-kollagen-terkibli-gunesden-qoruyucu-krem-collagen-3in1-whitening-moisture-sun-cream-spf50-pa", sourceId: 516919, brand: "Enough", name: "Dəniz kollagen tərkibli günəşdən qoruyucu krem Collagen 3in1 Whitening Moisture Sun Cream SPF50 PA+++", volume: "50 q", price: 15.99, oldPrice: null, category: "Üz baxımı", noImage: false },
  { id: "enough-kollagen-terkibli-nemlendirici-gunesden-qouyucu-krem-collagen-moisture-sun-cream-spf-50-pa", sourceId: 516918, brand: "Enough", name: "Kollagen tərkibli nəmləndirici günəşdən qouyucu krem Collagen Moisture Sun Cream SPF 50+ PA+++", volume: "50 ml", price: 15.99, oldPrice: null, category: "Üz baxımı", noImage: false },
  { id: "anua-uz-ucun-serum-10-azelaic-acid-10-hyaluron", sourceId: 1193060, brand: "Anua", name: "Üz üçün serum 10% Azelaic Acid 10% + Hyaluron", volume: "30 ml", price: 54.7, oldPrice: 64.35, category: "Üz baxımı", noImage: false },
  { id: "anua-uz-ucun-hidrofil-yagi-heartleaf-pore-control", sourceId: 840495, brand: "Anua", name: "Üz üçün hidrofil yağı Heartleaf Pore Control", volume: "200 ml", price: 50.49, oldPrice: 59.4, category: "Üz baxımı", noImage: false },
  { id: "anua-serum-100-pdrn-hyaluron", sourceId: 1241466, brand: "Anua", name: "Serum 100 PDRN HYALURON", volume: "", price: 54.7, oldPrice: 64.35, category: "Üz baxımı", noImage: true },
  { id: "cosrx-uz-ucun-krem-advanced-snail-92-all-in-one-cream", sourceId: 207073, brand: "COSRX", name: "Üz üçün krem Advanced Snail 92 All In One Cream", volume: "100 ml", price: 37.79, oldPrice: 41.99, category: "Üz baxımı", noImage: false },
  { id: "cosrx-uz-ucun-losyon-bha-blackhead-power-liquid", sourceId: 207068, brand: "COSRX", name: "Üz üçün losyon BHA Blackhead Power Liquid", volume: "100 ml", price: 41.39, oldPrice: 45.99, category: "Üz baxımı", noImage: false },
  { id: "cosrx-uz-ucun-krem-hyaluronic-acid-intensive-cream", sourceId: 334079, brand: "COSRX", name: "Üz üçün krem Hyaluronic Acid Intensive Cream", volume: "100 ml", price: 35.81, oldPrice: 39.79, category: "Üz baxımı", noImage: false },
  { id: "farmstay-pilinq-gel-uz-ucun-avokado-ekstrakti-ile-real-avocado-deep-clear-peeling-gel", sourceId: 425574, brand: "FarmStay", name: "Pilinq-gel üz üçün avokado ekstraktı ilə Real Avocado Deep Clear Peeling Gel", volume: "100 ml", price: 14.99, oldPrice: null, category: "Üz baxımı", noImage: false },
  { id: "farmstay-kokos-ekstrakti-ile-uz-ucun-pilinq-gel-real-coconut-deep-clear", sourceId: 475420, brand: "FarmStay", name: "Kokos ekstraktı ilə üz üçün pilinq-gel Real Coconut Deep Clear", volume: "100 ml", price: 12.99, oldPrice: null, category: "Üz baxımı", noImage: false },
  { id: "farmstay-coxfunksiyali-ampulali-zerdab-uz-ucun-collagen-hyaluronic-acid-all-in-one-ampoule-hialuron-tursusu-ve-kollagen-ile", sourceId: 89505, brand: "FarmStay", name: "Çoxfunksiyalı ampulalı zərdab üz üçün Collagen & Hyaluronic Acid All-In One Ampoule hialuron turşusu və kollagen ilə", volume: "250 ml", price: 27.99, oldPrice: null, category: "Üz baxımı", noImage: false },
  { id: "garnier-misellyar-suyu-skin-naturals-vitamin-c", sourceId: 429033, brand: "Garnier", name: "Misellyar suyu Skin Naturals Vitamin C", volume: "400 ml", price: 10.84, oldPrice: 13.55, category: "Üz baxımı", noImage: false },
  { id: "garnier-misellyar-suyu-hialuron-aloe", sourceId: 120335, brand: "Garnier", name: "Misellyar suyu Hialuron Aloe", volume: "400 ml", price: 8.77, oldPrice: 10.96, category: "Üz baxımı", noImage: false },
  { id: "garnier-gunesden-qoruyucu-sud-ambre-solaire-spf50", sourceId: 1211509, brand: "Garnier", name: "Günəşdən qoruyucu süd Ambre Solaire SPF50", volume: "50 ml", price: 10.87, oldPrice: 13.59, category: "Üz baxımı", noImage: false },
  { id: "compliment-uz-ucun-pilinq-yumrulama-meyve-tursulari-ile", sourceId: 227507, brand: "Compliment", name: "Üz üçün pilinq-yumrulama meyvə turşuları ilə", volume: "80 ml", price: 4.32, oldPrice: 5.4, category: "Üz baxımı", noImage: false },
  { id: "compliment-uz-ucun-pilinq-yumrulama-agac-komuru-ile", sourceId: 227509, brand: "Compliment", name: "Üz üçün pilinq-yumrulama ağac kömürü ilə", volume: "80 ml", price: 4.32, oldPrice: 5.4, category: "Üz baxımı", noImage: false },
  { id: "compliment-uz-ucun-pilinq-yumrulama-ilbiz-musini-ile", sourceId: 227508, brand: "Compliment", name: "Üz üçün pilinq-yumrulama ilbiz müsini ilə", volume: "80 ml", price: 4.8, oldPrice: 6, category: "Üz baxımı", noImage: false },
  { id: "maruderm-tonik-qlycolic-acid-7-isiqlandirici-ve-lekelenme-eleyhine", sourceId: 1321465, brand: "Maruderm", name: "Tonik Qlycolic Acid 7% işıqlandırıcı və ləkələnmə əleyhinə", volume: "250 ml", price: 19.29, oldPrice: null, category: "Üz baxımı", noImage: false },
  { id: "maruderm-zerdab-azelaic-acid-solution-10", sourceId: 1048468, brand: "Maruderm", name: "Zərdab Azelaic Acid Solution 10%", volume: "30 ml", price: 19.89, oldPrice: null, category: "Üz baxımı", noImage: false },
  { id: "newlab-tursu-pilinq-uz-ucun-the-aha-30-bha-2", sourceId: 313274, brand: "NewLab", name: "Turşu pilinq üz üçün The AHA 30% + BHA 2%", volume: "30 ml", price: 25.19, oldPrice: null, category: "Üz baxımı", noImage: false },
  { id: "compliment-sac-ucun-maska-naturalis-3-1-de-biber-ile", sourceId: 184219, brand: "Compliment", name: "Saç üçün maska Naturalis 3-1-də bibər ilə", volume: "500 ml", price: 8, oldPrice: 10, category: "Saç", noImage: false },
  { id: "compliment-sampun-sac-uzanmasinin-artmasi-ucun", sourceId: 206782, brand: "Compliment", name: "Şampun saç uzanmasının artması üçün", volume: "200 ml", price: 7.2, oldPrice: 9, category: "Saç", noImage: false },
  { id: "morfose-sac-ucun-kondisioner-sprey-milk-therapy-2-fazali", sourceId: 517395, brand: "Morfose", name: "Saç üçün kondisioner-sprey Milk Therapy 2 fazalı", volume: "400 ml", price: 17.75, oldPrice: 22.19, category: "Saç", noImage: false },
  { id: "morfose-sac-laki-hair-spray-ultra-strong", sourceId: 432313, brand: "Morfose", name: "Saç lakı Hair Spray Ultra Strong", volume: "400 ml", price: 7.19, oldPrice: 8.99, category: "Saç", noImage: false },
  { id: "dr-rashel-tonlasdirici-sampun-arqan-yagi-ekstrakti-ile-tebii-qara", sourceId: 783934, brand: "Dr.Rashel", name: "Tonlaşdırıcı şampun, arqan yağı ekstraktı ilə, təbii qara", volume: "400 ml", price: 10.5, oldPrice: 15, category: "Saç", noImage: false },
  { id: "dr-rashel-tonlasdirici-sampun-collagen-argan-oil-dark-brown", sourceId: 870712, brand: "Dr.Rashel", name: "Tonlaşdırıcı şampun Collagen & Argan Oil Dark Brown", volume: "400 ml", price: 10.5, oldPrice: 15, category: "Saç", noImage: false },
  { id: "garnier-sampun-fructis-sos-berpaedici", sourceId: 13355, brand: "Garnier", name: "Şampun Fructis SOS Bərpaedici", volume: "250 ml", price: 5.11, oldPrice: 6.39, category: "Saç", noImage: false },
  { id: "garnier-saclar-ucun-balzam-fructis-sos-berpa", sourceId: 120667, brand: "Garnier", name: "Saçlar üçün balzam Fructis SOS Bərpa", volume: "387 ml", price: 7.27, oldPrice: 9.09, category: "Saç", noImage: false },
  { id: "maruderm-saclar-ucun-sampun-sles-free-anti-hair-loss", sourceId: 1035419, brand: "Maruderm", name: "Saçlar üçün şampun SLES-Free Anti-Hair Loss", volume: "400 ml", price: 15.99, oldPrice: null, category: "Saç", noImage: false },
  { id: "kleral-sac-ucun-qalici-boya-system-magicolor-7-11-blonde-matt", sourceId: 398143, brand: "Kleral", name: "Saç üçün qalıcı boya System Magicolor 7.11 Blonde Matt", volume: "100 ml", price: 7.7, oldPrice: 8.56, category: "Saç", noImage: false },
  { id: "kleral-sac-ucun-qalici-boya-system-magicolor-8-11-light-blonde-matt", sourceId: 398144, brand: "Kleral", name: "Saç üçün qalıcı boya System Magicolor 8.11 Light Blonde Matt", volume: "100 ml", price: 7.7, oldPrice: 8.56, category: "Saç", noImage: false },
  { id: "beany-sac-ucun-krem-butter", sourceId: 2410863, brand: "Beany", name: "Saç üçün krem Butter", volume: "190 ml", price: 10, oldPrice: 12.5, category: "Saç", noImage: false },
  { id: "garnier-sprey-avtoqaralma-beden-ucun-ambre-solaire-beraber-qaralma-tebii-qaralma-qaysi-ceyirdeyi-yagi-ile", sourceId: 7207, brand: "Garnier", name: "Sprey-avtoqaralma bədən üçün Ambre Solaire Bərabər qaralma təbii qaralma, qaysı çəyirdəyi yağı ilə", volume: "150 ml", price: 15.19, oldPrice: 18.99, category: "Bədən", noImage: false },
  { id: "compliment-beden-ucun-skrab-moruq-ile-masaj-effekti-ile", sourceId: 257461, brand: "Compliment", name: "Bədən üçün skrab moruq ilə, masaj effekti ilə", volume: "400 ml", price: 7.2, oldPrice: 9, category: "Bədən", noImage: false },
  { id: "compliment-beden-ucun-skrab-qehve-antiselulit", sourceId: 231429, brand: "Compliment", name: "Bədən üçün skrab Qəhvə antiselülit", volume: "400 ml", price: 7.2, oldPrice: 9, category: "Bədən", noImage: false },
  { id: "beany-beden-ucun-krem-yag-vanilla-sour", sourceId: 2178431, brand: "Beany", name: "Bədən üçün krem-yağ Vanilla Sour", volume: "250 ml", price: 10, oldPrice: 12.5, category: "Bədən", noImage: false },
  { id: "nivea-krem-creme-nemlendirici-universal-uz-el-ve-beden-ucun-pantenol-ile", sourceId: 11277, brand: "Nivea", name: "Krem Creme Nəmləndirici universal üz, əl və bədən üçün pantenol ilə", volume: "75 ml", price: 5.52, oldPrice: 6.49, category: "Bədən", noImage: false },
  { id: "nivea-dezodorant-antiperspirant-men-ultra-antibakterial-effekt-ile", sourceId: 8118, brand: "Nivea", name: "Dezodorant-antiperspirant Men Ultra antibakterial effekt ilə", volume: "150 ml", price: 6.92, oldPrice: 7.69, category: "Bədən", noImage: false },
  { id: "garnier-antiperspirant-mineral-aktiv-nezaret-72-saat-termoqoruma", sourceId: 11111, brand: "Garnier", name: "Antiperspirant Mineral Aktiv Nəzarət 72 saat Termoqoruma", volume: "50 ml", price: 6.02, oldPrice: 6.69, category: "Bədən", noImage: false },
  { id: "rexona-dezodorant-antiperspirant-sprey-clinical-protection-qorunma-ve-teravet", sourceId: 205429, brand: "Rexona", name: "Dezodorant-antiperspirant sprey Clinical Protection Qorunma və Təravət", volume: "150 ml", price: 11.69, oldPrice: 17.99, category: "Bədən", noImage: false },
  { id: "rexona-antiperspirant-sprey-clinic-protection-confidence", sourceId: 344173, brand: "Rexona", name: "Antiperspirant sprey Clinic Protection Confidence", volume: "150 ml", price: 8, oldPrice: 15.99, category: "Bədən", noImage: false },
  { id: "rexona-etirli-antiperspirant-deep-aqua", sourceId: 1554212, brand: "Rexona", name: "Ətirli antiperspirant Deep Aqua", volume: "150 ml", price: 11.78, oldPrice: 14.99, category: "Bədən", noImage: false },
  { id: "dove-antiperspirant-sprey-deodorant-go-fresh-xiyar-ile", sourceId: 380430, brand: "Dove", name: "Antiperspirant sprey Deodorant Go Fresh xiyar ilə", volume: "150 ml", price: 5.99, oldPrice: null, category: "Bədən", noImage: false },
  { id: "dove-antiperspirant-men-care-clean-comfort", sourceId: 1320184, brand: "Dove", name: "Antiperspirant Men Care Clean Comfort", volume: "150 ml", price: 5.99, oldPrice: null, category: "Bədən", noImage: true },
  { id: "lionesse-dus-ucun-lif-9050-mehsul-cesidde", sourceId: 727140, brand: "Lionesse", name: "Duş üçün lif 9050, məhsul çeşiddə", volume: "", price: 1.49, oldPrice: null, category: "Bədən", noImage: false },
  { id: "golden-rose-dirnaq-ucun-top-quick-dry-top-coat", sourceId: 355921, brand: "Golden Rose", name: "Dırnaq üçün top Quick Dry Top Coat", volume: "", price: 5.99, oldPrice: null, category: "Dırnaq", noImage: false },
  { id: "golden-rose-dirnaq-ucun-lak-color-expert-nail-lacquer-n62", sourceId: 4791, brand: "Golden Rose", name: "Dırnaq üçün lak Color Expert Nail Lacquer №62", volume: "10.2 ml", price: 3.49, oldPrice: null, category: "Dırnaq", noImage: false },
  { id: "topface-dirnaq-laki-pt110-071-cehrayi-benovseyi", sourceId: 2411250, brand: "Topface", name: "Dırnaq lakı PT110 071 Çəhrayı-bənövşəyi", volume: "9 ml", price: 2, oldPrice: null, category: "Dırnaq", noImage: false },
  { id: "topface-dirnaq-laki-pt110-jelly-effect-gavali-cehrayi", sourceId: 2411278, brand: "Topface", name: "Dırnaq lakı PT110 Jelly Effect Gavalı çəhrayı", volume: "9 ml", price: 2, oldPrice: null, category: "Dırnaq", noImage: false },
  { id: "lionesse-knipser-dirnaq-ucun-3451", sourceId: 381352, brand: "Lionesse", name: "Knipser dırnaq üçün 3451", volume: "", price: 3.09, oldPrice: null, category: "Dırnaq", noImage: false },
  { id: "lionesse-dirnaqlar-ucun-knipser-t-3406", sourceId: 949054, brand: "Lionesse", name: "Dırnaqlar üçün knipser T-3406", volume: "", price: 4.29, oldPrice: null, category: "Dırnaq", noImage: false },
  { id: "milestone-narcisa-for-her-amour-etir-suyu-qadinlar-ucun", sourceId: 751636, brand: "Milestone", name: "Narcisa For Her Amour ətir suyu qadınlar üçün", volume: "100 ml", price: 25.19, oldPrice: 35.99, category: "Ətir", noImage: false },
  { id: "milestone-perfumes-the-night-s-treasure-intense-qadinlar-ucun-etir-suyu", sourceId: 751387, brand: "Milestone", name: "Perfumes The Night's Treasure Intense qadınlar üçün ətir suyu", volume: "100 ml", price: 24.49, oldPrice: 34.99, category: "Ətir", noImage: false },
  { id: "golden-rose-blue-azure-qadinlar-ucun-etir-suyu", sourceId: 184358, brand: "Golden Rose", name: "Blue Azure qadınlar üçün ətir suyu", volume: "100 ml", price: 47.2, oldPrice: 59, category: "Ətir", noImage: false },
  { id: "golden-rose-violet-mist-qadinlar-ucun-etir-suyu", sourceId: 184356, brand: "Golden Rose", name: "Violet Mist qadınlar üçün ətir suyu", volume: "100 ml", price: 47.2, oldPrice: 59, category: "Ətir", noImage: false },
  { id: "essence-le-chameau-buds-delicate-uniseks-etir-suyu", sourceId: 958141, brand: "Essence", name: "Le Chameau Buds Delicate uniseks ətir suyu", volume: "100 ml", price: 74.4, oldPrice: 124, category: "Ətir", noImage: false },
  { id: "sheglam-makiyaj-ucun-firca-desti-pro-core-6-ed", sourceId: 1059292, brand: "Sheglam", name: "Makiyaj üçün fırça dəsti Pro Core 6 əd", volume: "", price: 28.99, oldPrice: null, category: "Aksesuar", noImage: false },
  { id: "sheglam-makiyaj-ucun-fircalar-desti-101-face-essentials", sourceId: 1113117, brand: "Sheglam", name: "Makiyaj üçün fırçalar dəsti 101 Face Essentials", volume: "", price: 31.99, oldPrice: null, category: "Aksesuar", noImage: false },
  { id: "neverti-kolgeler-ucun-firca-np150-f11", sourceId: 1517648, brand: "Neverti", name: "Kölgələr üçün fırça NP150-F11", volume: "", price: 6.38, oldPrice: 7.5, category: "Aksesuar", noImage: false },
  { id: "lionesse-daraq-qara", sourceId: 6260, brand: "Lionesse", name: "Daraq Qara", volume: "", price: 2.39, oldPrice: null, category: "Aksesuar", noImage: false },
];
