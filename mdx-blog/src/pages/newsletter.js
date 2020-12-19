import React from 'react'
import Layout from '../components/Layout'
const NewsLetter = () => {
  return (
    <Layout>
      <section className="newsletter-page">
        <div className="page-center">
          <h2>Get all the latest stories ot your inbox</h2>
          <h4>I write to my frineds every few weeks</h4>
          <form className="contact-form">
            <input
              type="text"
              name="name"
              placeholder="Your name"
              className="form-control"
            />
            <input
              type="email"
              name="email"
              placeholder="Your email"
              className="form-control"
            />
            <button type="submit" className="btn form-control">
              subscribe
            </button>
          </form>
        </div>
      </section>
    </Layout>
  )
}

export default NewsLetter
