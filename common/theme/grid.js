import React, {
  PropTypes
} from 'react'

// helper fn
function getCx(prop) {
  const key = Object.keys(prop)[0]
  if(typeof prop[key] === 'undefined') {
    return ''
  }
  switch (key) {
    case 'offset':
      return `col-xs-offset-${prop.offset}`
    case 'center':
    case 'end':
    case 'middle':
      return `${key}-xs`

    default: return ''
  }
}
function createCx(props) {
  return props.map(getCx).join(' ')
}

export const Grid = ({children, ...props}) => (
  <div {...props}>{children}</div>
)
Grid.propTypes = {
  children: PropTypes.node,
}

export const Row = ({children, center, end, middle, ...props}) => {
  const cx = `row ${createCx([{center}, {end}, {middle}])}`
  return (
    <div {...props} className={cx}>{children}</div>
  )
}
Row.propTypes = {
  children: PropTypes.node,
  center: PropTypes.bool,
  end: PropTypes.bool,
  middle: PropTypes.bool,
}

export const Cell = ({children, className = '', ...props}) => (
  <div {...props} className={`col-xs ${className}`}>
    <div className="box">
      {children}
    </div>
  </div>
)
Cell.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

export const Sixth = ({children, ...props}) => (
  <div {...props} className="col-xs-2">
    <div className="box">
      {children}
    </div>
  </div>
)
Sixth.propTypes = {
  children: PropTypes.node,
}

export const Third = ({children, ...props}) => (
  <div {...props} className="col-xs-4">
    <div className="box">
      {children}
    </div>
  </div>
)
Third.propTypes = {
  children: PropTypes.node,
}

export const TwoThird = ({children, ...props}) => (
  <div {...props} className="col-xs-8">
    <div className="box">
      {children}
    </div>
  </div>
)
TwoThird.propTypes = {
  children: PropTypes.node,
}

export const Half = ({children, ...props}) => (
  <div {...props} className="col-xs-6">
    <div className="box">
      {children}
    </div>
  </div>
)
Half.propTypes = {
  children: PropTypes.node,
}

export const Fourth = ({children, ...props}) => (
  <div {...props} className="col-xs-3">
    <div className="box">
      {children}
    </div>
  </div>
)
Fourth.propTypes = {
  children: PropTypes.node,
}

export const ThreeFourth = ({children, offset, ...props}) => {
  const cx = `col-xs-9 ${getCx({offset})}`
  return (
    <div {...props} className={cx}>
      <div className="box">
        {children}
      </div>
    </div>
  )
}
ThreeFourth.propTypes = {
  children: PropTypes.node,
  offset: PropTypes.string,
}

export const Whole = ({children, offset, ...props}) => {
  const cx = `col-xs-12 ${getCx({offset})}`
  return (
    <div {...props} className={cx}>
      <div className="box">
        {children}
      </div>
    </div>
  )
}
Whole.propTypes = {
  children: PropTypes.node,
  offset: PropTypes.string,
  center: PropTypes.bool,
}
