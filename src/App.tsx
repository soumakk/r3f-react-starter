import { Canvas } from '@react-three/fiber'
import Box from './components/Box'
import { OrbitControls } from '@react-three/drei'

export default function App() {
	return (
		<Canvas>
			<OrbitControls />

			<Box />
		</Canvas>
	)
}
