const fs = require('fs');

function repackGLB(originalGlbPath, newPngPath, outputGlbPath) {
  const glb = fs.readFileSync(originalGlbPath);
  const newPng = fs.readFileSync(newPngPath);

  // Read GLB header
  const magic = glb.toString('utf8', 0, 4);
  const version = glb.readUInt32LE(4);
  const totalLength = glb.readUInt32LE(8);

  if (magic !== 'glTF') {
    throw new Error('Not a valid GLB file');
  }

  // Chunk 0: JSON
  const chunk0Length = glb.readUInt32LE(12);
  const chunk0Type = glb.toString('utf8', 16, 20);
  const jsonStr = glb.toString('utf8', 20, 20 + chunk0Length);
  const json = JSON.parse(jsonStr);

  // Chunk 1: BIN
  const chunk1HeaderOffset = 20 + chunk0Length;
  const chunk1Length = glb.readUInt32LE(chunk1HeaderOffset);
  const chunk1Type = glb.toString('utf8', chunk1HeaderOffset + 4, chunk1HeaderOffset + 8);
  const chunk1PayloadOffset = chunk1HeaderOffset + 8;

  // Geometry buffer (bufferViews 0..11) occupies 0..158144
  const geometryLength = json.bufferViews[12].byteOffset; // 158144
  const geometryBuffer = glb.subarray(chunk1PayloadOffset, chunk1PayloadOffset + geometryLength);

  // Update JSON for new PNG
  json.bufferViews[12].byteLength = newPng.length;
  json.buffers[0].byteLength = geometryLength + newPng.length;

  // Prepare new JSON string & pad to 4-byte alignment with spaces (0x20)
  let newJsonStr = JSON.stringify(json);
  while (Buffer.byteLength(newJsonStr, 'utf8') % 4 !== 0) {
    newJsonStr += ' ';
  }
  const newJsonBuffer = Buffer.from(newJsonStr, 'utf8');

  // Prepare new BIN payload & pad to 4-byte alignment with 0x00
  let newBinLength = geometryLength + newPng.length;
  let padLength = (4 - (newBinLength % 4)) % 4;
  const padding = Buffer.alloc(padLength, 0x00);
  const newBinBuffer = Buffer.concat([geometryBuffer, newPng, padding]);

  // Total new GLB length: 12 (GLB header) + 8 (Chunk 0 header) + JSON length + 8 (Chunk 1 header) + BIN length
  const newTotalLength = 12 + 8 + newJsonBuffer.length + 8 + newBinBuffer.length;

  const outHeader = Buffer.alloc(12);
  outHeader.write('glTF', 0, 4, 'utf8');
  outHeader.writeUInt32LE(version, 4);
  outHeader.writeUInt32LE(newTotalLength, 8);

  const chunk0Header = Buffer.alloc(8);
  chunk0Header.writeUInt32LE(newJsonBuffer.length, 0);
  chunk0Header.write('JSON', 4, 4, 'utf8');

  const chunk1Header = Buffer.alloc(8);
  chunk1Header.writeUInt32LE(newBinBuffer.length, 0);
  chunk1Header.write('BIN\0', 4, 4, 'utf8');

  const result = Buffer.concat([
    outHeader,
    chunk0Header,
    newJsonBuffer,
    chunk1Header,
    newBinBuffer
  ]);

  fs.writeFileSync(outputGlbPath, result);
  console.log(`Repack successful! Wrote ${result.length} bytes to ${outputGlbPath}`);
}

repackGLB('public/assets/card.glb', 'scratch/new_texture.png', 'public/assets/card.glb');
console.log('Successfully installed new minimalist card.glb into public/assets/card.glb');
