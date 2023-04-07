'use client'
import { useState, useEffect } from 'react'
import Card from '@mui/material/Card'
import Image from 'next/image'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import CharacterEpisodeInfo from '../../components/CharacterEpisodeInfo'

import { useRouter } from 'next/navigation'

export default function CharacterInfo({ params }) {
  const { id } = params
  const [character, setCharacter] = useState([])
  const router = useRouter()

  // eslint-disable-next-line prefer-const
  let API_URL = `https://rickandmortyapi.com/api/character/${id}`

  const fetcher = async () => {
    const res = await fetch(API_URL)
    const data = await res.json()
    const object = { prop1: data }
    setCharacter(object.prop1)
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    fetcher()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <div className='flex justify-center items-center mt-12'>
        <Button
          onClick={() => router.back()}
          className='absolute top-2 left-10 text-black hover:bg-slate-300'
          variant='contained'
        >
          Back
        </Button>

        <Card className='sm:flex mt-5 mx-10'>
          {character.image && (
            <Image
              src={character.image}
              alt='Imagen de [nombre del personaje]'
              width={300}
              height={200}
              className='object-cover'
            />
          )}
          <CardContent>
            <Typography sx={{ mb: 1.5 }} color='text.secondary' gutterBottom>
              Id: {character.id}
            </Typography>

            <Typography sx={{ mb: 1.5 }} color='text.secondary'>
              Name: {character.name}
            </Typography>

            <Typography sx={{ mb: 1.5 }} color='text.secondary'>
              Status: {character.status}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color='text.secondary'>
              Species: {character.species}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color='text.secondary'>
              Gender: {character.gender}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color='text.secondary'>
              Origin: {character.origin?.name}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color='text.secondary'>
              Location: {character.location?.name}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color='text.secondary'>
              Created: {character.created}
            </Typography>
          </CardContent>
        </Card>
      </div>
      <CharacterEpisodeInfo character={character} />
    </>
  )
}
