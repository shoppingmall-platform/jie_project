import React, { useState, useEffect } from 'react';
import { TextField, Button, Table, TableBody, TableCell, TableHead, TableRow, Checkbox, Divider, Tabs, Tab } from '@mui/material';
import BBox from '../../component/BBox'

const ProductOptions = () => {
  const [options, setOptions] = useState([]);
  const [optionName, setOptionName] = useState('');
  const [optionValues, setOptionValues] = useState('');
  const [optionDescription, setOptionDescription] = useState('');
  const [selectedOptions, setSelectedOptions] = useState([]); 
  const [tabIndex, setTabIndex] = useState(0); // 탭 인덱스 상태 관리

  // 초기 데이터를 서버에서 가져오는 함수
  const fetchInitialOptions = async () => {
    try {
      const initialData = [
        { id: 1, name: '색상', values: ['블랙', '화이트'], description: '상품의 색상을 선택합니다.' },
        { id: 2, name: '사이즈', values: ['S', 'M', 'L'], description: '상품의 사이즈를 선택합니다.' },
      ];
      setOptions(initialData);
    } catch (error) {
      console.error('옵션 데이터를 가져오는 중 오류 발생:', error);
    }
  };

  useEffect(() => {
    fetchInitialOptions();
  }, []);
  
   useEffect(() => {
    console.log('옵션 목록:', options);
  }, [options]);

  const handleTabChange = (event, newIndex) => {
    setTabIndex(newIndex);
  };
  // 옵션 추가 함수
  const handleAddOption = () => {
    if (optionName && optionValues) {
      const valuesArray = optionValues.split(',').map((value) => value.trim());
      const newOption = { id: options.length + 1, name: optionName, values: valuesArray, description: optionDescription };
      setOptions([
        ...options,
        newOption,
      ]);
      setOptionName('');
      setOptionValues('');
      setOptionDescription('');
    }
  };

  // 전체 선택/해제
  const handleSelectAll = (event) => {
    if (event.target.checked) {
      setSelectedOptions(options.map((option) => option.id));
    } else {
      setSelectedOptions([]);
    }
  };

  // 개별 옵션 선택/해제
  const handleSelectOption = (id) => {
    setSelectedOptions((prevSelectedOptions) =>
      prevSelectedOptions.includes(id)
        ? prevSelectedOptions.filter((optionId) => optionId !== id)
        : [...prevSelectedOptions, id]
    );
  };

  // 선택된 옵션 삭제
  const handleDeleteSelected = () => {
    const newOptions = options.filter((option) => !selectedOptions.includes(option.id));
    setOptions(newOptions);
    setSelectedOptions([]); // 삭제 후 선택된 항목 초기화
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
      <p style={{ fontSize: '25px', marginLeft: '-60%' }}>옵션 관리</p>
      <Tabs value={tabIndex} onChange={handleTabChange}>
        <Tab label="옵션 관리" />
        <Tab label="옵션 세트 관리" />
      </Tabs>
      {tabIndex === 0 && (
        <div style={{
          width: '100%',
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: 20,}}>
          <BBox width='70%' height='auto'>
            <p style={{ margin: 20 ,fontSize: '18px'}}>옵션 목록</p>
            <Divider/>
            <Table>
              <TableHead sx={{fontSize:'15px'}}>
                <TableRow>
                  <TableCell width={3}>
                    <Checkbox
                      checked={selectedOptions.length === options.length}
                      onChange={handleSelectAll}
                    />
                  </TableCell>
                  <TableCell>옵션ID</TableCell>
                  <TableCell>옵션명</TableCell>
                  <TableCell>옵션값</TableCell>
                  <TableCell>옵션설명</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {options.map((option) => (
                  <TableRow key={option.id}>
                    <TableCell>
                      <Checkbox
                        checked={selectedOptions.includes(option.id)}
                        onChange={() => handleSelectOption(option.id)}
                      />
                    </TableCell>
                    <TableCell>{option.id}</TableCell>
                    <TableCell>{option.name}</TableCell>
                    <TableCell>{option.values.join(', ')}</TableCell>
                    <TableCell>{option.description}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <Button
              variant="contained"
              color="secondary"
              onClick={handleDeleteSelected}
              disabled={selectedOptions.length === 0}
              sx={{margin:2}}
            >
              선택옵션 삭제
            </Button>
          </BBox>
          
          <BBox width='70%' height='auto'>
            <p style={{ margin: 20 ,fontSize: '18px'}}>옵션 등록</p>
            <Divider/>
            <TextField
              label="옵션명"
              value={optionName}
              onChange={(e) => setOptionName(e.target.value)}
              variant="outlined"
              style={{ margin: 20,  width:200}}
            />
            <TextField
              label="옵션값 (쉼표로 구분)"
              value={optionValues}
              onChange={(e) => setOptionValues(e.target.value)}
              variant="outlined"
              style={{ margin: 20,  width:500}}
            />
            <TextField
              label="옵션설명"
              value={optionDescription}
              onChange={(e) => setOptionDescription(e.target.value)}
              variant="outlined"
              style={{ margin: 20, width:600}}
            />
            <Button variant="contained" color="primary" size='medium' onClick={handleAddOption} sx={{marginTop:3.5}}>
              옵션 추가
            </Button>

          </BBox>
        </div>
      )}
      {tabIndex === 1 && (
        <div style={{
          width: '100%',
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: 20,}}>
            <BBox width='70%' height="auto">
                옵션세트 목록 
                옵션 목록
                옵션 세트 생성
            </BBox>

        
        </div>
      )}
      
      
    </div>
  );
};

export default ProductOptions;
