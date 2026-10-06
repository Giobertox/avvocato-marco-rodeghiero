import { withBase } from '../utils/paths';

export type Locale = 'it' | 'en';
export type PageKey = 'home' | 'profile' | 'areas' | 'translations' | 'contact';

export const studio = {
  name: 'Studio Legale Avv. Marco Rodeghiero',
  phone: '+39 340 677 9043',
  phoneHref: 'tel:+393406779043',
  email: 'marcorodeghiero@gmail.com',
  pec: 'marco.rodeghiero@ordineavvocativicenza.it',
  address: 'Contrà Pusterla 12',
  city: '36100 Vicenza (VI), Italia',
  maps: 'https://www.google.com/maps/search/?api=1&query=Contr%C3%A0%20Pusterla%2012%2C%20Vicenza%2C%20Italia',
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
    nav: { home: 'Home', profile: 'Profilo', areas: 'Aree di attività', translations: 'Traduzioni', contact: 'Contatti' },
    stage: 'Anteprima di progetto', stageDetail: 'Testi e profilo in revisione · Non è il sito definitivo',
    skip: 'Vai al contenuto', menu: 'Menu', close: 'Chiudi menu', call: 'Chiama lo Studio', email: 'Scrivi un’email', appointment: 'Richiedi un appuntamento',
    eyebrow: 'Studio legale · Vicenza', hero: 'Studio legale a Vicenza',
    intro: 'Avv. Marco Rodeghiero', summary: 'Assistenza in diritto civile, crisi d’impresa, immobili, famiglia e successioni. Colloqui in italiano e inglese, in Studio o da remoto.',
    location: 'Lo Studio a Vicenza.', locationSub: 'Contrà Pusterla 12 · Colloqui in presenza e da remoto',
    areaEyebrow: 'L’attività dello Studio', areaTitle: 'Aree di attività', areaLink: 'Tutte le aree di attività',
    profileEyebrow: 'Il professionista', profileTitle: 'Avvocato Marco Rodeghiero', profileText: 'Avvocato a Vicenza, con attività nelle aree del diritto civile e traduzioni giuridiche tra italiano e inglese.', profileLink: 'Conosci il profilo',
    translationEyebrow: 'Italiano e inglese', translationTitle: 'Traduzioni giuridiche', translationText: 'Traduzioni di testi giuridici dall’italiano all’inglese e dall’inglese all’italiano.', translationLink: 'Il servizio di traduzione',
    contactEyebrow: 'Contatti', contactTitle: 'Concordiamo un colloquio', contactText: 'Colloqui in Studio o da remoto, solo su appuntamento. Gli appuntamenti vengono confermati direttamente dallo Studio.',
    heroLead: 'Assistenza in diritto civile, crisi d’impresa, immobili, famiglia e successioni.', languageLabel: 'Italiano e inglese', meetingLabel: 'In Studio e da remoto',
    callShort: 'Chiamaci', emailShort: 'Scrivici', emailAccessible: 'Scrivici via email', translationRequest: 'Richiedi una traduzione', directionsShort: 'Indicazioni stradali',
    appointmentLabel: 'Solo su appuntamento', newTab: 'Si apre in una nuova scheda',
    menuTitle: 'Esplora il sito', appointmentNote: 'Si apre l’app di posta. L’appuntamento deve essere confermato dallo Studio.', practiceIntro: 'Seleziona un’area per conoscere le attività dello Studio.',
    contactIntro: 'Si riceve solo su appuntamento. Telefona o scrivi per concordare un colloquio.', contactDetails: 'Contatti diretti', byAppointment: 'Si riceve solo su appuntamento.',
    addressLabel: 'Dove siamo', hoursLabel: 'Orari dello Studio', weekdays: 'Lunedì – venerdì', weekend: 'Sabato e domenica', closed: 'Chiuso', maps: 'Apri le indicazioni su Google Maps', mapsNote: 'Collegamento esterno al servizio Google Maps.',
    ordinaryEmail: 'Email', pecLabel: 'PEC · posta elettronica certificata', pecNote: 'Indirizzo PEC distinto dall’email per i contatti ordinari.', phoneLabel: 'Telefono', remoteTitle: 'In Studio o da remoto', remoteText: 'La modalità del colloquio si concorda al momento della richiesta.',
    profileLead: 'Avvocato a Vicenza. Attività legale e traduzioni giuridiche in italiano e inglese.', bio: 'L’Avvocato Marco Rodeghiero svolge la propria attività di avvocato a Vicenza, nello Studio di Contrà Pusterla 12. Il suo percorso presso lo Studio Legale Avv. Marco Rodeghiero inizia nel marzo 2010.',
    profileEducation: 'Formazione', profileExperience: 'Esperienze professionali', profileSource: 'Profilo professionale su LinkedIn',
    provisional: 'Da confermare con l’Avv. Marco Rodeghiero', languages: 'Lingue di lavoro',
    profileFocus: 'Attività dello Studio', profileFocusText: 'Lo Studio si occupa di diritto civile e contratti, recupero crediti, crisi d’impresa e insolvenza, immobili, famiglia e successioni.',
    profileLanguagesText: 'Italiano: livello madrelingua o bilingue. Inglese: competenza professionale lavorativa. I colloqui possono svolgersi in entrambe le lingue; lo Studio offre inoltre traduzioni giuridiche tra italiano e inglese.',
    profileMeeting: 'Il primo contatto', profileMeetingText: 'Si riceve solo su appuntamento. Puoi telefonare o scrivere per descrivere la questione e concordare un colloquio in Studio o da remoto.',
    supplementary: 'Servizio complementare', situationLabel: 'Quando contattare lo Studio',
    areasLead: 'Le aree in cui lo Studio può assisterti.', areasIntro: 'Le principali situazioni trattate dallo Studio. Un primo contatto permette di descrivere la questione e valutare l’assistenza richiesta.',
    translationLead: 'Il significato giuridico, in un’altra lingua.', translationIntro: 'Traduzioni di testi giuridici dall’italiano all’inglese e dall’inglese all’italiano. Per valutare una richiesta, contatta direttamente lo Studio.', translationDirection: 'Italiano ↔ Inglese', translationScope: 'Un servizio dedicato', translationScopeText: 'Tipologia del testo, finalità della traduzione, tempi e modalità vengono concordati direttamente con lo Studio.', translationLimits: 'Formalità e requisiti', translationLimitsText: 'Indica l’uso previsto della traduzione e gli eventuali requisiti richiesti dal destinatario. Modalità e formalità devono essere concordate con lo Studio prima dell’incarico.',
    translationSteps: ['Indica le lingue e il tipo di testo.', 'Descrivi la finalità e l’eventuale scadenza.', 'Concorda con lo Studio modalità e tempi.'],
    requestTitle: 'Come richiedere una traduzione', appointmentSubject: 'Richiesta di appuntamento', translationSubject: 'Richiesta di traduzione giuridica',
    translationContactTitle: 'Parliamo della tua traduzione', translationContactText: 'Scrivici indicando le lingue, il tipo di testo, la finalità e l’eventuale scadenza. Modalità e tempi vengono concordati direttamente con lo Studio.',
    legalTitle: 'Informazioni professionali e privacy', legalText: 'Sezione provvisoria: dati professionali e informative saranno completati e approvati prima della pubblicazione definitiva.', footerLine: 'Diritto civile · Traduzioni giuridiche italiano e inglese', back: 'Torna alla home', notFound: 'Pagina non trovata', notFoundText: 'Il collegamento potrebbe essere cambiato. Puoi ripartire dalla homepage.',
  },
  en: {
    nav: { home: 'Home', profile: 'Profile', areas: 'Practice areas', translations: 'Translations', contact: 'Contact' },
    stage: 'Design preview', stageDetail: 'Copy and profile under review · Draft website',
    skip: 'Skip to content', menu: 'Menu', close: 'Close menu', call: 'Call the practice', email: 'Send an email', appointment: 'Request an appointment',
    eyebrow: 'Legal practice · Vicenza, Italy', hero: 'Legal practice in Vicenza',
    intro: 'Avv. Marco Rodeghiero', summary: 'Assistance with Italian civil law, business distress, property, family and inheritance. Meetings in Italian and English, in person or remotely.',
    location: 'The practice in Vicenza.', locationSub: 'Contrà Pusterla 12 · In-person and remote meetings',
    areaEyebrow: 'The practice', areaTitle: 'Practice areas', areaLink: 'All practice areas',
    profileEyebrow: 'Your lawyer', profileTitle: 'Avv. Marco Rodeghiero', profileText: 'A lawyer practising in Vicenza, working in Italian civil law and translating legal texts between Italian and English.', profileLink: 'Read the profile',
    translationEyebrow: 'Italian and English', translationTitle: 'Legal translations', translationText: 'Translation of legal texts from Italian into English and from English into Italian.', translationLink: 'About legal translation',
    contactEyebrow: 'Contact', contactTitle: 'Arrange a conversation', contactText: 'Meet in person or remotely, by appointment only. Appointments are confirmed directly by the practice.',
    heroLead: 'Assistance with Italian civil law, business distress, property, family and inheritance.', languageLabel: 'Italian and English', meetingLabel: 'In person and remotely',
    callShort: 'Call us', emailShort: 'Write to us', emailAccessible: 'Write to us by email', translationRequest: 'Request a translation', directionsShort: 'Get directions',
    appointmentLabel: 'By appointment only', newTab: 'Opens in a new tab',
    menuTitle: 'Explore the website', appointmentNote: 'Opens your email app. Your appointment must be confirmed by the practice.', practiceIntro: 'Select an area to learn about the practice.',
    contactIntro: 'Meetings are by appointment only. Call or email to arrange a conversation.', contactDetails: 'Direct contact details', byAppointment: 'By appointment only.',
    addressLabel: 'Find us', hoursLabel: 'Office hours', weekdays: 'Monday – Friday', weekend: 'Saturday and Sunday', closed: 'Closed', maps: 'Get directions on Google Maps', mapsNote: 'External link to the Google Maps service.',
    ordinaryEmail: 'Email', pecLabel: 'PEC · Italian certified email', pecNote: 'The PEC address is separate from the email used for ordinary enquiries.', phoneLabel: 'Telephone', remoteTitle: 'In person or remotely', remoteText: 'The meeting format is agreed when you contact the practice.',
    profileLead: 'A lawyer in Vicenza. Legal practice and translation between Italian and English.', bio: 'Avv. Marco Rodeghiero practises as a lawyer in Vicenza, Italy, at Contrà Pusterla 12. His work at Studio Legale Avv. Marco Rodeghiero began in March 2010.',
    profileEducation: 'Education and training', profileExperience: 'Professional experience', profileSource: 'Professional profile on LinkedIn',
    provisional: 'Awaiting confirmation from Avv. Marco Rodeghiero', languages: 'Working languages',
    profileFocus: 'The practice', profileFocusText: 'The practice works in Italian civil and contract law, debt recovery, business distress and insolvency, property, family and inheritance.',
    profileLanguagesText: 'Italian: native or bilingual proficiency. English: professional working proficiency. Meetings can take place in either language; the practice also translates legal texts between Italian and English.',
    profileMeeting: 'Getting in touch', profileMeetingText: 'Meetings are by appointment only. Call or email to describe your matter and arrange a meeting in person or remotely.',
    supplementary: 'Additional service', situationLabel: 'When to get in touch',
    areasLead: 'Where the practice can assist you.', areasIntro: 'The main situations handled by the practice. An initial conversation helps clarify your matter and the assistance you need.',
    translationLead: 'Legal meaning, in another language.', translationIntro: 'Translation of legal texts from Italian into English and from English into Italian. Contact the practice directly to discuss your request.', translationDirection: 'Italian ↔ English', translationScope: 'A dedicated service', translationScopeText: 'The type of text, intended use, timing and arrangements are agreed directly with the practice.', translationLimits: 'Formal requirements', translationLimitsText: 'Explain the intended use and any requirements specified by the recipient. Arrangements and formal requirements must be agreed with the practice before commissioning the translation.',
    translationSteps: ['Specify the languages and type of text.', 'Describe the intended use and any deadline.', 'Agree arrangements and timing with the practice.'],
    requestTitle: 'Requesting a translation', appointmentSubject: 'Appointment enquiry', translationSubject: 'Legal translation enquiry',
    translationContactTitle: 'Discuss your translation', translationContactText: 'Write to us with the languages, type of text, intended use and any deadline. Arrangements and timing are agreed directly with the practice.',
    legalTitle: 'Professional information and privacy', legalText: 'Placeholder section: professional details and privacy information will be completed and approved before final publication.', footerLine: 'Italian civil law · Italian and English legal translations', back: 'Back to home', notFound: 'Page not found', notFoundText: 'The link may have changed. You can start again from the homepage.',
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
    { id: 'civile', title: 'Diritto civile, contratti e crediti', text: 'Contratti, controversie e pagamenti non ricevuti.', detail: 'Per privati e imprese che devono affrontare una questione contrattuale, una controversia civile o il recupero di un credito.', when: 'Puoi contattare lo Studio per descrivere la questione e valutare i documenti relativi al rapporto o al pagamento.', items: ['Diritto civile', 'Diritto contrattuale', 'Recupero crediti'] },
    { id: 'impresa', title: 'Crisi d’impresa e insolvenza', text: 'Difficoltà dell’impresa, insolvenza e ristrutturazione.', detail: 'Per imprese che affrontano una situazione di crisi o devono valutare questioni legali legate all’insolvenza e alla ristrutturazione.', when: 'Un primo contatto permette di descrivere la situazione dell’impresa e chiarire l’assistenza legale richiesta.', items: ['Crisi d’impresa', 'Insolvenza e ristrutturazione'] },
    { id: 'immobili', title: 'Immobili, esecuzioni e aste', text: 'Questioni immobiliari, esecuzioni e aste giudiziarie.', detail: 'Per chi deve affrontare una questione relativa a un immobile, a un’esecuzione immobiliare o a un’asta giudiziaria.', when: 'Contatta lo Studio per esaminare la situazione e la documentazione relativa all’immobile o alla procedura.', items: ['Diritto immobiliare', 'Esecuzioni immobiliari', 'Aste giudiziarie'] },
    { id: 'famiglia', title: 'Famiglia e successioni', text: 'Questioni familiari, successioni ed eredità.', detail: 'Per persone e famiglie che devono affrontare una questione di diritto di famiglia o relativa a una successione e all’eredità.', when: 'Puoi descrivere la situazione allo Studio per chiarire i rapporti coinvolti e l’assistenza richiesta.', items: ['Diritto di famiglia', 'Successioni ed eredità'] },
  ],
  en: [
    { id: 'civile', title: 'Civil law, contracts and debts', text: 'Contracts, disputes and unpaid amounts.', detail: 'For individuals and businesses dealing with a contractual matter, a civil dispute or debt recovery in Italy.', when: 'Contact the practice to describe your matter and discuss the documents relating to the agreement or payment.', items: ['Civil law', 'Contract law', 'Debt recovery'] },
    { id: 'impresa', title: 'Business distress and insolvency', text: 'Business difficulties, insolvency and restructuring.', detail: 'For businesses facing financial distress or considering legal matters relating to insolvency and restructuring in Italy.', when: 'An initial conversation helps describe the business situation and clarify the legal assistance required.', items: ['Business crisis', 'Insolvency and restructuring'] },
    { id: 'immobili', title: 'Property, enforcement and auctions', text: 'Property matters, enforcement and judicial auctions.', detail: 'For anyone dealing with an Italian property matter, real estate enforcement or a judicial auction.', when: 'Contact the practice to discuss the situation and documents relating to the property or proceedings.', items: ['Property law', 'Real estate enforcement', 'Judicial auctions'] },
    { id: 'famiglia', title: 'Family and inheritance', text: 'Family matters, succession and inheritance.', detail: 'For individuals and families facing a matter of Italian family law, succession or inheritance.', when: 'Describe your situation to clarify the relationships involved and the assistance you need.', items: ['Family law', 'Succession and inheritance'] },
  ],
};

export function emailLink(subject?: string) {
  return `mailto:${studio.email}${subject ? `?subject=${encodeURIComponent(subject)}` : ''}`;
}
