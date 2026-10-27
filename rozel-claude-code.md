# Rozel Beauty & Care. Прототип интернет-магазина

Построй сайт интернет-магазина косметики Rozel (Rozel Beauty & Care), Баку. Это рабочий прототип для показа владельцу, не боевой магазин. Ниже всё, что нужно, описание магазина, направление дизайна, структура экранов, данные товаров и жёсткая механика. Дизайн и экраны придуманы под этот магазин, не подменяй их шаблоном интернет-магазина.

---

## 1. Что это за магазин

Rozel Beauty & Care это сеть магазинов косметики в Баку. Instagram @rozelbeautyshop, около 25 тысяч подписчиков, магазину примерно год. Девиз из шапки профиля «Gözəlliyin çiçəklənsin!». Работает каждый день с 10:00 до 22:00.

Ассортимент массовый и среднеценовой. Макияж (помады, тинты, тушь, тональные средства, палетки), корейский и европейский уход за лицом, уход за волосами и краска для волос, дезодоранты, средства для тела, лаки для ногтей, небольшая парфюмерия, кисти и расчёски. Бренды из Турции, СНГ, Кореи, Великобритании и Европы. Рядом идут и премиальные корейские линейки вроде COSRX и Anua.

Покупатель по подаче аккаунта и ценам. Девушки и молодые женщины, много студенческого бюджета (в аккаунте есть раздел «Tələbə»), выбирают по цене и скидке, потом по бренду. Магазин сам говорит с покупателем языком скидок, кампаний брендов и подарков. Свою съёмку товара почти не делает, в постах фирменная малиново-розовая графика с вырезанными упаковками.

Масштаб. В полном каталоге магазина около 5300 позиций, цены от 0.47 до 293 ₼, медиана около 12 ₼, около половины товаров со скидкой. Сайт строится как плотный каталог, а не витрина на несколько десятков позиций. В этот промт вложен срез из 106 позиций, чтобы прототип был наполнен. Структура должна спокойно выдерживать рост до тысяч позиций, ничего не хардкодь под число 106 и нигде на сайте не пиши, сколько товаров в каталоге.

Текущий путь заказа. Клиенты принимаются в магазинах и через WhatsApp. Этот путь обязан остаться, см. механику.

---

## 2. Направление дизайна

**Референсы.** Основа это Stylevana, каталог, где цена и скидка главные, ценовые диапазоны вынесены в навигацию, есть алфавитный каталог брендов, плотная сетка. Из Cult Beauty берём только одну идею, ступени скидки как быстрый фильтр («20% və daha çox»). Отказываемся от Aesop, потому что тишина, пустота и три товара на экран убьют магазин с тысячами недорогих позиций и скидками. Отказываемся от Glossier, потому что он держится на собственной студийной съёмке и личной интонации бренда, а у Rozel на старте будут только чистые упаковки на белом фоне. От Cult Beauty не берём фильтры по типу кожи, ингредиентам и заботам, потому что в данных этого нет.

**Идея сайта.** Сайт устроен как прогулка вдоль полки с ценниками. Главный носитель дизайна это шелф-тег, бумажный ценник с полки. Карточка товара похожа на ценник, крупная цена, рядом зачёркнутая старая, жёлтая наклейка со скидкой в процентах, бренд мелким капсом над названием. Всё остальное спокойное, чтобы ценники читались.

**Шрифты.** Заголовочный Playfair Display, в основном курсив для слов в заголовках разделов, это перекликается с тонким серифным логотипом rozel. Текстовый и цифры Manrope, для цен включи `tabular-nums`. Подключай через `next/font` с подмножествами latin и latin-ext.

Обязательно проверь рендер строки `Əlavə şəkər çiçək ğ ı ö ü ç ş İ` в обоих шрифтах и покажи результат в отчёте. Если какая-то буква падает на системный шрифт, замени пару на другую с полной азербайджанской диакритикой, но сохрани идею, серифный заголовок плюс гротеск для текста.

