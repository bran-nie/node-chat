import 'index.less';

export default function Item() {
  return (
    <div className='item'>
      <img src='https://picsum.photos/200?r=3' alt='' className='avatar' />
      <div>
        <span className='nickname'>hello</span>
        <span className='msg'>海上升明月，天涯共此时。谁知盘中餐，粒粒皆辛苦。</span>
      </div>
    </div>
  );
}
