import React, { useState, useEffect } from 'react'
import MainHeader from '../../components/MainHeader/MainHeader'
import HistoryButton from '../../components/HistoryButton/HistoryButton'
import MainContent from '../../components/MainContent/MainContent'


export default function PageMain() {
    const [to, setTo] = useState('en');
    const [from, setFrom] = useState('en');
    const [input, setInput] = useState('');
    const [output, setOutput] = useState('');

    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': 'df5ffa97f3mshfa5277882376ad1p1db7b7jsnb69ba524116a',
            'X-RapidAPI-Host': 'microsoft-translator-text.p.rapidapi.com'
        },
        body: '[{"Text":"I would really like to drive your car around the block a few times."}]'
    };
    
    fetch('https://microsoft-translator-text.p.rapidapi.com/translate?to%5B0%5D=ru&api-version=3.0&profanityAction=NoAction&textType=plain', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));

    return (
        <>
            <MainHeader></MainHeader>
            <HistoryButton></HistoryButton>
            <MainContent></MainContent>
        </>
    )
}