'use client'

const InputEmail = () => {
    const handleChange = (input) => {
        // console.log(input.target.value)
    }
    return (
        <>
            <div className="pb-3 col-12">
                <input type="email" className="form form-control w-50" name="email" id="email-order" placeholder="please type your email here" onChange={handleChange} />
            </div>
        </>
    )
}

export default InputEmail