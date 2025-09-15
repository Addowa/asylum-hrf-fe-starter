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
    <main className="flex flex-col w-full min-h-screen bg-gray-50 text-gray-800 font-sans">
      {/* HERO */}
      <section className="w-full primary-c text-amber-50 py-20">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold">
            Asylum Office Grant Rate Tracker
          </h1>
          <p className="mt-6 text-lg md:text-xl">
            The Asylum Office Grant Rate Tracker provides asylum seekers,
            researchers, policymakers, and the public an interactive tool to
            explore USCIS data on Asylum Office decisions
          </p>
        </div>
      </section>

      {/* GRAPHS */}
      <section className="max-w-6xl mx-auto px-8 py-14">
        <div className="grid grid-cols-3 gap-6 overflow-x-auto">
          <article>
            <img src={barGraph} alt="bar chart" className="w-full h-64 object-contain" />
            <p className="mt-2 text-xs text-gray-500 italic">Search Grant Rates By Office</p>
          </article>
          <article>
            <img src={pieChart} alt="pie chart" className="w-full h-64 object-contain" />
            <p className="mt-2 text-xs text-gray-500 italic">Search Grant Rates By Nationality</p>
          </article>
          <article>
            <img src={lineGraph} alt="line graph" className="w-full h-64 object-contain" />
            <p className="mt-2 text-xs text-gray-500 italic">Search Grant Rates Over Time</p>
          </article>
        </div>
        <div className="flex gap-4">
          <button
            onClick={handleExplore}
            className="px-6 py-3 rounded-2xl bg-blue-600 text-white font-semibold shadow"
          >
            View the Data
          </button>
          <button
            onClick={() => downloadCSV()}
            className="px-6 py-3 rounded-2xl bg-green-600 text-white font-semibold shadow"
          >
            Download the Data
          </button>
        </div>
      </section>

      {/* REPORT + TEXT */}
      <section className="max-w-6xl mx-auto px-8 py-14 flex flex-col md:flex-row items-center gap-8">
        <div className="w-60 h-80 rounded-lg overflow-hidden shadow-lg">
          <img src={paperStack} alt="annual report" className="w-full h-full object-cover" />
        </div>
        <p className="text-left max-w-2xl">
          Human Rights First has created a search tool to give you a user-friendly way
          to explore a data set of asylum decisions between FY 2016 and May 2021 by the
          USCIS Asylum Office, which we received through a Freedom of Information Act request.
          You can search for information on asylum grant rates by year, nationality, and asylum office,
          visualize the data with charts and heat maps, and download the data set.
        </p>
      </section>

      {/* SYSTEMIC DISPARITY INSIGHTS */}
      <section className="max-w-4xl mx-auto px-8 py-14 text-left">
        <h2 className="text-2xl font-bold mb-8">Systemic Disparity Insights</h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-bold">36%</h3>
            <p>
              By the end of the Trump administration, the average asylum office
              grant rate had fallen 36% from an average of 44 percent in fiscal
              year 2016 to 28 percent in fiscal year 2020.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold">5%</h3>
            <p>
              The New York asylum office grant rate dropped to 5 percent in
              fiscal year 2020.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold">6x Lower</h3>
            <p>
              Between fiscal year 2017 and 2020, the New York asylum office&apos;s
              average grant rate was 6 times lower than the San Francisco asylum office.
            </p>
          </div>
        </div>
      </section>

      {/* READ MORE + BACK TO TOP */}
      <section className="py-10 flex flex-col items-center gap-4">
        <button
          onClick={handleReadMore}
          className="px-6 py-3 rounded-2xl bg-blue-700 text-white font-semibold shadow"
        >
          Read More
        </button>
        <button
          onClick={scrollToTop}
          className="px-6 py-3 rounded-2xl bg-gray-600 text-white font-semibold shadow"
        >
          Back To Top
        </button>
      </section>
    </main>
  );
};
