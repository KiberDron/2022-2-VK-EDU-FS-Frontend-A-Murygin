import React, { useEffect, useState } from "react";


export default function AudioRecorder() {
    const [audio, setAudio] = useState("");
    const [isRecording, setIsRecording] = useState(false);
    const [recorder, setRecorder] = useState(null);

    async function requestRecorder() {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        return new MediaRecorder(stream);
    }

    function handleAudio(data) {
        const audio = data;
        const reader = new FileReader();
        reader.onload = () => {
            setAudio(reader.result);
        };

        if (audio) {
            reader.readAsDataURL(audio);
        }
    }

    useEffect(() => {
        if (recorder === null) {
            if (isRecording) {
                requestRecorder().then((r) => {
                    setRecorder(r);
                });
            }
        return;
        }

    if (isRecording) {
        recorder.start();
        console.log(recorder);
    } else {
        recorder.stop();
        console.log(recorder);
    }

    recorder.ondataavailable = (e) => {
        handleAudio(e.data);
        console.log(audio);
    };

    }, [recorder, isRecording]);

    const startRecording = () => {
        setIsRecording(true);
        console.log("start recording");
    };

    const stopRecording = () => {
        setIsRecording(false);
        console.log("stop recording");
    };

    return [audio, setAudio, isRecording, startRecording, stopRecording];
};