**Палитра, светлая тема.**

| Цвет | Где |
|---|---|
| `#C8286B` | малиновый Rozel, кнопки, логотип, цена на ценнике |
| `#FFF1F5` | розовая бумага, фон страниц |
| `#2A0E1E` | чернильная слива, основной текст |
| `#FFD84D` | ценниковый жёлтый, наклейка скидки, плашка демо допустима в нём же |
| `#7A3A55` | приглушённая слива, второй текст, зачёркнутая цена, границы 1px |
| `#FFFFFF` | карточки |

Никаких тёмных тем и градиентов, кроме одного мягкого малиново-розового в шапке главной.

**Сетка.** Плотная. Мобильный 2 колонки с зазором 8px, планшет 3, десктоп 5. Карточки одной высоты, название в две строки с обрезкой. Скругления 6px, не пилюли. На десктопе слева постоянная колонка фильтров, на мобильном фильтры в выезжающей панели снизу.

**Первый экран главной.** Сверху плашка демо-версии. Под ней шапка, логотип словами «rozel» (Playfair Display, курсив) и подпись BEAUTY & CARE капсом, слева крупное поле поиска на всю ширину, справа корзина с количеством. Прямо под шапкой горизонтальная полка цен из пяти ценников-кнопок, «5 ₼-dək», «5–10 ₼», «10–20 ₼», «20–40 ₼», «40 ₼ və yuxarı». Они выглядят как ценники на ножках полки и ведут в каталог с нужным фильтром. Ниже без большой картинки сразу первый ряд товаров со скидкой с заголовком «Bu gün endirimdə». Первый экран на телефоне показывает поиск, полку цен и минимум 2 ряда товаров. Никакого баннера на пол-экрана.

**Ощущение.** Человек зашёл в магазин, где всё лежит на виду, цена видна сразу, скидка не прячется, и за минуту можно набрать корзину на конкретную сумму. Не бутик и не лаборатория, а яркая живая полка. Отличить сайт от любого другого косметического магазина должны три вещи, карточки-ценники, полка ценовых диапазонов вместо баннера и малиновый на розовой бумаге с серифным курсивом.

---

## 3. Структура и обоснование

Решение исходит из данных. Каталог большой, дешёвый и скидочный, значит покупатель ищет по цене и бренду. Подбор по типу кожи невозможен, в данных нет ни типа кожи, ни состава. Поэтому ставка на поиск, цену, скидку, бренд и категорию.

### Экраны

1. **Главная** `/`. Поиск, полка цен, «Bu gün endirimdə» (товары со скидкой, 10 штук), по одной горизонтальной ленте на категорию с кнопкой «Hamısına bax», лента брендов (текстовые плашки с названиями, без логотипов брендов), блок «Mağazalarımız» с двумя подтверждёнными адресами и часами.
2. **Каталог** `/kataloq`. Единая страница списка. Параметры в адресе `q`, `kateqoriya`, `brend`, `qiymet` (диапазон), `endirim`. Сверху счётчик найденного, сортировка, сетка карточек, пагинация кнопкой «Daha çox göstər».
3. **Страница бренда** `/brend/[slug]`, это каталог с предустановленным брендом и заголовком.
4. **Все бренды** `/brendler`. Алфавитный каталог брендов с количеством товаров у каждого.
5. **Товар** `/mehsul/[slug]`. Фото, бренд, название, объём если есть, цена и старая цена, количество, «Səbətə at». Ниже блок «Eyni brenddən» (до 4 товаров). Без отзывов и без рейтинга.
6. **Корзина** `/sebet`.
7. **Оформление** `/sifaris`.
8. **Успех** `/ugur`.
9. **Mağazalar** `/magazalar`. Два подтверждённых адреса, часы, ссылка на Instagram. Не пиши, чего у магазина нет.

### Фильтры, которые делаем

