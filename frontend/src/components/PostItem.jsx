export default function PostItem({ post }) {
  const { title, price } = post;
  return (
    <li>
      <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
        <span style={{fontWeight:600}}>{title}</span>
        {price !== undefined && price !== null ? (
          <span style={{color:'#aab3d5'}}>${Number(price).toFixed(2)}</span>
        ) : null}
      </div>
    </li>
  );
}


