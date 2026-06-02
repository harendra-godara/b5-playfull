import React from 'react'
import Funcard from '../Funcard'
import Skills from '../Skills'

const friends = [
  {
    id: 1,
    name: "Ankur",
    skills: [
      "Maggi Chef",
      "Room khali milte hi le m**",
      "game ke rule padhta hai bs acha nahi khelta 😂",
    ],
  },
  {
    id: 2,
    name: "Harendra",
    skills: [
      "btech ka shikari",
      "ghi milte hi choor deta hai ..",
      "bass service krna seekh paya volleyball me"
    ],
  },
  {
    id: 3,
    name: "Mohit",
    skills: [
      "Gyan chodu",
      "Vollyball game dikha ke ladkiya fasata hai",
      "logo ko Manipulate kr leta h",
      "Late Night Reels",
      "",
    ],
  },
  {
    id: 4,
    name: "Kaif",
    skills: ["hacker hai bhai", "Free Food Finder"],
  },
  {
    id: 5,
    name: "Himanshu",
    skills: [
      "Raat ka shikari",
      "Last minute learner",
      "danto ki problem rheti hai",
    ],
  },
  {
    id: 6,
    name: "Anurag",
    skills: ["Call representative", "Laundry king"],
  },
  {
    id: 7,
    name: "Alok",
    skills: [
      "Ye to bna hi **",
      "10 minute ke Video se padhta hai",
      "College time pe library m padhta hai",
    ],
  },
  {
    id: 8,
    name: "Saurabh",
    skills: [
      "Highway pe milta hai",
      "sote time pe bhi watch or belt lga kr rekhta hai",
    ],
  },
  {
    id: 9,
    name: "Rashid",
    skills: ["Har time math padhta hai", "Biryani Lover"],
  },
  {
    id: 10,
    name: "Tiwari",
    skills: [
      "Ankur or Aman ka aashiq",
      "Coder",
      "Chutiya",
      "chimgandu",
      "Nasadi",
    ],
  },
  {
    id: 11,
    name: "Aman",
    skills: [
      "Bahut sahi chiz hai",
      "Gym paglu",
      "Badminton to kya hi khelta hai",
      "Tisha ke sath bethna hai",
      "Sleep Champion",
    ],
  },
];


function Home() {
  return (
    <>
    <Funcard />
    <Skills friends={friends}/>
    </>
  )
}

export default Home