import * as React from "react"

import { ErrorMessage, Field, Form, Formik } from 'formik';

import { Helmet } from "react-helmet"
import Img from "gatsby-image"
import PodcastRoot from "./template"
import PropTypes from 'prop-types'
import axios from "axios";
import breakpoints from "../styles/breakpoints"
import { graphql } from "gatsby"
import links from "../data/links"
import podcastValidationSchema from '../helpers/podcastValidationSchema'
import styled from "@emotion/styled"

const PlayerContainer = styled.div`
  width: 100%;
  display: flex;
  max-width: 800px;
  margin: auto;
`

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: ${breakpoints.mobilemiddle}) {
    flex-direction: column;
    align-content: center;
    justify-content: center;
  }
`

const Content = styled.div`
  padding: 10rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 800px;
  margin: auto;
  h1 {
    color: #FFFFFF;
    text-align: center;
    font-size: 50px;
    line-height: 60px;
  }
  h2 {
    text-align: center;
    color: #FFFFFF;
    font-size: 30px;
  }
  h3 {
    text-align: left;
    color: #7C91A7;
  }
  @media (max-width: ${breakpoints.smallScreen}) {
    padding: 5rem;
  }
  @media (max-width: ${breakpoints.mobilemiddle}) {
    padding: 2rem;
    h1 {
      font-size: 40px;
      line-height: 50px;
    }
  }
`

const Desc = styled.p`
  max-width: 800px;
  color: white;
`

const ListenOn = styled.div`
  margin: 5rem 0;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  a {
    transition: transform .2s;
  }
  a:hover {
    transform: scale(1.1);
    opacity: 1;
  }
`

const FormRow = styled.div`
  color: white;
  font-size: 16px;
  padding: 0.5rem 0;
  display: flex;
  flex-direction: column;
  label {
    margin-right: 2rem;
    padding-bottom: 0.25rem;
    opacity: 0.8;
  }
  input {
    min-width: 300px;
    border-radius: 0.25rem;
    padding: 0.5rem 0.5rem 0.5rem 1rem;
    background-color: #D6D6D6;
    border: none;
    font-size: var(--font-size-h3);
  }
  select {
    padding: 0.5rem 1rem 0.5rem 1rem;
    background-color: #D6D6D6;
    border-radius: 0.25rem;
    border: none;
    font-size: var(--font-size-h3);
    background-image: url("data:image/svg+xml;utf8,<svg fill='black' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>");
    background-repeat: no-repeat;
    background-position-x: 100%;
    background-position-y: 5px;
  }
`

const GuestSignUp = styled.div`
  min-width: 300px;
  max-width: 500px;
  p {
    color: #FFFFFF;
  }
`

const SubmitButton = styled.button`
  margin-top: 2rem;
  height: 3rem;
  min-width: 300px;
  font-size: var(--font-size-h3);
  text-transform: uppercase;
  background-color:  ${p => p.submitted ? 'var(--color-tellurian)' : 'var(--color-cornFlowerHard'});
  color: #FFFFFF;
  border: none;
  border-radius: 0.25rem;
  opacity: 1;
  z-index: 2;
  cursor: ${p => p.submitted ? 'disabled': 'pointer'};
`

const MyErr = styled(ErrorMessage)`
  color: var(--color-eventHorizon);
`

const ReachOutToUs = styled.p`
  color: #FFFFFF;
  opacity: 0.8;
  margin-top: 2rem;
