import React, { useState } from 'react';
import 'materialize-css';
import { Button, Card, Col, DatePicker, Footer, Icon, Preloader, TextInput, Row } from 'react-materialize';
import axios from 'axios';
import moment from 'moment';
import './App.css';
import options from './optionsDate';
import ResultSearch from './ResultSearch';

async function Submit(symbol, initialDate, finalDate, setError, setLoading, setResp){
  const newInitialDate = moment(initialDate).format('YYYY-MM-DD');
  const newFinalDate = moment(finalDate).format('YYYY-MM-DD');
  try{
    if (initialDate === '' && finalDate !== ''){
      alert("Data inicial não passada!")
      var urlReq = `http://localhost:8080?symbols=${symbol}&date_to=${newFinalDate}`;
    } else if (finalDate === '' && initialDate !== '') {
      alert("Data final não passada!")
      var urlReq = `http://localhost:8080?symbols=${symbol}&date_from=${newInitialDate}`;
    } else if (finalDate !== '' && initialDate !== '') {
      var urlReq = `http://localhost:8080?symbols=${symbol}&date_from=${newInitialDate}&date_to=${newFinalDate}`;
    } else {
      alert("Data inicial e final não foram passadas!");
      var urlReq = `http://localhost:8080?symbols=${symbol}`;
    }
    const resp = await axios.get(urlReq);
    setResp(resp.data);
    setLoading(false);
    setError(null);
  } catch(e) {
    setError(e);
    setLoading(false);    
  }
}

function App() {
  const [ error, setError ] = useState(null);
  const [ finalDate, setFinalDate ] = useState('');
  const [ initialDate, setInitialDate ] = useState('');
  const [ loading, setLoading ] = useState(true);
  const [ response, setResponse ] = useState(null);
  const [ submit, setSubmit ] = useState(false);
  const [ symbol, setSymbol ] = useState('');

  return (
    <div className="App">
      <div id="divMaster">
        <Row>
          <Col className="s4"><TextInput id="inputSymbol" label="Código da Ação" placeholder="Exemplo AAPL" onChange={(e) => setSymbol(e.target.value)}/></Col>
          <Col className="s3"><DatePicker options={options.options} label="Data Inicial" onChange={value => setInitialDate(value)} value={initialDate !== '' ? moment(initialDate).format('DD/MM/YYYY') : ''} /></Col>
          <Col className="s3"><DatePicker options={options.options} label="Data Final" onChange={value => setFinalDate(value)} value={finalDate !== '' ? moment(finalDate).format('DD/MM/YYYY') : ''}/></Col>
          <Col className="s2"><Button node="button" type="submit" waves="light" onClick={() => {setSubmit(true); Submit(symbol, initialDate, finalDate, setError, setLoading, setResponse)}}> Enviar <Icon right>send</Icon> </Button></Col>
        </Row>

        {submit && loading && <Preloader active color="blue" size="big"/>}
        
        {!!error && <Card className="red lighten-2" closeIcon={<Icon>close</Icon>} textClassName="white-text">Erro ao retornar informações sobre a ação!<br/>{error}</Card>}

        {submit && !loading && error === null && <ResultSearch data={response.data} />}
      </div>
        <Footer
          className="footer"
          copyrights="Johann Pinheiro Pires (116532) & Bruno Machado Löbell (124846)"
          links={<ul><li><a className="grey-text text-lighten-3" href="https://marketstack.com/">API - Market Stack</a></li></ul>}
        >
          <h5 className="white-text">
            Trabalho de Distribuidos - API Bovespa
          </h5>
        </Footer>
    </div>
  );
}

export default App;
