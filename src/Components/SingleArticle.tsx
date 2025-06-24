import { useParams, Link } from "react-router-dom";
import { FaArrowLeft, FaFacebook, FaTwitter, FaLinkedin, FaLink } from "react-icons/fa";
import { articles } from "../data/articles";

const SingleArticle = () => {
  const { id } = useParams<{ id: string }>();
  const article = articles.find(article => article.id === Number(id));

  if (!article) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#f9f9f9] p-6">
        <h2 className="text-2xl md:text-3xl font-bold text-red-500 mb-4">Article not found</h2>
        <Link
          to="/insights"
          className="inline-flex items-center text-[var(--secondary-blue)] hover:text-[var(--primary-blue)] mt-4 px-6 py-2 border border-[var(--secondary-blue)] rounded-lg transition-all"
        >
          <FaArrowLeft className="mr-2" />
          Back to Insights
        </Link>
      </div>
    );
  }

  const shareOnSocial = (platform: string) => {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(article.title);
    let shareUrl = '';
    
    switch(platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${title}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${title}`;
        break;
      default:
        return;
    }
    
    window.open(shareUrl, '_blank', 'width=600,height=400');
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    alert('Link copied to clipboard!');
  };

  return (
    <div className="bg-[#f9f9f9]">
       <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-6">
          <Link
            to="/insights"
            className="inline-flex items-center text-[var(--secondary-blue)] hover:text-[var(--primary-blue)] group transition-all"
          >
            <FaArrowLeft className="mr-2 transition-transform group-hover:-translate-x-1" />
            Back to Insights
          </Link>
        </div>
      </div>

      {/* Main Article Content */}
      <article className="max-w-4xl mx-auto px-6 md:px-12 py-12">
        {/* Article Metadata */}
        <div className="mb-8">
          <span className="inline-block px-3 py-1 bg-[var(--light-blue)] text-[var(--black)] rounded-full text-sm font-medium mb-4">
            {article.category}
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--primary-blue)] mb-4 leading-tight">
            {article.title}
          </h1>
          <div className="flex items-center text-gray-500 mb-6">
            <span>By {article.author}</span>
            <span className="mx-2">•</span>
            <span>{article.date}</span>
          </div>
        </div>
 

        {article.content && (
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        )}

        {/* Social Sharing */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Share this article</h3>
          <div className="flex space-x-4">
            <button 
              onClick={() => shareOnSocial('facebook')}
              className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-colors"
              aria-label="Share on Facebook"
            >
              <FaFacebook className="text-lg" />
            </button>
            <button 
              onClick={() => shareOnSocial('twitter')}
              className="w-10 h-10 rounded-full bg-blue-400 text-white flex items-center justify-center hover:bg-blue-500 transition-colors"
              aria-label="Share on Twitter"
            >
              <FaTwitter className="text-lg" />
            </button>
            <button 
              onClick={() => shareOnSocial('linkedin')}
              className="w-10 h-10 rounded-full bg-blue-700 text-white flex items-center justify-center hover:bg-blue-800 transition-colors"
              aria-label="Share on LinkedIn"
            >
              <FaLinkedin className="text-lg" />
            </button>
            <button 
              onClick={copyToClipboard}
              className="w-10 h-10 rounded-full bg-gray-600 text-white flex items-center justify-center hover:bg-gray-700 transition-colors"
              aria-label="Copy link"
            >
              <FaLink className="text-lg" />
            </button>
          </div>
        </div>

        {/* Author Bio (optional) */}
        <div className="mt-12 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center">
            <div className="flex-shrink-0 mr-4">
              <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center text-gray-500">
                {article.author?.charAt(0)}
              </div>
            </div>
            <div>
              <h4 className="font-bold text-gray-800">{article.author}</h4>
              <p className="text-sm text-gray-500">Author at Novature Tech</p>
            </div>
          </div>
        </div>

        {/* Back to Insights */}
        <div className="mt-16 text-center">
          <Link
            to="/insights"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-[var(--secondary-blue)] hover:bg-[var(--primary-blue)] transition-colors"
          >
            <FaArrowLeft className="mr-2" />
            Back to Insights
          </Link>
        </div>
      </article>
    </div>
  );
};

export default SingleArticle;