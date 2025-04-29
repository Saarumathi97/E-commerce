import React, { useState, useEffect, useRef } from 'react';
import { GraphicEq, Mic } from '@mui/icons-material';
import { handleSearchedProduct } from '../../features/ProductSlice';
import { useDispatch } from 'react-redux';
const SpeechConvert = () => {
	const [isListening, setIsListening] = useState(false);
	const dispatch = useDispatch();
	// Use useRef with proper type annotation
	const recognitionRef = useRef<SpeechRecognition | null>(null);

	useEffect(() => {
		const SpeechRecognition =
			window.SpeechRecognition || window.webkitSpeechRecognition;

		if (!SpeechRecognition) {
			alert('Your browser does not support Speech Recognition.');
			return;
		}

		const recognition = new SpeechRecognition();
		recognition.continuous = false;
		recognition.lang = 'en-US';

		recognition.onresult = (event: SpeechRecognitionEvent) => {
			const transcript = event.results[0][0].transcript;
			console.log(transcript);
			dispatch(handleSearchedProduct(transcript));
			setTimeout(() => {
				recognition.stop();
				setIsListening(false);
			}, 3000);
		};

		recognition.onerror = (event: SpeechRecognitionErrorEvent) => {
			console.error('Speech recognition error:', event.error);
		};

		recognitionRef.current = recognition;
	}, [dispatch]);

	const toggleListening = () => {
		if (recognitionRef.current) {
			if (isListening) {
				recognitionRef.current.stop();
			} else {
				recognitionRef.current.start();
			}

			setIsListening(!isListening);
		}
	};

	return (
		<div>{isListening ? <GraphicEq /> : <Mic onClick={toggleListening} />}</div>
	);
};

export default SpeechConvert;
