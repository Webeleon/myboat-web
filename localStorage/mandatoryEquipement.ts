const EQUIPEMENT_KEY = 'mandatory_equipement'

export interface equipementInLocalStorage {
  [name: string]: boolean
}

export const setEquipementStatus = (name: string, checked: boolean) => {
  if (typeof window !== 'undefined') {
    const equipement: equipementInLocalStorage = JSON.parse(
      localStorage.getItem(EQUIPEMENT_KEY) || '{}'
    )
    equipement[name] = checked
    localStorage.setItem(EQUIPEMENT_KEY, JSON.stringify(equipement))
  }
}

export const getEquipement = (): equipementInLocalStorage => {
  if (typeof window !== 'undefined') {
    const equipement: equipementInLocalStorage = JSON.parse(
      localStorage.getItem(EQUIPEMENT_KEY) || '{}'
    )
    return equipement
  }
}
export const getEquipementStatus = (name: string): boolean => {
  if (typeof window !== 'undefined') {
    const equipement: equipementInLocalStorage = JSON.parse(
      localStorage.getItem(EQUIPEMENT_KEY) || '{}'
    )
    return !!equipement[name]
  }
}

export const resetEquipement = () => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(EQUIPEMENT_KEY, '{}')
  }
}
