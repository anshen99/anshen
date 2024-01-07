"use client"
import React from 'react'
import styles from './homePage.module.css'
import {  CameraIcon, DocumentIcon } from '@heroicons/react/24/solid'

import Card from '../components/Card/Card'
const HomePage = () => {
  return (
    <div className={`${styles.App}`}>
      
      <section className={`${styles.card_container}`}>
      <Card
          body='Do laborum sunt ut ex cupidatat exercitation. Do laborum sunt ut ex cupidatat exercitation. Do laborum sunt ut ex cupidatat exercitation. Do laborum sunt ut ex cupidatat exercitation.'
          title='Read Post Now'
          image='https://source.unsplash.com/random'
          badge={{
            text: "New Post",
            filled: false,
          }}
          indicator="Sold"
          btn={{
            text: "Read Post",
            href: '#',
            type: 'primary',
            filled: true,
            icon: <DocumentIcon />
          }} />
        <Card
          body='Irure culpa quis in mollit nulla et velit velit ullamco ipsum aliquip eu amet.'
          title='This is a Great Photo!'
          image='https://source.unsplash.com/random/500X400'
          badge={{
            text: "New Photo Alert",
            filled: false,
          }}
          indicator="New"
          subtitle='Get your photo now'
          btn={{
            text: "Button",
            href: '#',
            type: 'secondary',
            filled: true,
            icon: <CameraIcon />
          }} />
        <Card
          body='Testing Testing Testing Testing Testing Testing Testing Testing '
          image='https://source.unsplash.com/random/500X40'
          badge={{
            text: "Testing",
            filled: true,
          }}
          title='Testing'
          btn={{
            text: "Button",
            href: '#',
            type: 'primary',
            filled: false,
          }} />
      </section>
    </div>
  )
}

export default HomePage;