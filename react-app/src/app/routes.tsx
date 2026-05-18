import { createHashRouter } from 'react-router-dom'
import { AppShell } from './AppShell'
import { ExecutiveTeamPage } from '../pages/ExecutiveTeamPage'
import { GalleryPage } from '../pages/GalleryPage'
import { HomePage } from '../pages/HomePage'
import { SponsorsPage } from '../pages/SponsorsPage'
import { TeamHistoryPage } from '../pages/TeamHistoryPage'

export const router = createHashRouter([
  {
    element: <AppShell />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/team-history', element: <TeamHistoryPage /> },
      { path: '/sponsors', element: <SponsorsPage /> },
      { path: '/executive-team', element: <ExecutiveTeamPage /> },
      { path: '/gallery', element: <GalleryPage /> },
    ],
  },
])

