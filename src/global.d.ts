declare global {
	interface Window {
		webkitSpeechRecognition: typeof SpeechRecognition;
		SpeechRecognition: typeof SpeechRecognition;
	}

	interface SpeechRecognition {
		new (): SpeechRecognition;
		start(): void;
		stop(): void;
		onresult: (event: SpeechRecognitionEvent) => void;
		onerror: (event: SpeechRecognitionErrorEvent) => void;
		continuous: boolean;
		lang: string;
	}

	interface SpeechRecognitionEvent {
		results: SpeechRecognitionResultList;
	}

	interface SpeechRecognitionErrorEvent {
		error: string;
	}

	interface SpeechRecognitionResultList {
		0: SpeechRecognitionResult;
	}

	interface SpeechRecognitionResult {
		0: SpeechRecognitionAlternative;
	}

	interface SpeechRecognitionAlternative {
		transcript: string;
		confidence: number;
	}
}

export {};
