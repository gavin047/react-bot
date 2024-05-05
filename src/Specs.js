import React from 'react';

const Specs = ({ bot, onEnlist, onGoBack }) => {
  const handleEnlist = () => {
    onEnlist(bot);
    onGoBack();
  };

  return (
    <div>
      <h2>Bot information</h2>
      <img src={bot.avatar_url} alt={bot.name} className="bot-image" />
      <h3>{bot.name}</h3>
      <p>{bot.bot_class}</p>
      <button onClick={handleEnlist} className="enlist-button">
        Enlist
      </button>
      <button onClick={onGoBack} className="back-button">
        X
      </button>
    </div>
  );
};

export default Specs;