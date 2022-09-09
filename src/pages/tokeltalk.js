import * as React from "react"

import {Form, Formik} from 'formik';

import FormRow from "../components/Atoms/FormRow";
import FormRowBlock from "../components/Molecules/FormRowBlock";
import Img from "gatsby-image"
import PodcastRoot from "./template"
import PropTypes from 'prop-types'
import axios from "axios";
import breakpoints from "../styles/breakpoints"
import { graphql } from "gatsby"
import links, { podcasts } from "../data/links"
import podcastValidationSchema from '../helpers/podcastValidationSchema'
import styled from "@emotion/styled"
import PageMeta from "components/Molecules/PageMeta";

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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 800px;
  margin: auto;
  h1, h3 {
    text-align: center;
  }
  h5 {
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

const GuestSignUp = styled.div`
  margin-top: 5rem;
  min-width: 300px;
  max-width: 500px;
`

const SubmitButton = styled.button`
  margin-top: 2rem;
  height: 3rem;
  min-width: 300px;
  font-size: var(--font-size-h4);
  background-color:  ${p => p.submitted ? 'var(--color-tellurian)' : 'var(--color-cornFlowerHard)'};
  color: #FFFFFF;
  border: none;
  border-radius: 0.25rem;
  opacity: 1;
  z-index: 2;
  cursor: ${p => p.submitted ? 'disabled': 'pointer'};
`

const ReachOutToUs = styled.p`
  color: #FFFFFF;
  opacity: 0.8;
  margin-top: 2rem;
  text-align: center;
  margin-bottom: 5rem;
`

const hook = process.env.GATSBY_DISCORD_HOOK;

const toSubmit = requestFields => ({
    content: "New Guest Form Submission",
    embeds: [
      {
          title: "Details",
          fields: requestFields
      }
  ]
})

const discordOption = (
  <div>
    <FormRowBlock name="discordLink" labelText="Discord*" type="text" / > 
    <FormRowBlock name="discordHandle" labelText="Discord handle*" type="text" />
  </div>
)

const pickFields = option => {
  switch(option) {
    case 'emailoption':
      return (<FormRowBlock name="email" labelText="Contact email*" type="email" />);
    case 'telegramoption':
      return (<FormRowBlock name="telegramHandle" labelText="Telegram handle*" type="text" />);  
    case 'discordoption':
      return discordOption;
    case 'otheroption':
      return (<FormRowBlock name="otherWay" labelText="Other way to contact you*" type="text" / >);
    default:
      return (<div/>);
  }
}

const getPodcastLinks = data => 
    Object.keys(podcasts).map(podcastPlatform => 
    <a key={podcastPlatform} href={links[podcastPlatform]}><Img alt={podcastPlatform} fixed={data[podcastPlatform].childImageSharp.fixed}></Img></a>
  )

const TokelTalk = ({data})  => {
  const [submitted, setSubmitted] = React.useState(false);

  return (
      <PodcastRoot>
        <PageMeta
          title="Tokel Talk: NFT & Tokenization Podcast & Live Stream"
          description="Podcast of open-source, dedicated, fungible & non-fungible token (NFT) platform, Tokel. Listen to the latest episodes."
          url="blog"
        />
        <Content>
          <HeaderWrapper>
            <div>
              <h1>Tokel Talk</h1>
              <h3><a href={links.nftPodcastTop}>Voted in the Top 10 of best NFT podcasts</a></h3>           
              <h5>Listened to in 49 countries. Downloaded in 142 cities. Streamed on 7 social networks.</h5>
              <Desc>Tokel Talk is the live stream and podcast of open-source, dedicated, fungible & non-fungible token (NFT) platform Tokel. The Tokel platform provides end-to-end token solutions to creators, businesses and projects alike.</Desc>
            </div>

          </HeaderWrapper>
          <PlayerContainer>
             <iframe src="https://embed.podcasts.apple.com/us/podcast/tokel-talk/id1598762562?itsct=podcast_box_player&amp;itscg=30200&amp;ls=1&amp;theme=dark" height="450px" frameBorder="0" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation" allow="autoplay *; encrypted-media *;" style={{width: "100%", overflow: "hidden", borderRadius: "10px", background: "transparent"}}></iframe>
          </PlayerContainer>  
          <ListenOn>
            {getPodcastLinks(data)}
          </ListenOn>
          <GuestSignUp>
            <h3 id="join-tokel-talk-as-a-guest">Join Tokel Talk as a Guest</h3>
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
                other: '',
                message: ''
              }}
              validationSchema={podcastValidationSchema}
              onSubmit={async (values) => {
                  const requestFields = [];
                  Object.keys(values).forEach(field => {
                    if (field !== 'contactMethod' && values[field] !== '') {
                      requestFields.push({name: field, value: values[field]})
                    }
                  })
                  setSubmitted(true);
                  try {
                    await axios.post(hook, toSubmit(requestFields))
                  } catch (e) {
                    console.log(e);
                  }
              }}
            >
              {({ values, isSubmitting, setFieldValue }) => (
                <Form style={{display: 'flex', flexDirection: 'column'}}>
                  <FormRowBlock name="guestName" labelText="Guest Name*" type="text"/ >
                  <FormRowBlock name="projectName" labelText="Project Name*" type="text"/ >
                  <FormRowBlock name="website" labelText="Website" type="text" / >
                  <FormRow>
                    <label htmlFor="contactMethod">Preferred method of contact*</label>
                    <select 
                      label="Preferred method of contact" 
                      name="contactMethod" 
                      onChange={a => setFieldValue('contactMethod', a.target.value)}>
                      <option value="telegramoption">Telegram</option>
                      <option value="emailoption">Email</option>
                      <option value="discordoption">Discord</option>
                      <option value="otheroption">Other</option>
                    </select>
                  </FormRow>
                  {pickFields(values.contactMethod)}   
                  <FormRowBlock name="message" labelText="Message" type="textarea" component="textarea" rows="4" / >
                  <SubmitButton type="submit" disabled={isSubmitting || submitted} submitted={submitted} name="SubmitButton">
                    {(!submitted) ? 'Join Tokel Talk' : 'Thank you. We will get back to you soon.'}
                  </SubmitButton>
                </Form>
              )}
            </Formik>
          </GuestSignUp>
          <ReachOutToUs>If you are experiencing any difficulties, feel free to reach out to us in <a href={links.discord}>Tokel Discord</a> or email us at <a href={links.mailSupport}>suppor@tokel.io</a></ReachOutToUs>
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
    applePodcasts: file(relativePath: { eq: "podcast/listen-on-apple.png" }) {
      childImageSharp {
        fixed(height: 58) {
          ...GatsbyImageSharpFixed
        }
      }
    } 
    amazonMusic: file(relativePath: { eq: "podcast/listen-on-amazon.png" }) {
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
    googlePodcasts: file(relativePath: { eq: "podcast/listen-on-google.png" }) {
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
