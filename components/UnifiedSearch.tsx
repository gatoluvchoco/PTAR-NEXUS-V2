import React, { useState } from 'react';
import { SearchResult, ResourceType } from '../types';

const UnifiedSearch: React.FC = () => {
  const [query, setQuery] = useState('');
  
  // Dummy Data as per PTAR context
  const dummyResults: SearchResult[] = [
    {
      id: '1',
      title: 'Management of Digital Transformation',
      author: 'Dr. Marlita Mad Yusuf',
      year: 2024,
      type: ResourceType.PHYSICAL,
      shelfLocation: 'Level 2, Aisle 4, Shelf B',
      callNumber: 'HD30.2 .M37 2024',
      availability: 'Available',
      coverImage: 'https://picsum.photos/150/220?random=1'
    },
    {
      id: '2',
      title: 'The Adventures of Huckleberry Finn',
      author: 'Mark Twain',
      year: 1884,
      type: ResourceType.EBOOK,
      downloadUrl: '#',
      availability: 'Digital Access',
      coverImage: 'https://picsum.photos/150/220?random=2'
    },
    {
      id: '3',
      title: 'Impact of AI on Academic Libraries',
      author: 'Afiq Haiqal',
      year: 2023,
      type: ResourceType.THESIS,
      availability: 'Digital Access',
      coverImage: 'https://picsum.photos/150/220?random=3'
    },
    {
      id: '4',
      title: 'Strategic Information Systems Planning',
      author: 'Wahdania Ayumie',
      year: 2022,
      type: ResourceType.JOURNAL,
      availability: 'Digital Access',
      coverImage: 'https://picsum.photos/150/220?random=4'
    }
  ];

  const filteredResults = dummyResults.filter(item => 
    item.title.toLowerCase().includes(query.toLowerCase()) || 
    item.author.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* Search Input Section */}
      <div className="relative mb-10">
        <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
          <i className="fa-brands fa-google text-2xl text-gray-400"></i>
        </div>
        <input
          type="text"
          className="block w-full pl-16 pr-6 py-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl text-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:bg-white/10 transition-all shadow-2xl"
          placeholder="Search Books, Theses, and Journals..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <div className="absolute inset-y-0 right-4 flex items-center">
            <button className="p-3 bg-purple-600 hover:bg-purple-700 text-white rounded-xl transition-colors">
                <i className="fa-solid fa-arrow-right"></i>
            </button>
        </div>
      </div>

      {/* Results Section */}
      <h3 className="text-white/80 font-semibold text-lg mb-6 flex items-center">
        <i className="fa-solid fa-layer-group mr-2"></i> Search Results
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
        {filteredResults.map((result) => (
          <div 
            key={result.id} 
            className="flex bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 hover:border-purple-500/30 transition-all duration-300 group"
          >
            <div className="w-32 h-48 flex-shrink-0 overflow-hidden relative">
              <img 
                src={result.coverImage} 
                alt={result.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute top-2 left-2">
                 {result.type === ResourceType.PHYSICAL && (
                    <span className="px-2 py-1 bg-amber-500/90 text-black text-xs font-bold rounded">Physical</span>
                 )}
                 {result.type !== ResourceType.PHYSICAL && (
                    <span className="px-2 py-1 bg-cyan-500/90 text-black text-xs font-bold rounded">Digital</span>
                 )}
              </div>
            </div>
            
            <div className="p-4 flex flex-col justify-between flex-1">
              <div>
                <h4 className="text-white font-bold text-lg leading-tight mb-1">{result.title}</h4>
                <p className="text-gray-400 text-sm mb-3">{result.author} • {result.year}</p>
                
                {result.type === ResourceType.PHYSICAL ? (
                  <div className="flex items-start gap-2 text-sm text-gray-300 bg-white/5 p-2 rounded-lg">
                    <i className="fa-solid fa-location-dot mt-1 text-amber-400"></i>
                    <div>
                        <p className="font-medium text-amber-200">{result.shelfLocation}</p>
                        <p className="text-xs opacity-70">Call No: {result.callNumber}</p>
                    </div>
                  </div>
                ) : (
                    <div className="flex items-center gap-2 text-sm text-gray-300 bg-white/5 p-2 rounded-lg">
                    <i className="fa-solid fa-cloud-arrow-down text-cyan-400"></i>
                    <p className="font-medium text-cyan-200">Instant Access</p>
                  </div>
                )}
              </div>

              <div className="mt-4 flex gap-3">
                {result.type === ResourceType.PHYSICAL ? (
                    <button className="flex-1 py-2 px-4 bg-white/10 hover:bg-amber-500 hover:text-black border border-white/20 text-white rounded-lg text-sm font-medium transition-all">
                        Locate Shelf
                    </button>
                ) : (
                    <button className="flex-1 py-2 px-4 bg-cyan-600/20 hover:bg-cyan-500 hover:text-black border border-cyan-500/50 text-cyan-300 rounded-lg text-sm font-medium transition-all flex items-center justify-center gap-2">
                         <i className="fa-regular fa-file-pdf"></i> Download
                    </button>
                )}
                <button className="w-10 flex items-center justify-center bg-white/5 hover:bg-white/20 rounded-lg text-white transition-colors">
                    <i className="fa-regular fa-heart"></i>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UnifiedSearch;