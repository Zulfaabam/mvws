import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'

export default function Actor(props) {
  const [data, setData] = useState()
  const [query, setQuery] = useState('pacino')

  const { history } = props

  useEffect(() => {
    const options = {
      method: 'GET',
      url: `https://data-imdb1.p.rapidapi.com/actor/imdb_id_byName/${query}/`,
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
  }, [query])

  console.log(data)

  const onSearch = (e) => {
    if (e.key === 'Enter') {
      setQuery(e.target.value)
    }
  }

  return (
    <div>
      <h1>Actor</h1>
      <input
        type="text"
        placeholder="Find by name"
        onKeyDown={(e) => onSearch(e)}
      />
      <h3>Search : {query}</h3>
      {data === undefined
        ? 'Go Search Something first'
        : data.map((a) => {
            return (
              <NavLink
                key={a.imdb_id}
                to={`/actor/${a.imdb_id}`}
                onClick={() => history.push(`/actor/${a.imdb_id}`)}
                className="link find-item"
              >
                <div>
                  <p>{a.name}</p>
                </div>
              </NavLink>
            )
          })}
    </div>
  )
}
