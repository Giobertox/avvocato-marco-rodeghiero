import { withBase } from '../utils/paths';
import { practiceName } from '../../lib/favicons.mjs';

export type Locale = 'it' | 'en';
export type PageKey = 'home' | 'profile' | 'areas' | 'translations' | 'contact' | 'privacy';

export const studio = {
  name: practiceName,
  phone: '+39 340 677 9043',
  phoneHref: 'tel:+393406779043',
  email: 'marcorodeghiero@gmail.com',
  pec: 'marco.rodeghiero@ordineavvocativicenza.it',
  address: 'Contrà Pusterla 12',
  city: '36100 Vicenza (VI), Italia',
  maps: 'https://www.google.com/maps/search/?api=1&query=Studio%20Legale%20Avvocato%20Marco%20Rodeghiero&query_place_id=ChIJjYqoQ90zf0cRZBxkh7z39XU',
  mapsDirections: 'https://www.google.com/maps/dir/?api=1&destination=Studio%20Legale%20Avvocato%20Marco%20Rodeghiero%2C%20Contr%C3%A0%20Pusterla%2012%2C%2036100%20Vicenza%20VI%2C%20Italy&destination_place_id=ChIJjYqoQ90zf0cRZBxkh7z39XU',
  linkedin: 'https://www.linkedin.com/in/marco-rodeghiero-70214328/',
};

// Page generation needs paths without the base; rendered links need the base.
export const pagePaths: Record<Locale, Record<PageKey, string>> = {
  it: { home: '/it/', profile: '/it/profilo/', areas: '/it/aree-di-attivita/', translations: '/it/traduzioni-legali/', contact: '/it/contatti/', privacy: '/it/privacy/' },
  en: { home: '/en/', profile: '/en/profile/', areas: '/en/practice-areas/', translations: '/en/legal-translations/', contact: '/en/contact/', privacy: '/en/privacy/' },
};

export const routes = Object.fromEntries(
  Object.entries(pagePaths).map(([locale, pages]) => [
    locale,
    Object.fromEntries(Object.entries(pages).map(([key, path]) => [key, withBase(path)])),
  ]),
) as Record<Locale, Record<PageKey, string>>;

