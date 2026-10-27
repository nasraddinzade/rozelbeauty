# Rozel Beauty & Care, прототип интернет-магазина

Рабочий прототип для показа владельцу. Next.js (App Router), TypeScript, Tailwind. Без бэкенда и базы: товары лежат в одном файле, корзина в localStorage, оплата имитируется.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production-сборка, все страницы товаров и брендов статические
```

Деплой на Vercel: импортировать репозиторий, настройки по умолчанию.

## Где что менять

| Что | Файл |
|---|---|
| Товары и цены | `src/data/products.ts` |
| Фото товаров | `public/products/<id>.webp`, источники в `public/products/SOURCES.md` |
| Адреса, часы, Instagram | `src/config/contacts.ts` |
| Плашка демо, номер WhatsApp, размер страницы каталога | `src/config/site.ts` |
| Все тексты интерфейса | `src/i18n/az.ts` |
| Цвета и шрифты | `src/app/globals.css`, `src/app/layout.tsx` |

Товар с `noImage: true` остаётся в данных, но в каталог не выводится.

## Экраны

`/` главная · `/kataloq` каталог (параметры `q`, `kateqoriya`, `brend`, `qiymet`, `endirim`, `sira`) · `/brend/[slug]` · `/brendler` · `/mehsul/[slug]` · `/sebet` · `/sifaris` · `/ugur` · `/magazalar`

## Шрифты

Заголовки Playfair Display, текст и цифры Plus Jakarta Sans, оба через `next/font` с подмножествами latin и latin-ext.

Manrope из ТЗ заменён: в нём нет заглавной **Ə** (U+018F) и знака **₼** (U+20BC), они падали на системный шрифт. Plus Jakarta Sans того же геометрического склада, покрывает всю азербайджанскую диакритику и ₼, есть табличные цифры. Проверка строки `Əlavə şəkər çiçək ğ ı ö ü ç ş İ`: `docs/font-check.jpg`. В Playfair Display нет только ₼, поэтому цены всегда набраны гротеском.

## Ждёт решения владельца (TODO в коде)

- Совпадают ли цены на сайте с ценами в магазине (`src/data/products.ts`)
- Номер WhatsApp: пока `WHATSAPP_PHONE` пустой, кнопка заказа через WhatsApp скрыта (`src/config/site.ts`)
- Номер дома по адресу Həzi Aslanov, Məhəmməd Hadi 73 (`src/config/contacts.ts`)
- Телефон, адрес Qoqol küçəsi 16, третья точка в Nərimanov, TikTok: на сайт не выведены (`src/config/contacts.ts`)
- Условия курьерской доставки (`src/app/sifaris/page.tsx`)
- Реальная оплата: шлюз epoint, место подключения помечено в `src/app/sifaris/page.tsx`
- Опечатка источника «qouyucu» в названии Enough Collagen Moisture Sun Cream оставлена как есть
- Две позиции без фото: Dove Men Care Clean Comfort (водяной знак другого магазина) и Anua Serum 100 PDRN (не белый фон)