`
const hook = process.env.DISCORD_HOOK;

const TokelTalk = ({data})  => {
  const [submitted, setSubmitted] = React.useState(false);

  return (
      <PodcastRoot>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Tokel Talk: NFT & Tokenization Podcast & Live Stream</title>
            <meta name="description" content="Podcast of open-source, dedicated, fungible & non-fungible token (NFT) platform, Tokel. Listen to the latest episodes." />
        </Helmet>
        <Content>
          <HeaderWrapper>
            <div>
              <h1>Tokel Talk</h1>
              <h2><a href="https://www.bcast.fm/blog/best-nft-podcasts">Voted in the Top 10 of best NFT podcasts</a></h2>           
              <h3>Listened to in 49 countries. Downloaded in 142 cities. Streamed on 7 social networks.</h3>
              <Desc>Tokel Talk is the live stream and podcast of open-source, dedicated, fungible & non-fungible token (NFT) platform Tokel. The Tokel platform provides end-to-end token solutions to creators, businesses and projects alike.</Desc>
            </div>

          </HeaderWrapper>
          <PlayerContainer>
             <iframe src="https://embed.podcasts.apple.com/us/podcast/tokel-talk/id1598762562?itsct=podcast_box_player&amp;itscg=30200&amp;ls=1&amp;theme=dark" height="450px" frameBorder="0" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation" allow="autoplay *; encrypted-media *;" style={{width: "100%", overflow: "hidden", borderRadius: "10px", background: "transparent"}}></iframe>
          </PlayerContainer>  
          <ListenOn>
              <a href={links.podcast.apple}><Img fixed={data.apple.childImageSharp.fixed}></Img></a>
              <a href={links.podcast.amazon}><Img fixed={data.amazon.childImageSharp.fixed}></Img></a>
              <a href={links.podcast.deezer}><Img fixed={data.deezer.childImageSharp.fixed}></Img></a>
              <a href={links.podcast.google}><Img fixed={data.google.childImageSharp.fixed}></Img></a>
              <a href={links.podcast.spotify}><Img fixed={data.spotify.childImageSharp.fixed}></Img></a>
              <a href={links.podcast.stitcher}><Img fixed={data.stitcher.childImageSharp.fixed}></Img></a>

          </ListenOn>
          <GuestSignUp>
            <h2>Join Tokel Talk as a Guest</h2>
            <p>Would you like to be the guest on Tokel Talk Podcast? If yes, please fill in the  form below and we will get in touch with you as soon as we can.</p>
            <Formik
              initialValues={{ 
                guestName: '', 
                projectName: '', 
                website: '', 
                contactMethod: 'telegramoption',
                email: '',
                discord: '', 
                discordHandle: '', 
                telegramHandle: '', 
                other: ''
              }}
              validationSchema={podcastValidationSchema}
              onSubmit={(values) => {
                  const fields = Object.keys(values);
                  const requestFields = [];
                  fields.forEach( field => {
                    if (field !== 'contactMethod' && values[field] !== '') {
                      requestFields.push({
                        name: field,
                        value: values[field]
                      })
                    }
                  })
                  console.log(hook)
                  axios.post(hook, {
                      content: "New Guest Form Submission",
                      embeds: [
                        {
                            title: "Details",
                            fields: requestFields
                        }
                    ]
                  })
                  .then(res => {
                    if (res.status < 300) {
                      setSubmitted(true);
                    } 
                  })
                  .catch(err => console.log(err))
              }}
            >
      
              {({ values, isSubmitting, setFieldValue }) => (
      
                <Form style={{display: 'flex', flexDirection: 'column'}}>
                  <FormRow>
                    <label htmlFor="guestName">Guest Name</label>
                    <Field type="text" name="guestName" />
                    <MyErr name="guestName" component="div" />
                  </FormRow>

                  <FormRow>
                    <label htmlFor="guestName">Project Name</label>
                    <Field type="text" name="projectName" />
                    <MyErr name="projectName" component="div" />                
                  </FormRow>


                  <FormRow>
                    <label htmlFor="guestName">Website</label>
                    <Field type="text" name="website" />
                    <MyErr name="website" component="div" />                  
                  </FormRow>

                  <FormRow>
                    <label htmlFor="contactMethod">Preferred method of contact</label>
                    <select label="Preferred method of contact" name="contactMethod" onChange={a => setFieldValue('contactMethod', a.target.value)}>
                      <option value="telegramoption">Telegram</option>
                      <option value="emailoption">Email</option>
                      <option value="discordoption">Discord</option>
                      <option value="otheroption">Other</option>
                    </select>
                  </FormRow>
                  {console.log('VALUES')}
                  {console.log(values)}
                  {values.contactMethod === 'emailoption' && 
                    <FormRow>
                      <label htmlFor="guestName">Contact email</label>
                      <Field type="email" name="email" />
                      <MyErr name="email" component="div" />
                    </FormRow>
                  }
                  {values.contactMethod === 'telegramoption' && 
                    <FormRow>
                      <label htmlFor="telegramHandle">Telegram handle</label>
                      <Field type="text" name="telegramHandle" />
                      <MyErr name="telegramHandle" component="div" />
                    </FormRow>
                  }
                  {values.contactMethod === 'discordoption' && 
                    <div>
                      <FormRow>
                        <label htmlFor="discordLink">Discord</label>
                        <Field type="text" name="discordLink" />
                        <MyErr name="discordLink" component="div" />
                      </FormRow>
                      <FormRow>
                        <label htmlFor="discordHandle">Discord handle</label>
                        <Field type="text" name="discordHandle" />
                        <MyErr name="discordHandle" component="div" />
                      </FormRow>

                    </div>
                  }
                  {values.contactMethod === 'otheroption' && 
                    <FormRow>
                      <label htmlFor="otherWay">Other way to contact you</label>
                      <Field type="text" name="otherWay" />
                      <MyErr name="otherWay" component="div" />
                    </FormRow>
                  }                                    
                  <SubmitButton type="submit" disabled={isSubmitting} submitted={submitted}>
                  {!submitted ? 'Join Tokel Talk' : 'Thank you. We will get back to you soon.'}
                  </SubmitButton>
                </Form>
              )}
            </Formik>
          </GuestSignUp>
          <ReachOutToUs>If you are experiencing any difficulties, feel free to reach out to us in <a href={links.discord}>Tokel Discord</a> or email us at <a href="mailto:suppor@tokel.io">suppor@tokel.io</a></ReachOutToUs>
        </Content>

      </PodcastRoot>
  )
}

export const query = graphql`
  query {
    tokeltalk: file(relativePath: { eq: "podcast/tokeltalk.png" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 900) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    apple: file(relativePath: { eq: "podcast/listen-on-apple.png" }) {
      childImageSharp {
        fixed(height: 58) {
          ...GatsbyImageSharpFixed
        }
      }
    } 
    amazon: file(relativePath: { eq: "podcast/listen-on-amazon.png" }) {
      childImageSharp {
        fixed(height: 58) {
          ...GatsbyImageSharpFixed
        }
      }
    } 
    deezer: file(relativePath: { eq: "podcast/listen-on-deezer.png" }) {
      childImageSharp {
        fixed(height: 58) {
          ...GatsbyImageSharpFixed
        }
      }
    } 
    google: file(relativePath: { eq: "podcast/listen-on-google.png" }) {
      childImageSharp {
        fixed(height: 58) {
          ...GatsbyImageSharpFixed
        }
      }
    }  
    spotify: file(relativePath: { eq: "podcast/listen-on-spotify.png" }) {
      childImageSharp {
        fixed(height: 58) {
          ...GatsbyImageSharpFixed
        }
      }
    }  
    stitcher: file(relativePath: { eq: "podcast/listen-on-stitcher.png" }) {
      childImageSharp {
        fixed(height: 58) {
          ...GatsbyImageSharpFixed
        }
      }
    }  
  }
`
TokelTalk.propTypes = {
    data: PropTypes.any
}
export default TokelTalk