export const copy = {
  it: {
    nav: { home: 'Home', profile: 'Profilo', areas: 'Aree di attività', translations: 'Traduzioni giuridiche', contact: 'Contatti', privacy: 'Informativa privacy' },
    stage: 'Anteprima di progetto', stageDetail: 'Testi e profilo in revisione · Non è il sito definitivo',
    skip: 'Vai al contenuto', menu: 'Menu', close: 'Chiudi menu', call: 'Chiama lo Studio', email: 'Scrivi un’email', appointment: 'Richiedi un appuntamento',
    eyebrow: 'Studio legale · Vicenza', hero: 'Studio legale a Vicenza',
    intro: 'Avv. Marco Rodeghiero', summary: "Avvocato a Vicenza: diritto civile, contratti, recupero crediti, immobili, famiglia, successioni e crisi d’impresa. Colloqui in italiano e inglese.",
    location: 'Lo Studio a Vicenza.', locationSub: 'Contrà Pusterla 12 · Colloqui in presenza e da remoto',
    areaEyebrow: 'L’attività dello Studio', areaTitle: 'Aree di attività', areaLink: 'Tutte le aree di attività',
    profileEyebrow: 'Il professionista', profileTitle: 'Avvocato Marco Rodeghiero', profileText: "Diritto civile e traduzioni giuridiche, con formazione in Italia e a Londra.", profileLink: "Scopri il profilo",
    translationEyebrow: 'Italiano e inglese', translationTitle: 'Traduzioni giuridiche', translationText: "Testi giuridici in italiano e inglese, per uso personale o professionale.", translationLink: "Scopri le traduzioni giuridiche",
    contactEyebrow: 'Contatti', contactTitle: "Parliamo della tua questione", contactText: "Telefona o invia un’email per richiedere un colloquio in Studio o da remoto.",
    heroLead: "Assistenza per privati e imprese: contratti, crediti, immobili, famiglia, successioni e crisi d’impresa.", languageLabel: 'Italiano e inglese', meetingLabel: 'In Studio e da remoto',
    callShort: "Chiama lo Studio", emailShort: "Invia un’email", emailAccessible: "Invia un’email allo Studio", translationRequest: 'Richiedi una traduzione', directionsShort: 'Indicazioni stradali',
    appointmentLabel: 'Si riceve su appuntamento', newTab: 'Si apre in una nuova scheda',
    menuTitle: 'Esplora il sito', appointmentNote: 'Si apre l’app di posta. L’appuntamento deve essere confermato dallo Studio.', practiceIntro: 'Seleziona un’area per conoscere le attività dello Studio.',
    contactIntro: "Telefona o invia un’email per richiedere un appuntamento.", contactDetails: 'Contatti diretti', byAppointment: 'Si riceve su appuntamento.',
    addressLabel: 'Dove siamo', hoursLabel: 'Orari dello Studio', weekdays: 'Lunedì – venerdì', weekend: 'Sabato e domenica', closed: 'Chiuso', maps: 'Apri su Google Maps', mapsNote: "Google Maps si apre su un sito esterno.",
    ordinaryEmail: 'Email', pecLabel: 'PEC · posta elettronica certificata', pecNote: "Per informazioni e appuntamenti, usa l’email ordinaria. La PEC è dedicata alle comunicazioni certificate.", phoneLabel: 'Telefono', remoteTitle: 'In Studio o da remoto', remoteText: 'La modalità del colloquio si concorda al momento della richiesta.',
    profileLead: "Diritto civile e traduzioni giuridiche. Colloqui in italiano e inglese.", bio: "Marco Rodeghiero si occupa di diritto civile e traduzioni giuridiche a Vicenza. Il suo percorso presso lo Studio inizia nel marzo 2010. Alla laurea e al dottorato presso l’Università Cattolica del Sacro Cuore si affianca la formazione giuridica a Londra.",
    portraitAlt: 'Ritratto dell’Avv. Marco Rodeghiero', officeInteriorAlt: 'Interno dello Studio: libreria e banco di accoglienza.',
    officeExteriorAlt: 'Vista dello Studio dalla strada, con il cancello più piccolo accanto al civico 12 sulla sinistra.', officeExteriorCaption: 'Accesso dal cancello più piccolo accanto al civico 12, a sinistra nella foto.',
    profileEducation: 'Formazione', profileExperience: 'Esperienze professionali', profileSource: 'Profilo professionale su LinkedIn',
    provisional: "TBC · Da confermare", languages: 'Lingue di lavoro',
    profileFocus: 'Attività dello Studio', profileFocusText: "Assiste privati e imprese nelle questioni contrattuali, nel recupero crediti e nelle controversie civili. Si occupa inoltre di immobili e aste giudiziarie, famiglia e successioni, crisi d’impresa e insolvenza.",
    profileLanguagesText: "I colloqui possono svolgersi in italiano e inglese. Lo Studio offre inoltre traduzioni giuridiche tra le due lingue.",
    profileMeeting: 'Il primo contatto', profileMeetingText: "Si riceve su appuntamento. Per il primo contatto bastano una breve descrizione della questione e i tuoi recapiti. Lo Studio concorda con te i documenti da esaminare e le modalità del colloquio.",
    supplementary: 'Servizio complementare', situationLabel: "Ad esempio",
    areasLead: 'Le aree in cui lo Studio può assisterti.', areasIntro: "Assistenza per privati e imprese nelle seguenti aree. Gli esempi ti aiutano a individuare il servizio adatto alla tua situazione.",
    translationLead: 'Il significato giuridico, in un’altra lingua.', translationIntro: "Traduzioni giuridiche dall’italiano all’inglese e dall’inglese all’italiano. Indica il tipo di testo e l’uso previsto per verificare la disponibilità del servizio.", translationDirection: 'Italiano ↔ Inglese', translationScope: "Testi da tradurre", translationScopeText: "Descrivi il documento e il destinatario della traduzione. Lo Studio verifica la richiesta e concorda con te tempi e modalità.", translationLimits: "Requisiti del destinatario", translationLimitsText: "Se il destinatario richiede una traduzione asseverata o certificata, segnalalo nella richiesta. Lo Studio deve confermare se può soddisfare questi requisiti prima dell’incarico.",
    translationSteps: ["Indica la lingua del testo e quella della traduzione.","Descrivi il documento, l’uso previsto e l’eventuale scadenza.","Attendi la conferma dello Studio su disponibilità, tempi e modalità."],
    requestTitle: 'Come richiedere una traduzione', appointmentSubject: 'Richiesta di appuntamento', translationSubject: 'Richiesta di traduzione giuridica',
    translationContactTitle: "Richiedi una traduzione giuridica", translationContactText: "Invia un’email con una breve descrizione del documento e la scadenza, se prevista.",
    privacyDescription: "Informativa privacy sul sito e sui contatti iniziali con lo Studio.", privacyIntro: "Questa bozza presenta le informazioni verificate sul sito e sui contatti iniziali. Le parti contrassegnate TBC devono essere completate prima di utilizzare il testo come informativa definitiva.", privacyContents: "Indice dell’informativa", privacyReviewed: "Ultima revisione della bozza: 8 ottobre 2026", footerLine: 'Diritto civile · Traduzioni giuridiche italiano e inglese', back: 'Torna alla home', notFound: 'Pagina non trovata', notFoundText: "La pagina non è disponibile o il collegamento è cambiato. Torna alla pagina iniziale.",
    country: 'Italia', city: '36100 Vicenza (VI), Italia',
    translationDocumentsDraft: 'Esempi proposti: contratti, atti giudiziari e documenti societari.',
    translationDocumentsNote: 'TBC · Tipologie di documenti da confermare con lo Studio.',
  },
  en: {
    nav: { home: 'Home', profile: 'Profile', areas: 'Practice areas', translations: 'Legal translations', contact: 'Contact', privacy: 'Privacy notice' },
    stage: 'Design preview', stageDetail: 'Copy and profile under review · Draft website',
    skip: 'Skip to content', menu: 'Menu', close: 'Close menu', call: 'Call the practice', email: 'Send an email', appointment: 'Request an appointment',
    eyebrow: 'Legal practice · Vicenza, Italy', hero: "Legal assistance in Italy, in Italian and English",
    intro: 'Avv. Marco Rodeghiero', summary: "Legal assistance in Italy from a lawyer based in Vicenza. Civil law, contracts, debt recovery, property, family, inheritance and business insolvency.",
    location: 'The practice in Vicenza.', locationSub: 'Contrà Pusterla 12 · In-person and remote meetings',
    areaEyebrow: 'The practice', areaTitle: 'Practice areas', areaLink: 'All practice areas',
    profileEyebrow: 'Your lawyer', profileTitle: 'Avv. Marco Rodeghiero', profileText: "Italian civil law and legal translation, with legal training in Italy and London.", profileLink: "About Marco",
    translationEyebrow: 'Italian and English', translationTitle: 'Legal translations', translationText: "Italian and English legal texts for personal or professional use.", translationLink: "Explore legal translations",
    contactEyebrow: 'Contact', contactTitle: "Discuss your legal matter", contactText: "Call or email to request a meeting at the office or remotely.",
    heroLead: "Based in Vicenza, assisting individuals and businesses with contracts, debt recovery, property, family, inheritance and business insolvency.", languageLabel: 'Italian and English', meetingLabel: 'In person and remotely',
    callShort: "Call the office", emailShort: "Email the office", emailAccessible: "Email the office", translationRequest: 'Request a translation', directionsShort: 'Directions',
    appointmentLabel: 'By appointment', newTab: 'Opens in a new tab',
    menuTitle: 'Explore the website', appointmentNote: 'Opens your email app. Your appointment must be confirmed by the practice.', practiceIntro: 'Select an area to learn about the practice.',
    contactIntro: "Call or email to request an appointment.", contactDetails: 'Direct contact details', byAppointment: 'By appointment.',
    addressLabel: 'Find us', hoursLabel: 'Office hours', weekdays: 'Monday – Friday', weekend: 'Saturday and Sunday', closed: 'Closed', maps: 'Open in Google Maps', mapsNote: "Google Maps opens on an external website.",
    ordinaryEmail: 'Email', pecLabel: 'PEC · Italian certified email', pecNote: "For enquiries and appointments, use the ordinary email address. PEC is for certified email communications.", phoneLabel: 'Telephone', remoteTitle: 'In person or remotely', remoteText: 'The meeting format is agreed when you contact the practice.',
    profileLead: "Italian civil law and legal translation. Meetings in Italian and English.", bio: "Marco Rodeghiero works in Italian civil law and legal translation in Vicenza. His work at the practice began in March 2010. He holds a law degree and a doctorate from Università Cattolica del Sacro Cuore and has undertaken further legal training in London.",
    portraitAlt: 'Portrait of Avv. Marco Rodeghiero', officeInteriorAlt: 'Inside the office: bookshelves and reception desk.',
    officeExteriorAlt: 'Street view of the office, with the smaller gate beside number 12 on the left.', officeExteriorCaption: 'Use the smaller gate beside number 12, on the left of the photo.',
    profileEducation: 'Education and training', profileExperience: 'Professional experience', profileSource: 'Professional profile on LinkedIn',
    provisional: "TBC · To be confirmed", languages: 'Working languages',
    profileFocus: 'The practice', profileFocusText: "He assists individuals and businesses with contracts, debt recovery and civil disputes. His work also covers property and judicial auctions, family and inheritance, business financial difficulties and insolvency.",
    profileLanguagesText: "Meetings can take place in Italian or English. The practice also provides legal translations between the two languages.",
    profileMeeting: 'Getting in touch', profileMeetingText: "Meetings are by appointment. For your first enquiry, provide a brief description of your matter and your contact details. The office will agree with you which documents to review and how to meet.",
    supplementary: 'Additional service', situationLabel: "For example",
    areasLead: 'Where the practice can assist you.', areasIntro: "Assistance for individuals and businesses in the following areas of Italian law. Use the examples to find the service relevant to your situation.",
    translationLead: 'Legal meaning, in another language.', translationIntro: "Legal translations from Italian into English and from English into Italian. Tell the office what type of document you have and how the translation will be used to check availability.", translationDirection: 'Italian ↔ English', translationScope: "Documents for translation", translationScopeText: "Describe the document and who will receive the translation. The office will review your request and agree timing and arrangements with you.", translationLimits: "Recipient requirements", translationLimitsText: "If the recipient requires a sworn or certified translation, mention this in your enquiry. The office must confirm whether it can meet these requirements before you commission the work.",
    translationSteps: ["Specify the original language and the language you need.","Describe the document, its intended use and any deadline.","Wait for the office to confirm availability, timing and arrangements."],
    requestTitle: 'Requesting a translation', appointmentSubject: 'Appointment enquiry', translationSubject: 'Legal translation enquiry',
    translationContactTitle: "Request a legal translation", translationContactText: "Email a brief description of your document and any deadline.",
    privacyDescription: "Privacy notice covering the website and initial enquiries to the office.", privacyIntro: "This draft sets out verified information about the website and initial enquiries. Sections marked TBC must be completed before this text can serve as the final privacy notice.", privacyContents: "Notice contents", privacyReviewed: "Draft last reviewed: 8 October 2026", footerLine: 'Italian civil law · Italian and English legal translations', back: 'Back to home', notFound: 'Page not found', notFoundText: "This page is unavailable or the link has changed. Return to the homepage.",
    country: 'Italy', city: '36100 Vicenza (VI), Italy',
    translationDocumentsDraft: 'Suggested examples: contracts, court documents and company documents.',
    translationDocumentsNote: 'TBC · Accepted document types to be confirmed by the office.',
  },
} as const;

