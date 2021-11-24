import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'

export default function Movie(props) {
  const [data, setData] = useState()
  const [query, setQuery] = useState('naruto') //buat yg mau ditampilin
  const { history } = props

  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://imdb8.p.rapidapi.com/title/find',
      params: { q: query },
      headers: {
        'x-rapidapi-host': 'imdb8.p.rapidapi.com',
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
  }, [query])
  console.log(data)

  const onSearch = (e) => {
    if (e.key === 'Enter') {
      setQuery(e.target.value)
    }
  }

  return (
    <div className="find">
      <h1 className="title">Find</h1>
      <div className="form">
        <input
          type="text"
          placeholder="Find by name"
          onKeyDown={(e) => onSearch(e)}
        />
        <h3>Find: {query}</h3>
      </div>
      <div className="container">
        {data === undefined
          ? 'Go Search Something first'
          : data.map((item) => {
              return (
                <NavLink
                  key={item.id}
                  to={`/find${item.id}`}
                  onClick={() => history.push(`/find${item.id}`)}
                  className="link"
                >
                  <div className="find-item">
                    <img
                      src={
                        item.image === undefined ? 'Loading...' : item.image.url
                      }
                      alt={`${item.title} pic`}
                    />
                    <p>{item.title}</p>
                    <p>Type: {item.titleType}</p>
                  </div>
                </NavLink>
              )
            })}
      </div>
    </div>
  )
}
