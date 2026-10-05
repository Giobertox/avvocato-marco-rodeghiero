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
    eyebrow: 'Studio legale · Vicenza', hero: 'Avvocato a Vicenza',
    intro: 'Avv. Marco Rodeghiero', summary: 'Assistenza in diritto civile, questioni immobiliari, famiglia e impresa. Colloqui in italiano e in inglese, in Studio o da remoto.',
    location: 'Lo Studio a Vicenza.', locationSub: 'Contrà Pusterla 12 · Colloqui in presenza e da remoto',
    areaEyebrow: 'L’attività dello Studio', areaTitle: 'Aree di attività', areaLink: 'Tutte le aree di attività',
    profileEyebrow: 'Il professionista', profileTitle: 'Marco Rodeghiero', profileText: 'L’attività legale e la formazione universitaria si affiancano al lavoro sui testi giuridici in italiano e in inglese.', profileLink: 'Conosci il profilo',
    translationEyebrow: 'Italiano e inglese', translationTitle: 'Traduzioni giuridiche', translationText: 'Traduzioni di testi giuridici dall’italiano all’inglese e dall’inglese all’italiano.', translationLink: 'Il servizio di traduzione',
    contactEyebrow: 'Contatti', contactTitle: 'Concordiamo un colloquio', contactText: 'Colloqui in Studio o da remoto. Gli appuntamenti vengono confermati direttamente dallo Studio.',
    heroLead: 'Assistenza in diritto civile, famiglia, immobili e impresa.', languageLabel: 'Italiano e inglese', meetingLabel: 'In Studio e da remoto',
    callShort: 'Chiama', emailShort: 'Scrivi un’email', translationRequest: 'Richiedi una traduzione', directionsShort: 'Indicazioni stradali',
    menuTitle: 'Esplora il sito', appointmentNote: 'Richiesta via email · Appuntamento da confermare', practiceIntro: 'Seleziona un’area per conoscere le attività dello Studio.',
    contactIntro: 'Telefona o scrivi per concordare un appuntamento.', contactDetails: 'Contatti diretti', languageLevels: 'Livelli linguistici da confermare.',
    addressLabel: 'Dove siamo', hoursLabel: 'Orari dello Studio', weekdays: 'Lunedì – venerdì', weekend: 'Sabato e domenica', closed: 'Chiuso', maps: 'Apri le indicazioni su Google Maps', mapsNote: 'Collegamento esterno al servizio Google Maps.',
    ordinaryEmail: 'Email', pecLabel: 'PEC · posta elettronica certificata', pecNote: 'Indirizzo PEC distinto dall’email per i contatti ordinari.', phoneLabel: 'Telefono', remoteTitle: 'In Studio o da remoto', remoteText: 'La modalità del colloquio si concorda al momento della richiesta.',
    profileLead: 'Un profilo tra attività legale, formazione e lingue.', bio: 'Marco Rodeghiero svolge la propria attività professionale a Vicenza. Lo Studio si occupa delle aree di diritto civile indicate in questo sito e offre traduzioni giuridiche tra italiano e inglese.',
    provisional: 'Da confermare con Marco', portrait: 'Spazio per il ritratto', portraitNote: 'Fotografia professionale da scegliere e autorizzare.', education: 'Formazione', experience: 'Percorso professionale', languages: 'Lingue di lavoro', educationNote: 'Dati ricavati dalla schermata LinkedIn fornita; denominazioni e date da approvare.',
    degree: 'Laurea in Giurisprudenza', degreeDetail: 'Università Cattolica del Sacro Cuore · Indirizzo internazionale', doctorate: 'Dottorato in Istituzioni e Politiche', doctorateDetail: 'Università Cattolica del Sacro Cuore · Storia delle relazioni e istituzioni internazionali', practiceSince: 'Attività presso lo Studio Legale Avv. Marco Rodeghiero', practiceSinceDetail: 'La schermata LinkedIn indica un inizio nel marzo 2010. Cronologia e incarichi attuali da confermare.', languageDetail: 'Italiano e inglese. La formulazione pubblica dei livelli linguistici è in revisione.', registration: 'Iscrizione all’Ordine e qualifiche', registrationDetail: 'Dati di iscrizione, titoli e qualifiche professionali da verificare prima della pubblicazione.',
    areasLead: 'Le aree in cui lo Studio può assisterti.', areasIntro: 'Una panoramica delle attività confermate. Per capire se una questione rientra nell’assistenza dello Studio, puoi richiedere un primo contatto.',
    translationLead: 'Il significato giuridico, in un’altra lingua.', translationIntro: 'Traduzioni di testi giuridici dall’italiano all’inglese e dall’inglese all’italiano. Per valutare una richiesta, contatta direttamente lo Studio.', translationDirection: 'Italiano ↔ Inglese', translationScope: 'Un servizio dedicato', translationScopeText: 'Tipologia del testo, finalità della traduzione, tempi e modalità vengono concordati direttamente con lo Studio.', translationLimits: 'Formalità e requisiti', translationLimitsText: 'Questa bozza non presenta il servizio come asseverato o certificato. Eventuali requisiti formali vanno chiariti con lo Studio per la specifica richiesta.',
    translationSteps: ['Indica le lingue e il tipo di testo.', 'Descrivi la finalità e l’eventuale scadenza.', 'Concorda con lo Studio modalità e tempi.'],
    requestTitle: 'Come richiedere una traduzione', appointmentSubject: 'Richiesta di appuntamento', translationSubject: 'Richiesta di traduzione giuridica',
    legalTitle: 'Informazioni professionali e privacy', legalText: 'Sezione provvisoria: dati professionali e informative saranno completati e approvati prima della pubblicazione definitiva.', footerLine: 'Diritto civile · Traduzioni giuridiche italiano e inglese', back: 'Torna alla home', notFound: 'Pagina non trovata', notFoundText: 'Il collegamento potrebbe essere cambiato. Puoi ripartire dalla homepage.',
  },
  en: {
    nav: { home: 'Home', profile: 'Profile', areas: 'Practice areas', translations: 'Translations', contact: 'Contact' },
    stage: 'Design preview', stageDetail: 'Copy and profile under review · Draft website',
    skip: 'Skip to content', menu: 'Menu', close: 'Close menu', call: 'Call the practice', email: 'Send an email', appointment: 'Request an appointment',
    eyebrow: 'Legal practice · Vicenza, Italy', hero: 'Legal assistance in Vicenza',
    intro: 'Avv. Marco Rodeghiero', summary: 'Assistance with Italian civil law, property, family and business matters. Meetings in Italian and English, in person or remotely.',
    location: 'The practice in Vicenza.', locationSub: 'Contrà Pusterla 12 · In-person and remote meetings',
    areaEyebrow: 'The practice', areaTitle: 'Practice areas', areaLink: 'All practice areas',
    profileEyebrow: 'Your lawyer', profileTitle: 'Marco Rodeghiero', profileText: 'Legal practice and university education alongside work with legal texts in Italian and English.', profileLink: 'Read the profile',
    translationEyebrow: 'Italian and English', translationTitle: 'Legal translations', translationText: 'Translation of legal texts from Italian into English and from English into Italian.', translationLink: 'About legal translation',
    contactEyebrow: 'Contact', contactTitle: 'Arrange a conversation', contactText: 'Meet in person or remotely. Appointments are confirmed directly by the practice.',
    heroLead: 'Assistance with Italian civil, family, property and business law.', languageLabel: 'Italian and English', meetingLabel: 'In person and remotely',
    callShort: 'Call', emailShort: 'Send an email', translationRequest: 'Request a translation', directionsShort: 'Get directions',
    menuTitle: 'Explore the website', appointmentNote: 'Email enquiry · Appointment to be confirmed', practiceIntro: 'Select an area to learn about the practice.',
    contactIntro: 'Call or email to arrange an appointment.', contactDetails: 'Direct contact details', languageLevels: 'Proficiency wording awaiting confirmation.',
    addressLabel: 'Find us', hoursLabel: 'Office hours', weekdays: 'Monday – Friday', weekend: 'Saturday and Sunday', closed: 'Closed', maps: 'Get directions on Google Maps', mapsNote: 'External link to the Google Maps service.',
    ordinaryEmail: 'Email', pecLabel: 'PEC · Italian certified email', pecNote: 'The PEC address is separate from the email used for ordinary enquiries.', phoneLabel: 'Telephone', remoteTitle: 'In person or remotely', remoteText: 'The meeting format is agreed when you contact the practice.',
    profileLead: 'Legal practice, education and languages.', bio: 'Marco Rodeghiero practises in Vicenza, Italy. The practice works in the civil law areas listed on this website and offers legal translations between Italian and English.',
    provisional: 'Awaiting Marco’s confirmation', portrait: 'Portrait space', portraitNote: 'A professional photograph to be selected and approved.', education: 'Education', experience: 'Professional background', languages: 'Working languages', educationNote: 'Taken from the supplied LinkedIn screenshot; qualification names and dates await approval.',
    degree: 'Degree in Law', degreeDetail: 'Università Cattolica del Sacro Cuore · International law focus', doctorate: 'Doctorate in Institutions and Policies', doctorateDetail: 'Università Cattolica del Sacro Cuore · History of international relations and institutions', practiceSince: 'Work at Studio Legale Avv. Marco Rodeghiero', practiceSinceDetail: 'The LinkedIn screenshot lists a start date of March 2010. The timeline and current appointments await confirmation.', languageDetail: 'Italian and English. Public wording of language proficiency is under review.', registration: 'Professional registration and qualifications', registrationDetail: 'Registration details, professional titles and qualifications will be verified before publication.',
    areasLead: 'Where the practice can assist you.', areasIntro: 'An overview of the confirmed practice areas. Contact the practice to discuss whether it can assist with your particular matter.',
    translationLead: 'Legal meaning, in another language.', translationIntro: 'Translation of legal texts from Italian into English and from English into Italian. Contact the practice directly to discuss your request.', translationDirection: 'Italian ↔ English', translationScope: 'A dedicated service', translationScopeText: 'The type of text, intended use, timing and arrangements are agreed directly with the practice.', translationLimits: 'Formal requirements', translationLimitsText: 'This draft does not describe the service as sworn or certified. Discuss any formal requirements with the practice for your specific request.',
    translationSteps: ['Specify the languages and type of text.', 'Describe the intended use and any deadline.', 'Agree arrangements and timing with the practice.'],
    requestTitle: 'Requesting a translation', appointmentSubject: 'Appointment enquiry', translationSubject: 'Legal translation enquiry',
    legalTitle: 'Professional information and privacy', legalText: 'Placeholder section: professional details and privacy information will be completed and approved before final publication.', footerLine: 'Italian civil law · Italian and English legal translations', back: 'Back to home', notFound: 'Page not found', notFoundText: 'The link may have changed. You can start again from the homepage.',
  },
} as const;

