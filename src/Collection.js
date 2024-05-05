import React from 'react';
import Bot from './Bot';

const Collection = ({ bots, onEnlist, onClick }) => {
  return (
    <div className="bot-collection">
      {bots.map((bot) => (
        <Bot key={bot.id} bot={bot} onEnlist={onEnlist} onClick={() => onClick(bot)} />
      ))}
    </div>
  );
};

export default Collection;