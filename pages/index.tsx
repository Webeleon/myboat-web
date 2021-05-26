import { navigationZone } from '../data/navigationZone'
import { useEffect, useState } from 'react'
import { mandatoryEquipement } from '../data/equipement'
import styles from '../styles/pages/armament.module.scss'
import {
  equipementInLocalStorage,
  getEquipement,
  setEquipementStatus,
} from '../localStorage/mandatoryEquipement'

export const Home = (): JSX.Element => {
  const [zone, setZone] = useState<navigationZone>(navigationZone.COASTAL)
  const [equipement, setEquipement] = useState<equipementInLocalStorage>({})

  useEffect(() => {
    setEquipement(getEquipement())
  }, [])

  return (
    <div className="app">
      <div className={styles.zoneSelectorContainer}>
        <select
          name="navigation-zone"
          value={zone}
          onChange={(event) => setZone(event.target.value as navigationZone)}
        >
          {Object.values(navigationZone).map((z) => (
            <option key={z} value={z}>
              {z}
            </option>
          ))}
        </select>
      </div>
      <ul className="stripped">
        {mandatoryEquipement
          .filter((equipementItem) => equipementItem.zones.includes(zone))
          .map((equipementItem) => (
            <li key={equipementItem.name}>
              <span>{equipementItem.name}</span>
              <input
                type="checkbox"
                checked={equipement[equipementItem.name]}
                onChange={(e) => {
                  setEquipement({
                    ...equipement,
                    [equipementItem.name]: e.target.checked,
                  })
                  setEquipementStatus(equipementItem.name, e.target.checked)
                }}
              />
            </li>
          ))}
      </ul>
    </div>
  )
}

export default Home
