'use client'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/ChatComp.css';
import { Avatar, TextField, Button, CircularProgress } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import MicIcon from '@mui/icons-material/Mic';
import StopIcon from '@mui/icons-material/Stop';
import { useState, useEffect } from 'react';
import APIService from '../Apis/APIService';
import Image from 'next/image';
import resg from '../Images/res1.jpg';
import user from '../Images/user.png';
import { useTranslation } from 'react-i18next';
import ReactMarkdown from 'react-markdown';

function ChatCompWithVoice() {
  const { t } = useTranslation();
  const [text, setText] = useState(t("How to Discover and Participate in Academic Events"));
  const [output, setoutput] = useState("");
  const [waiting, setWaiting] = useState(false);
  const [answer, setAnswer] = useState([]);
  const [questions, setquestions] = useState([]);

  const [isListening, setIsListening] = useState(false);
  const [recognition, setRecognition] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const SpeechRecognition =
        window.SpeechRecognition || window.webkitSpeechRecognition;

      if (SpeechRecognition) {
        const recog = new SpeechRecognition();
        recog.lang = "ar-EG";
        recog.interimResults = false;
        recog.continuous = false;

        // recog.onresult = (event) => {
        //   const spokenText = event.results[0][0].transcript;
        //   console.log("Transcript:", spokenText);
        //   setText(spokenText);
        //   setquestions(prev => [...prev, spokenText]);
        //   handleSubmit(spokenText);
        // };

        recog.onresult = (event) => {
            const spokenText = event.results[0][0].transcript;
            console.log("Transcript:", spokenText);
            setText(spokenText);
            setquestions(prev => [...prev, spokenText]);
            handleSubmit(spokenText);
            stopListening(); // <--- this line fixes the double click!
            setIsListening(false);
          };

        recog.onerror = (event) => {
          console.error("Speech recognition error:", event.error);
          setIsListening(false);
        };

        setRecognition(recog);
      } else {
        console.warn("SpeechRecognition not supported");
      }
    }
  }, []);

  const startListening = () => {
    if (recognition) {
      setText("");
      recognition.start();
      setIsListening(true);
    }
  };

  const stopListening = () => {
    if (recognition) {
      recognition.stop();
      setIsListening(false);
    }
  };

  const handleSubmit = (question) => {
    setWaiting(true);
    APIService.chat({ question })
      .then((response) => {
        setoutput(response["output"]);
        setWaiting(false);
        setAnswer(prev => [...prev, response["output"]]);
        setIsListening(false);
        stopListening(); // <--- this line fixes the double click!
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <div style={{ width: "100%" }}>
      <div className='descotitle' style={{ textAlign: "center" }}>
        {t("Guidance")} <span style={{ color: "#578a25" }}>{t("Assistant")}</span>
      </div>

      <div className="Scrollerbox">
        <div className='w-100'>
          {questions.map((element, i) => (
            <div key={"SENDREC" + i}>
              <div className='SendMessageContainer'>
                <div className='ChatImageHolder'>
                  <Avatar>
                    <Image src={user} alt="user" />
                  </Avatar>
                </div>
                <div className='SendContentHolder'>
                  {element}
                </div>
              </div>
              <div className='ReceiverMessageContainer'>
                <div className='ChatImageHolder'>
                  <Avatar>
                    <Image src={resg} alt="resp" />
                  </Avatar>
                </div>
                <div className='ReceiverContentHolder'>
                  {output === "" && !waiting ? (
                    <></>
                  ) : (
                    <>
                      {waiting && i === questions.length - 1 ? (
                        <div className="d-flex flex-column justify-content-center align-items-center p-4" style={{ gap: "15px" }}>
                          <CircularProgress />
                        </div>
                      ) : (
                        <div className="prose max-w-none">
                          <ReactMarkdown>{answer[i]}</ReactMarkdown>
                        </div>
                      )}
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    <div style={{height:"25px"}}>

    </div>
      <div className="d-flex flex-row justify-content-center align-center gap-2">
        <TextField
          className="BJOSS"
          id="filled-basic"
          label="Your Question"
          variant="filled"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Button
          variant="contained"
          endIcon={<SendIcon />}
          onClick={() => {
            if (text !== "") {
              setquestions([...questions, text]);
              handleSubmit(text);
              setText("");
            }
          }}
        >
          {t("Send")}
        </Button>
        <Button
          variant="outlined"
          color={isListening ? "error" : "primary"}
          onClick={isListening ? stopListening : startListening}
        >
          {isListening ? <StopIcon /> : <MicIcon />}
        </Button>
      </div>
    </div>
  );
}

export default ChatCompWithVoice;
