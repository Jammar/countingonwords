import React, { Fragment } from 'react'

const Counts = props => {
  const { chars, words } = props

  return (
    <Fragment>
      <div className="counts">
        Characters<span>{chars}</span>
      </div>
      <div className="counts">
        Words<span>{words}</span>
      </div>
    </Fragment>
  )
}

export default Counts
