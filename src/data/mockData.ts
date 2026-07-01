export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  specs: {
    dimensions: string;
    capacity: string;
    thickness: string;
    material: string;
    certification: string;
    packing: string;
  };
  bestseller?: boolean;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
}

export const CATEGORIES = [
  "Wszystkie",
  "Opakowania Gastronomiczne",
  "Puszki i Tuby",
  "Opakowania Przemysłowe",
  "Akcesoria Aluminiowe",
];

export const PRODUCTS: Product[] = [
  {
    id: "foremka-r10",
    name: "Foremka Aluminiowa Prostokątna R10",
    category: "Opakowania Gastronomiczne",
    description: "Profesjonalna foremka aluminiowa przeznaczona do pieczenia pasztetów, ciast oraz przechowywania gotowych dań. Odporna na temperatury od -40°C do 350°C. Nadaje się do recyklingu w 100%.",
    image: "https://images.unsplash.com/photo-1595079676339-1534801ad6cf?auto=format&fit=crop&w=600&q=80",
    specs: {
      dimensions: "220 mm x 115 mm x 50 mm",
      capacity: "1000 ml",
      thickness: "0.08 mm (80 mic)",
      material: "Aluminium EN AW-8011A",
      certification: "Atest PZH do kontaktu z żywnością, certyfikat ISO 9001:2015",
      packing: "Karton: 1000 szt. / Paleta: 24 kartony",
    },
    bestseller: true,
  },
  {
    id: "tuba-kosmetyczna-50",
    name: "Tuba Aluminiowa Kosmetyczna 50ml",
    category: "Puszki i Tuby",
    description: "Premium tuba aluminiowa z wewnętrzną powłoką ochronną zapobiegającą kontaktowi produktu ze ściankami metalowymi. Idealna do kremów, past, maści oraz klejów.",
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=600&q=80",
    specs: {
      dimensions: "Średnica 30 mm, Długość 125 mm",
      capacity: "50 ml",
      thickness: "0.12 mm (120 mic)",
      material: "Aluminium EN AW-99.7%",
      certification: "Certyfikat farmaceutyczny, FDA Approved inner lacquer",
      packing: "Karton: 250 szt. / Paleta: 48 kartonów",
    },
    bestseller: true,
  },
  {
    id: "butelka-al-500",
    name: "Butelka Aluminiowa Premium 500ml",
    category: "Puszki i Tuby",
    description: "Monoblokowa butelka aluminiowa z gwintem 28/410. Doskonała do ekskluzywnych kosmetyków, środków chemii domowej lub napojów. Lekka, nietłukąca i doskonale chroniąca przed światłem UV.",
    image: "https://images.unsplash.com/photo-1527018601619-a508a2be00cd?auto=format&fit=crop&w=600&q=80",
    specs: {
      dimensions: "Średnica 66 mm, Wysokość 190 mm",
      capacity: "500 ml",
      thickness: "0.45 mm",
      material: "Aluminium EN AW-1070",
      certification: "Atest PZH, certyfikat odporności na ciśnienie do 6 bar",
      packing: "Skrzynia: 144 szt. / Paleta: 18 skrzyń",
    },
    bestseller: true,
  },
  {
    id: "pojemnik-przemyslowy-c2",
    name: "Cylindryczny Pojemnik Przemysłowy C2",
    category: "Opakowania Przemysłowe",
    description: "Wzmocniony pojemnik przeznaczony do bezpiecznego transportu i przechowywania substancji chemicznych, próbek laboratoryjnych oraz surowców przemysłowych.",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80",
    specs: {
      dimensions: "Średnica 120 mm, Wysokość 250 mm",
      capacity: "2500 ml",
      thickness: "0.80 mm",
      material: "Aluminium EN AW-3003",
      certification: "Certyfikat UN dla transportu materiałów niebezpiecznych",
      packing: "Karton: 20 szt. / Paleta: 36 kartonów",
    },
    bestseller: false,
  },
  {
    id: "foremka-okragla-tart",
    name: "Talerz / Foremka Aluminiowa do Tart",
    category: "Opakowania Gastronomiczne",
    description: "Niska foremka o karbowanych brzegach, idealna do pieczenia tart, quiche oraz ciast drożdżowych. Zapewnia równomierną dystrybucję ciepła.",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80",
    specs: {
      dimensions: "Średnica górna 280 mm, Wysokość 25 mm",
      capacity: "1200 ml",
      thickness: "0.09 mm",
      material: "Aluminium EN AW-8011A",
      certification: "Atest PZH do kontaktu z żywnością",
      packing: "Karton: 500 szt. / Paleta: 30 kartonów",
    },
    bestseller: false,
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "ekologiczny-aspekt-aluminium",
    title: "Aluminium w gospodarce o obiegu zamkniętym (GOZ)",
    excerpt: "Dlaczego opakowania z aluminium są najbardziej ekologicznym wyborem dla Twojego biznesu B2B? Poznaj fakty dotyczące recyklingu.",
    content: `### Aluminium jako surowiec nieskończony

W przeciwieństwie to tworzyw sztucznych (plastiku), które z każdym procesem recyklingu tracą swoje właściwości mechaniczne i ostatecznie trafiają na składowiska odpadów, **aluminium może być poddawane recyklingowi w nieskończoność bez jakiejkolwiek utraty jakości**. 

Szacuje się, że blisko **75% całego wyprodukowanego w historii aluminium jest nadal w użyciu**. To czyni go idealnym surowcem dla Gospodarki o Obiegu Zamkniętym (GOZ).

### Korzyści energetyczne i środowiskowe

Recykling aluminium niesie za sobą gigantyczne oszczędności:
1. **Oszczędność energii**: Proces recyklingu zużywa aż o **95% mniej energii** niż produkcja pierwotna z boksytu.
2. **Redukcja emisji**: Każda tona wtórnego aluminium to zmniejszenie emisji gazów cieplarnianych o ok. 9 ton CO2 w porównaniu do nowej produkcji.
3. **Logistyka**: Aluminiowe opakowania są ekstremalnie lekkie, co obniża koszty paliwa w łańcuchu dostaw.

### Standardy i certyfikaty dla B2B

Dla naszych partnerów biznesowych kluczowe jest wykazanie ekologiczności swoich łańcuchów dostaw. Jako Alopak dostarczamy pełne deklaracje środowiskowe produktu (EPD) oraz certyfikaty ISO 14001, pozwalające na zaliczenie opakowań do proekologicznych inwestycji Twojej firmy.`,
    date: "24.06.2026",
    readTime: "5 min czytania",
    category: "Ekologia",
    image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=800&q=80",
  },
  {
    slug: "przewodnik-bezpieczenstwo-zywnosci",
    title: "Atesty PZH i bezpieczeństwo żywności w opakowaniach aluminiowych",
    excerpt: "Jakie wymogi prawne muszą spełniać aluminiowe opakowania gastronomiczne? Analizujemy przepisy sanitarno-epidemiologiczne.",
    content: `### Bezpieczeństwo przede wszystkim

W sektorze spożywczym opakowanie to nie tylko design i wygoda logistyczna, ale przede wszystkim bezpieczeństwo konsumenta. Zgodnie z rozporządzeniem (WE) nr 1935/2004 Parlamentu Europejskiego, materiały przeznaczone to kontaktu z żywnością nie mogą uwalniać swoich składników do żywności w ilościach, które mogłyby zagrażać zdrowiu ludzkiemu.

### Atest Państwowego Zakładu Higieny (PZH)

Wszystkie produkty Alopak posiadają aktualne atesty PZH. Co to oznacza w praktyce?
* **Brak przenikania zapachów i smaków**: Aluminium od Alopak nie wchodzi w reakcje z neutralnymi produktami spożywczymi.
* **Bariera dla bakterii i światła**: Całkowita szczelność opakowania zapobiega psuciu się żywności, co wydłuża okres przydatności do spożycia.
* **Odporność na skrajne temperatury**: Nasze foremki mogą być używane zarówno w zamrażarkach (-40°C), jak i piecach konwekcyjnych (do 350°C).

### Wskazówki dla gastronomii i cateringu dietetycznego

Używając opakowań aluminiowych, pamiętaj o kilku zasadach:
1. **Unikaj produktów mocno kwaśnych**: Długotrwałe przechowywanie kiszonek, potraw z dodatkiem octu czy cytryny w bezpośrednim kontakcie z niepowlekanym aluminium może powodować migrację jonów. Do takich zastosowań polecamy nasze foremki laminowane lub powlekane.
2. **Równomierne grzanie**: Aluminiowe ścianki doskonale przewodzą ciepło, co skraca czas obróbki termicznej o 15-20%.`,
    date: "15.06.2026",
    readTime: "4 min czytania",
    category: "Prawo i Normy",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=80",
  },
];
