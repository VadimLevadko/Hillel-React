import './index.css'

const testData = [
    {
        srcImg: 'https://fwmedia.fandomwire.com/wp-content/uploads/2024/01/02085201/overlord-1024x576.webp',
        title: 'Overlord',
        url: 'https://jut.su/overlord/',
        description: 'In the year 2138, where the era of virtual reality gaming is thriving with different DMMO-RPGs, gamers used what was called the Neural Nano-Interface which enabled them to get the experience in playing it.',
    },
    {
        srcImg: 'https://i.pinimg.com/originals/d7/38/6a/d7386a90c0886ec4af7113224c15da66.png',
        title: 'Re:Zero',
        url: 'https://jut.su/re-zerou-kara/',
        description: 'Subaru Natsuki is a NEET who is suddenly summoned to a fantasy-like world. Just after arriving, he is killed while trying to help a young half-elf he befriends, Emilia, who is a candidate to become the next ruler of the Kingdom of Lugunica, only to revive some hours in the past.',
    },
    {
        srcImg: 'https://th.bing.com/th/id/R.bc63799b3ccae9d8831b243020eb8a81?rik=rs8hrwwv4s5Bwg&riu=http%3a%2f%2fmangalist.org%2fwp-content%2fuploads%2f2023%2f12%2fthe-one-piece-wit-studio-and-netflixs-new-anime-explained.jpg&ehk=IDdvOcv11X6Z82VGYfUh1PQolExhrUsJxjZxCNydzeM%3d&risl=&pid=ImgRaw&r=0',
        title: 'One Piece',
        url: 'https://jut.su/oneepiece/',
        description: 'Embark on a grand adventure with the "One Piece" universe, a captivating world of pirates, treasures, and epic battles',
    },
    {
        srcImg: 'https://comicvine.gamespot.com/a/uploads/original/11113/111131427/8742182-1565123674-31428.jpg',
        title: 'Bleach',
        url: 'https://jut.su/bleeach/',
        description: 'In Karakura Town, high school student Ichigo Kurosaki becomes a substitute Soul Reaper (死神, Shinigami, literally, "Death God"), when Rukia Kuchiki risks her life to protect him from a Hollow who attacks Ichigo\'s twin younger sisters.',
    },
    {
        srcImg: 'https://animecorner.me/wp-content/uploads/2022/07/tensura-movie-scarlet-bond-key-visual.jpg',
        title: 'That Time I Got Reincarnated as a Slime',
        url: 'https://jut.su/slime-datta-ken/',
        description: 'Satoru Mikami is an ordinary 42-year-old corporate worker living in Tokyo. He is almost content with his monotonous life, despite the fact that he does not have a girlfriend. During a casual encounter with his colleague, an assailant tries to stab his friend, and Satoru pushes his friend out of the way and gets stabbed instead.',
    }
]

