import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={utilStyles.headingMd}>
      <section className={utilStyles.mar}>
        
        <h3>Description:</h3>
        <p> As a Computer Engineer my ultimate goal is to learn and and widen my knowledge.
           My greatest strength is that I am adaptive and flexible. 
           </p>
           </section>
      </section>

      <section className= {utilStyles.sectionDiv}>


      <section className= {utilStyles.rowColumn1}>
        <h3>Personal Information</h3>

        <b>Address</b>
        <p>Villa Sto. Domingo Mexico, Pampanga</p>
        <p><b>Phone</b></p>
        <p>09164572394</p>
        <p><b>Email</b></p>
        <p>angelainedelossantos@gmail.com</p>
      </section>


      <section className= {utilStyles.rowColumn2}>
        <h3>Education</h3>
        <p> <b>• 2019-present - Bachelor of Science in Computer Engineering</b></p>
        <p>University of the Assumption</p>
        <p> <b>• 2017-2019 - Senior High School</b></p>
        <p>University of the Assumption</p>
        <p> <b>• 2013-2017- Junior High School</b></p>
        <p>Saint Mary’s Angels College of Pampanga</p>
        <p><b>• 2006-2013- Elementary </b></p>
        <p>San Fernando Elementary School</p>
      </section>

      </section>

     <section className= {utilStyles.sectionDiv}>



      <section className= {utilStyles.rowColumn1}>
        <h3>Skills</h3>
        <p>• Effective communication </p>
        <p>• Responsibility</p>
        <p>• Creativity </p>
        <p>• Problem-solving </p>
        <p>• Adaptability </p>
        <p>• Critical Thinking</p>
        <p>•Public Speaking </p>
        <p>•Teamwork Skills </p>
      </section>

      </section>


  
      
    </Layout>
  );
}