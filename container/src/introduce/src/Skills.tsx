import React from 'react'
import isEqual from 'fast-deep-equal'

const Skills: React.FC = () => {
  return <div id="skills">skills</div>
}

export default React.memo(Skills, isEqual)
