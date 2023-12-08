import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { useState } from 'react';
import LogoAudio from './LogoAudio';



export default function AudioPlayerBackground() {


	const [displayAudioPlayer, setDisplayAudioPlayer] = useState(true);

	function toggleDisplayAudioPlayer() {
		setDisplayAudioPlayer(!displayAudioPlayer);
	}

	return (
		<div style={{
			display: "flex",
			position: "fixed",
			bottom: 0,
			left: 0,
			zIndex: 9999,
			minWidth: "20rem",
			width: "33%"
		}}>
			{displayAudioPlayer ?
				<>
					<AudioPlayer
						style={{
						}}
						hasDefaultKeyBindings={false}
						autoPlay
						src="https://cdn.discordapp.com/attachments/1175085539704176812/1182506910931484722/Jingle_Bells_Instrumental.mp3"
					/>
					<LogoAudio OnClick={toggleDisplayAudioPlayer} alt='Cacher player audio' />
				</>
				:
				<LogoAudio OnClick={toggleDisplayAudioPlayer} alt='Montrer player audio' />
			}
		</div>
	);
}