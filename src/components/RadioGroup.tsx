import React from 'react'

interface Option {
    label: string
    value: string
}

interface Props {
    options: Option[]
    selectedValue: string
    onChange: (value: string) => void
}

const RadioGroup: React.FC<Props> = ({ options, selectedValue, onChange }) => {
    return (
        <div className='flex mb-[15px]'>
            {options.map((option, index) => (
                <div key={index} className='flex items-center mr-4'>
                    <input
                        type='radio'
                        id={option.value}
                        name='radio-group'
                        value={option.value}
                        checked={selectedValue === option.value}
                        onChange={() => onChange(option.value)}
                        className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 cursor-pointer enabled:hover:border-gray-400 disabled:opacity-75'
                    />
                    <label htmlFor={option.value} className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
                        {option.label}
                    </label>
                </div>
            ))}
        </div>
    )
}

export default RadioGroup
