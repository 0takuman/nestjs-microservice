Create new project

```
nest new sleepr
```

Run the project

```
pnpm run start
```

Create common library
```
nest g library common
```

Install initial library
```
pnpm i @nestjs/mongoose @nestjs/config mongoose 
```

Generate Database mondule
```
nest g module database -p common
```

Generate Config mondule
```
nest g module config -p common
```

Env Validation Schema library

```
pnpm i joi
```

Create reservation app

```
nest g app reservations
```

Create REST API resources

```
nest g resource reservations
```

Install validation library

```
pnpm i class-validator class-transformer
pnpm i nestjs-pino pino pino-http pino-pretty
```

Generate Logger mondule
```
nest g module logger -p common
```

Generate Authentication App
```
nest g app auth
```

Install passport and passport local library
```
pnpm i @nestjs/passport passport passport-local bcryptjs express
pnpm i -D @types/passport-local
pnpm i @nestjs/jwt passport-jwt
pnpm i -D @types/passport-jwt
```