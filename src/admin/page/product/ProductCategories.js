import React, { useState } from 'react'
import { Box, Button, TextField, List, ListItem, ListItemIcon, ListItemText, Table, TableRow, TableCell } from '@mui/material'
import FolderIcon from '@mui/icons-material/Folder';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';

const initialCategories = [
  { categoryId: 1, categoryParent: null, categoryName: '대분류1', categoryDepth: 1 },
  { categoryId: 2, categoryParent: 1, categoryName: '중분류1', categoryDepth: 2 },
  { categoryId: 3, categoryParent: null, categoryName: '대분류2', categoryDepth: 1 },
  { categoryId: 4, categoryParent: 3, categoryName: '중분류2', categoryDepth: 2 },
];

const ProductCategories = () => {
  const [categories, setCategories] = useState(initialCategories);
  const [newCategoryName, setNewCategoryName] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [editCategoryName, setEditCategoryName] = useState(''); // 수정할 카테고리 이름 상태
  const [addingSubcategory, setAddingSubcategory] = useState(false); // 하위 카테고리 추가 모드
  const [newMainCategoryName, setNewMainCategoryName] = useState(''); // 대분류 입력 필드 상태
  // 카테고리 선택 함수
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setEditCategoryName(category.categoryName); // 선택된 카테고리의 이름을 수정 텍스트 필드에 미리 표시
    setAddingSubcategory(false); // 하위 카테고리 추가 모드 초기화
  };

  //상위카테고리명
  const findParentCategoryName = (parentId) => {
    if (parentId === null) return '없음'; // 상위 카테고리가 없을 경우
    const parentCategory = categories.find(cat => cat.categoryId === parentId);
    return parentCategory ? parentCategory.categoryName : '없음';
  };

  // 트리 구조로 카테고리 표시
  const renderCategoryTree = (parentId = null) => {
    const childCategories = categories.filter(cat => cat.categoryParent === parentId);
    if (childCategories.length === 0) return null;
    return childCategories.map(cat => (
      <List key={cat.categoryId}>
        <ListItem button onClick={() => handleCategoryClick(cat)}>
          <ListItemIcon>
            {cat.categoryDepth === 1 && <FolderIcon />}
            {cat.categoryDepth === 2 && <FolderOpenIcon />}
            {cat.categoryDepth === 3 && <InsertDriveFileIcon />}
          </ListItemIcon>
          <ListItemText primary={cat.categoryName} />
        </ListItem>
        {cat.categoryDepth < 3 && ( // 깊이가 3 이하면 자식 카테고리 렌더링
        <Box sx={{ paddingLeft: 4 }}>
          {renderCategoryTree(cat.categoryId)}
        </Box>
      )}
      </List>
    ));
  };

  // 카테고리 수정
  const handleEditCategory = () => {
    setCategories(categories.map(cat => 
      cat.categoryId === selectedCategory.categoryId ? { ...cat, categoryName: editCategoryName } : cat
    ));
  };

  // 카테고리 삭제
  const handleDeleteCategory = (id) => {
    setCategories(categories.filter(cat => cat.categoryId !== id));
  };

  // 하위 카테고리 추가
  const handleAddSubcategory = () => {
    const newCategory = {
      categoryId: categories.length + 1, 
      categoryParent: selectedCategory.categoryId,
      categoryName: newCategoryName,
      categoryDepth: selectedCategory.categoryDepth + 1, 
    };
    setCategories([...categories, newCategory]);
    setNewCategoryName(''); 
    setAddingSubcategory(false); 
  };
  //대분류 추가
  const handleAddMainCategory = () => {
    if (!newMainCategoryName) return; 

    const newCategory = {
      categoryId: categories.length + 1, 
      categoryParent: null, 
      categoryName: newMainCategoryName,
      categoryDepth: 1 
    };

    setCategories([...categories, newCategory]); 
    setNewMainCategoryName(''); 
  };

  return (
    <div
      style={{
        width: '100%',           
        height: '100vh',        
        display: 'flex',        
        flexDirection: 'column', 
        alignItems: 'center',
        marginTop: 70, 
      }}
    >
      <p style={{ fontSize: '25px', marginLeft: '-60%' }}>카테고리 관리</p>
      <Box
        sx={{
          width: '70%',
          height: '90%',
          borderRadius: 1,
          marginTop: 2,
          display: 'flex',
          flexDirection: 'row',
          gap: 4,
          alignItems: 'center',
          paddingLeft: 4,
          fontSize: '15px',
        }}
      >
        <Box
          sx={{
            width: '40%',
            height: '100%',
            borderRadius: 1,
            bgcolor: '#dcdcdc',
            marginTop: 2,
          }}
        >
          {renderCategoryTree()}

          
        </Box>
        <Box
          sx={{
            width: '60%',
            height: '100%',
            display:'flex',
            flexDirection :'column'

          }}>
        <Box
          sx={{
            width: '100%',
            height: '70%',
            borderRadius: 1,
            bgcolor: '#dcdcdc',
            marginTop: 2,
          }}
        >
          {selectedCategory ? (
            <div style={{ margin: '20px' }}>
              <h3>카테고리 정보</h3>
              <Table>
                <TableRow>
                  <TableCell align="center">상위 카테고리명</TableCell>
                  <TableCell align="left" colSpan={3}>
                    {findParentCategoryName(selectedCategory.categoryParent)}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="center">카테고리명</TableCell>
                  <TableCell align="left" colSpan={3}>
                    <TextField
                      size="small"
                      fullWidth
                      value={editCategoryName} 
                      onChange={(e) => setEditCategoryName(e.target.value)} // 변경 감지
                    />
                  </TableCell>
                </TableRow>
              </Table>

              {/* 수정, 삭제, 추가 버튼 */}
              <Button 
                variant="contained" 
                onClick={handleEditCategory} 
                disabled={editCategoryName === selectedCategory.categoryName} // 변경되지 않으면 비활성화
              >
                수정
              </Button>
              <Button 
                variant="contained" 
                color="error" 
                onClick={() => handleDeleteCategory(selectedCategory.categoryId)}>
                삭제
              </Button>

              {/* 하위 카테고리 추가 */}
              {!addingSubcategory && (
                <Button 
                  variant="contained" 
                  onClick={() => setAddingSubcategory(true)} 
                >
                  하위 카테고리 추가
                </Button>
              )}
              {addingSubcategory && (
                <div style={{ marginTop: '10px' }}>
                  <TextField
                    size="small"
                    placeholder="새 하위 카테고리명"
                    value={newCategoryName}
                    onChange={(e) => setNewCategoryName(e.target.value)}
                  />
                  <Button 
                    variant="contained" 
                    onClick={handleAddSubcategory} 
                    disabled={!newCategoryName.trim()} // 빈 입력 방지
                    style={{ marginLeft: '10px' }}
                  >
                    추가
                  </Button>

                </div>
              )}
            </div>
          ) : (
            <p style={{ margin: 20 }}>카테고리를 선택하세요</p>
          )}
        </Box>
        <Box
          sx={{
            width: '100%',
            height: '30%',
            borderRadius: 1,
            bgcolor: '#dcdcdc',
            marginTop: 2,
          }}
        >

          <Box sx={{ padding: 2 }}>
            <h3>대분류 추가</h3>
            <TextField
              sx={{marginTop:3}}
              label="대분류 이름"
              size='small'
              value={newMainCategoryName}
              onChange={(e) => setNewMainCategoryName(e.target.value)}
              fullWidth
            />
            <Button
              variant="contained"
              sx={{ marginTop: 1 }}
              onClick={handleAddMainCategory}
            >
            추가
            </Button>
          </Box>

        </Box>
        </Box>
        
        
      </Box>
      <div style={{ height: 200 }} />
    </div>
  );
};

export default ProductCategories;
