import React, { useState, useEffect } from 'react'
import HistoryHeader from '../../components/HistoryHeader/HistoryHeader'
import HistoryClear from '../../components/HistoryClear/HistoryClear'
import HistoryContent from '../../components/HistoryContent/HistoryContent'


export default function PageHistory() {
    const [history, setHistory] = useState([]);
    const [lang_dict, setLang_dict] = useState({});

    function getHistoryFromLocalStorage () {
        let history = localStorage.getItem("history") || "[]";
        history = JSON.parse(history);
        console.log(history)
        setHistory(history);
    };

    function clearHistory () {
        localStorage.clear();
        setHistory([]);
    }

    function getLanguages () {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'df5ffa97f3mshfa5277882376ad1p1db7b7jsnb69ba524116a',
                'X-RapidAPI-Host': 'microsoft-translator-text.p.rapidapi.com',
                'x-rapidapi-ua': 'RapidAPI-Playground'
            }
        };
        console.log(Date.now())
        
        fetch('https://microsoft-translator-text.p.rapidapi.com/languages?api-version=3.0', options)
            .then(response => response.json())
            .then(response => {setLang_dict(response.translation)})
            .catch(err => console.error(err));
    }

    useEffect(getHistoryFromLocalStorage, []);
    useEffect(getLanguages, []);
    console.log(lang_dict)

    return (
        <>
            <HistoryHeader></HistoryHeader>
            <HistoryClear onClick={clearHistory}></HistoryClear>
            <HistoryContent history={history}></HistoryContent>
        </>
    )
}