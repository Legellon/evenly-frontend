import "./event-form.scss";
import {useState} from 'react';

function EventForm() {
    const [form, setForm] = useState({title: "", description: "", coordinates: ""});

    const reqOptions = {
        method: 'post',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await fetch("http://157.230.107.52/Data", reqOptions);
    }

    const onChange = tag => e => setForm(prevState => ({...prevState, [tag]: e.target.value}));

    return (
        <div className="wrapper fadeInDown">
            <div id="formContent">
                <form id="creation" onSubmit={handleSubmit}>
                    <input type="text"
                           className="fadeIn second"
                           placeholder="Event Name"
                           value={form.title}
                           onChange={onChange('title')}
                    />

                    <textarea name="message"
                              className="form-control"
                              id="message"
                              cols="30"
                              rows="4"
                              placeholder="Description"
                              value={form.description}
                              onChange={onChange('description')}
                    >
                    </textarea>

                    <input type="text"
                           className="fadeIn third"
                           placeholder="Address"
                           value={form.coordinates}
                           onChange={onChange('coordinates')}
                    />

                    <input type="submit" className="fadeIn fourth" value="Create"/>
                </form>
            </div>
        </div>
    );
}

export default EventForm;