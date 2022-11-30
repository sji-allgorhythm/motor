import React from 'react'
import { Dart } from '../components/Dart'
import Hero from '../components/Hero'
import { HomeCategory } from '../components/HomeCategory'
import { AdvPage } from './AdvPage'

export const HomePage = () => {
    return (
        <>
            <Hero />
            <AdvPage />
            <HomeCategory />
            <Dart />

        </>
    )
}
