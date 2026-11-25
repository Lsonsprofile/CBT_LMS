import Header from '../../components/Header'

const HomePage = () => {
  return (
    <>
      <Header />

      <main>
        <section id="home" aria-labelledby="home-heading">
          <div>
            <p>Technology Education</p>

            <h1 id="home-heading">
              Empowering Every Generation Through Technology
            </h1>

            <p>
              Kidstech provides practical technology education for children and
              adults through schools, home lessons, online learning, and more.
            </p>
          </div>
        </section>
      </main>
    </>
  )
}

export default HomePage
