echo $'\e[1;33m'Creating New Next.js Project:$'\e[0m'
npm init -y

echo $'\e[0;32m'installing dependencies$'\e[0m'
npm install next react react-dom path

echo $'\e[0;32m'adding scripts$'\e[0m'
cat > newPackage.js <<- "EOF"
const fs = require('fs');
const path = require('path');
const file = path.join(__dirname, 'package.json');
fs.readFile(file, 'utf-8', (error, read) => {
  if (error) console.log(error);
  read = read.split('\n');
  let newPackage = ``;
  let searching = true;
  read.map((line, i) => {
    words = line.split(' ');
    if (searching) {
      for (let i = 0; i < words.length; i++) {
        if (words[i] === '"test":') {
          newPackage += `    "dev": "next dev",\n    "build": "next build",\n    "start": "next start"\n`;
          searching = false;
          break;
        }
      }
      if (searching) newPackage += `${line}\n`
    } else {
      newPackage += `${line}\n`
    }
  });
  fs.writeFile(file, newPackage, 'utf-8', (err, succ) => {
    if (err) console.log(err)
  });
});
EOF
node newPackage.js
rm newPackage.js

echo $'\e[0;32m'creating file structure$'\e[0m'
mkdir pages
mkdir components
mkdir public

echo $'\e[0;32m'Creating Home Page$'\e[0m'
cat > pages/index.js <<- "EOF"
const App = () => {
  return (
    <div> Welcome to Next.js! </div>
  )
}

export default App;
EOF

# echo $'\e[0;32m'writing .gitignore$'\e[0m'
# cat > .gitignore <<- "EOF"
# /node_modules
# EOF

npm run dev & echo $'\e[1;32m'DONE!$'\e[0m' & open http://localhost:3000/
echo ' '
echo $'\e[1;33m' - npm run commands -$'\e[0m'
echo $'\e[0;34m'server: $'\e[0;33m'npm run server$'\e[0m'
echo $'\e[0;34m'babel: $'\e[0;33m'npm run react-dev$'\e[0m'
