import React from 'react'
import MemberProfile from './components/MemberProfile';

const members=[
  {
    id: 1,
    name: 'MD.JAKARIA',
    role: 'Lecturer Arabic',
    image: '/Lecturer-arabic.jpg', // Local image path
  },
  {
    id: 2,
    name: 'UMMA JANNATUL FERDUSE',
    role: 'Lecturer ICT',
    image: '/lecturer-ICT.jpg', 
  },
  {
    id: 3,
    name: 'MD. HASHIBUL ISLAM',
    role: 'Assisatant Teacher Bengali',
    image: '/Assistant-Teacher-Bengali.jpg', 
  },
  {
    id: 4,
    name: 'NAYEEMA ISLAM',
    role: 'Assisatant Teacher English',
    image: '/Assistant-Teacher-English.jpg',
  },
  {
    id: 5,
    name: 'HAFIZA SIKDER',
    role: 'Assistant Teacher, Physical Science',
    image: '/Assistant-Teacher-Physcail-Science.jpg',
  },
  {
    id: 6,
    name: 'RABIUL ISLAM',
    role: 'Assisatant Teacher Social Science',
    image: '/Assistant-teacher-Social-Science.jpg',
  },
  {
    id: 7,
    name: 'MD.ABDUL AWAL',
    role: 'Ebtedayee Teacher  Bengali & English',
    image: '/Ebtedaye-Teacher-General.jpg',
  },
  
];

const App = () => {
  return (
    <div className='min-h-screen p-6 max-w-screen-xl  mx-auto'>
      <h1 className='text-3xl font-bold text-center text-blue-600 mb-6'>Pirujali Amania Fazil(B.A) Madrasah Upcoming Teachers  </h1>
      <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {members.map(member=>(
          <MemberProfile 
          key={member.id}
           name={member.name} 
           role={member.role} 
           image={member.image}
           />
           ))
           }
      </div>
    </div>
  )
}

export default App