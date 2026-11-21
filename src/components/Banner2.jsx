import nike from "../assets/nike.png"

const Banner2 = () => {
  return (
    <section className="about">
      <h1>About</h1>
      <p>Mercurial Shop is a storefront dedicated to speed boots, built as a front-end project with React.</p>

      <div className="about-image">
        <img src={nike} alt="Brand logo" loading="lazy" />
      </div>
    </section>
  )
}

export default Banner2
