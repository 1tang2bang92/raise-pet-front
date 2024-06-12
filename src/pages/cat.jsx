import { useState } from 'react';

const Cat = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [data, setData] = useState([
        'Sphinx',
        'American shorthair',
        'Russian Blue',
        'Balinese',
        'Snowshoe',
        'persian cat',
        'American Curl',
    ]);

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredData = data.filter(item =>
        item.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <h1>Cat Search</h1>
            <input
                type="text"
                placeholder="Search for an animal..."
                value={searchTerm}
                onChange={handleSearch}
            />
            <ul>
                {filteredData.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default Cat;