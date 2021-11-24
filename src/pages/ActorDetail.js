import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router'

export default function ActorDetail() {
  const [data, setData] = useState()
  const { actorId } = useParams()

  useEffect(() => {
    const options = {
      method: 'GET',
      url: `https://data-imdb1.p.rapidapi.com/actor/id/${actorId}/`,
      headers: {
        'x-rapidapi-host': 'data-imdb1.p.rapidapi.com',
        'x-rapidapi-key': 'c24f3de885msh88862d9dc3cfe83p161c5fjsn2f41f4425bde',
      },
    }

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data.results)
        setData(response.data.results)
      })
      .catch(function (error) {
        console.error(error)
      })
  }, [actorId])
  console.log(data)

  return (
    <div className="actor">
      <h1 className="title">{data === undefined ? 'loading...' : data.name}</h1>
      {data === undefined ? (
        'loading...'
      ) : (
        <div className="actor-detail">
          <img src={data.image_url} alt={`${data.name} pic`} />
          <p>Birthday: {data.birth_date}</p>
          <p>Birthplace: {data.birth_place}</p>
          <p>Height: {data.height}</p>
          <p>Partial Bio: {data.partial_bio}</p>
          <p>Zodiac: {data.star_sign}</p>
        </div>
      )}
    </div>
  )
}