// Approved source: LinkedIn screenshots supplied by the owner on 6 October 2026.
// Education entries establish training, not current register accreditation.
// Use dates rather than LinkedIn's automatically calculated durations.
export const profileDetails = {
  it: {
    education: [
      { title: 'Laurea in Giurisprudenza', detail: 'Università Cattolica del Sacro Cuore · 1997–2003. Indirizzo internazionale, voto 110/110 e lode.' },
      { title: 'Dottorato di ricerca', detail: 'Università Cattolica del Sacro Cuore · 2004–2007. Istituzioni e Politiche: Storia delle Relazioni e Istituzioni Internazionali.' },
      { title: 'Formazione giuridica a Londra', detail: 'Corsi in diritto contrattuale e commerciale, procedura civile in Inghilterra e Galles e inglese giuridico · 2011–2014.' },
      { title: 'Formazione sul sovraindebitamento', detail: 'IUL – ISVGroup · dicembre 2018–maggio 2019. Corso per gestori della crisi da sovraindebitamento del consumatore e dell’impresa.' },
    ],
    experience: [
      { title: 'Vendite immobiliari giudiziarie', detail: 'Attività di liquidazione immobiliare presso il Tribunale di Vicenza · G.D.V. – Gruppo Delegati Vendite, da settembre 2016.' },
      { title: 'Traduzioni giuridiche inglese → italiano', detail: 'Traduttore freelance per Lawlinguists, da agosto 2016.' },
      { title: 'Consulenza legale', detail: 'Fondazione Progetto Ematologia Onlus, da gennaio 2012.' },
      { title: 'Supporto alla didattica', detail: 'Storia delle Relazioni e Istituzioni Internazionali · Università Cattolica del Sacro Cuore, da luglio 2005.' },
    ],
  },
  en: {
    education: [
      { title: 'Degree in Law', detail: 'Università Cattolica del Sacro Cuore · 1997–2003. International focus, 110/110 with honours.' },
      { title: 'Doctorate', detail: 'Università Cattolica del Sacro Cuore · 2004–2007. Institutions and Politics: History of International Relations and Institutions.' },
      { title: 'Legal training in London', detail: 'Courses in contract and commercial law, civil procedure in England and Wales, and legal English · 2011–2014.' },
      { title: 'Over-indebtedness training', detail: 'IUL – ISVGroup · December 2018–May 2019. Course in managing consumer and business over-indebtedness crises.' },
    ],
    experience: [
      { title: 'Judicial property sales', detail: 'Real Estate Liquidation Officer, Vicenza Law Courts · G.D.V. – Gruppo Delegati Vendite, from September 2016.' },
      { title: 'English-to-Italian legal translation', detail: 'Freelance translator for Lawlinguists, from August 2016.' },
      { title: 'Legal counsel', detail: 'Fondazione Progetto Ematologia Onlus, from January 2012.' },
      { title: 'Teaching assistant', detail: 'History of International Relations and Institutions · Università Cattolica del Sacro Cuore, from July 2005.' },
    ],
  },
} as const;

