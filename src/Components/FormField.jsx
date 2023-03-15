import React from 'react'

const FormField = ({labelName , name , type , placeholder , value ,
  handleSurpriseMe , isSurpriseMe , handleChange  }) => {
  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        <label 
          htmlFor={name}
          className="black text-sm font-medium texrt-gray-900"
        >
          {labelName}
        </label>
        {isSurpriseMe && (
          <button
            type='button'
            onClick={handleSurpriseMe}
            className="font-semiblod text-xs bg-[#ECFCF1] py-1 px-2 rounded-[5px] tect-black"
          >
            Surprise Me
          </button>
        )}
      </div>
      <input 
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        required
        className='bg-gray-50 border-gray-300 text-sm rounded-lg focus:ring-[#4649ff] outline-none black w-full p-3'
      />

    </div>
  )
}

export default FormField