- Цена, пятью диапазонами с полки и ручным вводом от и до
- Скидка, переключатель «Yalnız endirimdə» и ступени «20% və daha çox», «40% və daha çox». Процент считай из старой и новой цены
- Бренд, список с поиском внутри и счётчиками
- Категория, девять групп из данных (Dodaq, Göz, Üz makiyajı, Üz baxımı, Saç, Bədən, Dırnaq, Ətir, Aksesuar)
- Сортировка. Əvvəlcə ucuz, əvvəlcə bahalı, ən böyük endirim

### Фильтры, которые выкинуты, и почему

- Тип кожи, тип волос, забота (акне, пигментация), ингредиенты. В источнике нет ни одного такого поля, всё превратилось бы в пустые чекбоксы
- Оттенок и цвет. Оттенок есть только внутри названия текстом, цветовых данных нет
- Объём. Указан не у каждого товара, фильтр был бы дырявым. Объём просто показывай в карточке, если он есть
- Рейтинг и отзывы. Брать неоткуда
- Страна происхождения. В данных не указана
- Новинки, наличие, популярное. Дат и остатков нет

**Тон текстов интерфейса.** Короткие фразы, на «sən» в духе инстаграма магазина, без пафоса. Не используй длинные тире в текстах интерфейса.

---

## 4. Данные товаров

Источник цен, страница магазина «Rozel beauty» на Birmarket (merchant 11983), всего в ней 5290 позиций. Ниже срез из 106 позиций. Цена текущая, в скобках после неё старая, если была скидка. Все цены есть, пометок NO_PRICE_IN_SOURCE не потребовалось. Где объёма нет, стоит NO_VOLUME и поле volume оставь пустым.

Названия не переводить и не править, они уже на азербайджанском с латинскими брендами. Опечатки источника (например «qouyucu» в одном названии) не исправляй молча, оставь как в источнике, исправление решит владелец. `sourceId` это внутренний номер в источнике, храни в данных как поле, на сайт не выводи.

Формат файла `src/data/products.ts`. Поля `id` (слаг из бренда и названия, латиницей без диакритики для адреса), `sourceId`, `brand`, `name`, `volume`, `price`, `oldPrice`, `category`, `noImage` (по умолчанию false). Цены числом в манатах, на сайте выводить как «12.99 ₼».

Формат строки, `sourceId | категория | бренд | название | объём | цена (старая цена)`

### Dodaq

```
92661 | Dodaq | Topface | Maye dodaq boyası Instyle Extreme Matte Lip Paint 018 | 3.5 ml | 10
658433 | Dodaq | Nivea | Dodaqlar üçün balzam Albalı parlaqlığı | 4.8 q | 5.66 (6.29)
52778 | Dodaq | Golden Rose | Dodaq qələmi Dream Lipliner 504 | NO_VOLUME | 4.49
234309 | Dodaq | Golden Rose | Dodaq üçün qələm Dream Lips 518 | NO_VOLUME | 4.49
608749 | Dodaq | Luxvisage | Dodaqlar üçün tint AQUA GEL 05 Wine Red | NO_VOLUME | 8.27 (9.19)
608750 | Dodaq | Luxvisage | Dodaqlar üçün tint AQUA GEL 06 Toffee | NO_VOLUME | 8.27 (9.19)
2156782 | Dodaq | Wati | Dodaq balzamı for Skin Vanilla PDRN Hyaluronic Acid Volufroshot | 20 ml | 8.99
467408 | Dodaq | Vivienne Sabo | Dodaq üçün parıldadıcı Le grand Volume 10 | 3 ml | 11.89
499601 | Dodaq | Vivienne Sabo | Dodaq üçün pomada Nude Createur №06 Açıq-şaftalı rəngi | NO_VOLUME | 8.59
499503 | Dodaq | Topface | Dodaq parıldadıcısı Supernova Volume PT209 007 | 4 ml | 10
1832251 | Dodaq | Neverti | Dodaq qələmi Kiss Couture Waterproof Liner ton NP 102-004 | NO_VOLUME | 6.90 (9.20)
1832249 | Dodaq | Neverti | Dodaq qələmi Kiss Couture Waterproof Liner ton NP 102-002 | NO_VOLUME | 6.90 (9.20)
2152670 | Dodaq | Nivea | Dodaq balzamı Blackberry Shine | 4.8 q | 5.66 (6.29)
767496 | Dodaq | Sheglam | Dodaq üçün parıldadıcı Pout-Perfect Shine Hot cocoa | 2 q | 22.99
```

