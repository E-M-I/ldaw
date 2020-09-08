import React from 'react'

function Mau() {
    return (
        <div className="shadow p-3 mb-5 bg-white rounded" style={{marginTop: 40}}>
            <h1 className="text-center">Mauricio Alvarez Milán</h1>
            <h2 className="text-center">A01704948</h2>
            <img src='storage/mau.jpg' alt="Foto de Mauricio Alvarez" height="240px" width="240px" className="rounded mx-auto d-block" />
            <hr/>
            <h2>Experiencia en desarrollo web</h2>
            <p>
                Mi experiencia en desarrollo web consiste en dominio de lenguajes para front-end (HTML5, CSS, JS), y para back-end domino el lenguaje PHP. <br/>
                Tengo experiencia on manejo de bases de datos en MySQL. <br/>
                No tengo experiencia con ningun framework, pero he utilizado librerías de CSS como Bootstrap, Materialize y UIKit.
            </p>
        </div>
    )
}

export default Mau