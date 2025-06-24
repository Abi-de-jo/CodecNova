import { useState } from "react";
import { FaArrowRight, FaChevronLeft, FaChevronRight, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { articles } from "../data/articles";

const Insights = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const articlesPerPage = 12;

  // Filter articles based on search term
  const filteredArticles = articles.filter(article =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.content?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = filteredArticles.slice(indexOfFirstArticle, indexOfLastArticle);
  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); // Reset to first page when searching
  };

  return (
    <section className="bg-[#f9f9f9] py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-extrabold text-[var(--primary-blue)] mb-4">
            Insights & Articles
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Stay updated with the latest trends, innovations, and thought leadership from the software quality world.
          </p>
          <div className="w-24 h-1 bg-[var(--secondary-blue)] mx-auto mt-6" />
        </div>

        {/* Search Bar */}
        <div className="mb-12 max-w-2xl mx-auto relative">
          <div className="relative">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={handleSearch}
              className="w-full px-5 py-3 pr-12 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--secondary-blue)] focus:border-transparent shadow-sm"
            />
            <FaSearch className="absolute right-5 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          {searchTerm && (
            <p className="text-sm text-gray-500 mt-2">
              Showing {filteredArticles.length} results for "{searchTerm}"
            </p>
          )}
        </div>

        {/* Articles Grid */}
        {currentArticles.length > 0 ? (
          <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {currentArticles.map((article) => (
                <div
                  key={article.id}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col"
                >
                  <div className="relative h-48 w-full overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                      <p className="text-xs text-white/90">By {article.author} • {article.date}</p>
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-[var(--primary-blue)] mb-3 line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    <Link
                      to={`/insights/${article.id}`}
                      className="mt-auto inline-flex items-center text-[var(--secondary-blue)] font-semibold hover:text-[var(--primary-blue)] transition group"
                    >
                      Continue Reading
                      <FaArrowRight className="ml-2 text-sm transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center space-x-2 mt-12">
                <button
                  onClick={() => paginate(currentPage > 1 ? currentPage - 1 : 1)}
                  disabled={currentPage === 1}
                  className={`p-3 rounded-full ${currentPage === 1 ? 'text-gray-400 cursor-not-allowed' : 'text-[var(--primary-blue)] hover:bg-[var(--light-blue)]/20'}`}
                  aria-label="Previous page"
                >
                  <FaChevronLeft />
                </button>

                {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
                  let pageNumber;
                  if (totalPages <= 5) {
                    pageNumber = i + 1;
                  } else if (currentPage <= 3) {
                    pageNumber = i + 1;
                  } else if (currentPage >= totalPages - 2) {
                    pageNumber = totalPages - 4 + i;
                  } else {
                    pageNumber = currentPage - 2 + i;
                  }

                  return (
                    <button
                      key={pageNumber}
                      onClick={() => paginate(pageNumber)}
                      className={`w-12 h-12 rounded-full flex items-center justify-center ${currentPage === pageNumber ? 'bg-[var(--secondary-blue)] text-white' : 'text-[var(--primary-blue)] hover:bg-[var(--light-blue)]/20'}`}
                    >
                      {pageNumber}
                    </button>
                  );
                })}

                {totalPages > 5 && (
                  <span className="px-2">...</span>
                )}

                <button
                  onClick={() => paginate(currentPage < totalPages ? currentPage + 1 : totalPages)}
                  disabled={currentPage === totalPages}
                  className={`p-3 rounded-full ${currentPage === totalPages ? 'text-gray-400 cursor-not-allowed' : 'text-[var(--primary-blue)] hover:bg-[var(--light-blue)]/20'}`}
                  aria-label="Next page"
                >
                  <FaChevronRight />
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium text-gray-600">
              No articles found matching your search
            </h3>
            <button
              onClick={() => {
                setSearchTerm("");
                setCurrentPage(1);
              }}
              className="mt-4 text-[var(--secondary-blue)] font-medium hover:text-[var(--primary-blue)]"
            >
              Clear search
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Insights;