import React from 'react'
import format from 'date-fns/format'

class TestD extends React.Component {
  render () {
    let date = format(new Date(), 'mm/dd/yy')
    return <h1>TestD + {date}</h1>
  }
}

export { TestD }
