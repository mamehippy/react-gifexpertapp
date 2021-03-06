import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ( { setCategories } ) => {
  
    const [inputValue, setInputValue] = useState('');
  
    //FUNCION que actualiza el contenido de la caja de texto mientras se escribe
    const handleInputChange = ( e ) =>{
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault(); //Para que no recargue la página al enviar formulario

        if( inputValue.trim().length > 2 ){
            setCategories( categories => [inputValue, ...categories] );
            setInputValue('');
        }

    }

    return (
        <form onSubmit={ handleSubmit }>
            <input 
                type="text"
                value = { inputValue }
                onChange = { handleInputChange }
            />
        </form>
    )
}


AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
