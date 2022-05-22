import React, { useState } from "react";

const NewForm = () => {
    const [text, setText] = useState("default")

    const convert = () => {
        let a = text.toUpperCase()
        setText(a)
    }

    const handleChange = (event) => {
        setText(event.target.value)

    }

    return (
        <>
            <div className="container">
                <form class="was-validated">
                    <div className="mt-5">
                        <label htmlFor="validationTextarea" className="form-label">Textarea</label>
                        <textarea value={text} onChange={handleChange} className="form-control  is-invalid" rows="4" id="validationTextarea" placeholder="Required example textarea" required></textarea>
                        <div className="invalid-feedback">
                            Please enter a message in the textarea.
                        </div>

                    </div>
                </form>
                <button className="btn btn-primary" onClick={convert} type="submit">Submit form</button>
            </div>
        </>
    )



}
export default NewForm