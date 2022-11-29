import userStore from '@/store/user';
import './index.less';

interface MessageItem {
  id: string;
  nickname: string;
  avatar: string;
  msg: React.ReactNode;
  createAt?: Date;
}

interface Props {
  data: MessageItem;
  isMy?: boolean;
}

export default function Item(props: Props) {
  const {
    data: { id, nickname, avatar, msg, createAt },
  } = props;

  const isMy = id === userStore.id;

  return (
    <div className={`item ${isMy && 'my'}`}>
      <img src={avatar} alt="" className="avatar" />
      <div className="item-wrapper">
        {!isMy && <span className="nickname">{nickname}</span>}
        <span className="msg">{msg}</span>
      </div>
    </div>
  );
}
