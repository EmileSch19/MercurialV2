import { useEffect } from 'react'

// Met à jour le titre de l'onglet pour chaque page
export default function usePageTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} — Vélox` : 'Vélox — Crampons de football'
  }, [title])
}
