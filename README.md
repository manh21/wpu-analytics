# WPU ANALYTICS
This project purpose is to log message in [WPU Discord Server](http://discord.gg/S4rrXQU) and add some additional feture such as emoji and sticker. We hope in the future we can use this analythics tools for the greater good. Built with [Discord.js](https://discord.js.org/), [Prisma](https://www.prisma.io/).

## Installing
```bash
git clone "this repo"
```
Import  provided database to mysql `initial.sql`

Rename `.env.examples` to `.env`.
Fill the detail with your own server information

Then, install node module
```bash
npm install
```
Then, generate prisma 
```bash
npx prisma db pull
npx prisma generate
```

## Author
Naufal Hakim – [@manh21_](https://twitter.com/manh21_) – mail@naufalhakim.my.id
Distributed under the Apache-2.0 license. See ``LICENSE`` for more information.
[https://github.com/manh21](https://github.com/manh21)

## Contributing
1. Fork it (<https://github.com/manh21/wpu-analytics/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request