### Göz

```
1248502 | Göz | Luxvisage | Qaşlar üçün bərkidici Brow Laminator Extreme Fix | NO_VOLUME | 8.27 (9.19)
211976 | Göz | Revolution | Göz kölgələri paleti Makeup Velvet Rose | NO_VOLUME | 18
207136 | Göz | Vivienne Sabo | Kirpiklər üçün tuş Cabaret Premiere Qara | 9 ml | 12.69
2118304 | Göz | Golden Rose | Kirpiklər üçün tuş Longest Lash Tubing Mascara | NO_VOLUME | 12.99
92962 | Göz | Topface | Kirpiklər üçün tuş 3D Dimension PT314 | 8 ml | 15.71 (18.48)
52776 | Göz | Golden Rose | Göz qələmi Dream Eyes Eyeliner 401 Qara | 1.4 q | 4.49
962268 | Göz | Revolution | Göz kölgələri palitrası Makeup The Enchanted Icon | 8.4 q | 25.90
468722 | Göz | Vivienne Sabo | Kirpiklər üçün tuş Cabaret Premiere Artistic Volume Mascara ton 05 qəhvəyi | 9 ml | 12.69
1019469 | Göz | Technic | Göz kölgələri paleti Smokey Quartz Pressed Pigment | 30 q | 24
93004 | Göz | Topface | Göz layneri Carbon Black Shine Qara | 2.5 ml | 7
1202331 | Göz | Technic | Kirpiklər üçün tuş Intense Lash, qara | 10 ml | 15
1041047 | Göz | Ghali'or Paris | Kirpiklər üçün tuş Insta Big Volume Qara | 20 ml | 23.30
669675 | Göz | Note | Mum qaşlar üçün Brow Master Wax | 50 ml | 19.48
```

### Üz makiyajı

```
1035551 | Üz makiyajı | Influence Beauty | Konsiler Ultra Eraser 02 Medium | 6.5 ml | 16.61
1035546 | Üz makiyajı | Influence Beauty | Konsiler Ultra Eraser 01 Light | 6.5 ml | 16.61
1039586 | Üz makiyajı | Note | Tonal krem 3 in 1 Glowing Skin Tinted Moisturizer SPF50 | 30 ml | 15.99
2195769 | Üz makiyajı | Note | Ənlik Stick Blush 20 | NO_VOLUME | 16.99
217788 | Üz makiyajı | Missha | Tonal krem-kuşon Velvet Finish Cushion SPF50+/PA+++ Light Beige 21 | 15 q | 29.90
257258 | Üz makiyajı | Missha | BB krem Perfect Cover BB Cream Natural Beige SPF42 / PA+++ №23 | 20 ml | 18.53
92268 | Üz makiyajı | Topface | Tonal krem Tonal Matte Skin Editor PT465-001 | 32 ml | 18
92258 | Üz makiyajı | Topface | Tonal krem Tonal Skin Twin PT464-001 | 32 ml | 23.76
1005863 | Üz makiyajı | Sheglam | Tonal krem Complexion Pro Long Lasting Matte Nude | 30 ml | 39
1005856 | Üz makiyajı | Sheglam | Tonal krem Complexion Pro Long Lasting Matte Shell | 30 ml | 39
2396487 | Üz makiyajı | Golden Rose | CC krem Skin Perfector Light 102 Ivory SPF50 | 30 ml | 14.49
962260 | Üz makiyajı | Golden Rose | Mineral kompakt kirşan Terracotta 02 Natural | 12 q | 16.99
197718 | Üz makiyajı | Enough | Tonal krem 8 Peptide Full Cover Perfect Foundation peptidli 13 SPF50 | 100 ml | 19.89
202592 | Üz makiyajı | Enough | Kompakt kirşan Collagen Hydro Moisture Two Way Cake Powder SPF25 №13 | NO_VOLUME | 24.99
```

