import React from 'react'

export default function About() {
  return (
    <div className="about">
      <div className="about-app">
        <h1>About Moviews</h1>
        <p>
          Aplikasi ini dibuat untuk memenuhi projek akhir Praktikum MDP 2021.
        </p>
      </div>
      <div className="about-me">
        <h2>About me</h2>
        <img src="/lukman.jpg" alt="foto lukman" />
        <p>Nama: LUKMAN ERNANDI</p>
        <p>NIM: 21120119130049</p>
      </div>
    </div>
  )
}