export const areas = {
  it: [
    { id: 'civile', title: 'Diritto civile, contratti e crediti', text: "Contratti da esaminare, controversie e fatture non pagate.", detail: "Assistenza a privati e imprese per esaminare contratti, affrontare controversie civili e recuperare crediti.", when: "Un obbligo contrattuale non rispettato, un pagamento da richiedere o una controversia da affrontare.", items: ['Diritto civile', 'Diritto contrattuale', 'Recupero crediti'] },
    { id: 'impresa', title: 'Crisi d’impresa e insolvenza', text: "Difficoltà nei pagamenti e percorsi di ristrutturazione.", detail: "Assistenza alle imprese per valutare le questioni legali legate a difficoltà finanziarie, insolvenza e ristrutturazione.", when: "L’impresa fatica a rispettare i pagamenti o deve valutare un percorso di ristrutturazione.", items: ['Crisi d’impresa', 'Insolvenza e ristrutturazione'] },
    { id: 'immobili', title: 'Immobili, esecuzioni e aste', text: "Diritti sugli immobili, procedure esecutive e aste giudiziarie.", detail: "Assistenza nelle questioni immobiliari, nelle esecuzioni su immobili e nelle aste giudiziarie.", when: "Una questione sui diritti relativi a un immobile, una procedura esecutiva o un’asta giudiziaria da esaminare.", items: ['Diritto immobiliare', 'Esecuzioni immobiliari', 'Aste giudiziarie'] },
    { id: 'famiglia', title: 'Famiglia e successioni', text: "Rapporti familiari e questioni legate a un’eredità.", detail: "Assistenza nelle questioni di diritto di famiglia e nella gestione degli aspetti legali di successioni ed eredità.", when: "Una questione familiare da affrontare o dubbi sulla tua posizione in una successione.", items: ['Diritto di famiglia', 'Successioni ed eredità'] },
  ],
  en: [
    { id: 'civile', title: "Civil law, contracts and debt recovery", text: "Contracts to review, disputes and unpaid invoices.", detail: "Assistance for individuals and businesses with reviewing contracts, handling civil disputes and recovering debts in Italy.", when: "A contractual obligation has not been met, a payment is overdue or you need help with a dispute.", items: ['Civil law', 'Contract law', 'Debt recovery'] },
    { id: 'impresa', title: "Business financial difficulties and insolvency", text: "Payment difficulties and business restructuring.", detail: "Assistance for businesses with the legal aspects of financial difficulties, insolvency and restructuring in Italy.", when: "Your business is struggling to meet payments or needs to consider restructuring.", items: ['Business crisis', 'Insolvency and restructuring'] },
    { id: 'immobili', title: 'Property, enforcement and auctions', text: "Property rights, enforcement proceedings and judicial auctions.", detail: "Assistance with Italian property matters, enforcement proceedings involving property and judicial auctions.", when: "You need help with rights relating to a property, enforcement proceedings or a judicial auction.", items: ['Property law', 'Real estate enforcement', 'Judicial auctions'] },
    { id: 'famiglia', title: 'Family and inheritance', text: "Family relationships and questions about an inheritance.", detail: "Assistance with Italian family law and the legal aspects of succession and inheritance.", when: "You have a family matter to address or need to clarify your position in an inheritance.", items: ['Family law', 'Succession and inheritance'] },
  ],
};

