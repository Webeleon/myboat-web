import { navigationZone } from './navigationZone'

export interface EquipementItem {
  name: string;
  description?: string;
  zones: navigationZone[];
}

// TODO: complete https://www.bateaux.com/article/19510/Quel-est-le-materiel-obligatoire-a-bord-des-navires-de-plaisance
export const mandatoryEquipement: EquipementItem[] = [
  {
    name: "Équipement individuel de flottabilité",
    zones: [navigationZone.BASIC, navigationZone.COASTAL, navigationZone.SEMI_OFFSHORE, navigationZone.OFFSHORE],
  },
  {
    name: "Dispositif lumineux",
    zones: [navigationZone.BASIC, navigationZone.COASTAL, navigationZone.SEMI_OFFSHORE, navigationZone.OFFSHORE],
  },
  {
    name: "Moyens mobiles de lutte contre l'incendie",
    zones: [navigationZone.BASIC, navigationZone.COASTAL, navigationZone.SEMI_OFFSHORE, navigationZone.OFFSHORE],
  },
  {
    name: "Dispositif d'assèchement manuel",
    zones: [navigationZone.BASIC, navigationZone.COASTAL, navigationZone.SEMI_OFFSHORE, navigationZone.OFFSHORE],
  },
  {
    name: "Dispositif de remorquage",
    zones: [navigationZone.BASIC, navigationZone.COASTAL, navigationZone.SEMI_OFFSHORE, navigationZone.OFFSHORE],
  },
  {
    name: "Ligne de mouillage (si masse lège ≥ 250 kgs)",
    zones: [navigationZone.BASIC, navigationZone.COASTAL, navigationZone.SEMI_OFFSHORE, navigationZone.OFFSHORE],
  },
  {
    name: "Annuaire des marées",
    zones: [navigationZone.BASIC, navigationZone.COASTAL, navigationZone.SEMI_OFFSHORE, navigationZone.OFFSHORE],
  },
  {
    name: "Pavillon national (hors eaux territoriales)",
    zones: [navigationZone.BASIC, navigationZone.COASTAL, navigationZone.SEMI_OFFSHORE, navigationZone.OFFSHORE],
  },
  {
    name: "Dispositif de repérage et d'assistance pour personne à la mer",
    zones: [navigationZone.COASTAL, navigationZone.OFFSHORE, navigationZone.SEMI_OFFSHORE],
  },
  {
    name: "3 feux rouges à main",
    zones: [navigationZone.COASTAL, navigationZone.SEMI_OFFSHORE, navigationZone.OFFSHORE],
  },
  {
    name: "Compas magnétique",
    zones: [navigationZone.COASTAL, navigationZone.SEMI_OFFSHORE, navigationZone.OFFSHORE],
  },
  {
    name: "Cartes marines officielles",
    zones: [navigationZone.COASTAL, navigationZone.SEMI_OFFSHORE, navigationZone.OFFSHORE],
  },
  {
    name: "Règlement international pour prévenir les abordages en mer",
    zones: [navigationZone.COASTAL, navigationZone.SEMI_OFFSHORE, navigationZone.OFFSHORE],
  },
  {
    name: "Description du système de balisage",
    zones: [navigationZone.COASTAL, navigationZone.SEMI_OFFSHORE, navigationZone.OFFSHORE],
  }
];
