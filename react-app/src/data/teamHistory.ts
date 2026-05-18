export type TeamPrize = {
  id: string
  label: string
  place: number
}

export type TeamHistoryYear = {
  id: string
  year: number
  location: string
  teamPhotoSrc: string
  prizes: TeamPrize[]
  summary: string
}

export const teamHistoryYears: TeamHistoryYear[] = [
  {
    id: '2026',
    year: 2026,
    location: "London",
    teamPhotoSrc: '/pictures/team-history/2026.jpeg',
    summary: "A landmark year of renewal as a fresh generation of members stepped up, revitalizing our team energy and sweeping the top honors for our spirit, costumes, and a truly spectacular presence on the track.",
    prizes: [
      {id: 'ceremony', label: 'Opening Ceremony', place: 1},
      {id: 'spirit', label: 'Team Spirit', place: 1 },
      {id: 'spectacular-run', label: 'Most Spectacular Run', place: 1},
      {id: 'people-choice', label: 'People Choice', place: 2},
      {id: 'costumes', label: 'Best Costumes', place: 2},
    ]
  },
  {
    id: '2025',
    year: 2025,
    location: "Montreal",
    teamPhotoSrc: '/pictures/team-history/2025.jpeg',
    summary: "Competing on home turf fueled our passion and hard work, resulting in a crowd-pleasing performance that earned us the top spot in the hearts of the fans and kept our team spirit shining bright.",
    prizes: [
      {id: 'spirit', label: 'Team Spirit', place: 2},
      {id: 'people-choice', label: "People's Choice", place: 1}
    ]
  },{
    id: '2024',
    year: 2024,
    location: "St John's",
    teamPhotoSrc: '/pictures/team-history/2024.jpeg',
    summary: "Proving our resilience and technical ingenuity, the team successfully adapted our proven frame design to deliver a reliable build that secured a podium finish for speed.",
    prizes: [
      {id: 'fastest', label: 'Fastest Toboggan', place: 3}
    ]
  },{
    id: '2023',
    year: 2023,
    location: "Kelowna",
    teamPhotoSrc: '/pictures/team-history/2023.jpeg',
    summary: "This year marked a significant expansion for our delegation, bringing together a larger group to showcase our community impact and claim the title of the fan favorite.",
    prizes: [
      {id: 'people-choice', label: "Poeple's Choice", place: 1}
    ]
  },
  {
    id: '2022',
    year: 2022,
    location: 'Calgary',
    teamPhotoSrc: '/pictures/team-history/2022.jpg',
    summary:
      'In 2022, the in-person portion of the competition was cancelled, but our team still had an amazing year and strong results.',
    prizes: [
      { id: 'pm', label: 'Project Management', place: 1 },
      { id: 'spirit', label: 'Team Spirit', place: 2 },
    ],
  },
  {
    id: '2020',
    year: 2020,
    location: 'Toronto',
    teamPhotoSrc: '/pictures/team-history/2020.jpeg',
    summary:
      'GNCTR 2020 was a very successful year, with multiple podium finishes.',
    prizes: [
      { id: 'spirit', label: 'Team Spirit', place: 1},
      { id: 'poster', label: 'Technical Poster Design', place: 1},
      { id: 'overall', label: 'Overall', place: 2 },
      { id: 'design', label: 'Best Toboggan Design', place: 2 },
      { id: 'speed', label: 'Best Performing Toboggan (top speed: 71 km/h)', place: 2 },
    ],
  },
  {
    id: '2019',
    year: 2019,
    location: 'Edmonton',
    teamPhotoSrc: '/pictures/team-history/2019.jpg',
    summary:
      'In 2019, we focused on finishing safely and sustainably, making major strides in performance and recognition.',
    prizes: [
      { id: 'sustainable', label: 'Most Sustainable Team', place: 1},
      { id: 'topspeed', label: 'Top Speed', place: 1},
      { id: 'steering', label: 'Steering Performance', place: 1},
      { id: 'performance', label: 'Best Performing Toboggan', place: 2 },
      { id: 'safety', label: 'Toboggan Safety', place: 3 },
    ],
  },
]

