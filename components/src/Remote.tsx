import React from 'react'
import isEqual from 'fast-deep-equal'
import remote from 'styles/remote.module.scss'

interface RemoteProps {}

const Remote: React.FC<RemoteProps> = (props) => {
  const {} = props

  return (
    <>
      <div className={remote.container}>
        <div className={remote.controller_container}>
          <div className={remote.btn_power}>
            <button>
              <i></i>
            </button>
          </div>
          <div className="battery">
            <i></i>
          </div>
        </div>
        <div className={remote.channel_btn}>
          <ul className={remote.btn_container}>
            <li className="ch_up"></li>
            <li className="ch_right"></li>
            <li className="ch_down"></li>
            <li className="ch_left"></li>
            <li className="ch_ok">OK</li>
          </ul>
        </div>
        {/* <div className="keypad">
          <ul>
            <li>
              <button className="keypad_number">1</button>
            </li>
            <li>
              <button className="keypad_number">2</button>
            </li>
            <li>
              <button className="keypad_number">3</button>
            </li>
            <li>
              <button className="keypad_number">4</button>
            </li>
            <li>
              <button className="keypad_number">5</button>
            </li>
            <li>
              <button className="keypad_number">6</button>
            </li>
            <li>
              <button className="keypad_number">7</button>
            </li>
            <li>
              <button className="keypad_number">8</button>
            </li>
            <li>
              <button className="keypad_number">9</button>
            </li>
            <li>
              <button className="keypad_number">0</button>
            </li>
          </ul>
        </div> */}
      </div>
    </>
  )
}

export default React.memo(Remote, isEqual)
