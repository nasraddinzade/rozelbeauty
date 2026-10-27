// Контакты магазина. Здесь только то, что подтверждено двумя источниками.
//
// Не выводится на сайт, ждёт подтверждения владельца:
// TODO телефон: расходятся +994 50 207 55 22 и 050 727 55 22, ни один не подтверждён двумя источниками
// TODO адрес Qoqol küçəsi 16, Nəsimi: нигде, кроме одного упоминания, не встречается
// TODO третья точка Nərimanov, Ağa Nemətulla 74B, открытие 31.10.2026, написание расходится
// TODO TikTok @rozel.beauty.shop: источник только шапка Instagram

export const contacts = {
  name: "Rozel Beauty & Care",
  motto: "Gözəlliyin çiçəklənsin!",
  instagram: {
    handle: "@rozelbeautyshop",
    url: "https://www.instagram.com/rozelbeautyshop/",
  },
  hours: "Hər gün 10:00 - 22:00",
  stores: [
    {
      id: "azadliq",
      title: "Azadlıq prospekti",
      address: "Azadlıq prospekti 31D",
    },
    {
      id: "hezi-aslanov",
      title: "Həzi Aslanov",
      // TODO уточнить у владельца: номер дома 73 взят только из шапки профиля
      address: "Həzi Aslanov, Məhəmməd Hadi 73",
    },
  ],
} as const;

export type Store = (typeof contacts.stores)[number];
