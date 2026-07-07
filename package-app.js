const packager = require('electron-packager');

async function bundle() {
  console.log('Starting programmatic packaging...');

  // Build Windows version
  try {
    console.log('Building for Windows (win32/x64)...');
    const winPaths = await packager({
      dir: '.',
      name: 'Walmart Chile Diseno GM',
      platform: 'win32',
      arch: 'x64',
      out: 'dist',
      overwrite: true,
      icon: 'Ico/Wlogo.ico'
    });
    console.log('Windows build success! Packaged to:', winPaths);
  } catch (err) {
    console.error('Windows build error:', err);
  }

  // Build macOS version (for M1-M5, use arm64)
  try {
    console.log('Building for macOS (darwin/arm64 - M1-M5)...');
    const macPaths = await packager({
      dir: '.',
      name: 'Walmart Chile Diseno GM',
      platform: 'darwin',
      arch: 'arm64',
      out: 'dist',
      overwrite: true
    });
    console.log('macOS build success! Packaged to:', macPaths);
  } catch (err) {
    console.error('macOS build error:', err);
  }
}

bundle();
