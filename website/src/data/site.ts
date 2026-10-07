import { withBase } from '../utils/paths';
import { practiceName } from '../../lib/favicons.mjs';

export type Locale = 'it' | 'en';
export type PageKey = 'home' | 'profile' | 'areas' | 'translations' | 'contact';

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
  it: { home: '/it/', profile: '/it/profilo/', areas: '/it/aree-di-attivita/', translations: '/it/traduzioni-legali/', contact: '/it/contatti/' },
  en: { home: '/en/', profile: '/en/profile/', areas: '/en/practice-areas/', translations: '/en/legal-translations/', contact: '/en/contact/' },
};

export const routes = Object.fromEntries(
  Object.entries(pagePaths).map(([locale, pages]) => [
    locale,
    Object.fromEntries(Object.entries(pages).map(([key, path]) => [key, withBase(path)])),
  ]),
) as Record<Locale, Record<PageKey, string>>;

export const copy = {
  it: {
    nav: { home: 'Home', profile: 'Profilo', areas: 'Aree di attività', translations: 'Traduzioni giuridiche', contact: 'Contatti' },
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
    legalTitle: 'Informazioni professionali e privacy', legalText: "TBC · Da confermare. Questa bozza riguarda il sito e i contatti iniziali con lo Studio. I dati professionali e le modalità di trattamento devono essere verificati e approvati prima della pubblicazione definitiva.", footerLine: 'Diritto civile · Traduzioni giuridiche italiano e inglese', back: 'Torna alla home', notFound: 'Pagina non trovata', notFoundText: "La pagina non è disponibile o il collegamento è cambiato. Torna alla pagina iniziale.",
    country: 'Italia', city: '36100 Vicenza (VI), Italia',
    translationDocumentsDraft: 'Esempi proposti: contratti, atti giudiziari e documenti societari.',
    translationDocumentsNote: 'TBC · Tipologie di documenti da confermare con lo Studio.',
  },
  en: {
    nav: { home: 'Home', profile: 'Profile', areas: 'Practice areas', translations: 'Legal translations', contact: 'Contact' },
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
    legalTitle: 'Professional information and privacy', legalText: "TBC · To be confirmed. This draft covers the website and initial enquiries to the office. Professional details and data handling arrangements must be checked and approved before final publication.", footerLine: 'Italian civil law · Italian and English legal translations', back: 'Back to home', notFound: 'Page not found', notFoundText: "This page is unavailable or the link has changed. Return to the homepage.",
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
export const legalDetails = {
  "it": [
    {
      "title": "Informazioni professionali",
      "text": "Studio Legale Avv. Marco Rodeghiero, Contrà Pusterla 12, 36100 Vicenza (VI), Italia. Professione: avvocato. Ordine di appartenenza e numero di iscrizione: TBC. Partita IVA: TBC.",
      "note": "TBC · Confermare i dati di iscrizione e fiscali e i riferimenti alle regole professionali applicabili."
    },
    {
      "title": "Titolare e contatti privacy",
      "text": "Il titolare del trattamento è l’Avv. Marco Rodeghiero, presso la sede dello Studio. Per richieste sui dati personali: marcorodeghiero@gmail.com.",
      "note": "TBC · Confermare l’identità del titolare e l’eventuale referente privacy."
    },
    {
      "title": "Dati, finalità e base giuridica",
      "text": "Nome, recapiti e informazioni forniti via email o telefono sono utilizzati per rispondere alle richieste e organizzare appuntamenti. La base proposta è l’esecuzione di misure precontrattuali richieste dall’interessato, ai sensi dell’art. 6, par. 1, lett. b), GDPR. Il conferimento è facoltativo, ma senza recapiti o informazioni sufficienti potrebbe non essere possibile rispondere.",
      "note": "TBC · Verificare finalità e basi giuridiche effettive. Il trattamento relativo a un incarico professionale richiede un’informativa dedicata."
    },
    {
      "title": "Conservazione e destinatari",
      "text": "I dati sono conservati per il tempo necessario a gestire la richiesta e adempiere agli obblighi applicabili. Possono essere trattati da persone autorizzate e da fornitori di servizi necessari alla gestione dei contatti.",
      "note": "TBC · Precisare tempi o criteri di conservazione, destinatari, ruoli dei fornitori ed eventuali trasferimenti fuori dallo Spazio economico europeo con le relative garanzie."
    },
    {
      "title": "I tuoi diritti",
      "text": "Nei casi previsti dal GDPR puoi chiedere accesso, rettifica, cancellazione, limitazione e portabilità dei dati, opporti al trattamento e revocare il consenso quando costituisce la base giuridica. Puoi scrivere al recapito privacy e presentare un reclamo al Garante per la protezione dei dati personali.",
      "note": "TBC · Confermare le modalità di esercizio dei diritti e indicare eventuali processi decisionali automatizzati, se presenti."
    },
    {
      "title": "Navigazione e servizi esterni",
      "text": "Il sito non integra moduli di contatto, strumenti di analisi o mappe incorporate. I link a Google Maps e LinkedIn aprono servizi esterni, che trattano i dati secondo le proprie informative. Il servizio di hosting può registrare dati tecnici di navigazione.",
      "note": "TBC · Verificare dati e registri del provider di hosting, relative finalità, basi giuridiche, conservazione e l’eventuale uso di cookie."
    }
  ],
  "en": [
    {
      "title": "Professional information",
      "text": "Studio Legale Avv. Marco Rodeghiero, Contrà Pusterla 12, 36100 Vicenza (VI), Italy. Profession: Italian lawyer (avvocato). Bar association and registration number: TBC. VAT number: TBC.",
      "note": "TBC · Confirm registration and tax details and references to the applicable professional rules."
    },
    {
      "title": "Data controller and privacy contact",
      "text": "The data controller is Avv. Marco Rodeghiero, at the office address. For enquiries about personal data, email marcorodeghiero@gmail.com.",
      "note": "TBC · Confirm the controller’s identity and any designated privacy contact."
    },
    {
      "title": "Data, purposes and legal basis",
      "text": "Your name, contact details and information provided by email or telephone are used to answer enquiries and arrange appointments. The proposed legal basis is taking steps at your request before entering into a contract, under Article 6(1)(b) GDPR. Providing information is optional, but the office may be unable to respond without sufficient details.",
      "note": "TBC · Verify actual purposes and legal bases. Data processing for a professional engagement requires a separate privacy notice."
    },
    {
      "title": "Retention and recipients",
      "text": "Data is kept for as long as needed to handle your enquiry and meet applicable obligations. Authorised people and service providers needed to manage enquiries may process it.",
      "note": "TBC · Specify retention periods or criteria, recipients, providers’ roles and any transfers outside the European Economic Area and safeguards."
    },
    {
      "title": "Your rights",
      "text": "Where provided by the GDPR, you can request access, correction, deletion, restriction and portability of your data, object to processing and withdraw consent where it is the legal basis. Contact the privacy email address to exercise your rights. You can also complain to the Italian data protection authority, the Garante per la protezione dei dati personali.",
      "note": "TBC · Confirm how rights requests are handled and explain any automated decision-making, if used."
    },
    {
      "title": "Browsing and external services",
      "text": "The website has no contact forms, analytics tools or embedded maps. Google Maps and LinkedIn links open external services with their own privacy notices. The hosting provider may record technical browsing data.",
      "note": "TBC · Verify the hosting provider’s data and logs, purposes, legal bases, retention and any cookies."
    }
  ]
} as const;

export function emailLink(subject?: string) {
  return `mailto:${studio.email}${subject ? `?subject=${encodeURIComponent(subject)}` : ''}`;
}
