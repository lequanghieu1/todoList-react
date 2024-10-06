import { FC, useState } from 'react'

const Search: FC<{ searchText: (title: string) => void; reloadData: () => void }> = ({
    searchText,
    reloadData,
}): JSX.Element => {
    const [searchInput, setSearchInput] = useState('')

    return (
        <div className='border-none search'>
            <input
                className='rounded-l-lg placeholder:italic placeholder:text-slate-400 bg-white border border-slate-300 p-2.5 pl-8 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm'
                placeholder='Search for item...'
                type='text'
                name='search'
                value={searchInput}
                onChange={(e) => {
                    setSearchInput(e.target.value)
                }}
            />
            <button
                className='rounded-r-lg border border-slate-300 border-r-0 font-semibold text-sm text-white p-2.5 bg-blue-400 text-center'
                type='button'
                onClick={(e) => {
                    e.preventDefault()
                    searchText(searchInput)
                }}
            >
                Search
            </button>
            <button
                className='ml-1 rounded-md font-semibold text-sm text-white shadow-sm p-2.5 bg-blue-400 text-center'
                type='button'
                onClick={(e) => {
                    e.preventDefault()
                    setSearchInput('')
                    reloadData()
                }}
            >
                Reset
            </button>
        </div>
    )
}

export default Search
