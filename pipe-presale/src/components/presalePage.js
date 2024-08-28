import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { Twitter, Github, Send, Menu, BookOpen } from 'lucide-react';

const CountdownCard = ({ value, label }) => (
  <div className="bg-white shadow-lg rounded-lg p-2 sm:p-4 mx-1 sm:mx-2 w-16 sm:w-24 text-center">
    <div className="text-xl sm:text-3xl font-bold text-blue-600">{value}</div>
    <div className="text-xs sm:text-sm text-gray-600">{label}</div>
  </div>
);

const Header = () => (
  <header className="bg-yellow-500 text-black p-4">
    <div className="container mx-auto flex justify-between items-center">
      <div className="flex items-center">
        <img 
          src="/images/40x40-pipe.png" 
          alt="pIPe Logo Left" 
          className="w-10 h-10 rounded-full mr-2"
        />
        <div className="text-2xl font-bold">$pIPe Coin</div>
        <img 
          src="/images/40x40-pipe.png" 
          alt="pIPe Logo Right" 
          className="w-10 h-10 rounded-full ml-2"
        />
      </div>
      <nav className="hidden md:flex items-center">
        <ul className="flex space-x-4 mr-4">
          <li><a href="#about" className="hover:text-blue-200">About</a></li>
          <li><a href="#tokenomics" className="hover:text-blue-200">Tokenomics</a></li>
          <li><a href="#roadmap" className="hover:text-blue-200">Roadmap</a></li>
        </ul>
      </nav>
      <button className="md:hidden">
        <Menu size={24} />
      </button>
    </div>
  </header>
);

const PresalePage = () => {
  const [timeLeft, setTimeLeft] = useState(10 * 24 * 60 * 60); // 10 days in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => prevTime > 0 ? prevTime - 1 : 0);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (time) => {
    const days = Math.floor(time / (24 * 60 * 60));
    const hours = Math.floor((time % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.floor((time % (60 * 60)) / 60);
    const seconds = time % 60;
    return { days, hours, minutes, seconds };
  };

  const roadmapData = [
    { quarter: 'Q3 2024', milestone: 'Token Launch', side: 'left' },
    { quarter: 'Q4 2024', milestone: 'DEX Listing', side: 'right' },
    { quarter: 'Q1 2025', milestone: 'CEX Listing', side: 'left' },
    { quarter: 'Q2 2025', milestone: 'NFT Collection', side: 'right' },
    { quarter: 'Q3 2025', milestone: 'Governance', side: 'left' },
  ];

  const tokenomicsData = [
    { name: 'Presale', value: 40 },
    { name: 'Liquidity', value: 30 },
    { name: 'Team', value: 10 },
    { name: 'Marketing', value: 10 },
    { name: 'Community', value: 10 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

  const { days, hours, minutes, seconds } = formatTime(timeLeft);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-red-800 text-white">
      <Header />
      <main className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center mb-12">
            <div className="flex justify-center items-center mb-4">
              <img 
                src="/images/60x60-pipe.png" 
                alt="pIPe Mascot Left" 
                className="w-16 h-16 mr-4"
              />
              <h1 className="text-4xl font-bold text-center">$pIPe takes Meme's 'copy-paste' to a whole new level!</h1>
              <img 
                src="/images/60x60-pipe.png" 
                alt="pIPe Mascot Right" 
                className="w-16 h-16 ml-4"
              />
            </div>
            <a 
              href="https://app.gitbook.com/o/QGB41nHnmxxgEewO9FSE/s/wIqox2UqAcPp6XYqimNC/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-white text-blue-600 px-6 py-2 rounded-full flex items-center hover:bg-blue-100 transition duration-300"
            >
              <BookOpen size={18} className="mr-2" />
              Learn More on GitBook
            </a>
          </div>
          
          <div className="bg-white bg-opacity-10 shadow rounded-lg p-6 mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-center">Presale Countdown</h2>
            <div className="flex justify-center flex-wrap">
              <CountdownCard value={days} label="Days" />
              <CountdownCard value={hours} label="Hours" />
              <CountdownCard value={minutes} label="Minutes" />
              <CountdownCard value={seconds} label="Seconds" />
            </div>
          </div>
          
          <div id="roadmap" className="bg-white bg-opacity-10 shadow rounded-lg p-6 mb-12">
            <h2 className="text-2xl font-semibold mb-4">Roadmap</h2>
            <div className="relative">
              <div className="absolute left-1/2 h-full w-1 bg-white bg-opacity-50 transform -translate-x-1/2"></div>
              {roadmapData.map((item, index) => (
                <div key={index} className={`flex items-center mb-8 ${item.side === 'left' ? 'flex-row-reverse' : ''}`}>
                  <div className={`w-5/12 ${item.side === 'left' ? 'text-right' : 'text-left'}`}>
                    <h3 className="text-lg font-semibold">{item.quarter}</h3>
                    <p>{item.milestone}</p>
                  </div>
                  <div className="w-2/12 flex justify-center">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                  <div className="w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
          
          <div id="tokenomics" className="bg-white bg-opacity-10 shadow rounded-lg p-6 mb-12">
            <h2 className="text-2xl font-semibold mb-4">Tokenomics</h2>
            <div className="flex flex-wrap">
              <div className="w-full md:w-1/2 mb-6 md:mb-0">
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={tokenomicsData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {tokenomicsData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="w-full md:w-1/2">
                <div className="flex items-center mb-4">
                  <div className="w-2/3">
                    <h3 className="text-xl font-semibold mb-2">Token Details</h3>
                    <ul className="list-disc pl-5">
                      <li>Name: $pIPe</li>
                      <li>Symbol: $PIPE</li>
                      <li>Total Supply: 1,000,000,000 PIPE</li>
                      <li>Blockchain: Story Protocol (Layer 1)</li>
                      <li>Token Standard: [Insert standard, e.g., SP-20]</li>
                    </ul>
                  </div>
                  <div className="w-1/3">
                    <img 
                      src="/images/200x200-pipe.png" 
                      alt="Intellectual Frog" 
                      className="w-full h-auto rounded-lg shadow-lg"
                    />
                  </div>
                </div>
                {/* <div className="flex items-start mt-4">
                  <div className="w-1/3 mr-4">
                    <img 
                      src="/images/200x200-pipe.png" 
                      alt="Presale Info Image" 
                      className="w-full h-auto rounded-lg shadow-lg"
                    />
                  </div>
                  <div className="w-2/3">
                    <h3 className="text-xl font-semibold mb-2">Presale Info</h3>
                    <ul className="list-disc pl-5">
                      <li>Presale Price: 1 $PIPE = [Insert price]</li>
                      <li>Listing Price: 1 $PIPE = [Insert price]</li>
                      <li>Soft Cap: [Insert amount]</li>
                      <li>Hard Cap: [Insert amount]</li>
                      <li>Min/Max Contribution: [Insert amounts]</li>
                    </ul>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
          
          <div className="flex justify-center space-x-6">
            <a href="https://t.me/pIPecoin" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-200">
              <Send size={24} />
            </a>
            <a href="https://twitter.com/pIPecoin" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-200">
              <Twitter size={24} />
            </a>
            <a href="https://github.com/pIPecoin" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200">
              <Github size={24} />
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PresalePage;