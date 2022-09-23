import React from 'react'

const HeaderComponente = () => {
  return (
    <div>
        <header>
            <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
                <div>
                    <a href = "http://localhost:3000/" className='navbar-brand'>
                        Pagina principal
                    </a>
                    <a  href= "www.google.com" className='btn btn-primary mb-2'> Buscador </a>
       
                </div>
            </nav>
        </header>

    </div>
  )
}

export default HeaderComponente