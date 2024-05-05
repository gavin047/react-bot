import React, { useState } from 'react';
import BotCollection from './Collection';
import YourBotArmy from './YourBot.js';
import SortBar from './Sort';
import BotSpecs from './Specs'; 
import './App.css';
import jsonData from './db.json';

const App = () => {
  const [botData] = useState(jsonData.bots);
  const [botArmy, setBotArmy] = useState([]);
  const [botFilters, setBotFilters] = useState([]);
  const [botSortType, setBotSortType] = useState(null);
  const [selectedBot, setSelectedBot] = useState(null);

  const enlistBot = (bot) => {
    if (!botArmy.some((b) => b.bot_class === bot.bot_class)) {
      setBotArmy([...botArmy, bot]);
    }
  };

  const releaseBot = (bot) => {
    const updatedArmy = botArmy.filter((b) => b.id !== bot.id);
    setBotArmy(updatedArmy);
  };

  const dischargeBot = async (bot) => {
    try {
      if (botArmy.filter((b) => b.bot_class === bot.bot_class).length > 1) {
        const updatedArmy = botArmy.filter((b) => b.id !== bot.id);
        setBotArmy(updatedArmy);
      } else {
        await fetch(`http://localhost:8001/bots/${bot.id}`, {
          method: 'DELETE',
        });
        const updatedArmy = botArmy.filter((b) => b.id !== bot.id);
        setBotArmy(updatedArmy);
      }
    } catch (error) {
      console.error('Error discharging bot:', error);
    }
  };

  const handleFilterChange = (filter) => {
    setBotFilters((prevFilters) =>
      prevFilters.includes(filter)
        ? prevFilters.filter((f) => f !== filter)
        : [...prevFilters, filter]
    );
  };

  const handleSortTypeChange = (type) => {
    setBotSortType(type);
  };

  const handleBotClick = (bot) => {
    setSelectedBot(bot);
  };

  const handleGoBack = () => {
    setSelectedBot(null);
  };

  const filteredBots = botData.filter(
    (bot) => botFilters.length === 0 || botFilters.includes(bot.bot_class)
  );

  const sortedBots = botSortType
    ? [...filteredBots].sort((a, b) => b[botSortType] - a[botSortType])
    : filteredBots;

  return (
    <div>
      <h1 className="AppHeader" >THE BOT APP </h1>
      <SortBar
        sortType={botSortType}
        onSortTypeChange={handleSortTypeChange}
        filters={botFilters}
        onFilterChange={handleFilterChange}
      />
      <div className="AppContainer">
        <div className="YourBotArmy">
          {selectedBot ? (
            <BotSpecs bot={selectedBot} onEnlist={enlistBot} onGoBack={handleGoBack} />
          ) : (
            <YourBotArmy army={botArmy} onRelease={releaseBot} onDischarge={dischargeBot} />
          )}
        </div>
        <div className="BotCollection">
          <BotCollection bots={sortedBots} onEnlist={enlistBot} onClick={handleBotClick} />
        </div>
      </div>
    </div>
  );
};

export default App;
