import React from 'react'

function Ivan() {
    return (
        <div className="shadow p-3 mb-5 bg-white rounded" style={{marginTop: 40}}>
            <h1 className="text-center">Iván Alejandro Díaz Peralta</h1>
            <h2 className="text-center">A01700486</h2>
            <img src='storage/ivan.jpg' alt="Foto de Emilio Aguilera" height="240px" width="340px" className="rounded mx-auto d-block" />
            <hr/>
            <h2>Experiencia en desarrollo web</h2>
            <p>
                La experiencia que tengo de desarrollo web se limita al uso de HTML, CSS, JavaScript y PHP. <br/>
                MySQL es lo único que tengo de experiencia en cuanto a bases de datos.  <br/>
                En frameworks aún no tengo experiencia, pero este semestre estaré trabajando con Laravel y React. <br/>
                He usado unicamente Materialize como lirería. 
            </p>
        </div>
    )
}

export default Ivan