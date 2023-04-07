'use client'
import CharacterCard from '../components/CharacterCard'
import TopBar from '../components/TopBar'
import Pagination from '@mui/material/Pagination'
import { useState, useEffect } from 'react'
import TextField from '@mui/material/TextField'
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material'

export default function CharactersPage() {
  const [characters, setCharacters] = useState([])

  const [paginationNumber, setPaginationNumber] = useState(0)

  const [page, setPage] = useState(1)

  const [name, setName] = useState('')

  const [status, setStatus] = useState('')

  const [gender, setGender] = useState('')

  // eslint-disable-next-line prefer-const
  let API_URL = `https://rickandmortyapi.com/api/character/?name=${name}&status=${status}&gender=${gender}&page=${page}`

  // fetch data from API_URL with query params added and set state
  const fetcher = async () => {
    const res = await fetch(API_URL)
    const data = await res.json()
    setPaginationNumber(data.info.pages)
    setCharacters(data.results)
  }

  function scrollToTop() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop
    if (scrollTop > 0) {
      window.requestAnimationFrame(scrollToTop)
      window.scrollTo(0, scrollTop - scrollTop / 10)
    }
  }

  useEffect(() => {
    fetcher()
    scrollToTop()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, name, status, gender])
  return (
    <div className='container mx-auto p-5'>
      <TopBar />
      <div className='lg:flex justify-between items-start'>
        <div className='flex flex-col mt-5'>
          <div className='text-center mb-8'>
            <h1 className='text-2xl'>Filters</h1>
          </div>
          <TextField
            className='w-full'
            id='outlined-basic'
            label='Name'
            variant='outlined'
            onChange={(e, value) => setName(e.target.value || '')}
          />
          <FormControl className='mt-8 w-full'>
            <InputLabel id='demo-simple-select-label'>Status</InputLabel>
            <Select
              labelId='demo-simple-select-standard-label'
              id='demo-simple-select-standard'
              label='Age'
              defaultValue=''
              onChange={(e, value) => setStatus(e.target.value || '')}
            >
              <MenuItem value=''>
                <em>None</em>
              </MenuItem>
              <MenuItem value='unknown'>Unknown</MenuItem>
              <MenuItem value='alive'>Alive</MenuItem>
              <MenuItem value='dead'>Dead</MenuItem>
            </Select>
          </FormControl>
          <FormControl className='mt-8 w-full'>
            <InputLabel id='demo-simple-select-label'>Gender</InputLabel>
            <Select
              defaultValue=''
              labelId='demo-simple-select-standard-label'
              id='demo-simple-select-standard'
              label='Age'
              onChange={(e, value) => setGender(e.target.value || '')}
            >
              <MenuItem value=''>
                <em>None</em>
              </MenuItem>
              <MenuItem value='unknown'>Unknown</MenuItem>
              <MenuItem value='male'>Male</MenuItem>
              <MenuItem value='female'>Female</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className='grid grid-cols-1 mt-8 justify-items-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
          {characters.map((character) => (
            <CharacterCard character={character} key={character.id} />
          ))}
        </div>
      </div>

      <Pagination
        onChange={(e, value) => setPage(value)}
        count={paginationNumber}
        color='primary'
        className='mb-8 mt-8 flex justify-center'
      />
    </div>
  )
}
