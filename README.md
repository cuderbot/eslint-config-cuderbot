# eslint-config-cuderbot

## Descripcion

Ultimamente me he encontrado varias veces configurando reglas de linter
y para evitar estar copiando, moviendo esos archivos, opte por crear este repositorio
con el fin de tener algo centralizado y hecho por mi(porque no?)

## How to use

### Prettier

```prettier.config.js
module.exports = require('eslint-config-cuderbot/prettier')
```

### Node

```eslintrc
{
  "extends": ["cuderbot/node"]
}
```

### React

```eslintrc
{
  "extends": ["cuderbot/react"]
}
```

## TODO

- [] reglas de eslint
- [] configuración prettier
- [x] editorconfig
- [] insertar un discurso de porque las tabulaciones son el camino equivocado
