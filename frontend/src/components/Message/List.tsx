import './index.less';
import Item from './Item';

export default function List() {
  const msgList = [
    {
      nickname: 'hello',
      id: '002',
      avatar: 'https://picsum.photos/200?r=3',
      msg: '你好',
    },
    {
      nickname: 'hello',
      id: '002',
      avatar: 'https://picsum.photos/200?r=3',
      msg: '你在干嘛呢',
    },
    {
      nickname: 'bran',
      id: 'my',
      avatar: 'https://picsum.photos/200?r=1',
      msg: 'working',
    },
  ];

  return (
    <div className="message-list">
      {msgList.map(item => (
        <Item data={item} />
      ))}
    </div>
  );
}
