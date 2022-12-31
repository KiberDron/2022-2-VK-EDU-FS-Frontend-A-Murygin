import React, { useState, useEffect } from 'react'
import MainHeader from '../../components/MainHeader/MainHeader'
import HistoryButton from '../../components/HistoryButton/HistoryButton'
import MainContent from '../../components/MainContent/MainContent'


export default function PageMain() {
    const [from, setFrom] = useState('en');
    const [to, setTo] = useState('ru');
    const [input, setInput] = useState('');
    const [output, setOutput] = useState('');
    const [languages, setLanguages] = useState([]);
    const [lang_dict, setLang_dict] = useState({});

    function handleChange(event) {
        setInput(event.target.value);
    }

    async function translate () {
        const options = {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'X-RapidAPI-Key': 'df5ffa97f3mshfa5277882376ad1p1db7b7jsnb69ba524116a',
                'X-RapidAPI-Host': 'microsoft-translator-text.p.rapidapi.com'
            },
            body: `[{"Text":"${input}"}]`
        };

        const response = await fetch(`https://microsoft-translator-text.p.rapidapi.com/translate?to%5B0%5D=${to}&api-version=3.0&profanityAction=NoAction&textType=plain`, options);
        const json_resp = await response.json();
        console.log(json_resp);
        const translation = json_resp[0].translations[0].text
        setOutput(translation)
        if (!translation) {
            return
        }
        console.log(translation)
        saveTranslationToLocalStorage({"key": Date.now(), "from": from, "to": to, "input": input, "output": translation})
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
            .then(response => {setLanguages(Object.keys(response.translation)) ; setLang_dict(response.translation)})
            .catch(err => console.error(err));
    }

    function saveTranslationToLocalStorage (translation) {
        let history = localStorage.getItem("history") || "[]";
        history = JSON.parse(history);
        history.unshift(translation);
        localStorage.setItem("history", JSON.stringify(history))
    }

    function handleFromLangChange (e) {
        setFrom(e.target.value);
        console.log(from)
    }

    function handleToLangChange (e) {
        setTo(e.target.value);
        console.log(to)
    }

    useEffect(getLanguages, []);
    //console.log(languages)
    //console.log(lang_dict)

    return (
        <>
            <MainHeader></MainHeader>
            <HistoryButton></HistoryButton>
            <MainContent
                translate={translate}
                input={input}
                output={output}
                from={from}
                to={to}
                onChange={handleChange}
                languages={languages}
                lang_dict={lang_dict}
                handleFromLangChange={handleFromLangChange}
                handleToLangChange={handleToLangChange}>
            </MainContent>
        </>
    )
}