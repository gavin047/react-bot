import React from 'react';
import Bot from './Bot';

const YourBot = ({ army, onRelease, onDischarge }) => {
  return (
    <div className="your-bot-army">
      <h2>BOT ARMY ...</h2>
      {army.map((bot) => (
        <Bot key={bot.id} bot={bot} onRelease={onRelease} onDischarge={onDischarge} />
      ))}
    </div>
  );
};

export default YourBot;