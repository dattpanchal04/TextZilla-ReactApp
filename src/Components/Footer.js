import React from 'react'

export default function Footer(props) {
    return (
        <>
            {/* Footer */}
            <div className="container">
                <footer className={`py-3 my-5 text-${props.mode} bg-${props.mode}`}>
                <p className="text-center h5">© 2021 TextUtils</p>
                </footer>
            </div>
        </>
    )
}
