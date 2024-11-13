import React, { useState, useEffect } from 'react';
import {Box,TextField, Button, Table, TableBody, TableCell, TableHead, TableRow, Checkbox, Divider, Tabs, Tab,
  FormControl, FormControlLabel, FormLabel, Radio, RadioGroup
} from '@mui/material';
import BBox from '../../component/BBox'


const useCheckboxSelection = (items) => {
  const [selectedItems, setSelectedItems] = useState([]);

  // 전체 선택/해제
  const handleSelectAll = (event) => {
    if (event.target.checked) {
      setSelectedItems(items.map((item) => item.id));
    } else {
      setSelectedItems([]);
    }
  };

  // 개별 항목 선택/해제
  const handleSelectItem = (id) => {
    setSelectedItems((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((itemId) => itemId !== id)
        : [...prevSelected, id]
    );
  };

  // 선택된 항목 삭제
  const handleDeleteSelected = (setItems) => {
    setItems((prevItems) => prevItems.filter((item) => !selectedItems.includes(item.id)));
    setSelectedItems([]); // 삭제 후 선택 초기화
  };

  return { selectedItems, handleSelectAll, handleSelectItem, handleDeleteSelected };
};


const ProductOptions = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const [options, setOptions] = useState([]);
  const [optionSets, setOptionSets] = useState([]);

  const [optionName, setOptionName] = useState('');
  const [optionValues, setOptionValues] = useState('');
  const [optionDescription, setOptionDescription] = useState('');

  const [optionSetName, setOptionSetName] = useState('');
  const [optionSetValues, setOptionSetValues] = useState([]);
  const [optionSetDescription, setOptionSetDescription] = useState('');
  const [optionSetUse, setOptionSetUse] = useState(false);

   

  // 초기 데이터를 서버에서 가져오는 함수
  const fetchInitialOptions = async () => {
    try {
      const initialData = [
        { id: 1, name: '색상', values: ['블랙', '화이트'], description: '상품의 색상을 선택합니다.' },
        { id: 2, name: '사이즈', values: ['S', 'M', 'L'], description: '상품의 사이즈를 선택합니다.' },
      ];
      setOptions(initialData);

      const initialOptionSets = [
        { id: 1, name: '세트1', values: ['색상', '사이즈'], description: '기본세트입니다.', use: true },
      ];
      setOptionSets(initialOptionSets);
    } catch (error) {
      console.error('옵션 데이터를 가져오는 중 오류 발생:', error);
    }
  };

  useEffect(() => {
    fetchInitialOptions();
  }, []);
  
  //  useEffect(() => {
  //   console.log('옵션 목록:', options);
  // }, [options]);

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
  //옵션세트 추가
  const handleAddOptionSet = () => {
    if (optionSetName && optionSetValues.length > 1) {
      const newOptionSet = { id: optionSets.length + 1, name: optionSetName, values: optionSetValues, description: optionSetDescription, use: optionSetUse };
      setOptionSets([
        ...optionSets,
        newOptionSet,
      ]);
      setOptionSetName('');
      setOptionSetValues([]);
      setOptionSetDescription('');
      setOptionSetUse(false);
    }
  };
  const handleCheckboxChange = (optionName) => {
    setOptionSetValues((prevValues) =>
      prevValues.includes(optionName)
        ? prevValues.filter((name) => name !== optionName) // 선택 해제
        : [...prevValues, optionName] // 선택 추가
    );
  };
  const optionsCheckbox = useCheckboxSelection(options);
  const optionSetsCheckbox = useCheckboxSelection(optionSets);

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
              <TableHead>
                <TableRow>
                  <TableCell width={3}>
                    <Checkbox
                      checked={optionsCheckbox.selectedItems.length === options.length}
                      onChange={() => optionsCheckbox.handleSelectAll}
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
                        checked={optionsCheckbox.selectedItems.includes(option.id)}
                        onChange={() => optionsCheckbox.handleSelectItem(option.id)}
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
              onClick={() => optionsCheckbox.handleDeleteSelected(setOptions)}
              disabled={optionsCheckbox.selectedItems.length === 0}
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
        <div 
        style={{
          width: '100%',
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: 20,
          }}>
            <BBox width='70%' height="auto">
              <p style={{ margin: 20 ,fontSize: '18px'}}>옵션 세트 목록</p>
              <Divider/>
                <Table>
                <TableHead>
                  <TableRow>
                    <TableCell width={3}>
                      <Checkbox 
                      checked={optionSetsCheckbox.selectedItems.length === optionSets.length}
                      onChange={optionSetsCheckbox.handleSelectAll}/>
                    </TableCell>
                    <TableCell>세트ID</TableCell>
                    <TableCell>세트명</TableCell>
                    <TableCell>옵션 이름들</TableCell>
                    <TableCell>설명</TableCell>
                    <TableCell>사용여부</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {optionSets.map((set) => (
                    <TableRow key={set.id}>
                      <TableCell>
                        <Checkbox
                          checked={optionSetsCheckbox.selectedItems.includes(set.id)}
                          onChange={() => optionSetsCheckbox.handleSelectItem(set.id)}
                        />
                      </TableCell>
                      <TableCell>{set.id}</TableCell>
                      <TableCell>{set.name}</TableCell>
                      <TableCell>{set.values.join(', ')}</TableCell>
                      <TableCell>{set.description}</TableCell>
                      <TableCell>{set.use ? '사용' : '미사용'}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => optionSetsCheckbox.handleDeleteSelected(setOptionSets)}
                disabled={optionSetsCheckbox.selectedItems.length === 0}
                sx={{ margin: 2 }}
              >
                선택세트 삭제
              </Button>
            </BBox>
            <BBox width='70%' height='auto'>
              <p style={{ margin: 20 ,fontSize: '18px'}}>옵션 세트 등록 </p>
              <Divider/>
              <div style={{display:'flex', flexDirection:'row'}}>
              <Box width='55%' height='auto' >
                <p style={{ margin: 20 ,fontSize: '15px'}}>옵션을 선택해주세요.</p>
                <Table>
                  <TableBody>
                    {options.map((option) => (
                      <TableRow key={option.id}>
                        <TableCell width={3}>
                          <Checkbox
                            checked={optionSetValues.includes(option.name)}
                            onChange={() => handleCheckboxChange(option.name)}
                          />
                        </TableCell>
                        <TableCell>{option.id}</TableCell>
                        <TableCell>{option.name}</TableCell>
                        <TableCell>{option.values.join(', ')}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={handleAddOptionSet}
                  disabled={optionSetValues.length < 2 && !optionSetName}
                  sx={{margin:2}}
                >
                  옵션 세트 등록
                </Button>
              </Box>
              <Box width='45%' height='auto' >
              <FormControl sx={{ margin:3, display:'flex', flexDirection:'column'}}>
                  <FormLabel id="demo-radio-buttons-group-label">사용여부</FormLabel>
                  <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        sx={{marginLeft: 2, display: 'flex', flexDirection: 'row' }}   
                        value={optionSetUse} // 현재 상태 값 반영
                        onChange={(e) => setOptionSetUse(e.target.value === 'true')}
                  >
                      <FormControlLabel value="true" control={<Radio />} label="사용함" />
                      <FormControlLabel value="false" control={<Radio />} label="사용안함" />
                  </RadioGroup>
                  <TextField
                    label="옵션세트명"
                    value={optionSetName}
                    onChange={(e) => setOptionSetName(e.target.value)}
                    variant="outlined"
                    size='small'
                    sx={{ margin: 2,  width:200}}
                  />
                  <TextField
                    label="옵션세트설명"
                    value={optionSetDescription}
                    onChange={(e) => setOptionSetDescription(e.target.value)}
                    variant="outlined"
                    sx={{ margin: 2, width:300}}
                  />
                </FormControl>
                

              </Box>
              </div>
            </BBox>
        </div>
      )}
      
      
    </div>
  );
};

export default ProductOptions;