// Draft standard wording: every section remains TBC until factual and legal review.
export const professionalDetails = {
  "it": {
    "title": "Informazioni professionali",
    "text": "Studio Legale Avv. Marco Rodeghiero, Contrà Pusterla 12, 36100 Vicenza (VI), Italia. Professione: avvocato. Ordine di appartenenza e numero di iscrizione: TBC. Partita IVA: TBC.",
    "note": "TBC · Confermare i dati di iscrizione e fiscali e i riferimenti alle regole professionali applicabili."
  },
  "en": {
    "title": "Professional information",
    "text": "Studio Legale Avv. Marco Rodeghiero, Contrà Pusterla 12, 36100 Vicenza (VI), Italy. Profession: Italian lawyer (avvocato). Bar association and registration number: TBC. VAT number: TBC.",
    "note": "TBC · Confirm registration and tax details and references to the applicable professional rules."
  }
} as const;

// Verified website facts and owner-confirmed controller; unresolved operations remain TBC.
export interface PrivacySection {
  id: string;
  title: string;
  paragraphs: readonly string[];
  items?: readonly string[];
  after?: readonly string[];
  note?: string;
  links?: readonly { label: string; url: string }[];
}
export const privacyReviewDate = '2026-10-08';
export const privacyDetails: Record<Locale, readonly PrivacySection[]> = {
  "it": [
    {
      "id": "titolare",
      "title": "Titolare del trattamento e contatti",
      "paragraphs": [
        "Il titolare del trattamento è l’Avv. Marco Rodeghiero, con sede presso lo Studio in Contrà Pusterla 12, 36100 Vicenza (VI), Italia.",
        "Puoi contattare il titolare all’indirizzo marcorodeghiero@gmail.com, anche per richieste relative ai tuoi dati personali. Telefono: +39 340 677 9043. PEC: marco.rodeghiero@ordineavvocativicenza.it."
      ],
      "note": "TBC · Verificare se è stato nominato un responsabile della protezione dei dati (RPD/DPO) e, in tal caso, indicarne i contatti."
    },
    {
      "id": "contatti",
      "title": "Ambito, dati comunicati e finalità dei contatti",
      "paragraphs": [
        "Questa bozza riguarda la navigazione del sito e il primo contatto con lo Studio. Non descrive il trattamento dei dati nell’ambito di un incarico professionale.",
        "Il sito non contiene moduli di contatto o di prenotazione. I pulsanti email aprono il programma di posta: il messaggio viene inviato solo quando scegli di inviarlo. Le richieste di appuntamento arrivano via telefono o email e sono confermate direttamente dallo Studio.",
        "Se contatti lo Studio, comunichi i dati che scegli di includere, come nome, recapiti, contenuto del messaggio ed eventuali allegati. Il primo contatto serve a richiedere informazioni sui servizi o a concordare un colloquio. Puoi consultare il sito senza inviare una richiesta; per ricevere una risposta occorrono informazioni e recapiti sufficienti."
      ],
      "note": "TBC · Confermare le finalità effettive e la base giuridica di ciascun trattamento dei contatti. Verificare anche il trattamento di eventuali dati di terzi, categorie particolari di dati o dati relativi a condanne penali e reati presenti nelle richieste."
    },
    {
      "id": "navigazione",
      "title": "Dati di navigazione e hosting",
      "paragraphs": [
        "L’anteprima pubblicata è ospitata su GitHub Pages. La documentazione del servizio indica che GitHub registra e conserva l’indirizzo IP dei visitatori per finalità di sicurezza, anche quando non accedono a un account GitHub.",
        "L’assenza di strumenti di analisi nel sito non elimina questo trattamento del servizio di hosting."
      ],
      "links": [
        {
          "label": "GitHub Pages: raccolta dei dati",
          "url": "https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages#data-collection"
        }
      ],
      "note": "TBC · Completare la descrizione dei dati tecnici, delle finalità e delle basi giuridiche applicabili all’hosting effettivamente utilizzato, verificando i ruoli dello Studio e del fornitore. Aggiornare questa sezione se cambia l’hosting."
    },
    {
      "id": "cookie",
      "title": "Cookie e servizi esterni",
      "paragraphs": [
        "Nella versione attuale il sito non integra strumenti di analisi, pubblicità, pixel di tracciamento, mappe o contenuti social incorporati. Immagini e caratteri sono serviti dal sito. Il codice del sito non imposta cookie né salva dati nel local storage o nel session storage del browser.",
        "Google Maps e LinkedIn sono disponibili come collegamenti esterni. Se apri un collegamento, accedi al servizio del relativo fornitore, al quale si applica la sua informativa privacy."
      ],
      "links": [
        {
          "label": "Informativa privacy di Google",
          "url": "https://policies.google.com/privacy?hl=it"
        },
        {
          "label": "Informativa privacy di LinkedIn",
          "url": "https://www.linkedin.com/legal/privacy-policy"
        }
      ]
    },
    {
      "id": "destinatari",
      "title": "Fornitori, destinatari e trasferimenti",
      "paragraphs": [
        "I servizi identificati per questa versione sono GitHub Pages per l’hosting e Gmail per l’indirizzo email pubblicato.",
        "L’informativa di GitHub descrive trattamenti in diversi Paesi, inclusi gli Stati Uniti. Questa indicazione riguarda il fornitore e non sostituisce la verifica degli accordi e delle garanzie applicabili allo Studio."
      ],
      "links": [
        {
          "label": "Informativa privacy di GitHub",
          "url": "https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement#international-data-transfers"
        }
      ],
      "note": "TBC · Confermare chi accede alle richieste, gli altri fornitori e destinatari effettivi, i rispettivi ruoli, eventuali accordi di trattamento e i trasferimenti fuori dallo Spazio economico europeo con le garanzie applicabili."
    },
    {
      "id": "conservazione",
      "title": "Tempi di conservazione",
      "paragraphs": [
        "I tempi o i criteri effettivi di conservazione delle richieste e dei dati tecnici non sono ancora confermati per questa bozza."
      ],
      "note": "TBC · Indicare separatamente i tempi o i criteri per i contatti senza successivo incarico, le richieste che danno origine a un incarico e i dati tecnici di hosting, compresi gli eventuali obblighi di conservazione applicabili."
    },
    {
      "id": "diritti",
      "title": "Diritti e modalità di esercizio",
      "paragraphs": [
        "Nei casi e alle condizioni previsti dal GDPR, puoi esercitare i seguenti diritti:"
      ],
      "items": [
        "Accesso ai dati e rettifica o integrazione dei dati inesatti o incompleti.",
        "Cancellazione e limitazione del trattamento, quando ne ricorrono i presupposti.",
        "Opposizione nei casi previsti; portabilità per trattamenti automatizzati basati sul consenso o su un contratto.",
        "Revoca del consenso, quando il trattamento si fonda su di esso, senza pregiudicare la liceità del trattamento precedente."
      ],
      "after": [
        "Puoi inviare la richiesta al titolare all’indirizzo marcorodeghiero@gmail.com. Il GDPR prevede un riscontro entro un mese; il termine può essere prorogato di altri due mesi se necessario per la complessità o il numero delle richieste, dandone comunicazione motivata entro il primo mese.",
        "Se ritieni che il trattamento violi la normativa, puoi presentare un reclamo al Garante per la protezione dei dati personali. Il reclamo non richiede di attendere una risposta dello Studio."
      ],
      "links": [
        {
          "label": "I diritti spiegati dal Garante",
          "url": "https://www.garanteprivacy.it/it/home/i-miei-diritti/diritti"
        },
        {
          "label": "Come presentare un reclamo al Garante",
          "url": "https://www.garanteprivacy.it/diritti/come-agire-per-tutelare-i-tuoi-dati-personali/reclamo/"
        }
      ]
    },
    {
      "id": "decisioni",
      "title": "Profilazione e decisioni automatizzate",
      "paragraphs": [
        "Il sito non integra strumenti di profilazione o sistemi che decidono automaticamente sulle richieste di assistenza."
      ],
      "note": "TBC · Verificare separatamente se la gestione dei contatti o i servizi utilizzati dallo Studio comportano decisioni basate unicamente su trattamenti automatizzati con effetti giuridici o analogamente significativi e, se presenti, descriverle."
    }
  ],
  "en": [
    {
      "id": "titolare",
      "title": "Data controller and contact details",
      "paragraphs": [
        "The data controller is Avv. Marco Rodeghiero, at the office address: Contrà Pusterla 12, 36100 Vicenza (VI), Italy.",
        "You can contact the controller at marcorodeghiero@gmail.com, including for enquiries about your personal data. Telephone: +39 340 677 9043. PEC (Italian certified email): marco.rodeghiero@ordineavvocativicenza.it."
      ],
      "note": "TBC · Check whether a data protection officer (DPO) has been appointed and, if so, provide their contact details."
    },
    {
      "id": "contatti",
      "title": "Scope, information provided and enquiry purposes",
      "paragraphs": [
        "This draft covers browsing the website and initial contact with the office. It does not describe data processing during a professional engagement.",
        "The website has no contact or booking forms. Email buttons open your email application: a message is sent only when you choose to send it. Appointment requests are made by telephone or email and confirmed directly by the office.",
        "When you contact the office, you provide the information you choose to include, such as your name, contact details, message and any attachments. Initial contact allows you to ask about services or arrange a meeting. You can browse without making an enquiry; sufficient information and contact details are needed for a reply."
      ],
      "note": "TBC · Confirm the actual purposes and legal basis for each enquiry-related processing activity. Also check the handling of any information about other people, special categories of data or criminal convictions and offences included in enquiries."
    },
    {
      "id": "navigazione",
      "title": "Browsing data and hosting",
      "paragraphs": [
        "The published preview is hosted on GitHub Pages. Its documentation states that GitHub records and retains visitors’ IP addresses for security, including when visitors are not signed into a GitHub account.",
        "The absence of website analytics does not remove this processing by the hosting service."
      ],
      "links": [
        {
          "label": "GitHub Pages: data collection",
          "url": "https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages#data-collection"
        }
      ],
      "note": "TBC · Complete the description of technical data, purposes and legal bases for the hosting actually used, checking the roles of the practice and provider. Update this section if hosting changes."
    },
    {
      "id": "cookie",
      "title": "Cookies and external services",
      "paragraphs": [
        "The current website does not integrate analytics, advertising, tracking pixels, embedded maps or embedded social content. Images and fonts are served by the website. Its code does not set cookies or save data in the browser’s local storage or session storage.",
        "Google Maps and LinkedIn are available as external links. Opening a link takes you to the provider’s service, where its own privacy notice applies."
      ],
      "links": [
        {
          "label": "Google privacy policy",
          "url": "https://policies.google.com/privacy?hl=en"
        },
        {
          "label": "LinkedIn privacy policy",
          "url": "https://www.linkedin.com/legal/privacy-policy"
        }
      ]
    },
    {
      "id": "destinatari",
      "title": "Providers, recipients and international transfers",
      "paragraphs": [
        "The services identified for this version are GitHub Pages for hosting and Gmail for the published email address.",
        "GitHub’s privacy statement describes processing in several countries, including the United States. This information concerns the provider and does not replace checking the arrangements and safeguards applicable to the practice."
      ],
      "links": [
        {
          "label": "GitHub privacy statement",
          "url": "https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement#international-data-transfers"
        }
      ],
      "note": "TBC · Confirm who can access enquiries, other actual providers and recipients, their roles, any data processing agreements and transfers outside the European Economic Area with the applicable safeguards."
    },
    {
      "id": "conservazione",
      "title": "Retention periods",
      "paragraphs": [
        "The actual retention periods or criteria for enquiries and technical data have not yet been confirmed for this draft."
      ],
      "note": "TBC · Specify separately the periods or criteria for enquiries that do not lead to an engagement, enquiries that do, and hosting data, including any applicable retention obligations."
    },
    {
      "id": "diritti",
      "title": "Your rights and how to exercise them",
      "paragraphs": [
        "Where the GDPR provides for them and its conditions are met, you can exercise these rights:"
      ],
      "items": [
        "Access to your data and correction or completion of inaccurate or incomplete information.",
        "Erasure and restriction of processing where the relevant conditions apply.",
        "Objection where provided by law; portability for automated processing based on consent or a contract.",
        "Withdrawal of consent where processing relies on it, without affecting the lawfulness of earlier processing."
      ],
      "after": [
        "You can send your request to the controller at marcorodeghiero@gmail.com. The GDPR requires a response within one month; this can be extended by two further months where necessary because of the complexity or number of requests, with reasons given within the first month.",
        "If you believe processing breaches data protection law, you can complain to the Italian data protection authority, the Garante per la protezione dei dati personali. You do not need to wait for the office to reply before complaining."
      ],
      "links": [
        {
          "label": "Rights explained by the Garante (Italian)",
          "url": "https://www.garanteprivacy.it/it/home/i-miei-diritti/diritti"
        },
        {
          "label": "How to complain to the Garante (Italian)",
          "url": "https://www.garanteprivacy.it/diritti/come-agire-per-tutelare-i-tuoi-dati-personali/reclamo/"
        }
      ]
    },
    {
      "id": "decisioni",
      "title": "Profiling and automated decisions",
      "paragraphs": [
        "The website does not integrate profiling tools or systems that automatically decide on requests for legal assistance."
      ],
      "note": "TBC · Check separately whether enquiry handling or the practice’s services involve decisions based solely on automated processing with legal or similarly significant effects and, if so, describe them."
    }
  ]
};

export function emailLink(subject?: string) {
  return `mailto:${studio.email}${subject ? `?subject=${encodeURIComponent(subject)}` : ''}`;
}
