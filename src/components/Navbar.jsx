import React from 'react'

const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">
                        <img src="https://images.vexels.com/media/users/3/256349/isolated/lists/864c07d64db6ec24e19c39acb16f0a89-winking-piece-of-paper-cartoon.png" alt="Bootstrap" width="30" height="24" />
                    </a>
                    <a class="navbar-brand" href="#">USER LIST APP</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/">ADD</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/search">SEARCH</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/view">VIEW</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar