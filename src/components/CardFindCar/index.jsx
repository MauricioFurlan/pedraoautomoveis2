import styles from './index.module.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { TextField, Button } from '@mui/material';
import Box from '@mui/material/Box';
import ComboBox from '../Buttons/Combobox';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import $ from 'jquery';
import { removeDuplicates, searchValueInList } from './utils';
import { useState } from 'react';



export default function CardFindCar({cars, updateListCars, isCarFound}) {
    const [model, setModel] = useState([])
    const [isDisabled, setDisabled] = useState(true)
    const [valueMark, setValueMark] = useState('')
    const [valueModel, setValueModel] = useState('')


    function searchCar(event) {
        event.preventDefault()
        const carName = $('#find_car').val()
        const mark = $('#marca_id').val()
        const model = $('#modelo_id').val()
        if (carName == '' && mark == '') return;
        if (model !== '') {
            const resultModel = cars.filter(item => item.nome_carro.toUpperCase() == model.toUpperCase())
            updateListCars(resultModel)
            isCarFound(resultModel.length)
            $('#find_car').val('')
            return;
        }  
        const resultCarName = searchValueInList(cars, carName)
        if (resultCarName.length !== 0) {
            updateListCars(resultCarName)
            isCarFound(resultCarName.length)
            return;
        } 
        const resultMark = cars.filter(item => item.description.marca.toUpperCase() == mark)
        updateListCars(resultMark)
        isCarFound(resultMark.length)
        return;
    }
    const MarkList = removeDuplicates(cars)

    function setCarModel(_, value) {
        const resultMark = cars.filter(item => item.description.marca.toUpperCase() == value.label)
        setDisabled(false)
        const myList = []
        for (let i=0; i<resultMark.length; ++i) {
            myList.push({
                label: resultMark[i]['nome_carro']
            })
        }
        setModel(myList);
        setValueMark(value)
    }
    function onResetFindCars() {
        $('#find_car').val('')
        setValueMark('')
        setValueModel('')
        setDisabled(true)
        updateListCars(cars)
    }
   
    return (
        <>
        <Card style={{backgroundColor: "rgb(246, 246, 246)"}} sx={{ maxWidth: "100%" } }>
            <CardContent>
                <form onSubmit={searchCar} name="searchCar" >
                <div className={styles.msg}>
                    <div className={styles.msg_container}>
                    <Typography gutterBottom variant="h6" component="div">
                        Encontre seu veículo
                    </Typography>
                    </div>
                    <div className={styles.clear} onClick={onResetFindCars}>
                    <Typography gutterBottom variant="h7" component="div">
                    <span><DeleteOutlineIcon fontSize='lg'/></span> LIMPAR FILTRO
                    </Typography>
                    </div>
                </div>
                <hr></hr>
                <Box
                    sx={{
                        '& > :not(style)': { m: 1, width: '100%' },
                    }}
                    autoComplete="off"
                    >
                    <TextField name="find_car" id="find_car" label="buscar" variant="outlined"/>
                    <ComboBox label={"Marca"} id={'marca_id'} listData={MarkList} fnSetList={setCarModel} val={valueMark}/>
                    <ComboBox label={"Modelo"} id={'modelo_id'} listData={model} disabled={isDisabled} fnSetList={(_, value) => setValueModel(value)} val={valueModel}/>
                    </Box>
                <hr></hr>
                <Button variant='contained' color='primary' size="large" fullWidth type="submit">
                Buscar
                </Button>
                </form>
            </CardContent>
        </Card>
        </>
    )
}