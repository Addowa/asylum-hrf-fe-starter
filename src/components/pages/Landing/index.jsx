import React from 'react';
import pieChart from '../../../assets/pie-chart.png';
import lineGraph from '../../../assets/line-graph.png';
import barGraph from '../../../assets/bar-graph.png';
import paperStack from '../../../assets/paper-stack.jpg';
import { useNavigate } from 'react-router-dom';
import { useDownloadData } from '../../../hooks/useDownloadData.js';
import {decodeBase64} from '../../../utils/decodeBase64.js';

/**
 * TODO: Ticket 1:
 * Implement structure and styles of the Landing page using Tailwind
 * Implement any button functionality implied by the landing page screenshot example (tickets/examples)
 */
export const LandingPage = () => {
  const navigate = useNavigate();
  const { downloadCSV } = useDownloadData();

 // const scrollToTop = () => {
 //   let scrollStep = -window.scrollY / 20; // Adjust the divisor for speed
  //  let scrollInterval = setInterval(() => {
    //  if (window.scrollY === 0) {
      //  clearInterval(scrollInterval);
     // } else {
     //   window.scrollBy(0, scrollStep);
     // }
   // }, 10); // Adjust the interval time for smoothness
 // };
 const scrollToTop = () => {
    // smooth scroll to top (works across browsers)
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleReadMore = () => {
    window.open('https://humanrightsfirst.org', '_blank', 'noopener,noreferrer');
  };

  const handleExplore = () => {
    navigate('/graphs');
    // make sure page starts at top when navigating
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // return (
  //   <div className='flex flex-col w-full min-h-screen bg-gray-50 text-gray-800 font-sans'>
      
  //     <div>{'Type this into Canvas: ' + decodeBase64('VGltZTJDb2RlIQ==')}</div>
  //   </div>
  // );
  return (
    <main className="flex flex-col w-full min-h-screen bg-gray-50 text-gray-800 font-serif">
      {/* HERO */}
      <section className="flex primary-c pt-4 pb-8">
        <div className="flex-c mx-auto">
          <h1 className="text-6xl mb-8 text-white">
            Asylum Office Grant Rate Tracker
          </h1>
          <h3 className="text-white">
            The Asylum Office Grant Rate Tracker provides asylum seekers,
            researchers, policymakers, and the public an interactive tool to
            explore USCIS data on Asylum Office decisions
          </h3>
        </div>
      </section>

      {/* GRAPHS */}
      <section className="graphs-section flex-c pt-10">
        <div className="flex-c">
          <div className="flex justify-center m-14 gap-20 text-2xl">
            <div className="flex-c gap-3">
              <img src={barGraph} alt="bar chart" className="h-[300px] w-[500px]" />
              <h3>Search Grant Rates By Office</h3>
            </div>
            <div className="flex-c gap-3">
              <img src={pieChart} alt="pie chart" className="h-[300px] contain-content" />
              <h3>Search Grant Rates By Nationality</h3>
            </div>
            <div className="flex-c gap-3">
              <img src={lineGraph} alt="line graph" className="h-[300px] w-[500px]" />
              <h3>Search Grant Rates Over Time</h3>
            </div>
          </div>
          <div className="flex align-center mx-auto gap-8">
            <button
              onClick={handleExplore}
              className="bg-[#aaa] px-[10px] py-[5px] text-white text-md font-semibold"
            >
              View the Data
            </button>
            <button
              onClick={() => downloadCSV()}
              className="bg-[#aaa] px-[10px] py-[5px] text-white text-md font-semibold"
            >
              Download the Data
            </button>
          </div>
        </div>
      </section>

      {/* REPORT + TEXT */}
      <section className="middle-section flex">
        <div className="flex-1 hrf-img-container content-center p-20">
          <img src={paperStack} alt="Human Rights First" className="hrf-img rounded-2xl h-[70%] w-[100%]" />
        </div>
        <div className="middle-section-text-container flex-1 content-center p-20">
          <p className="text-xl">
            Human Rights First has created a search tool to give you a user-friendly way
            to explore a data set of asylum decisions between FY 2016 and May 2021 by the
            USCIS Asylum Office, which we received through a Freedom of Information Act request.
            You can search for information on asylum grant rates by year, nationality, and asylum office,
            visualize the data with charts and heat maps, and download the data set.
          </p>
        </div>
      </section>

      {/* SYSTEMIC DISPARITY INSIGHTS */}
      <section className="insights-section flex-c gap-16">
        <div className="insights-section-header">
          <h3 className="text-5xl">Systemic Disparity Insights</h3>
        </div>
        <div className="insights-section-details flex justify-center m-14 gap-20 text-2xl">
          <div className="flec-c-l gap-12">
            <div className="insights-details-header">
              <h3 className="text-4xl">36%</h3>
            </div>
            <div className="insights-details-contents">
              <p className="text-lg">
                By the end of the Trump administration, the average asylum office
                grant rate had fallen 36% from an average of 44 percent in fiscal
                year 2016 to 28 percent in fiscal year 2020.
              </p>
            </div>
          </div>
          <div className="flex-c-l gap-12">
            <div className="insights-details-header">
              <h3 className="text-4xl">5%</h3>
            </div>
            <div className="insights-details-content">
              <p className="text-lg">
                The New York asylum office grant rate dropped to 5 percent in
                fiscal year 2020.
              </p>
            </div>
          </div>
          <div className="flex-c-l gap-12">
            <div className="insights-details-header">
              <h3 className="text-4xl">6x Lower</h3>
            </div>
            <div className="insights-details-content">
              <p className="text-lg">
                Between fiscal year 2017 and 2020, the New York asylum office&apos;s
                average grant rate was 6 times lower than the San Francisco asylum office.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* READ MORE + BACK TO TOP */}
      <section className="read-more-section">
        <button
          onClick={handleReadMore}
          className="primary-c text-white px-4 py-2"
        >
          Read More
        </button>
      </section>
      <section className="back-to-top p-16">
        <button
          onClick={scrollToTop}
          className="back-to-top font-medium"
        >
          Back To Top ^
        </button>
      </section>
    </main>
  );
};
