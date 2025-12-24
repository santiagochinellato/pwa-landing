// import React, { useRef } from "react";
// import { useGLTF, Float, Center } from "@react-three/drei";
// import { Group, Object3D, Mesh } from "three";

// export function CityModel(props: React.ComponentPropsWithoutRef<"group">) {
//   // Cargamos el modelo desde la carpeta public
//   const { scene } = useGLTF("/models/low_poly_city.glb");
//   const groupRef = useRef<Group>(null);

//   // Clone scene to avoid mutating the cached original
//   const clonedScene = React.useMemo(() => scene.clone(), [scene]);

//   // Apply shadows in useEffect (side effect)
//   React.useEffect(() => {
//     clonedScene.traverse((child: Object3D) => {
//       if ((child as Mesh).isMesh) {
//         child.castShadow = true;
//         child.receiveShadow = true;
//       }
//     });
//   }, [clonedScene]);

//   return (
//     <group ref={groupRef} {...props} dispose={null}>
//       {/*
//           Manual positioning to ensure stability.
//           Scale 0.025, Position [0, -2, 0]
//       */}
//       <primitive
//         object={clonedScene}
//         position={[0, -1, 0]}
//         scale={[0.045, 0.045, 0.045]}
//         rotation={[0, Math.PI / 4, 0]}
//       />
//     </group>
//   );
// }

// useGLTF.preload("/models/low_poly_city.glb");

import React, { useRef } from "react";
import { useGLTF, Float, Center } from "@react-three/drei";
import { Group, Object3D, Mesh } from "three";

export function CityModel(props: React.ComponentPropsWithoutRef<"group">) {
  // Cargamos el modelo desde la carpeta public
  const { scene } = useGLTF("/models/low-poly_cafe.glb");
  const groupRef = useRef<Group>(null);
  const [scale, setScale] = React.useState([0.55, 0.55, 0.55]);

  // Clone scene to avoid mutating the cached original
  const clonedScene = React.useMemo(() => scene.clone(), [scene]);

  // Responsive logic
  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        // Mobile/Tablet
        setScale([0.55, 0.55, 0.55]);
      } else {
        // Desktop
        setScale([0.7, 0.7, 0.7]);
      }
    };

    // Initial check
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Apply shadows in useEffect (side effect)
  React.useEffect(() => {
    clonedScene.traverse((child: Object3D) => {
      if ((child as Mesh).isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  }, [clonedScene]);

  return (
    <group ref={groupRef} {...props} dispose={null}>
      {/* 
          Manual positioning to ensure stability.
          Position [0, -1, 0]
      */}
      <primitive
        object={clonedScene}
        position={[0, -1, 0]}
        scale={scale}
        rotation={[0, Math.PI / 4, 0]}
      />
    </group>
  );
}

useGLTF.preload("/models/low-poly_cafe.glb");
