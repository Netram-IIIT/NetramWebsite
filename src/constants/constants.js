// src/constants/constants.js
import satyam from '../assets/teampics/SatyamRaj.jpeg'
import aditya from '../assets/teampics/aditya.jpeg'
import nidhi from '../assets/teampics/nidhi.jpeg'
import ankur from '../assets/teampics/ankur1.jpg'
import ritesh from '../assets/teampics/ritesh2.png'
import roshan from '../assets/teampics/roshan.jpeg'

import ImageDetection from "../assets/featureImages/main.png"
import audio from "../assets/featureImages/audio.jpg"
import facedata from "../assets/featureImages/facedata.jpg"
import geolocation from "../assets/featureImages/geolocation.jpg"
 
export const features = [
    {
      id: 1,
      title: "Real-time traffic detection",
      description: "Analyzes 49 traffic objects including cars, people, and scooters in real-time for enhanced situational awareness.",
      imageUrl: ImageDetection,
      status: "Completed"
    },
    {
      id: 2,
      title: "Audio feedback",
      description: "Provides immediate audio alerts about nearby objects based on real-time traffic analysis for improved safety.",
      imageUrl: audio,
      status: "In Progress"
    },
    {
      id: 3,
      title: "Geolocation tagging",
      description: "Offers real-time navigation feedback to ensure users reach their specified destinations safely and efficiently.",
      imageUrl: geolocation,
      status: "In Progress"
    },
    {
      id: 4,
      title: "Dynamic face data saving",
      description: "Stores facial data of new acquaintances, enabling future recognition and notification for enhanced social interaction.",
      imageUrl: facedata,
      status: "In Progress"
    },
];

export const teamMembers = [
    {
      id: 1,
      name: 'Satyam Raj',
      description: 'Team Lead',
      imageUrl: satyam,
    },
    {
      id: 2,
      name: 'Aditya Kumar',
      description: 'Machine Learning Model Creator',
      imageUrl: aditya,
    },
    {
      id: 3,
      name: 'Nidhi Satyapriya',
      description: 'Machine Learning Model Creator',
      imageUrl: nidhi,
    },
    {
      id: 4,
      name: 'Ankur Dwivedi',
      description: 'Website Developer',
      imageUrl: ankur,
    },
    {
      id: 5,
      name: 'Ritesh Raj Tiwari',
      description: 'Website Developer',
      imageUrl: ritesh,
    },
    {
      id: 6,
      name: 'Roshan',
      description: 'Website Developer',
      imageUrl: roshan,
    },
];