import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { supabase } from '../../lib/supabase';

function Model({ url }: { url: string }) {
  const { scene } = useGLTF(url);
  return <primitive object={scene} />;
}

const ImmersiveLab: React.FC = () => {
  const [selectedModel, setSelectedModel] = React.useState<string | null>(null);
  const [annotations, setAnnotations] = React.useState<Array<{
    id: string;
    position: [number, number, number];
    content: string;
  }>>([]);

  const modelMap = {
    'DNA': '/models/dna.glb',
    'Solar System': '/models/solar-system.glb',
    'Human Heart': '/models/human-heart.glb',
    'Atom Structure': '/models/atom-structure.glb'
  };

  const addAnnotation = async (position: [number, number, number], content: string) => {
    try {
      const { data, error } = await supabase
        .from('annotations')
        .insert([
          {
            model_id: selectedModel,
            position,
            content,
          },
        ])
        .select();

      if (error) throw error;

      if (data) {
        setAnnotations([...annotations, data[0]]);
      }
    } catch (error) {
      console.error('Error adding annotation:', error);
    }
  };

  return (
    <div className="h-screen flex">
      <div className="w-1/4 bg-white p-4 shadow-lg overflow-y-auto">
        <h2 className="text-xl font-bold mb-4">3D Models Library</h2>
        <div className="space-y-4">
          {Object.keys(modelMap).map((model) => (
            <button
              key={model}
              className={`w-full p-3 rounded-lg text-left ${
                selectedModel === model
                  ? 'bg-blue-100 text-blue-700'
                  : 'bg-gray-50 hover:bg-gray-100'
              }`}
              onClick={() => setSelectedModel(model)}
            >
              {model}
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 relative">
        <Canvas
          camera={{ position: [0, 0, 5] }}
          style={{ background: '#f3f4f6' }}
        >
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <Suspense fallback={null}>
            {selectedModel && (
              <Model url={modelMap[selectedModel]} />
            )}
          </Suspense>
          <OrbitControls />
        </Canvas>

        {selectedModel && (
          <div className="absolute bottom-4 right-4 bg-white p-4 rounded-lg shadow-lg">
            <h3 className="font-semibold mb-2">Annotations</h3>
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              onClick={() => {
                // Implementation for adding annotations
              }}
            >
              Add Annotation
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImmersiveLab;