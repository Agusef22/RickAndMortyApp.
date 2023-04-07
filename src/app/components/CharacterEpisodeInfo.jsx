'use client'
import { useEffect, useState } from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

export default function CharacterEpisodeInfo({ character }) {
  const [value, setValue] = useState(0)
  const [episodeData, setEpisodeData] = useState([])

  useEffect(() => {
    const episode = character.episode

    // eslint-disable-next-line array-callback-return
    episode?.map((episode) => {
      fetch(episode)
        .then((res) => res.json())
        .then((data) => {
          setEpisodeData((episodeData) => [...episodeData, data])
          setEpisodeData((episodeData) =>
            episodeData.sort((a, b) => a.id - b.id)
          )
        })
    })
  }, [character.episode])

  return (
    <div className='ml-5 mt-5'>
      <Box sx={{ maxWidth: { xs: 320, sm: 680 }, bgcolor: 'background.paper' }}>
        <Tabs
          value={value}
          onChange={(e, value) => setValue(value)}
          variant='scrollable'
          scrollButtons='auto'
          aria-label='scrollable auto tabs example'
        >
          {character.episode?.map((episode, index) => (
            <Tab key={index} value={index} label={`Episode ${index + 1}`} />
          ))}
        </Tabs>
      </Box>
      <div className='ml-5  mt-5'>
        <Typography>Id: {episodeData[value]?.id}</Typography>
        <Typography>Name: {episodeData[value]?.name}</Typography>
        <Typography>AirDate: {episodeData[value]?.air_date}</Typography>
        <Typography>Episode: {episodeData[value]?.episode}</Typography>
        <Typography>Created: {episodeData[value]?.created}</Typography>
      </div>
    </div>
  )
}
