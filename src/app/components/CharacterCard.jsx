import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Image from 'next/image'
import Link from 'next/link'

export default function characterCard({ character }) {
  return (
    <Card
      className='flex flex-col justify-between hover:shadow-xl bg-[#f0f2f4] transition-all '
      sx={{ maxWidth: 200, minWidth: 200 }}
    >
      <CardContent>
        <div className='flex flex-col justify-center items-center'>
          <Image
            src={character.image}
            alt='Imagen de [nombre del personaje]'
            width={170}
            height={170}
            className='object-cover'
            priority
          />
          <div className='px-6 py-4'>
            <Typography className='font-bold text-base mb-2'>
              {character.name}
            </Typography>
            <Typography className='text-gray-700 text-sm'>
              {character.species}
            </Typography>
            <Typography className='text-sm'>{character.status}</Typography>
          </div>
        </div>
      </CardContent>
      <CardActions>
        <Link href={`character/${character.id}`}>
          <Button size='small'>Read More</Button>
        </Link>
      </CardActions>
    </Card>
  )
}
