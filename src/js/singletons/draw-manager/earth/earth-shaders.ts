import { keepTrackApi } from '@app/js/keepTrackApi';

export const earthShaders = {
  frag: keepTrackApi.glsl`
    precision highp float;

    uniform float uZoomModifier;
    uniform float uGlow;
    uniform vec3 uAmbientLightColor;
    uniform vec3 uDirectionalLightColor;
    uniform vec3 uLightDirection;
    uniform mat4 uPMatrix;
    uniform float uIsDrawAtmosphere;
    uniform float uIsDrawAurora;

    in vec2 vUv;
    in vec3 vNormal;
    in vec3 vWorldPos;
    in vec3 vVertToCamera;

    out vec4 fragColor;

    uniform sampler2D uSampler;
    uniform sampler2D uNightSampler;
    uniform sampler2D uBumpMap;
    uniform sampler2D uSpecMap;

    const float latitudeCenter = 67.5; // The latitude at which the Aurora Borealis appears
    const float latitudeMargin = 7.0; // The margin around the center latitude where the Aurora Borealis is visible

    // Function to calculate the intensity of the Aurora Borealis at a given latitude
    float calculateAuroraIntensity(float latitude, float noise) {
      // Aurora should be visible mainly between latitudeCenter - latitudeMargin and latitudeCenter + latitudeMargin
      float intensity = (step(latitudeCenter - (latitudeMargin + noise), latitude) - step(latitudeCenter + (latitudeMargin + noise), latitude)) * 0.5;
      // Smooth intensity from lattitudeCenter outward
      intensity = smoothstep(0.0, 1.0, 1.0 - abs(latitude - latitudeCenter) / (latitudeMargin + noise)) * intensity;
      return intensity;
    }

    void main(void) {
      float fragToLightAngle = dot( vNormal, uLightDirection ) * 0.5 + 0.5; //Remake -1 > 1 to 0 > 1
      vec3 fragToCamera = normalize(vVertToCamera);

      // .................................................
      // Diffuse lighting
        float diffuse = max(dot(vNormal, uLightDirection), 0.0);

      //.................................................
      // Bump mapping
        vec3 bumpTexColor = texture(uBumpMap, vUv).rgb * diffuse * 0.4;

        //................................................
        // Specular lighting
        vec3 specLightColor = texture(uSpecMap, vUv).rgb * diffuse * 0.1;

        //................................................
        // Final color
        vec3 dayColor = (uAmbientLightColor + uDirectionalLightColor) * diffuse;
        vec3 dayTexColor = texture(uSampler, vUv).rgb * dayColor;
        vec3 nightColor = 0.5 * texture(uNightSampler, vUv).rgb * pow(1.0 - diffuse, 2.0);

        fragColor = vec4(dayTexColor + nightColor + bumpTexColor + specLightColor, 1.0);

        // ...............................................
        // Atmosphere

        if (uIsDrawAtmosphere > 0.5) {
          float sunAmount = max(dot(vNormal, uLightDirection), 0.1);
          float darkAmount = max(dot(vNormal, -uLightDirection), 0.0);
          float r = 1.0 - sunAmount;
          float g = max(1.0 - sunAmount, 0.85) - darkAmount;
          float b = max(sunAmount, 0.9) - darkAmount;
          vec3 atmosphereColor = vec3(r,g,b);

          float fragToCameraAngle = (1.0 - dot(fragToCamera, vNormal));
          fragToCameraAngle = pow(fragToCameraAngle, 3.8); //Curve the change, Make the fresnel thinner

          fragColor.rgb += (atmosphereColor * fragToCameraAngle * smoothstep(0.25, 0.5, fragToLightAngle));
        } else {
          // Draw thin white line around the Earth no matter what fragToLightAngle is
          float fragToCameraAngle = (1.0 - dot(fragToCamera, vNormal));
          fragToCameraAngle = pow(fragToCameraAngle, 7.0); //Curve the change, Make the fresnel thinner
          fragColor.rgb += vec3(1.0, 1.0, 1.0) * fragToCameraAngle;
        }

        // ...............................................
        // Aurora
        if (uIsDrawAurora > 0.5) {
          float latitude = vUv.y * 180.0 - 90.0; // Convert texture coordinate to latitude (-90 to 90)
          // if (latitude >= latitudeMin && latitude <= latitudeMax || latitude >= -latitudeMin && latitude <= -latitudeMax){
            float noise = uGlow;

            // Calculate the intensity of the Aurora Borealis at the current latitude
            float auroraIntensity = calculateAuroraIntensity(abs(latitude), noise / 2.0);

            // Calculate the strength of the Aurora Borealis based on the Sun direction. It should only be visible on the dark side of the Earth
            float auroraStrength = max(dot(vNormal, -uLightDirection), 0.0) * (0.75 + (noise / 10.0));

            // Combine the Earth color and the Aurora Borealis color based on the intensity and strength
            vec3 auroraColor = vec3(0.0, 0.8, 0.55 + noise / 20.0); // Color of the Aurora Borealis

            fragColor.rgb += auroraColor * auroraIntensity * auroraStrength;
        }
        // }
    }
    `,
  vert: keepTrackApi.glsl`
    precision highp float;
    in vec3 aVertexPosition;
    in vec3 aVertexNormal;
    in vec2 aTexCoord;

    uniform vec3 uCamPos;
    uniform mat4 uPMatrix;
    uniform mat4 uCamMatrix;
    uniform mat4 uMvMatrix;
    uniform mat3 uNormalMatrix;

    out vec2 vUv;
    out vec3 vNormal;
    out vec3 vWorldPos;
    out vec3 vVertToCamera;

    void main(void) {
        vec4 worldPosition = uMvMatrix * vec4(aVertexPosition, 1.0);
        vWorldPos = worldPosition.xyz;
        vNormal = uNormalMatrix * aVertexNormal;
        vUv = aTexCoord;
        vVertToCamera = normalize(vec3(uCamPos) - worldPosition.xyz);

        gl_Position = uPMatrix * uCamMatrix * worldPosition;
    }
    `,
};
