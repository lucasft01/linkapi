# Teste LinkApi

Integração entre as plataformas Bling e Pipedrive

## Para começar

Criar conta teste na plataforma Pipedrive.

Cadastrar a rota weebhook desta api no Pipedrive.

### Pré-requisitos


Instalar o docker-compose; 

* [Windows](https://docs.docker.com/compose/install/)
* [OS X](https://docs.docker.com/compose/install/)
* [Linux](https://docs.docker.com/compose/install/)

Arquivo .env com todos os parâmetros;

### Uso

#### Execução

Basta executar o comando shell abaixo

```shell
docker-compose up -d
```
#### Volumes

* `/usr/src/app` - API
* `/data/db` - Mongo

#### Rotas

###### Rota WebHook
* http://localhost/api/v1/weebhook/deal

###### Rota Pedidos
* Basta dar um get em http://localhost/api/v1/orders para pegar os pedidos

## Authors

* **Lucas Fagundes**

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
