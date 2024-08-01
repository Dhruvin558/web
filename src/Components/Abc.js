import { useState } from "react";
import { db } from "./firebase";
import { ref, set } from "firebase/database";
import Getdata from "./Getdata";


const Abc = () => {
    const [name, setName] = useState('');
    const [lastname, setLastName] = useState('');
    const [notify, setNotify] = useState(''); // Initialize notify state

    const onSubmit = (event) => {
        event.preventDefault(); // Fix the typo here

        const id = Date.now()

        const userRef = ref(db, 'user/'+ id);
        set(userRef, {
            name: name,
            lastname: lastname
        });

        setNotify('Data Added');
        setName('');
        setLastName('')
        setTimeout(() => {
            setNotify('')
            
        }, 2000);
    };

    return (
        <div>
            {/* {notify && <p>{notify}</p>} */}
            <span className="notify">{notify}</span>
            <form onSubmit={onSubmit} className="marg">
                <input
                    type="text"
                    placeholder="Enter first name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Enter last name"
                    required
                    value={lastname}
                    onChange={(e) => setLastName(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
            <Getdata />
        </div>
    );
};

export default Abc;
