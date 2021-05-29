const EQUIPEMENT_KEY = 'mandatory_equipement';

export interface mandatoryArmamentInLocalStorage {
  [name: string]: boolean;
}

export const setMandatoryArmamenetItemStatus = (
  name: string,
  checked: boolean
) => {
  if (typeof window !== 'undefined') {
    const equipement: mandatoryArmamentInLocalStorage = JSON.parse(
      localStorage.getItem(EQUIPEMENT_KEY) || '{}'
    );
    equipement[name] = checked;
    localStorage.setItem(EQUIPEMENT_KEY, JSON.stringify(equipement));
  }
};

export const getMandatoryArmamentFromLocalStorage =
  (): mandatoryArmamentInLocalStorage => {
    if (typeof window !== 'undefined') {
      const equipement: mandatoryArmamentInLocalStorage = JSON.parse(
        localStorage.getItem(EQUIPEMENT_KEY) || '{}'
      );
      return equipement;
    }
  };
export const getMandatoryArmamentItemStatus = (name: string): boolean => {
  if (typeof window !== 'undefined') {
    const equipement: mandatoryArmamentInLocalStorage = JSON.parse(
      localStorage.getItem(EQUIPEMENT_KEY) || '{}'
    );
    return !!equipement[name];
  }
};

export const clearMandatoryArmamentInLocalStorage = () => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(EQUIPEMENT_KEY, '{}');
  }
};
