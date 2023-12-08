


export interface LogoAudioProps {
	OnClick: () => void;
	alt: string;
}


export default function LogoAudio({ OnClick, alt }: LogoAudioProps) {
	return (
		<button onClick={OnClick}
			style={{
				minHeight: "4rem",
				backgroundColor: "rgba(88, 133, 193, 0.7)",
				border: "none"
			}}

			aria-details={alt}
		><img src="https://cdn.discordapp.com/attachments/1175085539704176812/1182525979499966464/1231778-200.png" alt="logo audio" style={{
			width: 86,
		}} /></button>
	);
}