const fs = require('fs');
const path = require('path');

const root = process.cwd();
const packagePath = path.join(root, 'package.json');
const mixPath = path.join(root, 'webpack.mix.js');
const generatedYarnLockPath = path.join(root, 'source', '_core', 'yarn.lock');
const yarnLockPath = path.join(root, 'yarn.lock');

if (!fs.existsSync(packagePath)) {
    throw new Error('package.json was not generated. Run `php vendor/bin/docara init --update` first.');
}

const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'));

packageJson.name = 'docara-codespaces-template';
packageJson.version = packageJson.version || '1.0.0';
packageJson.private = true;

packageJson.scripts = {
    ...packageJson.scripts,
    start: 'yarn dev && concurrently -k -n content,assets "php vendor/bin/docara build local --watch" "mix watch"',
    serve: 'php vendor/bin/docara serve local --host=0.0.0.0 --port=8000',
    'serve:local': 'php vendor/bin/docara serve local --host=localhost --port=8000',
    build: 'php vendor/bin/docara build local',
    'translate:test': 'php vendor/bin/docara translate --test',
};

packageJson.devDependencies = {
    ...packageJson.devDependencies,
    concurrently: '^9.2.1',
};

delete packageJson.scripts.postinstall;

fs.writeFileSync(
    packagePath,
    `${JSON.stringify(packageJson, null, 4)}\n`
);

if (fs.existsSync(generatedYarnLockPath) && !fs.existsSync(yarnLockPath)) {
    fs.copyFileSync(generatedYarnLockPath, yarnLockPath);
}

if (fs.existsSync(mixPath)) {
    let mixConfig = fs.readFileSync(mixPath, 'utf8');

    mixConfig = mixConfig.replace(
        /server: 'build_local',(?:(?:\r?\n\s*host: '0\.0\.0\.0',)|(?:\r?\n\s*port: 3000,))*/g,
        "server: 'build_local',\n        host: '0.0.0.0',\n        port: 3000,"
    );

    fs.writeFileSync(mixPath, mixConfig);
}

console.log('Docara template scripts configured.');
