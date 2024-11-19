import { TextField, Box,InputLabel, Checkbox, FormGroup,Table, TableCell, 
    TableRow , FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Select, 
    MenuItem, Button} from '@mui/material'
import {React, useState} from 'react'
import EditorBox from '../../component/product/Editor';
import UploadFile from '../../component/product/UploadFile';
import OptionSettings from '../../component/product/OptionSettings';
import BBox from '../../component/BBox';


const ProductAdd = () => {
    const [taxType, setTaxType] = useState(''); 
    const [optionUsage, setOptionUsage] = useState('옵션사용안함');
    const [stockUsage, setStockUsage] = useState("재고사용안함"); 
    const [supplyPrice, setSupplyPrice] = useState(0); // 공급가
    const [marginRate, setMarginRate] = useState(0); // 마진율
    const [additionalAmount, setAdditionalAmount] = useState(0); // 추가금액
    const [taxRate, setTaxRate] = useState(10); // 과세율 (10% default)
    const [finalPrice, setFinalPrice] = useState(null); // 판매가
    const [productPrice, setProductPrice] = useState(null); // 상품가
    const [taxAmount, setTaxAmount] = useState(null); //과세

    const handleTaxTypeChange = (event) => {
        setTaxType(event.target.value);
    };
    const handleOptionUsageChange = (event) => {
        setOptionUsage(event.target.value);
    };
    const handleStockUsageChange = (event) => {
        setStockUsage(event.target.value);
    };

    

    const handleCalculation = () => {
        const taxDecimal = taxRate / 100;
        const sellingPrice = supplyPrice + (supplyPrice * marginRate / 100) + additionalAmount; //판매가
        const productPrice = sellingPrice /(1 + taxDecimal); //상품가
        const taxAmount = productPrice * taxDecimal; //과세금액
        
        setFinalPrice(sellingPrice.toFixed(2));
        setProductPrice(productPrice.toFixed(2));
        setTaxAmount(taxAmount.toFixed(2));
      };

    const handleAddCategory = () => {

    }
    const setSelectCategory = () => {

    }

    
    return (
        <div
          style={{
            width: '100%',                
            display: 'flex',        
            flexDirection: 'column', 
            alignItems: 'center',
            marginTop: 70, 
          }}
        >
            <p style={{ fontSize: '25px' , marginLeft:'-60%'}}>상품 등록</p>
            <BBox width="70%" height="auto">    
                <Table>
                <TableRow sx={{fontSize:15}}><p style={{marginLeft:'15px', marginTop:'15px'}}>표시 상태 선택</p></TableRow>
                    <TableRow>
                        <TableCell>
                            <FormControl sx={{ margin:2, display:'flex', flexDirection:'row'}}>
                                <FormLabel id="demo-radio-buttons-group-label">판매상태</FormLabel>
                                <RadioGroup
                                     aria-labelledby="demo-radio-buttons-group-label"
                                     
                                     name="radio-buttons-group"
                                     sx={{ display: 'flex', flexDirection: 'row' }}
                                    
                                >
                                    <FormControlLabel value="T" control={<Radio />} label="판매함" />
                                    <FormControlLabel value="F" control={<Radio />} label="판매안함" />
                                </RadioGroup>
                                <FormLabel id="demo-radio-buttons-group-label"
                                sx={{marginLeft:7}}>진열상태</FormLabel>
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    defaultValue="display2"
                                    name="radio-buttons-group"
                                    sx={{ display:'flex', flexDirection:'row'}}
                                >
                                    <FormControlLabel value="T" control={<Radio />} label="진열함" />
                                    <FormControlLabel value="F" control={<Radio />} label="진열안함" />
                                </RadioGroup>
                                <FormLabel id="demo-radio-buttons-group-label"
                                sx={{marginLeft:7}}>표시제한</FormLabel>
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    defaultValue="display3"
                                    name="radio-buttons-group"
                                    sx={{ display:'flex', flexDirection:'row'}}
                                >
                                    <FormControlLabel value="all" control={<Radio />} label="모두 표시" />
                                    <FormControlLabel value="customer" control={<Radio />} label="회원만 표시" />
                                </RadioGroup>
                            </FormControl>
                        </TableCell>
                    </TableRow>
                    <TableRow sx={{fontSize:15}}><p style={{marginLeft:'15px', marginTop:'15px'}}>카테고리 선택</p></TableRow>
                    <TableRow>
                        <TableCell sx={{ display:'flex', flexDirection:'row'}}>
                            <FormControl size="small" fullWidth>
                                <InputLabel>대분류</InputLabel>
                                <Select
                                label="대분류"
                                defaultValue={''}
                                onChange={() =>
                                    setSelectCategory()
                                }
                                >
                                    <MenuItem>a</MenuItem>
                                {/* {category &&
                                    category.map((item, idx) => (
                                    <MenuItem
                                        key={idx}
                                        value={item.categoryId}
                                        onClick={() => handleAddCategory()}
                                    >
                                        {item.categoryName}
                                    </MenuItem>
                                    ))} */}
                                </Select>
                            </FormControl>
                            <FormControl size="small" fullWidth>
                                <InputLabel>중분류</InputLabel>
                                <Select
                                label="중분류"
                                defaultValue={''}
                                onChange={() =>
                                    setSelectCategory()
                                }
                                >
                                    <MenuItem>a</MenuItem>
                                {/* {category &&
                                    category.map((item, idx) => (
                                    <MenuItem
                                        key={idx}
                                        value={item.categoryId}
                                        onClick={() => handleAddCategory()}
                                    >
                                        {item.categoryName}
                                    </MenuItem>
                                    ))} */}
                                </Select>
                            </FormControl>
                            <FormControl size="small" fullWidth>
                                <InputLabel>소분류</InputLabel>
                                <Select
                                label="소분류"
                                defaultValue={''}
                                onChange={() =>
                                    setSelectCategory()
                                }
                                >
                                    <MenuItem>a</MenuItem>
                                {/* {category &&
                                    category.map((item, idx) => (
                                    <MenuItem
                                        key={idx}
                                        value={item.categoryId}
                                        onClick={() => handleAddCategory()}
                                    >
                                        {item.categoryName}
                                    </MenuItem>
                                    ))} */}
                                </Select>
                            </FormControl>
                        </TableCell>
                    </TableRow>
                    <TableRow sx={{fontSize:15}}><p style={{marginLeft:'15px', marginTop:'15px'}}>메인 진열 선택</p></TableRow>
                    <TableRow>
                        <TableCell>
                            <FormGroup row='false'>
                                <FormControlLabel control={<Checkbox value='new' id='new'/>} label="신상품" />
                                <FormControlLabel control={<Checkbox />} label="추천상품" />
                                <FormControlLabel control={<Checkbox />} label="Label" />
                                <FormControlLabel control={<Checkbox />} label="Label" />
                            </FormGroup>
                        </TableCell>
                    </TableRow>
                </Table>
            </BBox>
            <BBox width="70%" height="auto"> 
                <Table fullWidth>
                    <TableRow>
                        <TableCell align="center">상품명</TableCell>
                        <TableCell align="left">
                            <TextField size="small" fullWidth/>
                        </TableCell>
                        <TableCell align="center">영문 상품명</TableCell>
                        <TableCell align="left">
                            <TextField size="small" fullWidth/>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="center">모델명</TableCell>
                        <TableCell align="left">
                            <TextField size="small" fullWidth />
                        </TableCell>
                        <TableCell align="center">상품코드</TableCell>
                        <TableCell align="left">
                            <TextField size="small" fullWidth />
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="center" >상품 요약 설명</TableCell>
                        <TableCell align='left' colSpan={3}>
                            <TextField  size="small" fullWidth/>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="center" >상품 간략 설명</TableCell>
                        <TableCell align='left' colSpan={3}>
                            <TextField fullWidth/>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="center" >상품 상세 설명</TableCell>
                        <TableCell align='left' colSpan={3} height='auto'>
                            <EditorBox/>
                            
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="center" >검색어 설정</TableCell>
                        <TableCell align='left' colSpan={3}>
                        <TextField fullWidth/>
                        </TableCell>
                    </TableRow>

                </Table>
                
                
            </BBox>
            <BBox width="70%" height="auto"> 
                <Table>
                    <TableRow>
                    <TableCell align="center">소비자가</TableCell>
                        <TableCell align="left">
                            <TextField size="small" type='number' fullWidth/>
                        </TableCell>
                        <TableCell align="center" >공급가</TableCell>
                        <TableCell align="left">
                            <TextField size="small" type='number'
                            value={supplyPrice}
                            onChange={(e) => setSupplyPrice(Number(e.target.value))} fullWidth/>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                    <TableCell align="center" >과세 구분</TableCell>
                    <TableCell align='left' colSpan={3}>
                        <FormControl sx={{ margin:2, display:'flex', flexDirection:'row'}}>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="display4"
                                name="radio-buttons-group"
                                sx={{ display:'flex', flexDirection:'row'}}
                                onChange={handleTaxTypeChange}
                            >
                                <FormControlLabel value="과세상품" control={<Radio />} label="과세상품" />
                                <FormControlLabel value="영세상품" control={<Radio />} label="영세상품" />
                                <FormControlLabel value="면세상품" control={<Radio />} label="면세상품" />
                            </RadioGroup>
                            {taxType === "과세상품" && (
                                <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                                <TextField size="small" label='과세율(%)' type='number' 
                                    value={taxRate}
                                    onChange={(e) => setTaxRate(Number(e.target.value))}/>
                                </FormControl>
                            )}
                        </FormControl>
                    </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="center" >판매가 계산</TableCell>
                        <TableCell align='left'>
                            <TextField size="small" label='마진율(%)' type='number' 
                            value={marginRate}
                            onChange={(e) => setMarginRate(Number(e.target.value))}/>
                        </TableCell>
                        <TableCell align='left' >
                            <TextField size="small" label='추가금액(원)' type='number' 
                            value={additionalAmount}
                            onChange={(e) => setAdditionalAmount(Number(e.target.value))} />
                        </TableCell>
                        <TableCell align='left' >
                            <Button variant="outlined" onClick={handleCalculation}>판매가 계산</Button>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="center" >판매가</TableCell>
                        <TableCell colSpan={3} >
                            {finalPrice !== null && (
                                <>
                                판매가: {finalPrice} 원, 상품가: {productPrice} 원, 과세금액: {taxAmount} 원
                                </>
                            )}
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="center" >적립금</TableCell>

                    </TableRow>
                    <TableRow>
                        <TableCell align="center" >할인혜택</TableCell>

                    </TableRow>
                    <TableRow>
                        <TableCell align="center" >옵션사용</TableCell>
                        <TableCell colSpan={3}>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="display2"
                                name="radio-buttons-group"
                                sx={{ display:'flex', flexDirection:'row'}}
                                onChange={handleOptionUsageChange}
                            >
                                <FormControlLabel value="옵션사용" control={<Radio />} label="사용함" />
                                <FormControlLabel value="옵션사용안함" control={<Radio />} label="사용안함" />
                            </RadioGroup>
                            {optionUsage === "옵션사용" && <OptionSettings/>}
                        </TableCell>

                    </TableRow>
                    <TableRow>
                        <TableCell align="center" >재고사용</TableCell>
                        <TableCell colSpan={3}>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="display2"
                                name="radio-buttons-group"
                                sx={{ display:'flex', flexDirection:'row'}}
                                onChange={handleStockUsageChange}
                            >
                                <FormControlLabel value="재고사용" control={<Radio />} label="사용함" />
                                <FormControlLabel value="재고사용안함" control={<Radio />} label="사용안함" />
                            </RadioGroup>
                            {stockUsage === "재고사용" && (
                                <TableCell>재고 사용</TableCell>
                            
                            )}
                        </TableCell>

                    </TableRow>
                    <TableRow>
                        <TableCell align="center" >이미지 등록</TableCell>
                        <TableCell align='left' colSpan={3}>
                            <label>*상품 대표 사진 등록(1장)</label>
                            <UploadFile maxImages={1}/>
                            <label>*상품 추가 사진 등록(최대 10장)</label>
                            <UploadFile maxImages={10}/>
                        </TableCell>
                            
                    </TableRow>

                </Table>
            </BBox>
        <div style={{height:200}}/>
        </div>
      )
}

export default ProductAdd