export const areas = {
  it: [
    { id: 'civile', title: 'Diritto civile', text: 'Questioni e rapporti di diritto privato.', items: ['Diritto civile', 'Recupero crediti'] },
    { id: 'famiglia', title: 'Famiglia e successioni', text: 'Questioni familiari e passaggi del patrimonio.', items: ['Diritto di famiglia', 'Successioni ed eredità'] },
    { id: 'immobili', title: 'Immobili ed esecuzioni', text: 'Proprietà, esecuzioni immobiliari e aste giudiziarie.', items: ['Diritto immobiliare', 'Esecuzioni immobiliari', 'Aste giudiziarie'] },
    { id: 'impresa', title: 'Contratti e impresa', text: 'Rapporti contrattuali e situazioni di crisi d’impresa.', items: ['Diritto contrattuale', 'Crisi d’impresa', 'Insolvenza e ristrutturazione'] },
  ],
  en: [
    { id: 'civile', title: 'Civil law', text: 'Private law matters and relationships in Italy.', items: ['Civil law', 'Debt recovery'] },
    { id: 'famiglia', title: 'Family and inheritance', text: 'Family matters and the transfer of estates.', items: ['Family law', 'Succession and inheritance'] },
    { id: 'immobili', title: 'Property and enforcement', text: 'Property, real estate enforcement and judicial auctions.', items: ['Property law', 'Real estate enforcement', 'Judicial auctions'] },
    { id: 'impresa', title: 'Contracts and business', text: 'Contractual relationships and business distress.', items: ['Contract law', 'Business crisis', 'Insolvency and restructuring'] },
  ],
};

export function emailLink(subject?: string) {
  return `mailto:${studio.email}${subject ? `?subject=${encodeURIComponent(subject)}` : ''}`;
}
