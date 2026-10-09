import { Link, Navigate, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <header className="navbar navbar-expand bg-body-tertiary border-bottom">
        <div className="container">
          <Link className="navbar-brand fw-semibold" to="/">
            OctoFit Tracker
          </Link>
          <nav aria-label="Main navigation">
            <Link className="nav-link" to="/">
              Dashboard
            </Link>
          </nav>
        </div>
      </header>
      <main className="container py-5">
        <Routes>
          <Route
            path="/"
            element={
              <section>
                <p className="text-uppercase small text-secondary mb-2">
                  OctoFit Tracker
                </p>
                <h1 className="h2 mb-0">Dashboard</h1>
              </section>
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </>
  )
}

export default App
