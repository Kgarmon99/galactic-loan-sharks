import WelcomeScreen from '../WelcomeScreen';

export default function WelcomeScreenExample() {
  return (
    <WelcomeScreen 
      onStart={(name) => console.log('Starting game with name:', name)}
      onInfoClick={() => console.log('Info clicked')}
    />
  );
}