### Üz baxımı

```
249568 | Üz baxımı | The Purest Solutions | Aşındırıcı və təmizləyici tonik qlikolik turşusu ilə 5% AHA + BHA | 200 ml | 24.90
242032 | Üz baxımı | The Purest Solutions | Üz üçün serum Intensive Pore Tightening & Lightening | 30 ml | 25.90
252237 | Üz baxımı | The Purest Solutions | Üz üçün krem Hydration Booster Daily Cream | 50 ml | 26.50
249520 | Üz baxımı | The Purest Solutions | Göz ətrafı dəri üçün zərdab Radiance Eye Contour Serum | 30 ml | 27.90
461765 | Üz baxımı | Enough | Üz üçün krem Collagen Moisture Essential | 50 ml | 13.99
516919 | Üz baxımı | Enough | Dəniz kollagen tərkibli günəşdən qoruyucu krem Collagen 3in1 Whitening Moisture Sun Cream SPF50 PA+++ | 50 q | 15.99
516918 | Üz baxımı | Enough | Kollagen tərkibli nəmləndirici günəşdən qouyucu krem Collagen Moisture Sun Cream SPF 50+ PA+++ | 50 ml | 15.99
1193060 | Üz baxımı | Anua | Üz üçün serum 10% Azelaic Acid 10% + Hyaluron | 30 ml | 54.70 (64.35)
840495 | Üz baxımı | Anua | Üz üçün hidrofil yağı Heartleaf Pore Control | 200 ml | 50.49 (59.40)
1241466 | Üz baxımı | Anua | Serum 100 PDRN HYALURON | NO_VOLUME | 54.70 (64.35)
207073 | Üz baxımı | COSRX | Üz üçün krem Advanced Snail 92 All In One Cream | 100 ml | 37.79 (41.99)
207068 | Üz baxımı | COSRX | Üz üçün losyon BHA Blackhead Power Liquid | 100 ml | 41.39 (45.99)
334079 | Üz baxımı | COSRX | Üz üçün krem Hyaluronic Acid Intensive Cream | 100 ml | 35.81 (39.79)
425574 | Üz baxımı | FarmStay | Pilinq-gel üz üçün avokado ekstraktı ilə Real Avocado Deep Clear Peeling Gel | 100 ml | 14.99
475420 | Üz baxımı | FarmStay | Kokos ekstraktı ilə üz üçün pilinq-gel Real Coconut Deep Clear | 100 ml | 12.99
89505 | Üz baxımı | FarmStay | Çoxfunksiyalı ampulalı zərdab üz üçün Collagen & Hyaluronic Acid All-In One Ampoule hialuron turşusu və kollagen ilə | 250 ml | 27.99
429033 | Üz baxımı | Garnier | Misellyar suyu Skin Naturals Vitamin C | 400 ml | 10.84 (13.55)
120335 | Üz baxımı | Garnier | Misellyar suyu Hialuron Aloe | 400 ml | 8.77 (10.96)
1211509 | Üz baxımı | Garnier | Günəşdən qoruyucu süd Ambre Solaire SPF50 | 50 ml | 10.87 (13.59)
227507 | Üz baxımı | Compliment | Üz üçün pilinq-yumrulama meyvə turşuları ilə | 80 ml | 4.32 (5.40)
227509 | Üz baxımı | Compliment | Üz üçün pilinq-yumrulama ağac kömürü ilə | 80 ml | 4.32 (5.40)
227508 | Üz baxımı | Compliment | Üz üçün pilinq-yumrulama ilbiz müsini ilə | 80 ml | 4.80 (6.00)
1321465 | Üz baxımı | Maruderm | Tonik Qlycolic Acid 7% işıqlandırıcı və ləkələnmə əleyhinə | 250 ml | 19.29
1048468 | Üz baxımı | Maruderm | Zərdab Azelaic Acid Solution 10% | 30 ml | 19.89
313274 | Üz baxımı | NewLab | Turşu pilinq üz üçün The AHA 30% + BHA 2% | 30 ml | 25.19
```

