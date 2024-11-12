import React from 'react';
import { useNavigate, useLocation} from 'react-router-dom';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import "./../Admin.css"
const menuItems = [
  {
    id: "products",
    label: "상품",
    link: "./products",  
    subItems: [
      { label: "상품 목록", link: "./products/list" },
      { label: "상품 등록", link: "./products/add" },
      { label: "상품 관리", link: "./products/manage" },
      { label: "카테고리", link: "./products/categories" },
      { label: "옵션 관리", link: "./products/options" }
    ]
  },
  {
    id: "customers",
    label: "고객",
    link: "./customers",  
    subItems: [
      { label: "고객 조회", link: "./customers/list" },
      { label: "고객 관리", link: "./customers/manage" }
    ]
  },
  {
    id: "orders",
    label: "주문/배송",
    link: "./orders",  
    subItems: [
      { label: "주문 조회", link: "./orders/list" },
      { label: "배송 관리", link: "./orders/delivery" },
      { label: "취소 관리", link: "./orders/cancel" }
    ]
  }
];

const SideBar = () => { 
  const navigate = useNavigate();  
  const location = useLocation();
  const handleNavigation = (link) => {
    navigate(link);
  };


  // 현재 pathname에서 id를 추출하는 함수 (예: /admin/products -> products)
  const currentPathId = location.pathname.split("/")[2];  // "/admin/products" -> "products"

  // id로 해당 메뉴를 찾기
  const activeMenu = menuItems.find(item => item.id === currentPathId);

  console.log("현재주소2", activeMenu)
  console.log("주소", location)

  return (
    activeMenu && (
      <List
        sx={{
          zIndex:1,
          width: '150px',
          position:'fixed',
          left:'20px',
          top:'100px',
          borderRadius:3,
          bgcolor: 'background.paper',
          boxShadow: '2px 0 5px rgba(0, 0, 0, 0.1)', // 그림자 효과 추가
        }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div">
            {activeMenu.label}
          </ListSubheader>
        }
      >
        {activeMenu.subItems.map((subItem, index) => (
          <ListItemButton key={index} onClick={() => handleNavigation(subItem.link)}>
            <ListItemText primary={subItem.label} />
          </ListItemButton>
        ))}
      </List>
    )
  );
};

export default SideBar;

