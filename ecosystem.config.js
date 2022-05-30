module.exports = {
  apps: [
    {
      name: 'devfolio',
      cwd: './',
      script: 'node_modules/next/dist/bin/next',
      args: 'start',
      instances: '2',
      env_production: {
        NODE_ENV: 'production',
        PORT: 3333,
      },
      exec_mode: 'cluster',
    },
  ],
}