### Saç

```
184219 | Saç | Compliment | Saç üçün maska Naturalis 3-1-də bibər ilə | 500 ml | 8 (10)
206782 | Saç | Compliment | Şampun saç uzanmasının artması üçün | 200 ml | 7.20 (9)
517395 | Saç | Morfose | Saç üçün kondisioner-sprey Milk Therapy 2 fazalı | 400 ml | 17.75 (22.19)
432313 | Saç | Morfose | Saç lakı Hair Spray Ultra Strong | 400 ml | 7.19 (8.99)
783934 | Saç | Dr.Rashel | Tonlaşdırıcı şampun, arqan yağı ekstraktı ilə, təbii qara | 400 ml | 10.50 (15)
870712 | Saç | Dr.Rashel | Tonlaşdırıcı şampun Collagen & Argan Oil Dark Brown | 400 ml | 10.50 (15)
13355 | Saç | Garnier | Şampun Fructis SOS Bərpaedici | 250 ml | 5.11 (6.39)
120667 | Saç | Garnier | Saçlar üçün balzam Fructis SOS Bərpa | 387 ml | 7.27 (9.09)
1035419 | Saç | Maruderm | Saçlar üçün şampun SLES-Free Anti-Hair Loss | 400 ml | 15.99
398143 | Saç | Kleral | Saç üçün qalıcı boya System Magicolor 7.11 Blonde Matt | 100 ml | 7.70 (8.56)
398144 | Saç | Kleral | Saç üçün qalıcı boya System Magicolor 8.11 Light Blonde Matt | 100 ml | 7.70 (8.56)
2410863 | Saç | Beany | Saç üçün krem Butter | 190 ml | 10 (12.50)
```

### Bədən

```
7207 | Bədən | Garnier | Sprey-avtoqaralma bədən üçün Ambre Solaire Bərabər qaralma təbii qaralma, qaysı çəyirdəyi yağı ilə | 150 ml | 15.19 (18.99)
257461 | Bədən | Compliment | Bədən üçün skrab moruq ilə, masaj effekti ilə | 400 ml | 7.20 (9)
231429 | Bədən | Compliment | Bədən üçün skrab Qəhvə antiselülit | 400 ml | 7.20 (9)
2178431 | Bədən | Beany | Bədən üçün krem-yağ Vanilla Sour | 250 ml | 10 (12.50)
11277 | Bədən | Nivea | Krem Creme Nəmləndirici universal üz, əl və bədən üçün pantenol ilə | 75 ml | 5.52 (6.49)
8118 | Bədən | Nivea | Dezodorant-antiperspirant Men Ultra antibakterial effekt ilə | 150 ml | 6.92 (7.69)
11111 | Bədən | Garnier | Antiperspirant Mineral Aktiv Nəzarət 72 saat Termoqoruma | 50 ml | 6.02 (6.69)
205429 | Bədən | Rexona | Dezodorant-antiperspirant sprey Clinical Protection Qorunma və Təravət | 150 ml | 11.69 (17.99)
344173 | Bədən | Rexona | Antiperspirant sprey Clinic Protection Confidence | 150 ml | 8 (15.99)
1554212 | Bədən | Rexona | Ətirli antiperspirant Deep Aqua | 150 ml | 11.78 (14.99)
380430 | Bədən | Dove | Antiperspirant sprey Deodorant Go Fresh xiyar ilə | 150 ml | 5.99
1320184 | Bədən | Dove | Antiperspirant Men Care Clean Comfort | 150 ml | 5.99
727140 | Bədən | Lionesse | Duş üçün lif 9050, məhsul çeşiddə | NO_VOLUME | 1.49
```

