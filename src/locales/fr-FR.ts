import {
  BADGE_DELEGATE_KEY,
  BADGE_PIONEER_KEY,
  BADGE_SECOND_PASSPHRASE_KEY,
  BADGE_XP_LEVEL_KEY,
  PioneerBadgeGrades,
  XPLevelBadgeGrades,
} from "@uns/ts-sdk";

export default {
  COMMON: {
    BALANCE: "Solde",
    BLOCK: "Bloc",
    BLOCKS: "Blocs",
    CONFIRMATIONS: "Confirmations",
    DELEGATE: "Network player",
    DELEGATES: "Network players",
    FEE: "Frais",
    HEIGHT: "Hauteur",
    ID: "ID",
    NO_RESULTS: "Pas de résultats",
    RANK: "Rang",
    RELOAD: "Actualiser cette page",
    SEE_ALL: "Voir tout",
    SUPPLY: "Stock",
    SUPPLY_PERCENTAGE: "Pourcentage de votes par type de délégué",
    TIMESTAMP: "Horodatage",
    TRANSACTION: "Transaction",
    TRANSACTIONS: "Transactions",
    TYPE: "Type",
  },

  MARKET_CHART: {
    ERROR: "Les données du graphique n'ont pas pu être chargées",
    RELOAD: "Recharger le graphique",
    PRICE: "Prix",
    VOLUME: "Volume",
    DAY: "Jour",
    WEEK: "Semaine",
    MONTH: "Mois",
    QUARTER: "Trimèstre",
    YEAR: "Année",
    ALL_TIME: "Tout les temps",
  },

  BLOCK: {
    ID: "Bloc ID",
    PAGINATION: {
      NEXT: "Bloc suivant",
      PREVIOUS: "Bloc précédent",
    },
    FEES: "Frais",
    GENERATED_BY: "Généré par",
    REWARD: "Récompense",
    PROCESSED_AMOUNT: "Montant traité",
    TOTAL_FORGED: "Total forgé",
  },

  TRANSACTION: {
    AMOUNT: "Montant",
    FLOW: "Montant",
    BLOCK_ID: "Bloc ID",
    ID: "ID de transaction",
    FEE: "Frais",
    TYPE: "Type de transaction",
    TYPES: {
      ALL: "Tout",
      TRANSFER: "Transfert",
      TRANSFER_TO: "Transfert d'UNS pour",
      SECOND_SIGNATURE: "Enregistrement de seconde Signature",
      DELEGATE_REGISTRATION: "**Inscription de Network player**",
      VOTE: "Vote pour",
      UNVOTE: "Renoncement de vote pour",
      MULTI_SIGNATURE: "Enregistrement Multisignature",
      IPFS: "IPFS",
      TIMELOCK_TRANSFER: "Transfert différé",
      MULTI_PAYMENT: "Multi-Paiement",
      DELEGATE_RESIGNATION: "**Résignation de Network player**",
      SENT: "Envoyé",
      RECEIVED: "Reçu",
      UNS_DISCLOSE: "Révélation du Unikname",
      UNS_DELEGATE_REGISTRATION: "Enregistrement de délégué",
      UNS_DELEGATE_RESIGNATION: "Retrait de délégué",
      UNS_CERTIFIED_NFT_MINT: "Création d'UNIK",
      UNS_CERTIFIED_NFT_MINT_INDIV: "Création d'UNIK Individual",
      UNS_CERTIFIED_NFT_MINT_ORG: "Création d'UNIK Organization",
      UNS_CERTIFIED_NFT_MINT_NETWORK: "Création d'UNIK Network",
      UNS_CERTIFIED_NFT_UPDATE: "Modification d'UNIK",
      UNS_VERIFY_URL: "Verification d'URL",
      UNS_ALIVE_DEMAND: "Activation d'UNIK",
      UNS_EVERLASTING: "Demande de status Everlasting",
      UNS_XPLEVEL_DEMAND: "Demande XP Level",
      UNS_PIONEER_CLAIM: "Demande de badge Pionnier",
      UNS_USER_PROPERTY: "Modification de propriété utilisateur",
    },
    SENDER: "Envoyeur",
    FROM: "De",
    RECIPIENT: "Bénéficiaire",
    RECIPIENT_OR_TYPE: "Opération",
    SMARTBRIDGE: "Text",
    WELL_CONFIRMED: "Bien confirmé",
  },

  WALLET: {
    ADDRESS: "Adresse",
    PUBLIC_KEY: "Clé publique",
    VERIFIED: "Ceci est une adresse vérifiée",
    VOTING_FOR: "Votes pour",
    BALANCE: "Solde ({token})",
    SECOND_PASSPHRASE_ENABLED: "Seconde signature activée",
    SUMMARY: "Résumé du Crypto Account",
    QR_CODE: "QR Code",
    SCAN_FOR_ADDRESS: "Scanner une adresse",
    DELEGATE: {
      FORGED_BLOCKS: "Blocs forgés",
      TOTAL_FORGED: "Total forgé",
      RANK: "Rang",
      RANK_NOT_AVAILABLE: "Pas encore disponible",
      USERNAME: "Nom d'utilisateur",
      DELEGATE: "Délégué",
      VOTES: "Votes",
      VOTERS: "Votants pour",
      VOTER_THRESHOLD: "Seulement pour les votants avec plus de 0.1 {token}",
    },
  },

  SEARCH: {
    PLACEHOLDER: {
      SHORT: "Recherche",
      LONG: "Trouver un bloc, une transaction, une adresse ou un délégué ou un network player ou un UNIK",
    },
    NO_RESULTS: "Rien ne correspond à votre recherche",
  },

  BUTTON_CLIPBOARD: {
    SUCCESS: "Copié!",
    ERROR: "Erreur!",
    COPY_TO_CLIPBOARD: "Copier vers le presse-papier",
  },

  PAGES: {
    HOME: {
      TITLE: "Accueil",
      HEADER: "Dernières transactions et blocs",
      LATEST_TRANSACTIONS: "Dernières transactions",
      LATEST_BLOCKS: "Derniers blocs",
    },
    DELEGATE_MONITOR: {
      TITLE: "Statut des Délégués",
      HEADER: {
        LAST_BLOCK: "Dernier bloc",
        FORGED: "Forgé",
        TOTAL_FORGED: "Total forgé ({token})",
        TX_COUNT: "de 0 transactions | de 1 transaction | de {count} transactions",
      },
      ACTIVE: "Actif",
      STANDBY: "En\xA0attente",
      NEVER: "Jamais",
      FORGED_BLOCKS: "Blocs forgés",
      LAST_FORGED: "Dernier forgé",
      STATS: {
        FORGED: "Ont forgé récemment",
        IN_QUEUE: "En file pour forgeage",
        MISSED: "Ont manqué une ronde",
        NOT_FORGING: "Ne forge(nt) pas",
      },
      STATUS: {
        TITLE: "Statut",
        FORGING: "Forgeage",
        MISSING: "Manquant",
        NOT_FORGING: "Ne forge(nt) pas",
        NEVER_FORGED: "Jamais forgé",
        BECAME_ACTIVE: "Devenu actif",
      },
      VOTES: "Votes",
      TOOLTIP: "Dernier bloc @ {height}",
    },
    TOP_WALLETS: {
      TITLE: "Top des Crypto Accounts",
    },
    NOT_FOUND: {
      TITLE: "Ooops!",
      PAGE: "Désolé, page introuvable",
      DATA: "Désolé, {dataType} {dataId} n'a pu être trouvé sur la blockchain",
    },
  },

  PAGINATION: {
    ALL: "Tout",
    NEXT: "Suivant",
    OF: "De",
    PAGE: "Page",
    PREVIOUS: "Précédent",
    ROWS_PER_PAGE: "Lignes par page",
    SHOW_MORE: "Montrez plus",
    PLACEHOLDER: {
      SHORT: "# de page",
      LONG: "Entrer un numéro de page",
    },
    NO_RESULTS: "Numéro de page invalide",
  },

  HEADER: {
    MENU: "Menu",
    NETWORK: "Réseau",
    MAIN: "Principal",
    DEVELOPMENT: "Développement",
    SUPPLY: "Stock",
    MARKET_CAP: "Capitalisation",
  },

  FOOTER: {
    ALL_RIGHTS_RESERVED: "Tout droits réservés",
    VERSION: "Version",
    DATE: "Date",
  },

  UNIK: {
    SUMMARY: "Détails d'un token UNIK",
    ID: "Identifiant du token UNIK",
    CREATION: "**Création d'un UNIK**",
    CERTIFIED_CREATION: "Création d'un UNIK",
    UPDATE: "**Mise à jour d'un UNIK**",
    CERTIFIED_UPDATE: "Mise à jour d'un UNIK",
    TRANSFER: "Transfert d'un UNIK",
    TRANSFER_TO: "Transfert d'un UNIK vers",
    OWNER: "Possesseur",
    CREATION_DATE: "Date de création",
    CATEGORY: "Catégorie",
    USER_PROPERTIES: "Propriétés utilisateur",
    SYSTEM_PROPERTIES: "Propriétés système",
    INDIVIDUAL: "Individu",
    ORGANIZATION: "Organisation",
    NETWORK: "Réseau",
    KEY: "Clé",
    VALUE: "Valeur",
    LIFECYCLE: {
      LABEL: "Cycle de vie",
      ISSUED: "Initialisé",
      MINTED: "Forgé",
      LIVE: "Actif",
      ABORTED: "Abandonné",
      EVERLASTING: "Éternel",
    },
  },

  PROPERTIES: {
    BADGES: "Badges",
    [BADGE_SECOND_PASSPHRASE_KEY]: {
      key: "Seconde clé secrète",
      true: "Activée",
    },
    [BADGE_DELEGATE_KEY]: {
      key: "NetworkPlayer",
      true: "Delegué",
    },
    [BADGE_PIONEER_KEY]: {
      key: "Pionnier",
      [PioneerBadgeGrades.INNOVATOR]: "Innovateur",
      [PioneerBadgeGrades.EARLY_ADOPTER]: "Primo adoptant",
    },
    [BADGE_XP_LEVEL_KEY]: {
      key: "XP Level",
      [XPLevelBadgeGrades.NEWCOMER]: "Nouvel arrivant",
      [XPLevelBadgeGrades.BEGINNER]: "Débutant",
      [XPLevelBadgeGrades.ADVANCED]: "Avancé",
      [XPLevelBadgeGrades.LEADER]: "Leader",
      [XPLevelBadgeGrades.MAVEN]: "Expert",
    },
    "Authentications/CosmicNonce": {
      key: "Nonce cosmic",
    },
    VERIFIED_URL: "URL verifiée",
    VERIFIED_URL_PROOF: "Preuve de vérification",
  },
};
