import React from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { Card, Table } from "react-materialize";

import './App.css';

function fixedData(data) {
    return data.map(item => {
        return {"date": new Date(item.date).toLocaleDateString('pt-BR', {timeZone: 'UTC'}), "high": item.high}
    })
}

function ResultSearch({ data }) {
    const newData = fixedData(data);
    console.log(newData);
    return(
        <Card>
            <center>
            <AreaChart
                width={500}
                height={400}
                data={newData}
                margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date"/>
                <YAxis domain={["dataMin - 5", "dataMax + 1"]}/>
                <Tooltip />
                <Area type="monotone" dataKey="high" stroke="#1e857b" fill="#26a69a" />
            </AreaChart>
            </center>
            <Table>
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>Abertura</th>
                        <th>Alta</th>
                        <th>Baixa</th>
                        <th>Fechamento</th>
                    </tr>   
                </thead>
                <tbody>
                    {data.map(item => (
                        <tr>
                            <td>{new Date(item.date).toLocaleDateString('pt-BR', {timeZone: 'UTC'})}</td>
                            <td>{item.open}</td>
                            <td>{item.high}</td>
                            <td>{item.low}</td>
                            <td>{item.close}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Card>
    );
}

export default ResultSearch;