/**
 * /*! /////////////////////////////////////////////////////////////////////////////
 *
 * http://keeptrack.space
 *
 * @Copyright (C) 2016-2023 Theodore Kruczek
 * @Copyright (C) 2020-2022 Heather Kruczek
 *
 * KeepTrack is free software: you can redistribute it and/or modify it under the
 * terms of the GNU Affero General Public License as published by the Free Software
 * Foundation, either version 3 of the License, or (at your option) any later version.
 *
 * KeepTrack is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;
 * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License along with
 * KeepTrack. If not, see <http://www.gnu.org/licenses/>.
 *
 * /////////////////////////////////////////////////////////////////////////////
 */

import * as THREE from 'three';

export interface SceneComponent {
  init(scene: THREE.Scene): void | Promise<void>;
  update(scene?: THREE.Scene): void | Promise<void>;
}

export class ThreeManager {
  lastMethodCalled: string;
  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera;
  renderer: THREE.WebGLRenderer;
  sceneComponents: SceneComponent[] = [];

  init() {
    const width = 600;
    const height = 400;
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(70, width / height, 0.01, 10);

    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(width, height);
    document.body.appendChild(this.renderer.domElement);

    // this.sceneComponents.push(new Earth3());

    const cube = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cubeMesh = new THREE.Mesh(cube, material);
    cubeMesh.position.set(0, 0, 0);
    // cubeMesh.scale.set(RADIUS_OF_EARTH, RADIUS_OF_EARTH, RADIUS_OF_EARTH);

    this.scene.add(cubeMesh);

    // Add all components to the scene
    this.sceneComponents.forEach((component) => {
      component.init(this.scene);
    });

    this.camera.position.z = 2;
    this.camera.lookAt(new THREE.Vector3(0, 0, 0));

    this.renderer.domElement.style.left = '10%';
    this.renderer.domElement.style.top = '10%';
    this.renderer.domElement.style.position = 'absolute';
  }

  update() {
    this.sceneComponents.forEach((component) => {
      component.update(this.scene);
    });
  }

  draw() {
    this.renderer.render(this.scene, this.camera);
  }
}
