import { message } from 'antd';
import copy from 'copy-to-clipboard';
import React from 'react';

import s from './index.scss';

interface Props {
  emojis: string[];
}

const EmojiItem: React.FC<Props> = ({ emojis }) => {
  return (
    <>
      {emojis.map((item: string, index: number) => (
        <div
          className={s.emoji}
          key={index}
          onClick={() => copy(item) && message.success('已复制到剪切板!')}
        >
          {item}
        </div>
      ))}
    </>
  );
};

export default EmojiItem;
