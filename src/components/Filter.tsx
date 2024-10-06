import { useState, FC } from 'react'
import RadioGroup from '../components/RadioGroup'

const options = [
    { label: 'All', value: 'all' },
    { label: 'Active', value: 'active' },
    { label: 'Completed', value: 'completed' },
]

const Filter: FC<{ setFilter: (filter: string) => void }> = ({ setFilter }): JSX.Element => {
    const [selectedValue, setSelectedValue] = useState('all')

    const handleRadioChange = (value: string) => {
        setSelectedValue(value)
        setFilter(value)
    }

    return <RadioGroup options={options} selectedValue={selectedValue} onChange={handleRadioChange} />
}

export default Filter
