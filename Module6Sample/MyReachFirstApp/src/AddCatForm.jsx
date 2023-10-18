import { useState } from 'react';

function AddCatForm({onAddCat}) {
    const [name, setName] = useState('');
    const [latinName, setLatinName] = useState('');
    const [imageURL, setImageURL] = useState('');

    const handleAddCat = (e) => {
        e.preventDefault();
        onAddCat({name, latinName, image: imageURL});
    }

    return (
        <form onSubmit={handleAddCat}>
            <h3>Add New Cat</h3>
            <label>
                Name: 
                <input name="name" value={name} onChange={(e) => setName(e.target.value)} />
            </label><br/>
            <label>
                Latin Name: 
                <input name="latinName" value={latinName} onChange={(e) => setLatinName(e.target.value)} />
            </label><br/>      
            <label>
                Image URL: 
                <input name="imageURL" value={imageURL} onChange={(e) => setImageURL(e.target.value)} />
            </label><br/>
            <button>Add Cat</button>          
        </form>
    )
}
export default AddCatForm;