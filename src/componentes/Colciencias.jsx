import React, { useState } from 'react';

const ClasificacionInvestigadores = () => {
    const [formacion, setFormacion] = useState('doctorado');
    const [productosA, setProductosA] = useState('');
    const [productosFormacion, setProductosFormacion] = useState('');
    const [edad, setEdad] = useState('');
    const [anosExperiencia, setAnosExperiencia] = useState('');
    const [anosDesdeGrado, setAnosDesdeGrado] = useState('');
    const [vinculacion, setVinculacion] = useState(false);
    const [resultado, setResultado] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Aquí implementaremos la lógica para clasificar al investigador
        let categoria = "No clasificado";
        // Lógica de clasificación (ejemplo simple)

        // Muestrara el resultado
        setResultado(`Categoría: ${categoria}`);
    };

    return (
        <div style={{ padding: '10px', fontFamily: 'Arial, sans-serif' }}>
            <h1 style={{ textAlign: 'center', fontSize: '24px' }}>Clasificación de Investigadores</h1>
            <form onSubmit={handleSubmit} style={{ maxWidth: '100%', margin: 'auto' }}>
                <label htmlFor="formacion">Nivel de Formación:</label>
                <select id="formacion" value={formacion} onChange={(e) => setFormacion(e.target.value)} style={{ width: '100%', padding: '10px', marginTop: '5px', fontSize: '16px' }}>
                    <option value="doctorado">Doctorado</option>
                    <option value="maestria">Maestría</option>
                    <option value="pregrado">Pregrado</option>
                </select>
                <label htmlFor="productosA">Número de Productos Tipo A:</label>
                <input type="number" id="productosA" value={productosA} onChange={(e) => setProductosA(e.target.value)} required style={{ width: '100%', padding: '10px', marginTop: '5px', fontSize: '16px' }} />
                <label htmlFor="productosFormacion">Productos de Formación:</label>
                <input type="number" id="productosFormacion" value={productosFormacion} onChange={(e) => setProductosFormacion(e.target.value)} required style={{ width: '100%', padding: '10px', marginTop: '5px', fontSize: '16px' }} />
                <label htmlFor="edad">Edad:</label>
                <input type="number" id="edad" value={edad} onChange={(e) => setEdad(e.target.value)} required style={{ width: '100%', padding: '10px', marginTop: '5px', fontSize: '16px' }} />
                <label htmlFor="anosExperiencia">Años de Experiencia:</label>
                <input type="number" id="anosExperiencia" value={anosExperiencia} onChange={(e) => setAnosExperiencia(e.target.value)} required style={{ width: '100%', padding: '10px', marginTop: '5px', fontSize: '16px' }} />
                <label htmlFor="anosDesdeGrado">Años desde la Obtención del Grado:</label>
                <input type="number" id="anosDesdeGrado" value={anosDesdeGrado} onChange={(e) => setAnosDesdeGrado(e.target.value)} required style={{ width: '100%', padding: '10px', marginTop: '5px', fontSize: '16px' }} />
                <label htmlFor="vinculacion">Vinculación a Instituciones Colombianas:</label>
                <input type="checkbox" id="vinculacion" checked={vinculacion} onChange={(e) => setVinculacion(e.target.checked)} />
                <button type="submit" style={{ padding: '12px', backgroundColor: '#4CAF50', color: 'white', border: 'none', cursor: 'pointer', fontSize: '16px' }}>Clasificar Investigador</button>
            </form>
            <div id="resultado" style={{ marginTop: '20px', textAlign: 'center' }}>{resultado}</div>
        </div>
    );
};

export default ClasificacionInvestigadores;

