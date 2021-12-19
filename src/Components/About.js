import React  from 'react'

export default function About(props) {

    return (
        <>
            <div className="container my-5 d-flex justify-content-center text-center">
            <div className="contents">
                <h1>About Us</h1>
                <p className="my-4">Welcome to TextUtils. We are very glad and greatefull you are here. A text utilisation website where a user can optimize the way in which they want to use the paragraph.Removing particular pattern and apply different simple concepty to optimize the way we use the text. TextUtils is a website which converts your text into uppercase, lowercase, reverse your text, remove extra spaces from your text, copy your text etc. Many features we are update in the future. We hope you are enjoy this usefull this applications.</p>
                <p>Thank You For Visit!</p>
                <div className="buttons my-3">
                    <a href="https://github.com/dattpanchal04"><button type="button"
                            className="btn btn-success btn-lg">GitHub</button></a>
                    <a href="https://www.facebook.com/datt.panchal.3"> <button type="button"
                            className="btn btn-primary btn-lg">Facebook</button></a>
                    <a href="https://twitter.com/dattpanchal04"> <button type="button"
                            className="btn btn-dark btn-lg">Twitter</button></a>
                </div>
            </div>
        </div>

        {/* Footer */}
        <div className="container">
            <footer className={`py-3 my-5 text-${props.mode} bg-${props.mode}`}>
            <p className="text-center h5">© 2021 TextUtils</p>
            </footer>
        </div>
        </>
    )
}
