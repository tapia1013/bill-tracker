import React, { Component } from 'react'

export default class AllBills extends Component {
  render() {
    return (
      <section id='AllBills'>
        <div className='container'>
          <div className='total-bills'>
            <div className='text'>Total Amount: </div>
            <div className='number'>$874 </div>
          </div>

          <ul className='bills-list'>
            <li className='bill'>
              <div className='company'>
                <div className='logo'>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1200px-Netflix_2015_logo.svg.png" />
                </div>
                <div className='title'>
                  Netflix
                </div>
              </div>
              <div className='price'>
                -$19.99
              </div>
            </li>

            <li className='bill'>
              <div className='company'>
                <div className='logo'>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1200px-Netflix_2015_logo.svg.png" />
                </div>
                <div className='title'>
                  Netflix
                </div>
              </div>
              <div className='price'>
                -$19.99
              </div>
            </li>
          </ul>
        </div>
      </section>
    )
  }
}
