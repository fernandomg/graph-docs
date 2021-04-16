import React from 'react' 

const Difficulty = ({
    level
}) => (
    <div style={containerStyle}>
        <p style={titleStyle}>
          Technical Level Required
        </p>
        <div style={pillContainerStyle}>
            <p style={levelStyle}>
                {level}
            </p>
        </div>
    </div>
)

const containerStyle = {
    padding: '15px 0px 18px',
    borderTop: '2px solid rgba(255, 255, 255, .16',
    borderBottom: '2px solid rgba(255, 255, 255, .16',
    display: 'flex',
    alignItems: 'center',
    gap: '12px'
}

const titleStyle = {
    fontSize: '.9rem',
    margin: 0
}


const pillContainerStyle = {
    backgroundColor: 'rgba(111, 76, 255, .32)',
    borderRadius: '14px',
    padding: '6px 12px',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'

}

const levelStyle = {
    fontFamily: 'EuclidCircularMedium',
    fontSize: '.65rem',
    lineHeigh: '12px',
    margin: 0,
    letterSpacing: '1.2px'
}
export default Difficulty