import { useState } from "react";
import { FaArrowRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const articles = [
    {
      title: "Top 10 Test Automation Trends to Watch in 2025",
      date: "13th June 2025",
      image: "https://novaturetech.com/wp-content/uploads/2025/06/Best-Webcast-Practices.png",
      link: "https://novaturetech.com/top-10-test-automation-trends-to-watch-in-2025/",
      excerpt: "Test automation has grown beyond its initial role of bug detection and now empowers end-to-end QA at speed...",
    },
    {
      title: "The Future of Banking and Finance: The Role of QA Testing",
      date: "3rd March 2025",
      image: "https://novaturetech.com/wp-content/uploads/2025/03/The-future-of-AI-in-banking-scaled.jpg",
      link: "https://novaturetech.com/the-future-of-banking-and-finance-the-role-of-qa-testing/",
      excerpt: "Banking is transforming rapidly — here's how QA enables innovation, compliance, and customer trust...",
    },
    {
      title: "Smart Health Care App Design Companies Dubai",
      date: "21st January 2025",
      image: "https://novaturetech.com/wp-content/uploads/2025/01/Healthcare-App-Development-Top-Features-Challenges-to-Consider-624x312-1.jpg",
      link: "https://novaturetech.com/smart-health-care-app-design-companies-dubai/",
      excerpt: "Digital health apps are evolving. Discover the design challenges and testing needs shaping Dubai's tech ecosystem...",
    },
    {
      title: "The Advent of AI demands more quality Engineering Efforts Than Coding Efforts",
      date: "7th June 2024",
      image: "https://novaturetech.com/wp-content/uploads/2024/06/AI_demands_more_quality_Engineering_Efforts_Than_Coding_Efforts-Novature.png",
      link: "https://novaturetech.com/the-advent-of-ai-demands-more-quality-engineering-efforts-than-coding-efforts/",
      excerpt: "The rise of AI necessitates a greater emphasis on quality engineering over coding efforts. Coding VS Testing...",
    },
    {
      title: "How AI is Revolutionizing Quality Engineering in the Digital Era",
      date: "16th January 2024",
      image: "https://novaturetech.com/wp-content/uploads/2024/01/Marketing-Blog-YouTube-Thumbnail-1.png",
      link: "https://novaturetech.com/how-ai-is-revolutionizing-quality-engineering-in-the-digital-era/",
      excerpt: "Explore how AI is revolutionizing QA with automation, predictive insights, and faster feedback loops...",
    },
    {
      title: "How to Enable Performance Testing in Your CI/CD Pipeline",
      date: "22nd November 2023",
      image: "https://novaturetech.com/wp-content/uploads/2023/11/Performance-Testing.png",
      link: "https://novaturetech.com/how-to-enable-performance-testing-in-your-ci-cd-pipeline/",
      excerpt: "Learn how to integrate robust performance testing into your CI/CD process and ensure scalable releases...",
    },
    {
      title: "Introduction to Playwright: The Next Generation of Browser Automation",
      date: "5th October 2023",
      image: "https://novaturetech.com/wp-content/uploads/2023/10/Playwrite-Next-Generation-Browser-Automation.png",
      link: "https://novaturetech.com/introduction-to-playwright-the-next-generation-of-browser-automation/",
      excerpt: "Why Playwright is emerging as a top automation framework, and how it outperforms older tools...",
    },
    {
      title: "TOP 10 Reasons to Prioritize Web Application Security Testing",
      date: "13th September 2023",
      image: "https://novaturetech.com/wp-content/uploads/2023/09/TOP-10-Reasons-to-Prioritize-Web-Application-Security-Testing-1-1.png",
      link: "https://novaturetech.com/top-10-reasons-to-prioritize-web-application-security-testing/",
      excerpt: "Web apps are increasingly targeted by cyberattacks. Here’s why security testing must be top priority...",
    },
    {
      title: "Why A leading IT company offered 36000 USD to find a security bug?",
      date: "25th April 2023",
      image: "https://novaturetech.com/wp-content/uploads/2023/04/Art-2.jpg",
      link: "https://novaturetech.com/why-a-leading-it-company-offered-36000-usd-to-find-a-security-bug/",
      excerpt: "Apple paid $36,000 for discovering an HTTP smuggling bug. Here's why bug bounties matter...",
    },
    {
      title: "Not All Test Cases qualify for Automation",
      date: "9th March 2023",
      image: "https://novaturetech.com/wp-content/uploads/2023/03/Capture.jpg",
      link: "https://novaturetech.com/not-all-test-cases-qualify-for-automation/",
      excerpt: "Automating everything isn’t the solution. Learn how to evaluate test cases for automation feasibility...",
    },
    {
      title: "API Automation using Rest Assured",
      date: "16th February 2023",
      image: "https://d1krbhyfejrtpz.cloudfront.net/blog/wp-content/uploads/2024/07/26120225/API-Based-Automation-Streamlining-Processes-for-Maximum-Efficiency-1536x699.jpg",
      link: "https://novaturetech.com/api-automation-using-rest-assured/",
      excerpt: "Rest Assured is a top choice for API testing. This article explores how to use it effectively...",
    },
    {
      title: "Webinar on “Why should you revisit your SaaS product cybersecurity strategy for the better scalability?”",
      date: "11th January 2023",
      image: "https://novaturetech.com/wp-content/uploads/2023/01/WhatsApp-Image-2023-01-12-at-1.51.18-PM.jpeg",
      link: "https://novaturetech.com/webinar-on-why-should-you-revisit-your-saas-product-cybersecurity-strategy-for-the-better-scalability/",
      excerpt: "Explore key strategies in SaaS cybersecurity for improved scale, uptime and threat defense...",
    },
    {
      title: "WHY WE GO FOR KATALON STUDIO?",
      date: "20th December 2022",
      image: "https://novaturetech.com/wp-content/uploads/2022/12/Katalon-Studio-Blog-Image.jpg",
      link: "https://novaturetech.com/why-we-go-for-katalon-studio/",
      excerpt: "Katalon Studio: The user-friendly, free QA automation platform that accelerates testing for all teams...",
    },
  ];
  

const Insights = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 6;

   const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = articles.slice(indexOfFirstArticle, indexOfLastArticle);
  const totalPages = Math.ceil(articles.length / articlesPerPage);

   const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <section className="bg-[#f9f9f9] py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center mb-14">
        <h2 className="text-4xl font-extrabold text-[var(--primary-blue)] mb-4">
          Insights & Articles
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-base">
          Stay updated with the latest trends, innovations, and thought leadership from the software quality world.
        </p>
        <div className="w-20 h-1 bg-[var(--secondary-blue)] mx-auto mt-4" />
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
        {currentArticles.map((article, index) => (
          <div
            key={index}
            className="bg-white rounded-xl overflow-hidden shadow hover:shadow-xl transition duration-300 flex flex-col"
          >
            <img
              src={article.image}
              alt={article.title}
              className="h-48 w-full object-cover"
            />
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <p className="text-sm text-gray-500 mb-1">By Admin • {article.date}</p>
                <h3 className="text-lg font-bold text-[var(--primary-blue)] mb-2">
                  {article.title}
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {article.excerpt}
                </p>
              </div>
              <a
                href={article.link}
                className="mt-4 inline-flex items-center text-[var(--secondary-blue)] font-semibold hover:text-[var(--primary-blue)] transition"
              >
                Continue Reading <FaArrowRight className="ml-2 text-sm" />
              </a>
            </div>
          </div>
        ))}
      </div>

       {totalPages > 1 && (
        <div className="flex justify-center items-center space-x-2 mt-8">
          <button
            onClick={() => paginate(currentPage > 1 ? currentPage - 1 : 1)}
            disabled={currentPage === 1}
            className={`p-2 rounded-full ${currentPage === 1 ? 'text-gray-400 cursor-not-allowed' : 'text-[var(--primary-blue)] hover:bg-[var(--light-blue)]/20'}`}
          >
            <FaChevronLeft />
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
            <button
              key={number}
              onClick={() => paginate(number)}
              className={`w-10 h-10 rounded-full flex items-center justify-center ${currentPage === number ? 'bg-[var(--secondary-blue)] text-white' : 'text-[var(--primary-blue)] hover:bg-[var(--light-blue)]/20'}`}
            >
              {number}
            </button>
          ))}

          <button
            onClick={() => paginate(currentPage < totalPages ? currentPage + 1 : totalPages)}
            disabled={currentPage === totalPages}
            className={`p-2 rounded-full ${currentPage === totalPages ? 'text-gray-400 cursor-not-allowed' : 'text-[var(--primary-blue)] hover:bg-[var(--light-blue)]/20'}`}
          >
            <FaChevronRight />
          </button>
        </div>
      )}
    </section>
  );
};

export default Insights;