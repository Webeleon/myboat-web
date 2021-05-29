import { navigationZone } from './navigationZone';

const { BASIC, COASTAL, SEMI_OFFSHORE, OFFSHORE } = navigationZone;

export interface MandatoryArmamentItem {
  name: string;
  description?: string;
  zones: navigationZone[];
}

// TODO: complete https://www.bateaux.com/article/19510/Quel-est-le-materiel-obligatoire-a-bord-des-navires-de-plaisance
export const mandatoryArmament: MandatoryArmamentItem[] = [
  {
    name: 'Équipement individuel de flottabilité',
    zones: [BASIC, COASTAL, SEMI_OFFSHORE, OFFSHORE],
  },
  {
    name: 'Dispositif lumineux',
    zones: [BASIC, COASTAL, SEMI_OFFSHORE, OFFSHORE],
  },
  {
    name: "Moyens mobiles de lutte contre l'incendie",
    zones: [BASIC, COASTAL, SEMI_OFFSHORE, OFFSHORE],
  },
  {
    name: "Dispositif d'assèchement manuel",
    zones: [BASIC, COASTAL, SEMI_OFFSHORE, OFFSHORE],
  },
  {
    name: 'Dispositif de remorquage',
    zones: [BASIC, COASTAL, SEMI_OFFSHORE, OFFSHORE],
  },
  {
    name: 'Ligne de mouillage (si masse lège ≥ 250 kgs)',
    zones: [BASIC, COASTAL, SEMI_OFFSHORE, OFFSHORE],
  },
  {
    name: 'Annuaire des marées',
    zones: [BASIC, COASTAL, SEMI_OFFSHORE, OFFSHORE],
  },
  {
    name: 'Pavillon national (hors eaux territoriales)',
    zones: [BASIC, COASTAL, SEMI_OFFSHORE, OFFSHORE],
  },
  {
    name: "Dispositif de repérage et d'assistance pour personne à la mer",
    zones: [COASTAL, OFFSHORE, SEMI_OFFSHORE],
  },
  {
    name: '3 feux rouges à main',
    zones: [COASTAL, SEMI_OFFSHORE, OFFSHORE],
  },
  {
    name: 'Compas magnétique',
    zones: [COASTAL, SEMI_OFFSHORE, OFFSHORE],
  },
  {
    name: 'Cartes marines officielles',
    zones: [COASTAL, SEMI_OFFSHORE, OFFSHORE],
  },
  {
    name: 'Règlement international pour prévenir les abordages en mer',
    zones: [COASTAL, SEMI_OFFSHORE, OFFSHORE],
  },
  {
    name: 'Description du système de balisage',
    zones: [COASTAL, SEMI_OFFSHORE, OFFSHORE],
  },
  {
    name: '3 fusées à parachute et 2 fumigènes ou 1 VHF fixe ',
    zones: [SEMI_OFFSHORE, OFFSHORE],
  },
  {
    name: 'Radeau de survie',
    zones: [SEMI_OFFSHORE, OFFSHORE],
  },
  {
    name: 'Matériel pour faire le point',
    zones: [SEMI_OFFSHORE, OFFSHORE],
  },
  {
    name: 'Livre des feux tenu à jour',
    zones: [SEMI_OFFSHORE, OFFSHORE],
  },
  {
    name: 'journal de bord',
    zones: [SEMI_OFFSHORE, OFFSHORE],
  },
  {
    name: 'Dispositif de réception des bulletins météorologiques',
    zones: [SEMI_OFFSHORE, OFFSHORE],
  },
  {
    name: 'Harnais et longe par navire pour les non voiliers',
    zones: [SEMI_OFFSHORE, OFFSHORE],
  },
  {
    name: 'Harnais et longe par personne embarquée pour les voiliers',
    zones: [SEMI_OFFSHORE, OFFSHORE],
  },
  {
    name: "Trousse de secours conforme à l'article 240-2,16",
    zones: [SEMI_OFFSHORE, OFFSHORE],
  },
  {
    name: 'Dispositif lumineux pour la recherche et le repérage de nuit',
    zones: [SEMI_OFFSHORE, OFFSHORE],
  },
  {
    name: 'Radiobalise de localisation des sinistres',
    zones: [OFFSHORE],
  },
  {
    name: 'VHF Fixe',
    zones: [SEMI_OFFSHORE, OFFSHORE],
  },
  {
    name: 'VHF Portative',
    zones: [OFFSHORE],
  },
];
