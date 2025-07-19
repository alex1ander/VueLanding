<template>
  <div ref="canvasContainer" style="width: 100%; height: 100vh;"></div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

const canvasContainer = ref(null)

let scene, camera, renderer, controls, model, animationFrameId

onMounted(() => {
  scene = new THREE.Scene()
  camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000)
  camera.position.set(0, 1.5, 3)

  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
  renderer.setSize(window.innerWidth, window.innerHeight)
  canvasContainer.value.appendChild(renderer.domElement)

  const dirLight = new THREE.DirectionalLight(0xffffff, 1)
  dirLight.position.set(5, 10, 7)
  scene.add(dirLight)
  scene.add(new THREE.AmbientLight(0x404040))

  controls = new OrbitControls(camera, renderer.domElement)
  controls.enableDamping = true
  controls.dampingFactor = 0.05

  const loader = new GLTFLoader()
  loader.load(
    // Модель утки из официального репозитория glTF
    'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/Duck/glTF/Duck.gltf',
    (gltf) => {
      model = gltf.scene
      scene.add(model)
      animate()
    },
    undefined,
    (error) => {
      console.error('Ошибка загрузки модели:', error)
    }
  )

  window.addEventListener('resize', onWindowResize)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', onWindowResize)
  if (animationFrameId) cancelAnimationFrame(animationFrameId)
  renderer.dispose()
  controls.dispose()
})

function animate() {
  animationFrameId = requestAnimationFrame(animate)
  controls.update()
  renderer.render(scene, camera)
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
}
</script>
