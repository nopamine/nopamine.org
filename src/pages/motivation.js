import React from 'react'
import { graphql } from 'gatsby'

import { Layout } from '../containers/Layout'

import { Link } from '../components/Common.Link'
import { ScrollBackgroundImage } from '../components/ScrollBackgroundImage'
import { TitleAndMetaTags } from '../components/Helpers.TitleAndMetaTags'
import * as AnimatedBlobs from '../components/AnimatedBlobs'

import { EyePNG } from '../components/EyePNG'
import { HeartLikePNG } from '../components/HeartLikePNG'

import { WeirdLooper } from '../components/WeirdLooper'

import * as blocks from '../blocks'

import { theme } from '../site'



export default function MotivationPage({ data, location }) {
  return (
    <Layout location={location}>
      
      <TitleAndMetaTags description={'Motivation'} />
      <blocks.fillSection alignItems="flex-end" style={{overflow:'hidden'}}>
        
        <blocks.h fontSize={[ 3, 4, 5, 5]} px={[7]} style={{zIndex: 137}} textAlign="right">
          Internet could've been such a beautiful place
        </blocks.h> 
        <blocks.h fontSize={[ 3, 4, 5, 3]} px={[7]} style={{zIndex: 137}} textAlign="right" bg={'white'} color={'black'}>
          So.. What went wrong? 
        </blocks.h> 
      </blocks.fillSection>
      
      <blocks.fillSection alignItems="flex-end"  py={[5]}  bg={'#FBFBFB'} style={{'overflowY': 'hidden', 'overflowX': 'hidden'}}>
        <HeartLikePNG />
        <blocks.h fontSize={[ 3, 4, 5, 5]} color="red" p={2}  mx={[4]}>It's Addictive</blocks.h>
        <blocks.h fontSize={[ 1, 3]} bg={'red'} p={2}  mx={[4]} textAlign="left"  width={700}>
          Corporations monizite us by hijacking our internal reward system.
        </blocks.h> 

        <blocks.h fontSize={[ 2, 2]} bg={'blue'} p={2}  mx={[4]} textAlign="left" width={700}>Infinite amount of dopamine triggers</blocks.h>

        <blocks.p width={700} textAlign={'left'} color="red" fontSize={2} mx={4}>
          Do you find yourself randomly reaching for your pocket when you have nothing to do? 
        </blocks.p>
        
        <blocks.p width={700} textAlign={'left'} color="red" fontSize={2} mx={4}>
          You are not alone, <Link color={'red'} to={'https://google.com?s=yoloboi'}>recent studies</Link> alarms about a huge spike in social media addiction.
        </blocks.p>
      </blocks.fillSection>

      <blocks.fillSection alignItems="flex-start" bg="black" py={[5]} style={{'overflowY': 'hidden', 'overflowX': 'hidden', zIndex: 1338}}>
        <ScrollBackgroundImage src={require('../images/mental_health.jpg')} style={{width: '50vw', position: 'absolute', top: 150, zIndex: 1337, right: -200}}/>
        <div style={{zIndex: 1400}}>
          <blocks.h fontSize={[ 3, 4, 5, 5]} color="red" p={2} >Quite Manipulative</blocks.h>
          <blocks.h fontSize={[ 1, 3]} bg={'red'} p={2}  mx={[4]} textAlign="left"  width={700}>
            We are constantly feed with unreachable standards.
          </blocks.h> 

          <blocks.h fontSize={[ 2, 2]} bg={'blue'} p={2}  mx={[4]} textAlign="left"  width={700}>
             It makes us depressed and sick
          </blocks.h> 
          <blocks.p width={'70vw'} textAlign={'left'} fontSize={2} bg={'black'} mx={[4]} py={2}>
            Lorem ipsum dolor sit amet, mel hinc utinam no, wisi exerci bonorum in est, insolens efficiendi cotidieque sed ut. Sea munere graece eu. No vim magna debet. Ridens patrioque dissentias ad vix. Animal sanctus adolescens ad vis, magna quidam sapientem usu ei, nec eros singulis democritum et.
          </blocks.p>

          <blocks.p width={'70vw'} textAlign={'left'} fontSize={2} bg={'black'} my={1} mx={[4]} py={2}>
            Lorem ipsum dolor sit amet, mel hinc utinam no, wisi exerci bonorum in est, insolens efficiendi cotidieque sed ut. Sea munere graece eu. No vim magna debet. Ridens patrioque dissentias ad vix. Animal sanctus adolescens ad vis, magna quidam sapientem usu ei, nec eros singulis democritum et.
          </blocks.p>
        </div>
      </blocks.fillSection>
      <blocks.fillSection alignItems="flex-end" py={[5]} bg="red">
        <EyePNG />
        <EyePNG left={100}/>
        <blocks.h fontSize={[ 3, 4, 5, 5]} color="white" p={2}  mx={[4]}>It's Invasive</blocks.h>
        <blocks.h fontSize={[ 1, 3]} bg={'white'} color="red" p={2}  mx={[4]} textAlign="left"  width={700}>
         
        </blocks.h> 
        <blocks.h fontSize={[ 2, 2]} bg={'blue'} p={1}  mx={[4]} textAlign="left"  width={700}>✓ <u>Everything</u> we do is <u>tracked</u></blocks.h>
        <blocks.h fontSize={[ 2, 2]} bg={'blue'} p={1}  mx={[4]} textAlign="left"  width={700}>✓ <u>Everything</u> we do is <u>sold</u></blocks.h>
        <blocks.h fontSize={[ 2, 2]} bg={'blue'} p={1}  mx={[4]} textAlign="left"  width={700}></blocks.h>
        <blocks.p width={'70vw'} my={1} textAlign={'left'} fontSize={2} p={4}>
            Lorem ipsum dolor sit amet, mel hinc utinam no, wisi exerci bonorum in est, insolens efficiendi cotidieque sed ut. Sea munere graece eu. No vim magna debet. Ridens patrioque dissentias ad vix. Animal sanctus adolescens ad vis, magna quidam sapientem usu ei, nec eros singulis democritum et.
          </blocks.p>
      </blocks.fillSection>

      <blocks.fillSection  bg={'yellow'} color="red" py={[7]} style={{'overflow': 'hidden',}}>
        <blocks.h fontSize={[ 3, 4, 5, 5]} px={[7]} style={{zIndex: 137}} textAlign="left">
          Combined, it creates a negative feedback {WeirdLooper('loop', 14)} that <u>erodes</u> our inner self.  
        </blocks.h> 
      </blocks.fillSection>
      <blocks.fillSection  bg={'white'} color="red" py={[7]}>
        <blocks.h fontSize={[ 3, 4, 5, 5]} px={[7]} style={{zIndex: 137}} textAlign="right">
          We say, 
          <br/>
          <b>Fuck that</b>.
          <br/>
          <b>Fuck them</b>. 
          <br/>
          <b>Fuck Facebook</b>.
          <br/>
          <b>Fuck Twitter</b>.
          <br/>
          <b>Fuck Instagram</b>.
          <br/>
          <b>Fuck Investors</b>.
          <br/>
          <b>Fuck Everyone</b> who is complicit.
        </blocks.h> 
      </blocks.fillSection>
     <blocks.fillSection  bg={'black'} color="white" py={[5]}>
     <blocks.h fontSize={[ 3, 4, 5, 5]} px={[7]}>
        See our <Link to="projects" color={theme.colors.red}>Projects</Link>
      </blocks.h> 
      </blocks.fillSection>
    </Layout>
  )
}

export const pageQuery = graphql`
  {
    team: allMarkdownRemark(
      sort: { order: ASC, fields: [frontmatter___order] }
      filter: { fields: { collection: { eq: "team" } } }
    ) {
      edges {
        node {
          ...TeamMemberFragment
        }
      }
    }
  }
`