### Dırnaq

```
355921 | Dırnaq | Golden Rose | Dırnaq üçün top Quick Dry Top Coat | NO_VOLUME | 5.99
4791 | Dırnaq | Golden Rose | Dırnaq üçün lak Color Expert Nail Lacquer №62 | 10.2 ml | 3.49
2411250 | Dırnaq | Topface | Dırnaq lakı PT110 071 Çəhrayı-bənövşəyi | 9 ml | 2
2411278 | Dırnaq | Topface | Dırnaq lakı PT110 Jelly Effect Gavalı çəhrayı | 9 ml | 2
381352 | Dırnaq | Lionesse | Knipser dırnaq üçün 3451 | NO_VOLUME | 3.09
949054 | Dırnaq | Lionesse | Dırnaqlar üçün knipser T-3406 | NO_VOLUME | 4.29
```

### Ətir

```
751636 | Ətir | Milestone | Narcisa For Her Amour ətir suyu qadınlar üçün | 100 ml | 25.19 (35.99)
751387 | Ətir | Milestone | Perfumes The Night's Treasure Intense qadınlar üçün ətir suyu | 100 ml | 24.49 (34.99)
184358 | Ətir | Golden Rose | Blue Azure qadınlar üçün ətir suyu | 100 ml | 47.20 (59)
184356 | Ətir | Golden Rose | Violet Mist qadınlar üçün ətir suyu | 100 ml | 47.20 (59)
958141 | Ətir | Essence | Le Chameau Buds Delicate uniseks ətir suyu | 100 ml | 74.40 (124)
```

### Aksesuar

```
1059292 | Aksesuar | Sheglam | Makiyaj üçün fırça dəsti Pro Core 6 əd | NO_VOLUME | 28.99
1113117 | Aksesuar | Sheglam | Makiyaj üçün fırçalar dəsti 101 Face Essentials | NO_VOLUME | 31.99
1517648 | Aksesuar | Neverti | Kölgələr üçün fırça NP150-F11 | NO_VOLUME | 6.38 (7.50)
6260 | Aksesuar | Lionesse | Daraq Qara | NO_VOLUME | 2.39
```

### Замечания по данным

Единица «q» в объёме это граммы из названия источника, на сайте показывай как есть, «4.8 q».

Цены с маркетплейса. В самом магазине они могут отличаться, это решит владелец, в данных держи один файл цен, чтобы поменять быстро. Оставь в начале файла комментарий `// TODO уточнить у владельца, совпадают ли цены на сайте с ценами в магазине`.

---

## 5. Механика

Стек. Next.js App Router, TypeScript, Tailwind. Без бэкенда и без базы. Товары в одном файле данных. Корзина в localStorage. Деплой на Vercel. Репозиторий `[ССЫЛКА]`.

### Язык

Только азербайджанский, переключателя языков нет.

Причина. Названия товаров состоят из азербайджанских описаний («Üz üçün serum», «Dodaqlar üçün tint») плюс латинские бренды, то есть реальный перевод на второй язык потребовал бы придумывать названия.

Строки интерфейса держи в словаре `src/i18n/az.ts`, чтобы второй язык добавлялся позже. В части названий источника на маркетплейсе встречается русский текст, в этот срез такие товары не включены. Если добавляешь товары сам, исключай позиции с кириллицей в названии.

Полная диакритика ə ş ç ğ ı ö ü.

### Фотографии

Ищи настоящие снимки. Источники в порядке приоритета.

