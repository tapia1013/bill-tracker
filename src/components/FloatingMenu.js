import React, { Component } from 'react'

export default class FloatingMenu extends Component {
  render() {
    return (
      <>
        <nav id="floatingMenu">
          <div className='link'>
            <div className='icon'>
              <i className='far fa-credit-card' />
            </div>
            <div className='text'>spend</div>
          </div>

          <div className='link'>
            <div className='icon'>
              <i className='fas fa-piggy-bank' />
            </div>
            <div className='text'>spend</div>
          </div>

          <div className='link'>
            <div className='icon'>
              <i className='fas fa-exchange-alt' />
            </div>
            <div className='text'>Transfer</div>
          </div>

          <div className='link'>
            <div className='icon'>
              <i className='fas fa-cogs' />
            </div>
            <div className='text'>Settings</div>
          </div>

          <div className='link'>
            <div className='add-button'>
              <div className='icon'>
                <i className='fas fa-plus' />
              </div>
            </div>
          </div>
        </nav>

      </>
    )
  }
}
