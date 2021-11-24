import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router'

export default function FindDetail() {
  const [data, setData] = useState()
  const { itemId } = useParams()

  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://imdb8.p.rapidapi.com/title/get-details',
      params: { tconst: itemId },
      headers: {
        'x-rapidapi-host': 'imdb8.p.rapidapi.com',
        'x-rapidapi-key': 'c24f3de885msh88862d9dc3cfe83p161c5fjsn2f41f4425bde',
      },
    }

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data)
        setData(response.data)
      })
      .catch(function (error) {
        console.error(error)
      })
  }, [itemId])
  console.log(data)

  return (
    <div className="find">
      {data === undefined ? (
        'Loading'
      ) : (
        <div>
          <h1 className="title">{data.title}</h1>
          <div className="find-detail">
            <img
              src={data.image === undefined ? 'Loading...' : data.image.url}
              alt={`${data.title} pic`}
            />
            <p>Title: {data.title}</p>
            <p>Type: {data.titleType}</p>
            <p>Year: {data.year}</p>
            <p>Number Of Episodes: {data.numberOfEpisodes}</p>
            <p>Series Start Year: {data.seriesStartYear}</p>
            <p>Series End Year: {data.seriesEndYear}</p>
          </div>
        </div>
      )}
    </div>
  )
}