1. Сайт бренда или каталог производителя
2. Карточки этого же магазина на Birmarket, merchant 11983. Это их собственные листинги их собственного товара. Перед использованием проверь каждую картинку на водяной знак или логотип маркетплейса, такие не бери
3. Другие открытые источники

НЕ бери фотографии с сайтов других бакинских магазинов и не бери кадры из инстаграма Rozel, там чужая съёмка.

Клади в `public/products/`, имя файла по слагу товара, квадрат 800 на 800, webp, белый или прозрачный фон.

Каждый файл проверь скриптом, а не на глаз. Должен открываться как картинка, весить больше 5 килобайт, не быть страницей ошибки, логотипом или баннером. Рядом положи файл с источником каждой картинки.

### Стоп перед сборкой

Когда закончишь скачивать, не продолжай. Выведи отчёт и жди ответа.

В отчёте, сколько снимков нашлось из 106, из каких источников они пришли, разбивка по ценовым диапазонам, разбивка по категориям, и список позиций без фото.

Товары без фото в каталог не выводи, но из данных не удаляй, пометь флагом `noImage`. Смешивать настоящие фотографии и нарисованные заглушки нельзя.

### Покупка

Корзина с изменением количества. Оформление с контактами и способом получения. Кнопка оплаты, задержка полторы секунды, экран успеха с номером заказа. Деньги не списываются. В коде комментарий, что реальным шлюзом будет epoint.

Рядом с кнопкой оформления собери кнопку WhatsApp, которая открывает чат с магазином и подставляет состав корзины текстом. Магазин сейчас принимает заказы именно так, и этот путь должен остаться.

**Номер пока неизвестен.** Константу `WHATSAPP_PHONE` оставь пустой строкой с комментарием `// TODO номер уточняется, в источниках расходится`. Пока константа пустая, кнопку не показывай.

### Плашка демо

`Demo versiya, sifarişlər qəbul edilmir, ödəniş çıxılmır` вверху КАЖДОЙ страницы, не только в подвале. Убирается одной константой, по умолчанию видна.

### Чего не делать

Регистрации и личных кабинетов. Реальных платежей. Базы и админки. Отзывов и рейтингов, их неоткуда взять.

### Критерии готовности

1. С телефона можно найти товар, открыть, положить в корзину, изменить количество, дойти до оплаты и увидеть подтверждение
2. Ценовая полка на главной открывает каталог с применённым фильтром
3. Корзина переживает перезагрузку
4. Горизонтальной прокрутки нет ни на одном экране
5. Все выведенные товары имеют картинку
6. Диакритика рисуется везде, включая цены и фильтры
7. Нигде на сайте не написано, сколько всего товаров в каталоге

---

## 6. Контакты

Положи контакты в один файл `src/config/contacts.ts`.

### Подтверждено двумя источниками, ставь в подвал и на страницу «Mağazalar»

```
Instagram     @rozelbeautyshop, https://www.instagram.com/rozelbeautyshop/
İş saatları   hər gün 10:00 - 22:00
Ünvan 1       Azadlıq prospekti 31D
Ünvan 2       Həzi Aslanov, Məhəmməd Hadi 73
```

По второму адресу номер дома взят только из шапки профиля, пометь `// TODO уточнить у владельца`, но улицу и район показывай.

### Не ставить, вынести в TODO

- **Телефон.** Расходятся два варианта, +994 50 207 55 22 и 050 727 55 22. Ни один не подтверждён двумя источниками, в подвал телефон не ставь
- **Адрес Qoqol küçəsi 16, Nəsimi.** Назывался как адрес магазина, но ни в Instagram, ни в одном другом источнике не встречается. Не показывай
- **Третья точка**, Nərimanov, Ağa Nemətulla 74B, открытие 31.10.2026. Написание расходится. Пока не показывай
- **TikTok** @rozel.beauty.shop есть в шапке Instagram, в подвал не ставь, источник один

Нигде не писать, что у магазина чего-то нет.
