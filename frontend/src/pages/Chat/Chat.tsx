import { useState } from 'react';
import './Chat.less';

export default function Chat() {
  const [msg, setMsg] = useState('');

  return (
    <div className='node-chat'>
      <div className='node-chat-wrapper'>
        <div className='menu'>
          <div className='controls'></div>
          <div className='list'>
            <img src='https://picsum.photos/200?r=1' alt='' className='avatar' />
          </div>
        </div>
        <div className='chat'>
          <div className='list'>
            <div className='item active'>
              <img src='https://picsum.photos/200?r=3' alt='' className='avatar' />
              <span className='nickname'>hello</span>
              <span className='desc'>How are you</span>
            </div>
            <div className='item'>
              <img src='https://picsum.photos/200?r=4' alt='' className='avatar' />
              <span className='nickname'>world</span>
              <span className='desc'>I'm fine, thanks</span>
            </div>
          </div>
        </div>
        <div className='content'>
          <div className='header'>
            <div className='nickname'>hello</div>
          </div>
          <div className='message-list'>
            <div className='item'>
              <img src='https://picsum.photos/200?r=3' alt='' className='avatar' />
              <div>
                <span className='nickname'>hello</span>
                <span className='msg'>海上升明月，天涯共此时。谁知盘中餐，粒粒皆辛苦。</span>
              </div>
            </div>
            <div className='item my'>
              <img src='https://picsum.photos/200?r=1' alt='' className='avatar' />
              <span className='msg'>如无必要，勿增实体</span>
            </div>
          </div>
          <div className='sent'>
            <textarea className='msg-input' />
          </div>
        </div>
      </div>
    </div>
  );
}

// export default Layout;
