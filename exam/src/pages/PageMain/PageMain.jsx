import React, { useState, useEffect } from 'react'
import MainHeader from '../../components/MainHeader/MainHeader'
import HistoryButton from '../../components/HistoryButton/HistoryButton'
import MainContent from '../../components/MainContent/MainContent'


export default function PageMain() {
    const [to, setTo] = useState('ru');
    const [from, setFrom] = useState('en');
    const [input, setInput] = useState('');
    const [output, setOutput] = useState('');

    function handleChange(event) {
        setInput(event.target.value);
    }

    function translate () {
        const options = {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'X-RapidAPI-Key': 'df5ffa97f3mshfa5277882376ad1p1db7b7jsnb69ba524116a',
                'X-RapidAPI-Host': 'microsoft-translator-text.p.rapidapi.com'
            },
            body: `[{"Text":"${input}"}]`
        };

        const request = new XMLHttpRequest();
        request.open('POST', "https://microsoft-translator-text.p.rapidapi.com/translate?to%5B0%5D=ru&api-version=3.0&profanityAction=NoAction&textType=plain", false);
        request.setRequestHeader("Content-Type", "application/json");
        request.setRequestHeader("X-RapidAPI-Key", "df5ffa97f3mshfa5277882376ad1p1db7b7jsnb69ba524116a");
        request.setRequestHeader("X-RapidAPI-Host", "microsoft-translator-text.p.rapidapi.com");
        request.send(`[{"Text":"${input}"}]`);
        let response;
        try {
            response = JSON.parse(request.response)
        } catch(err) {
            return
        }
         
        //console.log(response[0].translations[0].text)
        return response[0].translations[0].text
        /*
        fetch("https://microsoft-translator-text.p.rapidapi.com/translate?to%5B0%5D=ru&api-version=3.0&profanityAction=NoAction&textType=plain", options)
            .then(response => response.json())
            .then(response => console.log(response))
            .then(response => setOutput(response[0].translations))
            .catch(err => console.error(err));
        */
    }

    function fillTranslation () {
        const translation = translate()
        console.log(translation)
        setOutput(translation)
    }

    //console.log(translate())

    return (
        <>
            <MainHeader></MainHeader>
            <HistoryButton></HistoryButton>
            <MainContent translate={fillTranslation} input={input} output={output} onChange={handleChange}></MainContent>
        </>
    )
}