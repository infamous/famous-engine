module.exports = {
  'vertex': '#define GLSLIFY 1\n/**\r\n * The MIT License (MIT)\r\n * \r\n * Copyright (c) 2015 Famous Industries Inc.\r\n * \r\n * Permission is hereby granted, free of charge, to any person obtaining a copy\r\n * of this software and associated documentation files (the "Software"), to deal\r\n * in the Software without restriction, including without limitation the rights\r\n * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\r\n * copies of the Software, and to permit persons to whom the Software is\r\n * furnished to do so, subject to the following conditions:\r\n * \r\n * The above copyright notice and this permission notice shall be included in\r\n * all copies or substantial portions of the Software.\r\n * \r\n * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\r\n * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\r\n * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\r\n * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\r\n * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\r\n * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\r\n * THE SOFTWARE.\r\n */\r\n\r\n/**\r\n * The MIT License (MIT)\r\n * \r\n * Copyright (c) 2015 Famous Industries Inc.\r\n * \r\n * Permission is hereby granted, free of charge, to any person obtaining a copy\r\n * of this software and associated documentation files (the "Software"), to deal\r\n * in the Software without restriction, including without limitation the rights\r\n * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\r\n * copies of the Software, and to permit persons to whom the Software is\r\n * furnished to do so, subject to the following conditions:\r\n * \r\n * The above copyright notice and this permission notice shall be included in\r\n * all copies or substantial portions of the Software.\r\n * \r\n * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\r\n * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\r\n * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\r\n * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\r\n * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\r\n * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\r\n * THE SOFTWARE.\r\n */\r\n\r\n/**\r\n * Calculates transpose inverse matrix from transform\r\n * \r\n * @method random\r\n * @private\r\n *\r\n *\r\n */\r\n\r\n\r\nmat3 getNormalMatrix_1_0(in mat4 t) {\r\n   mat3 matNorm;\r\n   mat4 a = t;\r\n\r\n   float a00 = a[0][0], a01 = a[0][1], a02 = a[0][2], a03 = a[0][3],\r\n   a10 = a[1][0], a11 = a[1][1], a12 = a[1][2], a13 = a[1][3],\r\n   a20 = a[2][0], a21 = a[2][1], a22 = a[2][2], a23 = a[2][3],\r\n   a30 = a[3][0], a31 = a[3][1], a32 = a[3][2], a33 = a[3][3],\r\n   b00 = a00 * a11 - a01 * a10,\r\n   b01 = a00 * a12 - a02 * a10,\r\n   b02 = a00 * a13 - a03 * a10,\r\n   b03 = a01 * a12 - a02 * a11,\r\n   b04 = a01 * a13 - a03 * a11,\r\n   b05 = a02 * a13 - a03 * a12,\r\n   b06 = a20 * a31 - a21 * a30,\r\n   b07 = a20 * a32 - a22 * a30,\r\n   b08 = a20 * a33 - a23 * a30,\r\n   b09 = a21 * a32 - a22 * a31,\r\n   b10 = a21 * a33 - a23 * a31,\r\n   b11 = a22 * a33 - a23 * a32,\r\n\r\n   det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;\r\n   det = 1.0 / det;\r\n\r\n   matNorm[0][0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;\r\n   matNorm[0][1] = (a12 * b08 - a10 * b11 - a13 * b07) * det;\r\n   matNorm[0][2] = (a10 * b10 - a11 * b08 + a13 * b06) * det;\r\n\r\n   matNorm[1][0] = (a02 * b10 - a01 * b11 - a03 * b09) * det;\r\n   matNorm[1][1] = (a00 * b11 - a02 * b08 + a03 * b07) * det;\r\n   matNorm[1][2] = (a01 * b08 - a00 * b10 - a03 * b06) * det;\r\n\r\n   matNorm[2][0] = (a31 * b05 - a32 * b04 + a33 * b03) * det;\r\n   matNorm[2][1] = (a32 * b02 - a30 * b05 - a33 * b01) * det;\r\n   matNorm[2][2] = (a30 * b04 - a31 * b02 + a33 * b00) * det;\r\n\r\n   return matNorm;\r\n}\r\n\r\n\n\n/**\r\n * The MIT License (MIT)\r\n * \r\n * Copyright (c) 2015 Famous Industries Inc.\r\n * \r\n * Permission is hereby granted, free of charge, to any person obtaining a copy\r\n * of this software and associated documentation files (the "Software"), to deal\r\n * in the Software without restriction, including without limitation the rights\r\n * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\r\n * copies of the Software, and to permit persons to whom the Software is\r\n * furnished to do so, subject to the following conditions:\r\n * \r\n * The above copyright notice and this permission notice shall be included in\r\n * all copies or substantial portions of the Software.\r\n * \r\n * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\r\n * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\r\n * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\r\n * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\r\n * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\r\n * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\r\n * THE SOFTWARE.\r\n */\r\n\r\n/**\r\n * Calculates a matrix that creates the identity when multiplied by m\r\n * \r\n * @method inverse\r\n * @private\r\n *\r\n *\r\n */\r\n\r\n\r\nfloat inverse_3_1(float m) {\r\n    return 1.0 / m;\r\n}\r\n\r\nmat2 inverse_3_1(mat2 m) {\r\n    return mat2(m[1][1],-m[0][1],\r\n               -m[1][0], m[0][0]) / (m[0][0]*m[1][1] - m[0][1]*m[1][0]);\r\n}\r\n\r\nmat3 inverse_3_1(mat3 m) {\r\n    float a00 = m[0][0], a01 = m[0][1], a02 = m[0][2];\r\n    float a10 = m[1][0], a11 = m[1][1], a12 = m[1][2];\r\n    float a20 = m[2][0], a21 = m[2][1], a22 = m[2][2];\r\n\r\n    float b01 =  a22 * a11 - a12 * a21;\r\n    float b11 = -a22 * a10 + a12 * a20;\r\n    float b21 =  a21 * a10 - a11 * a20;\r\n\r\n    float det = a00 * b01 + a01 * b11 + a02 * b21;\r\n\r\n    return mat3(b01, (-a22 * a01 + a02 * a21), (a12 * a01 - a02 * a11),\r\n                b11, (a22 * a00 - a02 * a20), (-a12 * a00 + a02 * a10),\r\n                b21, (-a21 * a00 + a01 * a20), (a11 * a00 - a01 * a10)) / det;\r\n}\r\n\r\nmat4 inverse_3_1(mat4 m) {\r\n    float\r\n        a00 = m[0][0], a01 = m[0][1], a02 = m[0][2], a03 = m[0][3],\r\n        a10 = m[1][0], a11 = m[1][1], a12 = m[1][2], a13 = m[1][3],\r\n        a20 = m[2][0], a21 = m[2][1], a22 = m[2][2], a23 = m[2][3],\r\n        a30 = m[3][0], a31 = m[3][1], a32 = m[3][2], a33 = m[3][3],\r\n\r\n        b00 = a00 * a11 - a01 * a10,\r\n        b01 = a00 * a12 - a02 * a10,\r\n        b02 = a00 * a13 - a03 * a10,\r\n        b03 = a01 * a12 - a02 * a11,\r\n        b04 = a01 * a13 - a03 * a11,\r\n        b05 = a02 * a13 - a03 * a12,\r\n        b06 = a20 * a31 - a21 * a30,\r\n        b07 = a20 * a32 - a22 * a30,\r\n        b08 = a20 * a33 - a23 * a30,\r\n        b09 = a21 * a32 - a22 * a31,\r\n        b10 = a21 * a33 - a23 * a31,\r\n        b11 = a22 * a33 - a23 * a32,\r\n\r\n        det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;\r\n\r\n    return mat4(\r\n        a11 * b11 - a12 * b10 + a13 * b09,\r\n        a02 * b10 - a01 * b11 - a03 * b09,\r\n        a31 * b05 - a32 * b04 + a33 * b03,\r\n        a22 * b04 - a21 * b05 - a23 * b03,\r\n        a12 * b08 - a10 * b11 - a13 * b07,\r\n        a00 * b11 - a02 * b08 + a03 * b07,\r\n        a32 * b02 - a30 * b05 - a33 * b01,\r\n        a20 * b05 - a22 * b02 + a23 * b01,\r\n        a10 * b10 - a11 * b08 + a13 * b06,\r\n        a01 * b08 - a00 * b10 - a03 * b06,\r\n        a30 * b04 - a31 * b02 + a33 * b00,\r\n        a21 * b02 - a20 * b04 - a23 * b00,\r\n        a11 * b07 - a10 * b09 - a12 * b06,\r\n        a00 * b09 - a01 * b07 + a02 * b06,\r\n        a31 * b01 - a30 * b03 - a32 * b00,\r\n        a20 * b03 - a21 * b01 + a22 * b00) / det;\r\n}\r\n\r\n\n\n/**\r\n * The MIT License (MIT)\r\n * \r\n * Copyright (c) 2015 Famous Industries Inc.\r\n * \r\n * Permission is hereby granted, free of charge, to any person obtaining a copy\r\n * of this software and associated documentation files (the "Software"), to deal\r\n * in the Software without restriction, including without limitation the rights\r\n * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\r\n * copies of the Software, and to permit persons to whom the Software is\r\n * furnished to do so, subject to the following conditions:\r\n * \r\n * The above copyright notice and this permission notice shall be included in\r\n * all copies or substantial portions of the Software.\r\n * \r\n * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\r\n * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\r\n * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\r\n * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\r\n * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\r\n * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\r\n * THE SOFTWARE.\r\n */\r\n\r\n/**\r\n * Reflects a matrix over its main diagonal.\r\n * \r\n * @method transpose\r\n * @private\r\n *\r\n *\r\n */\r\n\r\n\r\nfloat transpose_2_2(float m) {\r\n    return m;\r\n}\r\n\r\nmat2 transpose_2_2(mat2 m) {\r\n    return mat2(m[0][0], m[1][0],\r\n                m[0][1], m[1][1]);\r\n}\r\n\r\nmat3 transpose_2_2(mat3 m) {\r\n    return mat3(m[0][0], m[1][0], m[2][0],\r\n                m[0][1], m[1][1], m[2][1],\r\n                m[0][2], m[1][2], m[2][2]);\r\n}\r\n\r\nmat4 transpose_2_2(mat4 m) {\r\n    return mat4(m[0][0], m[1][0], m[2][0], m[3][0],\r\n                m[0][1], m[1][1], m[2][1], m[3][1],\r\n                m[0][2], m[1][2], m[2][2], m[3][2],\r\n                m[0][3], m[1][3], m[2][3], m[3][3]);\r\n}\r\n\r\n\n\n\r\n/**\r\n * Converts vertex from modelspace to screenspace using transform\r\n * information from context.\r\n *\r\n * @method applyTransform\r\n * @private\r\n *\r\n *\r\n */\r\n\r\nvec4 applyTransform(vec4 pos) {\r\n    //TODO: move this multiplication to application code. \r\n\r\n    /**\r\n     * Currently multiplied in the vertex shader to avoid consuming the complexity of holding an additional\r\n     * transform as state on the mesh object in WebGLRenderer. Multiplies the object\'s transformation from object space\r\n     * to world space with its transformation from world space to eye space.\r\n     */\r\n    mat4 MVMatrix = u_view * u_transform;\r\n\r\n    //TODO: move the origin, sizeScale and y axis inversion to application code in order to amortize redundant per-vertex calculations.\r\n\r\n    /**\r\n     * The transform uniform should be changed to the result of the transformation chain:\r\n     *\r\n     * view * modelTransform * invertYAxis * sizeScale * origin\r\n     *\r\n     * which could be simplified to:\r\n     *\r\n     * view * modelTransform * convertToDOMSpace\r\n     *\r\n     * where convertToDOMSpace represents the transform matrix:\r\n     *\r\n     *                           size.x 0       0       size.x \r\n     *                           0      -size.y 0       size.y\r\n     *                           0      0       1       0\r\n     *                           0      0       0       1\r\n     *\r\n     */\r\n\r\n    /**\r\n     * Assuming a unit volume, moves the object space origin [0, 0, 0] to the "top left" [1, -1, 0], the DOM space origin.\r\n     * Later in the transformation chain, the projection transform negates the rigidbody translation.\r\n     * Equivalent to (but much faster than) multiplying a translation matrix "origin"\r\n     *\r\n     *                           1 0 0 1 \r\n     *                           0 1 0 -1\r\n     *                           0 0 1 0\r\n     *                           0 0 0 1\r\n     *\r\n     * in the transform chain: projection * view * modelTransform * invertYAxis * sizeScale * origin * positionVector.\r\n     */\r\n    pos.x += 1.0;\r\n    pos.y -= 1.0;\r\n\r\n    /**\r\n     * Assuming a unit volume, scales an object to the amount of pixels in the size uniform vector\'s specified dimensions.\r\n     * Later in the transformation chain, the projection transform transforms the point into clip space by scaling\r\n     * by the inverse of the canvas\' resolution.\r\n     * Equivalent to (but much faster than) multiplying a scale matrix "sizeScale"\r\n     *\r\n     *                           size.x 0      0      0 \r\n     *                           0      size.y 0      0\r\n     *                           0      0      size.z 0\r\n     *                           0      0      0      1\r\n     *\r\n     * in the transform chain: projection * view * modelTransform * invertYAxis * sizeScale * origin * positionVector.\r\n     */\r\n    pos.xyz *= u_size * 0.5;\r\n\r\n    /**\r\n     * Inverts the object space\'s y axis in order to match DOM space conventions. \r\n     * Later in the transformation chain, the projection transform reinverts the y axis to convert to clip space.\r\n     * Equivalent to (but much faster than) multiplying a scale matrix "invertYAxis"\r\n     *\r\n     *                           1 0 0 0 \r\n     *                           0 -1 0 0\r\n     *                           0 0 1 0\r\n     *                           0 0 0 1\r\n     *\r\n     * in the transform chain: projection * view * modelTransform * invertYAxis * sizeScale * origin * positionVector.\r\n     */\r\n    pos.y *= -1.0;\r\n\r\n    /**\r\n     * Exporting the vertex\'s position as a varying, in DOM space, to be used for lighting calculations. This has to be in DOM space\r\n     * since light position and direction is derived from the scene graph, calculated in DOM space.\r\n     */\r\n\r\n    v_position = (MVMatrix * pos).xyz;\r\n\r\n    /**\r\n    * Exporting the eye vector (a vector from the center of the screen) as a varying, to be used for lighting calculations.\r\n    * In clip space deriving the eye vector is a matter of simply taking the inverse of the position, as the position is a vector\r\n    * from the center of the screen. However, since our points are represented in DOM space,\r\n    * the position is a vector from the top left corner of the screen, so some additional math is needed (specifically, subtracting\r\n    * the position from the center of the screen, i.e. half the resolution of the canvas).\r\n    */\r\n\r\n    v_eyeVector = (u_resolution * 0.5) - v_position;\r\n\r\n    /**\r\n     * Transforming the position (currently represented in dom space) into view space (with our dom space view transform)\r\n     * and then projecting the point into raster both by applying a perspective transformation and converting to clip space\r\n     * (the perspective matrix is a combination of both transformations, therefore it\'s probably more apt to refer to it as a\r\n     * projection transform).\r\n     */\r\n\r\n    pos = u_perspective * MVMatrix * pos;\r\n\r\n    return pos;\r\n}\r\n\r\n/**\r\n * Placeholder for positionOffset chunks to be templated in.\r\n * Used for mesh deformation.\r\n *\r\n * @method calculateOffset\r\n * @private\r\n *\r\n *\r\n */\r\n#vert_definitions\r\nvec3 calculateOffset(vec3 ID) {\r\n    #vert_applications\r\n    return vec3(0.0);\r\n}\r\n\r\n/**\r\n * Writes the position of the vertex onto the screen.\r\n * Passes texture coordinate and normal attributes as varyings\r\n * and passes the position attribute through position pipeline.\r\n *\r\n * @method main\r\n * @private\r\n *\r\n *\r\n */\r\nvoid main() {\r\n    v_textureCoordinate = a_texCoord;\r\n    vec3 invertedNormals = a_normals + (u_normals.x < 0.0 ? calculateOffset(u_normals) * 2.0 - 1.0 : vec3(0.0));\r\n    invertedNormals.y *= -1.0;\r\n    v_normal = transpose_2_2(mat3(inverse_3_1(u_transform))) * invertedNormals;\r\n    vec3 offsetPos = a_pos + calculateOffset(u_positionOffset);\r\n    gl_Position = applyTransform(vec4(offsetPos, 1.0));\r\n}\r\n',
  'fragment': '#define GLSLIFY 1\n/**\r\n * The MIT License (MIT)\r\n * \r\n * Copyright (c) 2015 Famous Industries Inc.\r\n * \r\n * Permission is hereby granted, free of charge, to any person obtaining a copy\r\n * of this software and associated documentation files (the "Software"), to deal\r\n * in the Software without restriction, including without limitation the rights\r\n * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\r\n * copies of the Software, and to permit persons to whom the Software is\r\n * furnished to do so, subject to the following conditions:\r\n * \r\n * The above copyright notice and this permission notice shall be included in\r\n * all copies or substantial portions of the Software.\r\n * \r\n * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\r\n * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\r\n * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\r\n * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\r\n * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\r\n * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\r\n * THE SOFTWARE.\r\n */\r\n\r\n/**\r\n * The MIT License (MIT)\r\n * \r\n * Copyright (c) 2015 Famous Industries Inc.\r\n * \r\n * Permission is hereby granted, free of charge, to any person obtaining a copy\r\n * of this software and associated documentation files (the "Software"), to deal\r\n * in the Software without restriction, including without limitation the rights\r\n * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\r\n * copies of the Software, and to permit persons to whom the Software is\r\n * furnished to do so, subject to the following conditions:\r\n * \r\n * The above copyright notice and this permission notice shall be included in\r\n * all copies or substantial portions of the Software.\r\n * \r\n * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\r\n * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\r\n * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\r\n * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\r\n * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\r\n * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\r\n * THE SOFTWARE.\r\n */\r\n\r\n/**\r\n * Placeholder for fragmentShader  chunks to be templated in.\r\n * Used for normal mapping, gloss mapping and colors.\r\n * \r\n * @method applyMaterial\r\n * @private\r\n *\r\n *\r\n */\r\n\r\n#float_definitions\r\nfloat applyMaterial_1_0(float ID) {\r\n    #float_applications\r\n    return 1.;\r\n}\r\n\r\n#vec3_definitions\r\nvec3 applyMaterial_1_0(vec3 ID) {\r\n    #vec3_applications\r\n    return vec3(0);\r\n}\r\n\r\n#vec4_definitions\r\nvec4 applyMaterial_1_0(vec4 ID) {\r\n    #vec4_applications\r\n\r\n    return vec4(0);\r\n}\r\n\r\n\n\n/**\r\n * The MIT License (MIT)\r\n * \r\n * Copyright (c) 2015 Famous Industries Inc.\r\n * \r\n * Permission is hereby granted, free of charge, to any person obtaining a copy\r\n * of this software and associated documentation files (the "Software"), to deal\r\n * in the Software without restriction, including without limitation the rights\r\n * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\r\n * copies of the Software, and to permit persons to whom the Software is\r\n * furnished to do so, subject to the following conditions:\r\n * \r\n * The above copyright notice and this permission notice shall be included in\r\n * all copies or substantial portions of the Software.\r\n * \r\n * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\r\n * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\r\n * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\r\n * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\r\n * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\r\n * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\r\n * THE SOFTWARE.\r\n */\r\n\r\n/**\r\n * Calculates the intensity of light on a surface.\r\n *\r\n * @method applyLight\r\n * @private\r\n *\r\n */\r\nvec4 applyLight_2_1(in vec4 baseColor, in vec3 normal, in vec4 glossiness, int numLights, vec3 ambientColor, vec3 eyeVector, mat4 lightPosition, mat4 lightColor, vec3 v_position) {\r\n    vec3 diffuse = vec3(0.0);\r\n    bool hasGlossiness = glossiness.a > 0.0;\r\n    bool hasSpecularColor = length(glossiness.rgb) > 0.0;\r\n\r\n    for(int i = 0; i < 4; i++) {\r\n        if (i >= numLights) break;\r\n        vec3 lightDirection = normalize(lightPosition[i].xyz - v_position);\r\n        float lambertian = max(dot(lightDirection, normal), 0.0);\r\n\r\n        if (lambertian > 0.0) {\r\n            diffuse += lightColor[i].rgb * baseColor.rgb * lambertian;\r\n            if (hasGlossiness) {\r\n                vec3 halfVector = normalize(lightDirection + eyeVector);\r\n                float specularWeight = pow(max(dot(halfVector, normal), 0.0), glossiness.a);\r\n                vec3 specularColor = hasSpecularColor ? glossiness.rgb : lightColor[i].rgb;\r\n                diffuse += specularColor * specularWeight * lambertian;\r\n            }\r\n        }\r\n\r\n    }\r\n\r\n    return vec4(ambientColor + diffuse, baseColor.a);\r\n}\r\n\r\n\n\n\r\n\r\n/**\r\n * Writes the color of the pixel onto the screen\r\n *\r\n * @method main\r\n * @private\r\n *\r\n *\r\n */\r\nvoid main() {\r\n    vec4 material = u_baseColor.r >= 0.0 ? u_baseColor : applyMaterial_1_0(u_baseColor);\r\n\r\n    /**\r\n     * Apply lights only if flat shading is false\r\n     * and at least one light is added to the scene\r\n     */\r\n    bool lightsEnabled = (u_flatShading == 0.0) && (u_numLights > 0.0 || length(u_ambientLight) > 0.0);\r\n\r\n    vec3 normal = normalize(v_normal);\r\n    vec4 glossiness = u_glossiness.x < 0.0 ? applyMaterial_1_0(u_glossiness) : u_glossiness;\r\n\r\n    vec4 color = lightsEnabled ?\r\n    applyLight_2_1(material, normalize(v_normal), glossiness,\r\n               int(u_numLights),\r\n               u_ambientLight * u_baseColor.rgb,\r\n               normalize(v_eyeVector),\r\n               u_lightPosition,\r\n               u_lightColor,   \r\n               v_position)\r\n    : material;\r\n\r\n    gl_FragColor = color;\r\n    gl_FragColor.a *= u_opacity;   \r\n}\r\n'
};