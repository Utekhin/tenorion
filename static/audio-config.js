// static/js/audio_config.js
const audioConfig = {
    noteFrequencies: [
        73.42, 82.41, 92.50, 110.00,
        123.47, 146.83, 164.81, 185.00,
        220.00, 246.94, 293.66,
        329.63, 369.99, 440.00, 493.88, 587.33
    ],
    matrixSize: {
        rows: 16,
        columns: 16
    },
    defaultBPM: 120,
    defaultIntervalTime: 500,
    elementIds: {
        matrix: 'matrix',
        bpmInput: 'bpm',
        applySettings: 'applySettings',
        startButton: 'start',
        resetButton: 'reset'
    },
    audioSettings: {
        masterChannel: {
            volume: -12
        },
        limiter: {
            threshold: -3
        },
        compressor: {
            threshold: -24,
            ratio: 3,
            attack: 0.005,
            release: 0.1
        },
        reverb: {
            decay: 5,
            wet: 0.2
        },
        delay: {
            delayTime: 0.5,
            feedback: 0.3,
            wet: 0.2
        },
        bellSynth: {
            synth: {
                harmonicity: 2,
                modulationIndex: 4,
                oscillator: { type: "sine" },
                envelope: { 
                    attack: 0.01, 
                    decay: 0.2,
                    sustain: 0.05,
                    release: 1.5
                },
                modulation: { type: "sine" },
                modulationEnvelope: { 
                    attack: 0.05, 
                    decay: 0.2,
                    sustain: 0.003,
                    release: 1.5
                }
            },
            options: {
                maxPolyphony: 64
            },
            gain: 0.0005
        },
        harmonicsSynth: {
            synth: {
                oscillator: { type: "sine" },
                envelope: { 
                    attack: 0.02, 
                    decay: 0.5,
                    sustain: 0.008,
                    release: 2
                }
            },
            options: {
                maxPolyphony: 64
            },
            gain: 0.0005
        }
    }
};
