import React from 'react';

const ProductCard = () => {
  return (
    <div style={{ 
      border: '1px solid #ddd', 
      padding: '3px', 
      margin: '3px', 
      borderRadius: '4px', 
      textAlign: 'center',
      width: '100%',
      boxSizing: 'border-box'
    }}>
      <img 
        src="https://cafe24.poxo.com/ec01/gwon3066/YepDBcpQi6F1EGuL9rzRwZlbyEg6QdanrR8cpMvEWIm1IPaEK0ju5UMWMuWxeVhPwhgNLWVqAtSDW9gvkeTqgw==/_/web/product/small/202404/67bd505df695ffd691125bb8b842cc70.gif" 
        alt="Product"
        style={{ width: '100%', height: 'auto', maxHeight: '200px' }} 
      />
      <div style={{ fontSize: '8px', margin: '6px 0' }}>레브 벨로아 골지 헨리넥 반팔 4 color</div>
      <div style={{ fontSize: '8px', margin: '3px 0' }}>27000원</div>
      <div style={{ fontSize: '5px', color: 'red' }}>New</div>
    </div>
  );
}

export default ProductCard;