export default function App() {
  return (
      <>
          <nav className="navbar navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark">
              <div className="container-fluid">
                  <a className="navbar-brand" href="#">Navbar</a>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                          data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false"
                          aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarColor01">
                      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                          <li className="nav-item">
                              <a className="nav-link active" aria-current="page" href="#">Home</a>
                          </li>
                          <li className="nav-item">
                              <a className="nav-link" href="#">Features</a>
                          </li>
                          <li className="nav-item">
                              <a className="nav-link" href="#">Pricing</a>
                          </li>
                          <li className="nav-item">
                              <a className="nav-link" href="#">About</a>
                          </li>
                      </ul>
                      <form className="d-flex" role="search">
                          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                          <button className="btn btn-outline-light" type="submit">Search</button>
                      </form>
                  </div>
              </div>
          </nav>
          <section className="anime-content-section">
              <div className="d-flex justify-content-center gap-3 py-4">
                  {testData.map((item) => {
                      const {srcImg, title, description, url} = item;

                      return (
                          <div className="card anime-card-wrapper" style={{width: '18rem'}}>
                              <img className="anime-card-img w-100 cover" src={srcImg} alt={title}/>
                              <div className="card-body">
                                  <h5 className="card-title">{title}</h5>
                                  <p className="card-text">{description}</p>
                              </div>
                              <a href={url} target='_blank' className="btn btn-primary">Watch now</a>
                          </div>
                      )
                  })}
              </div>
          </section>
          <footer className="bd-footer py-4 py-md-5 mt-5 bg-body-tertiary">
              <div className="container py-4 py-md-5 px-4 px-md-3 text-body-secondary">
                  <div className="row">
                      <div className="col-lg-3 mb-3">
                          <a className="d-inline-flex align-items-center mb-2 text-body-emphasis text-decoration-none"
                             href="/" aria-label="Bootstrap">
                              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="32" className="d-block me-2"
                                   viewBox="0 0 118 94" role="img"><title>Bootstrap</title>
                                  <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M24.509 0c-6.733 0-11.715 5.893-11.492 12.284.214 6.14-.064 14.092-2.066 20.577C8.943 39.365 5.547 43.485 0 44.014v5.972c5.547.529 8.943 4.649 10.951 11.153 2.002 6.485 2.28 14.437 2.066 20.577C12.794 88.106 17.776 94 24.51 94H93.5c6.733 0 11.714-5.893 11.491-12.284-.214-6.14.064-14.092 2.066-20.577 2.009-6.504 5.396-10.624 10.943-11.153v-5.972c-5.547-.529-8.934-4.649-10.943-11.153-2.002-6.484-2.28-14.437-2.066-20.577C105.214 5.894 100.233 0 93.5 0H24.508zM80 57.863C80 66.663 73.436 72 62.543 72H44a2 2 0 01-2-2V24a2 2 0 012-2h18.437c9.083 0 15.044 4.92 15.044 12.474 0 5.302-4.01 10.049-9.119 10.88v.277C75.317 46.394 80 51.21 80 57.863zM60.521 28.34H49.948v14.934h8.905c6.884 0 10.68-2.772 10.68-7.727 0-4.643-3.264-7.207-9.012-7.207zM49.948 49.2v16.458H60.91c7.167 0 10.964-2.876 10.964-8.281 0-5.406-3.903-8.178-11.425-8.178H49.948z"
                                        fill="currentColor"></path>
                              </svg>
                              <span className="fs-5">Bootstrap</span>
                          </a>
                          <ul className="list-unstyled small">
                              <li className="mb-2">Designed and built with all the love in the world by the <a
                                  href="/docs/5.3/about/team/">Bootstrap team</a> with the help of <a
                                  href="https://github.com/twbs/bootstrap/graphs/contributors">our contributors</a>.
                              </li>
                              <li className="mb-2">Code licensed <a
                                  href="https://github.com/twbs/bootstrap/blob/main/LICENSE" target="_blank"
                                  rel="license noopener">MIT</a>, docs <a
                                  href="https://creativecommons.org/licenses/by/3.0/" target="_blank"
                                  rel="license noopener">CC BY 3.0</a>.
                              </li>
                              <li className="mb-2">Currently v5.3.3.</li>
                          </ul>
                      </div>
                      <div className="col-6 col-lg-2 offset-lg-1 mb-3">
                          <h5>Links</h5>
                          <ul className="list-unstyled">
                              <li className="mb-2"><a href="/">Home</a></li>
                              <li className="mb-2"><a href="/docs/5.3/">Docs</a></li>
                              <li className="mb-2"><a href="/docs/5.3/examples/">Examples</a></li>
                              <li className="mb-2"><a href="https://icons.getbootstrap.com/">Icons</a></li>
                              <li className="mb-2"><a href="https://themes.getbootstrap.com/">Themes</a></li>
                              <li className="mb-2"><a href="https://blog.getbootstrap.com/">Blog</a></li>
                              <li className="mb-2"><a href="https://cottonbureau.com/people/bootstrap" target="_blank"
                                                      rel="noopener">Swag Store</a></li>
                          </ul>
                      </div>
                      <div className="col-6 col-lg-2 mb-3">
                          <h5>Guides</h5>
                          <ul className="list-unstyled">
                              <li className="mb-2"><a href="/docs/5.3/getting-started/">Getting started</a></li>
                              <li className="mb-2"><a href="/docs/5.3/examples/starter-template/">Starter template</a>
                              </li>
                              <li className="mb-2"><a href="/docs/5.3/getting-started/webpack/">Webpack</a></li>
                              <li className="mb-2"><a href="/docs/5.3/getting-started/parcel/">Parcel</a></li>
                              <li className="mb-2"><a href="/docs/5.3/getting-started/vite/">Vite</a></li>
                          </ul>
                      </div>
                      <div className="col-6 col-lg-2 mb-3">
                          <h5>Projects</h5>
                          <ul className="list-unstyled">
                              <li className="mb-2"><a href="https://github.com/twbs/bootstrap" target="_blank"
                                                      rel="noopener">Bootstrap 5</a></li>
                              <li className="mb-2"><a href="https://github.com/twbs/bootstrap/tree/v4-dev"
                                                      target="_blank" rel="noopener">Bootstrap 4</a></li>
                              <li className="mb-2"><a href="https://github.com/twbs/icons" target="_blank"
                                                      rel="noopener">Icons</a></li>
                              <li className="mb-2"><a href="https://github.com/twbs/rfs" target="_blank"
                                                      rel="noopener">RFS</a></li>
                              <li className="mb-2"><a href="https://github.com/twbs/examples/" target="_blank"
                                                      rel="noopener">Examples repo</a></li>
                          </ul>
                      </div>
                      <div className="col-6 col-lg-2 mb-3">
                          <h5>Community</h5>
                          <ul className="list-unstyled">
                              <li className="mb-2"><a href="https://github.com/twbs/bootstrap/issues" target="_blank"
                                                      rel="noopener">Issues</a></li>
                              <li className="mb-2"><a href="https://github.com/twbs/bootstrap/discussions"
                                                      target="_blank" rel="noopener">Discussions</a></li>
                              <li className="mb-2"><a href="https://github.com/sponsors/twbs" target="_blank"
                                                      rel="noopener">Corporate sponsors</a></li>
                              <li className="mb-2"><a href="https://opencollective.com/bootstrap" target="_blank"
                                                      rel="noopener">Open Collective</a></li>
                              <li className="mb-2"><a href="https://stackoverflow.com/questions/tagged/bootstrap-5"
                                                      target="_blank" rel="noopener">Stack Overflow</a></li>
                          </ul>
                      </div>
                  </div>
              </div>
          </footer>
      </>
  )
}