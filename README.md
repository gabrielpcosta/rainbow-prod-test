# RainbowProdTest

## Observações de ambiente

### Sistema Operacional

- Ubuntu 18.04

### Versão do NODE

- v12.17.0

### Versão do NPM

- 6.14.4

```
Observação: Instalação do angular/cli com o comando npm install -g @angular/cli
```

## Instruções para verificação do possível bug

Os passos a seguir devem ser realizados após o clone do repositório com os comandos sendo executados no diretório do projeto.

1. Executar o comando `npm install`

2. Executar o comando `ng serve --prod`

3. Acessar no navegador o endereço `localhost:4200`

4. Verificar no log do console do navegador o seguinte erro: `Error: [$injector:unpr] http://errors.angularjs.org/1.7.9/$injector/unpr?p0=tProvide…%20%3C-%20t%20%3C-%20filesStorageService%20%3C-%20rainbowSDK`