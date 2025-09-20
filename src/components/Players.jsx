import React, { Component } from 'react'

export default class Players extends Component {
  render() {
    return (
      <div className='container'>
        <div className="column">
            <div className="col-md-3">
                <img src='/images/cr.jpg' alt="Cristiano Ronaldo"/>
                <h3>Cristiano Ronaldo</h3>
                <p className="title">Al Nassr</p>
                <p><button>Details</button></p>
            </div>
        </div>
        
        <div className="column">
            <div className="col-md-3">
                <img src='/images/messi.jpg' alt="Lionel Messi"/>
                <h3>Lionel Messi</h3>
                <p className="title">Inter Miami</p>
                <p><button>Details</button></p>
            </div>
        </div>
        
        <div className="column">
            <div className="card">
                <img src='/images/neymar.jpg' alt="Neymar Jr"/>
                <h3>Neymar Jr</h3>
                <p className="title">Al Hilal</p>
                <p><button>Details</button></p>
            </div>
        </div>
        
        <div className="column">
            <div className="card">
                <img src='/images/haaland.jpg' alt="Erling Haaland"/>
                <h3>Erling Haaland</h3>
                <p className="title">Manchester City</p>
                <p><button>Details</button></p>
            </div>
        </div>
        
        <div className="column">
            <div className="card">
                <img src='/images/kane.jpg' alt="Harry Kane"/>
                <h3>Harry Kane</h3>
                <p className="title">Bayern Munich</p>
                <p><button>Details</button></p>
            </div>
        </div>
        
        <div className="column">
            <div className="card">
                <img src='/images/kante.jpg' alt="N'Golo Kante"/>
                <h3>N'Golo Kante</h3>
                <p className="title">Al Ittihad</p>
                <p><button>Details</button></p>
            </div>
        </div>
        
        <div className="column">
            <div className="card">
                <img src='/images/m.jpg' alt="Kylian Mbappe"/>
                <h3>Kylian Mbappe</h3>
                <p className="title">Real Madrid</p>
                <p><button>Details</button></p>
            </div>
        </div>
      </div>
    )
  }
}
